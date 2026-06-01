/* ==========================================================================
   CYBERQUIZ SYSTEM ENGINE
   Features: 40-Question Database, Web Audio Synth, Dynamic Confetti, Timers
   ========================================================================== */

// 1. QUESTION DATABASE
// 1. QUESTION DATABASE
// Loaded dynamically from questions.js (QUESTIONS_DB)

// 2. STATE MANAGEMENT OBJECT
const gameState = {
  currentPool: [],        // Sub-selected shuffled list of questions
  currentIndex: 0,        // Pointer to current active question
  correctCount: 0,
  incorrectCount: 0,
  selectedAnswers: {},    // Map of question ID -> Selected choice ('A', 'B', etc.)
  answerRecords: [],      // Chronological log of answers for analytics
  startTime: null,        // Game overall start Unix timestamp
  endTime: null,          // Game overall end Unix timestamp
  
  // Game Setup Configurations
  chapter: 1,             // Active study chapter (1 to 8, or 'final')
  totalQuestionLimit: 40, 
  mode: 'classic',        // 'classic' or 'speedrun'
  soundEnabled: true,
  theme: 'dark',          // 'dark' or 'light'
  shuffleOrder: 'default', // 'default' or 'shuffle'
  
  // Speed Run Timer Tracking
  timerLimit: 20,
  timerInterval: null,
  timerTimeLeft: 20,
  
  // Status check helper
  isAnswered() {
    const currentQ = this.currentPool[this.currentIndex];
    return this.selectedAnswers[currentQ.id] !== undefined;
  }
};

// ==========================================================================
// 3. SOUND SYNTHESIZER MODULE (Web Audio API)
// ==========================================================================
const AudioSynth = {
  ctx: null,

  init() {
    // Lazy initialize AudioContext on first user interaction to bypass browser autoplay blocks
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  play(type) {
    if (!gameState.soundEnabled) return;
    this.init();
    
    // Resume context if suspended
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const t = this.ctx.currentTime;

    switch (type) {
      case 'click':
        this.synthBeep(150, 450, 0.05, 'sine');
        break;

      case 'correct':
        // Modern Harmonic major chord chime
        this.synthChime([523.25, 659.25, 783.99, 1046.50], 0.4); // C5, E5, G5, C6
        break;

      case 'incorrect':
        // Low sweeping error notification
        this.synthSweep(220, 110, 0.45, 'sawtooth');
        break;

      case 'victory':
        // Celebration arpeggio
        this.synthArpeggio([523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98], 0.08);
        break;
    }
  },

  synthBeep(startFreq, endFreq, duration, type) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + duration);
    
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  synthSweep(startFreq, endFreq, duration, type) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(endFreq, this.ctx.currentTime + duration);
    
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  synthChime(notes, duration) {
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    masterGain.connect(this.ctx.destination);

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (idx * 0.04));
      
      oscGain.gain.setValueAtTime(0.15, this.ctx.currentTime + (idx * 0.04));
      oscGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (idx * 0.04) + 0.3);
      
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      
      osc.start(this.ctx.currentTime + (idx * 0.04));
      osc.stop(this.ctx.currentTime + (idx * 0.04) + 0.35);
    });
  },

  synthArpeggio(notes, delay) {
    const totalDuration = notes.length * delay + 0.5;
    
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (idx * delay));
      
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime + (idx * delay));
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (idx * delay) + 0.25);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(this.ctx.currentTime + (idx * delay));
      osc.stop(this.ctx.currentTime + (idx * delay) + 0.3);
    });
  }
};

// ==========================================================================
// 4. CANVAS CONFETTI EFFECT ENGINE
// ==========================================================================
const ConfettiEngine = {
  canvas: null,
  ctx: null,
  particles: [],
  animationId: null,
  colors: ['#00f2fe', '#4facfe', '#00ff87', '#ff0844', '#ffb300', '#e040fb'],

  init() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  },

  resizeCanvas() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  },

  spawn(count = 150) {
    this.init();
    this.particles = [];
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height, // Spawn above screen
        r: Math.random() * 6 + 4,
        d: Math.random() * this.canvas.height,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0,
        vy: Math.random() * 3 + 2,
        vx: Math.random() * 2 - 1
      });
    }
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.animate();
  },

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    let activeParticles = 0;
    
    this.particles.forEach((p) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += p.vy;
      p.x += p.vx + Math.sin(p.tiltAngle) * 0.5;
      p.tilt = Math.sin(p.tiltAngle - (p.r / 2)) * 10;
      
      if (p.y <= this.canvas.height + 20) {
        activeParticles++;
      }
      
      this.ctx.beginPath();
      this.ctx.lineWidth = p.r;
      this.ctx.strokeStyle = p.color;
      this.ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      this.ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      this.ctx.stroke();
    });
    
    if (activeParticles > 0) {
      this.animationId = requestAnimationFrame(() => this.animate());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  },

  clear() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};

// ==========================================================================
// 5. CORE APP INITS & EVENT BINDINGS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadSoundSetting();
  loadThemeSetting();
  
  // Set initial text & button selections based on chapter
  updateWelcomeText();
  updateQuestionCountOptions();
});

function loadThemeSetting() {
  const savedTheme = localStorage.getItem('cyberquiz_theme') || 'dark';
  gameState.theme = savedTheme;
  applyTheme();
}

function applyTheme() {
  const sunIcon = document.getElementById('theme-sun-icon');
  const moonIcon = document.getElementById('theme-moon-icon');
  
  if (gameState.theme === 'light') {
    document.body.classList.add('light-theme');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  } else {
    document.body.classList.remove('light-theme');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }
}

function loadSoundSetting() {
  const savedSound = localStorage.getItem('cyberquiz_sound');
  if (savedSound !== null) {
    gameState.soundEnabled = savedSound === 'true';
  }
  updateSoundUI();
}

function updateSoundUI() {
  const soundOn = document.getElementById('sound-on-icon');
  const soundOff = document.getElementById('sound-off-icon');
  
  if (gameState.soundEnabled) {
    soundOn.style.display = 'block';
    soundOff.style.display = 'none';
  } else {
    soundOn.style.display = 'none';
    soundOff.style.display = 'block';
  }
}

function setupEventListeners() {
  // Welcome page - Select Chapter
  const chapterSelectGrid = document.getElementById('chapter-select-grid');
  if (chapterSelectGrid) {
    chapterSelectGrid.addEventListener('click', (e) => {
      const clickedCard = e.target.closest('.chapter-card');
      if (!clickedCard) return;
      
      chapterSelectGrid.querySelectorAll('.chapter-card').forEach(card => card.classList.remove('active'));
      clickedCard.classList.add('active');
      
      const val = clickedCard.dataset.value;
      gameState.chapter = (val === 'final' || val.startsWith('old_')) ? val : parseInt(val, 10);
      
      // Update welcome screen text & question count options dynamically
      updateWelcomeText();
      updateQuestionCountOptions();
      
      AudioSynth.play('click');
    });
  }

  // Theme toggle button
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    gameState.theme = gameState.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cyberquiz_theme', gameState.theme);
    applyTheme();
    AudioSynth.play('click');
  });

  // Sound toggle button
  document.getElementById('sound-toggle-btn').addEventListener('click', () => {
    gameState.soundEnabled = !gameState.soundEnabled;
    localStorage.setItem('cyberquiz_sound', gameState.soundEnabled);
    updateSoundUI();
    AudioSynth.play('click');
  });

  // Welcome page - Select Question count
  const countSelectContainer = document.getElementById('question-count-select');
  countSelectContainer.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.segmented-btn');
    if (!clickedBtn) return;
    
    countSelectContainer.querySelectorAll('.segmented-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    gameState.totalQuestionLimit = parseInt(clickedBtn.dataset.value, 10);
    AudioSynth.play('click');
  });

  // Welcome page - Select Shuffle Order
  const shuffleSelectContainer = document.getElementById('question-shuffle-select');
  shuffleSelectContainer.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.segmented-btn');
    if (!clickedBtn) return;
    
    shuffleSelectContainer.querySelectorAll('.segmented-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    gameState.shuffleOrder = clickedBtn.dataset.value;
    AudioSynth.play('click');
  });

  // Welcome page - Select Mode
  const modeCards = document.querySelectorAll('.mode-card');
  modeCards.forEach(card => {
    card.addEventListener('click', () => {
      modeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      gameState.mode = card.dataset.mode;
      AudioSynth.play('click');
    });
  });

  // Start Button Click
  document.getElementById('start-game-btn').addEventListener('click', () => {
    AudioSynth.play('click');
    initNewGame();
  });

  // Next Question Button Click
  document.getElementById('next-question-btn').addEventListener('click', () => {
    if (gameState.isAnswered()) {
      AudioSynth.play('click');
      goToNextQuestion();
    }
  });

  // Results screen retry and menu buttons
  document.getElementById('restart-game-btn').addEventListener('click', () => {
    AudioSynth.play('click');
    initNewGame();
  });
  
  document.getElementById('menu-btn').addEventListener('click', () => {
    AudioSynth.play('click');
    showScreen('welcome-screen');
  });

  // Global Keyboard Shortcuts for seamless navigation
  document.addEventListener('keydown', (e) => {
    // 1. If on welcome screen
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen && welcomeScreen.classList.contains('active')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) startBtn.click();
      }
      return;
    }

    // 2. If on quiz screen
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen && quizScreen.classList.contains('active')) {
      // Enter to go to the next question or view results (only if answered)
      if (e.key === 'Enter') {
        e.preventDefault();
        if (gameState.isAnswered()) {
          const nextBtn = document.getElementById('next-question-btn');
          if (nextBtn && !nextBtn.classList.contains('inactive')) {
            nextBtn.click();
          }
        }
        return;
      }

      // Keys to select options A, B, C, D (either A/B/C/D or 1/2/3/4)
      if (!gameState.isAnswered()) {
        const key = e.key.toUpperCase();
        if (key === 'A' || e.key === '1') {
          e.preventDefault();
          handleOptionSelection('A');
        } else if (key === 'B' || e.key === '2') {
          e.preventDefault();
          handleOptionSelection('B');
        } else if (key === 'C' || e.key === '3') {
          e.preventDefault();
          handleOptionSelection('C');
        } else if (key === 'D' || e.key === '4') {
          e.preventDefault();
          handleOptionSelection('D');
        }
      }
      return;
    }

    // 3. If on result screen
    const resultScreen = document.getElementById('result-screen');
    if (resultScreen && resultScreen.classList.contains('active')) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const restartBtn = document.getElementById('restart-game-btn');
        if (restartBtn) restartBtn.click();
      }
      return;
    }
  });
}

function updateWelcomeText() {
  const subtitle = document.querySelector('.hero-section .subtitle');
  const mainTitle = document.querySelector('.hero-section .main-title');
  if (!mainTitle || !subtitle) return;
  
  if (gameState.chapter === 'final') {
    mainTitle.innerHTML = 'ĐỀ THI ÔN TẬP CUỐI KỲ';
    subtitle.innerText = 'Kiểm tra tổng hợp toàn diện kiến thức An toàn thông tin với 320 câu hỏi bao quát cả 8 chương.';
  } else {
    const titles = {
      1: 'CHƯƠNG 1: TỔNG QUAN AN TOÀN THÔNG TIN',
      2: 'CHƯƠNG 2: MẬT MÃ HỌC CƠ BẢN',
      3: 'CHƯƠNG 3: CÁC THUẬT TOÁN MÃ HÓA KHỐI (DES/AES)',
      4: 'CHƯƠNG 4: THUẬT TOÁN MÃ KHÓA CÔNG KHAI (RSA)',
      5: 'CHƯƠNG 5: HÀM BĂM & CHỮ KÝ SỐ',
      6: 'CHƯƠNG 6: AN TOÀN THƯ ĐIỆN TỬ (PGP/SMIME)',
      7: 'CHƯƠNG 7: AN TOÀN TẦNG IP (IPSEC/VPN)',
      8: 'CHƯƠNG 8: AN TOÀN WEB & GIAO THỨC SSL/TLS',
      'old_c1': 'ĐỀ CŨ CHƯƠNG 1: TỔNG QUAN AN TOÀN THÔNG TIN (20 CÂU)',
      'old_c2': 'ĐỀ CŨ CHƯƠNG 2: MẬT MÃ HỌC CƠ BẢN (40 CÂU)'
    };
    const title = titles[gameState.chapter];
    mainTitle.innerHTML = title;
    
    if (gameState.chapter.toString().startsWith('old_')) {
      subtitle.innerText = `Luyện tập với đề thi cũ nguyên bản của ${title.split(': ')[1].toLowerCase()}.`;
    } else {
      subtitle.innerText = `Kiểm tra và nâng cao kiến thức chuyên sâu về ${title.split(': ')[1].toLowerCase()} với 40 câu hỏi trắc nghiệm thực tế.`;
    }
  }
}

function updateQuestionCountOptions() {
  const countSelectContainer = document.getElementById('question-count-select');
  if (!countSelectContainer) return;
  
  let selectedDb = [];
  if (gameState.chapter === 'final') {
    for (let i = 1; i <= 8; i++) {
      selectedDb = selectedDb.concat(QUESTIONS_DB[`c${i}`]);
    }
  } else if (QUESTIONS_DB[gameState.chapter]) {
    selectedDb = [...QUESTIONS_DB[gameState.chapter]];
  } else {
    selectedDb = [...QUESTIONS_DB[`c${gameState.chapter}`]];
  }
  
  const totalCount = selectedDb.length;
  
  let html = `<button class="segmented-btn" data-value="10">10 Câu</button>`;
  if (totalCount >= 20) {
    html += `<button class="segmented-btn" data-value="20">20 Câu</button>`;
  }
  if (totalCount > 20) {
    html += `<button class="segmented-btn active" data-value="${totalCount}">${totalCount} Câu (Tất cả)</button>`;
    gameState.totalQuestionLimit = totalCount;
  } else {
    html = `<button class="segmented-btn" data-value="10">10 Câu</button>
            <button class="segmented-btn active" data-value="20">20 Câu (Tất cả)</button>`;
    gameState.totalQuestionLimit = 20;
  }
  
  countSelectContainer.innerHTML = html;
}

// Helper to transition screens cleanly
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  const target = document.getElementById(screenId);
  target.classList.add('active');
  
  // Clean up timers or confetti if moving out of specific states
  if (screenId !== 'quiz-screen') {
    clearInterval(gameState.timerInterval);
  }
  if (screenId !== 'result-screen') {
    ConfettiEngine.clear();
  }
}

// ==========================================================================
// 6. GAME INITIALIZATION ENGINE
// ==========================================================================
function initNewGame() {
  // 1. Prepare question pool based on preference
  let selectedDb = [];
  if (gameState.chapter === 'final') {
    // Combine questions from all chapters c1 to c8
    for (let i = 1; i <= 8; i++) {
      selectedDb = selectedDb.concat(QUESTIONS_DB[`c${i}`]);
    }
  } else if (QUESTIONS_DB[gameState.chapter]) {
    // Load specific database direct match (like old_c1 or old_c2)
    selectedDb = [...QUESTIONS_DB[gameState.chapter]];
  } else {
    // Load specific chapter c1 to c8
    selectedDb = [...QUESTIONS_DB[`c${gameState.chapter}`]];
  }
  
  // 2. Shuffle if selected, OR for final exam (final exam should ALWAYS be shuffled to mix chapters!)
  if (gameState.shuffleOrder === 'shuffle' || gameState.chapter === 'final') {
    // Shuffling utility: Fisher-Yates shuffle
    for (let i = selectedDb.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selectedDb[i], selectedDb[j]] = [selectedDb[j], selectedDb[i]];
    }
  }

  // 3. Select the configured pool size
  const poolSize = Math.min(gameState.totalQuestionLimit, selectedDb.length);
  gameState.currentPool = selectedDb.slice(0, poolSize);
  
  // 3. Reset state parameters
  gameState.currentIndex = 0;
  gameState.correctCount = 0;
  gameState.incorrectCount = 0;
  gameState.selectedAnswers = {};
  gameState.answerRecords = [];
  gameState.startTime = Date.now();
  gameState.endTime = null;
  
  // Update overall progress numbers
  document.getElementById('total-q-count').innerText = poolSize;
  
  // Clean timers
  clearInterval(gameState.timerInterval);
  
  // Setup timer box display
  const timerBox = document.getElementById('timer-box');
  if (gameState.mode === 'speedrun') {
    timerBox.classList.remove('inactive');
  } else {
    timerBox.classList.add('inactive');
  }

  // Draw first question
  renderCurrentQuestion();
  showScreen('quiz-screen');
}

// ==========================================================================
// 7. QUESTION RENDERING & CHOICES HANDLERS
// ==========================================================================
function renderCurrentQuestion() {
  const currentQ = gameState.currentPool[gameState.currentIndex];
  
  // Set question index textual fields
  document.getElementById('current-q-index').innerText = gameState.currentIndex + 1;
  document.getElementById('question-id-badge').innerText = `ID: ${currentQ.id}`;
  
  // Update horizontal top progress bar
  const progressPercent = (gameState.currentIndex / gameState.currentPool.length) * 100;
  document.getElementById('progress-fill').style.width = `${progressPercent}%`;
  
  // Fill text
  const questionTextBox = document.getElementById('question-text-box');
  questionTextBox.innerText = currentQ.question;
  
  // Clear option grid and recreate
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  // Labels map
  const labels = ['A', 'B', 'C', 'D'];
  
  currentQ.options.forEach((optText, index) => {
    const choiceLabel = labels[index];
    
    const optBtn = document.createElement('button');
    optBtn.className = 'option-btn';
    optBtn.dataset.choice = choiceLabel;
    
    optBtn.innerHTML = `
      <span class="option-label">${choiceLabel}</span>
      <span class="option-content">${escapeHTML(optText)}</span>
      <span class="status-indicator"></span>
    `;
    
    optBtn.addEventListener('click', () => handleOptionSelection(choiceLabel));
    optionsContainer.appendChild(optBtn);
  });
  
  // Scoreboard counters reset
  document.getElementById('hud-correct-count').innerText = gameState.correctCount;
  document.getElementById('hud-incorrect-count').innerText = gameState.incorrectCount;
  
  // Set default Next Question button status to disabled
  const nextBtn = document.getElementById('next-question-btn');
  nextBtn.classList.add('inactive');
  nextBtn.innerHTML = `
    <span>XÁC NHẬN ĐÁP ÁN</span>
    <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `;

  // Start timers if in Speed Run mode
  if (gameState.mode === 'speedrun') {
    startTimer();
  }
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// Triggers when user clicks on any A, B, C, D button
function handleOptionSelection(choice) {
  // If already answered this question, clicking is blocked
  if (gameState.isAnswered()) return;
  
  const currentQ = gameState.currentPool[gameState.currentIndex];
  
  // Toggle selection visually
  const optButtons = document.querySelectorAll('.option-btn');
  optButtons.forEach(btn => {
    if (btn.dataset.choice === choice) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  // Save selection
  gameState.selectedAnswers[currentQ.id] = choice;
  AudioSynth.play('click');
  
  // Immediately lock response, score correctness and show feedback
  processAnswerSubmission(choice);
}

// Locked answer parsing
function processAnswerSubmission(userChoice) {
  // Stop timers immediately
  if (gameState.mode === 'speedrun') {
    clearInterval(gameState.timerInterval);
  }

  const currentQ = gameState.currentPool[gameState.currentIndex];
  const isCorrect = userChoice === currentQ.correctAnswer;
  
  // Log results
  if (isCorrect) {
    gameState.correctCount++;
    AudioSynth.play('correct');
  } else {
    gameState.incorrectCount++;
    AudioSynth.play('incorrect');
  }
  
  // Record timeline details for analytics
  gameState.answerRecords.push({
    questionId: currentQ.id,
    questionIndex: gameState.currentIndex,
    isCorrect: isCorrect,
    userSelection: userChoice,
    correctAnswer: currentQ.correctAnswer
  });

  // Update visual answer feedback on options elements
  const optButtons = document.querySelectorAll('.option-btn');
  optButtons.forEach(btn => {
    btn.disabled = true; // Lock everything
    
    const btnChoice = btn.dataset.choice;
    
    if (btnChoice === currentQ.correctAnswer) {
      // Glow green always
      btn.classList.remove('selected');
      btn.classList.add('correct');
    } else if (btnChoice === userChoice && !isCorrect) {
      // Glow red and shake selected wrong choice
      btn.classList.remove('selected');
      btn.classList.add('incorrect');
    }
  });

  // Update score board numbers
  document.getElementById('hud-correct-count').innerText = gameState.correctCount;
  document.getElementById('hud-incorrect-count').innerText = gameState.incorrectCount;

  // Swap "Xác Nhận" text to "Tiếp Theo" or "Xem Kết Quả"
  const nextBtn = document.getElementById('next-question-btn');
  nextBtn.classList.remove('inactive');
  
  const isLastQuestion = gameState.currentIndex === gameState.currentPool.length - 1;
  nextBtn.innerHTML = `
    <span>${isLastQuestion ? 'XEM KẾT QUẢ' : 'CÂU TIẾP THEO'}</span>
    <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  `;
}

// Action when clicking next
function goToNextQuestion() {
  if (gameState.currentIndex < gameState.currentPool.length - 1) {
    gameState.currentIndex++;
    renderCurrentQuestion();
  } else {
    // End Game reached
    gameState.endTime = Date.now();
    renderQuizResults();
  }
}

// ==========================================================================
// 8. SPEED RUN MODE TIMERS
// ==========================================================================
function startTimer() {
  clearInterval(gameState.timerInterval);
  
  gameState.timerTimeLeft = gameState.timerLimit;
  updateTimerUI();
  
  const timerCircle = document.getElementById('timer-circle');
  const timerBox = document.getElementById('timer-box');
  
  timerBox.classList.remove('warning');
  // Reset dashoffset
  timerCircle.style.strokeDashoffset = 0;
  
  gameState.timerInterval = setInterval(() => {
    gameState.timerTimeLeft--;
    updateTimerUI();
    
    // Animate radial dash offset
    // Circ = 213.63
    const progress = gameState.timerTimeLeft / gameState.timerLimit;
    const offset = 213.63 * (1 - progress);
    timerCircle.style.strokeDashoffset = offset;
    
    // Add urgency styles when <= 5 seconds remain
    if (gameState.timerTimeLeft <= 5) {
      timerBox.classList.add('warning');
      if (gameState.timerTimeLeft > 0) {
        AudioSynth.play('click'); // Click tick sound
      }
    }
    
    if (gameState.timerTimeLeft <= 0) {
      // Time is up!
      clearInterval(gameState.timerInterval);
      handleTimeOutEvent();
    }
  }, 1000);
}

function updateTimerUI() {
  document.getElementById('timer-count').innerText = gameState.timerTimeLeft;
}

// When user runs out of time in Speedrun mode
function handleTimeOutEvent() {
  const currentQ = gameState.currentPool[gameState.currentIndex];
  
  // Set selection as empty string ('') indicating unanswered timeout
  gameState.selectedAnswers[currentQ.id] = '';
  
  // Trigger general false answer response
  processAnswerSubmission('');
}

// ==========================================================================
// 9. RESULT CALCULATION & SCORE DIALS
// ==========================================================================
function renderQuizResults() {
  const total = gameState.currentPool.length;
  const correct = gameState.correctCount;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  
  // Format overall time elapsed
  const totalTimeSeconds = Math.round((gameState.endTime - gameState.startTime) / 1000);
  const m = Math.floor(totalTimeSeconds / 60).toString().padStart(2, '0');
  const s = (totalTimeSeconds % 60).toString().padStart(2, '0');
  
  // Calculate average response speed
  const avgSpeed = (totalTimeSeconds / total).toFixed(1);
  
  // Assign designated user ranks
  let rank = "";
  let desc = "";
  let rating = "";
  
  if (accuracy === 100) {
    rank = "Huyền Thoại Mật Mã";
    desc = "Xuất sắc! Bạn sở hữu kiến thức chuyên sâu hoàn hảo về an toàn hệ thống và mã hóa học!";
    rating = "Hoàn Hảo (100%)";
  } else if (accuracy >= 85) {
    rank = "Chuyên Gia Bảo Mật";
    desc = "Rất ấn tượng! Khả năng phân tích hệ mật mã và tư duy kiến trúc an toàn thông tin của bạn cực tốt.";
    rating = "Xuất Sắc";
  } else if (accuracy >= 60) {
    rank = "Chiến Binh An Ninh";
    desc = "Khá tốt! Bạn nắm vững các cơ sở an toàn thông tin cơ bản nhưng hãy cẩn thận các phép tính khóa công khai.";
    rating = "Khá";
  } else {
    rank = "Tập Sự An Ninh";
    desc = "Bạn cần tích cực ôn luyện lại các kiến thức cơ bản về DES, RSA, hàm băm và bảo mật mạng.";
    rating = "Cần Cố Gắng";
  }
  
  // Inject values into text components
  document.getElementById('result-percent-text').innerText = `${accuracy}%`;
  document.getElementById('result-correct-count').innerText = correct;
  document.getElementById('result-total-count').innerText = total;
  document.getElementById('rank-badge-text').innerText = rank;
  document.getElementById('rank-desc-text').innerText = desc;
  
  document.getElementById('stat-total-time').innerText = `${m}:${s}`;
  document.getElementById('stat-accuracy').innerText = `${accuracy}%`;
  document.getElementById('stat-avg-time').innerText = `${avgSpeed}s / câu`;
  document.getElementById('stat-rating').innerText = rating;
  
  // Show screen results view
  showScreen('result-screen');
  
  // Animate the Radial circular dial
  // circumference = 2 * PI * r (r=50) = 314.16
  const dialFill = document.getElementById('result-dial-fill');
  dialFill.style.strokeDashoffset = 314.16; // Reset first
  
  setTimeout(() => {
    const offset = 314.16 * (1 - (accuracy / 100));
    dialFill.style.strokeDashoffset = offset;
  }, 100);

  // Trigger high score confetti explosions!
  if (accuracy >= 70) {
    setTimeout(() => {
      AudioSynth.play('victory');
      ConfettiEngine.spawn(160);
    }, 400);
  }

  // Draw full question diagnostic reviews accordion list
  generateDiagnosticAccordion();
}

// ==========================================================================
// 10. DIAGNOSTIC ACCORDION REVIEWS PANEL
// ==========================================================================
function generateDiagnosticAccordion() {
  const container = document.getElementById('review-accordion-container');
  container.innerHTML = '';
  
  gameState.currentPool.forEach((q, index) => {
    const userAns = gameState.selectedAnswers[q.id];
    const isCorrect = userAns === q.correctAnswer;
    const itemClass = isCorrect ? 'correct-item' : 'incorrect-item';
    
    const accordion = document.createElement('div');
    accordion.className = `accordion-item ${itemClass}`;
    
    // Custom SVGs indicators for header bar
    const checkIcon = `
      <svg class="accordion-status-icon correct" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    `;
    const errorIcon = `
      <svg class="accordion-status-icon incorrect" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    `;
    
    // Review choice options indicators mapping
    const optionLabels = ['A', 'B', 'C', 'D'];
    let optionsHtml = '';
    
    q.options.forEach((optText, oIdx) => {
      const charLabel = optionLabels[oIdx];
      let styleClass = '';
      
      if (charLabel === q.correctAnswer) {
        styleClass = 'correct-option';
      } else if (charLabel === userAns && !isCorrect) {
        styleClass = 'user-selected-incorrect';
      }
      
      optionsHtml += `
        <div class="review-option ${styleClass}">
          <span class="review-option-label">${charLabel}</span>
          <span class="review-option-content">${escapeHTML(optText)}</span>
        </div>
      `;
    });
    
    accordion.innerHTML = `
      <div class="accordion-header">
        <div class="accordion-title-box">
          <span class="accordion-num">#${index + 1}</span>
          ${isCorrect ? checkIcon : errorIcon}
          <span class="accordion-question-preview">${escapeHTML(q.question)}</span>
        </div>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      <div class="accordion-content-panel">
        <div class="accordion-body">
          <div class="accordion-full-question">${q.question}</div>
          <div class="accordion-options-list">
            ${optionsHtml}
          </div>
          
          <div class="review-explanation">
            <svg class="review-explanation-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <div class="review-explanation-text">
              <strong>Giải thích kỹ thuật:</strong> ${escapeHTML(q.explanation || "Không có giải thích chi tiết.")}
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Toggle accordion logic
    accordion.querySelector('.accordion-header').addEventListener('click', () => {
      // Toggle current accordion active state
      const isOpen = accordion.classList.contains('open');
      
      // Close all accordions first (accordion accordion style)
      container.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('open');
      });
      
      if (!isOpen) {
        accordion.classList.add('open');
      }
    });

    container.appendChild(accordion);
  });
}
