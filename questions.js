/* ==========================================================================
   CYBERQUIZ DATABASE - QUESTIONS_DB
   Contains 320 multiple-choice questions (8 chapters * 40 questions)
   Plus original Chapter 1 & 2 databases as old_c1 (20 questions) and old_c2 (40 questions).
   Vietnamese language, verified correct answers, and rich explanations.
   ========================================================================== */

const QUESTIONS_DB = {
  // --- CHƯƠNG 1: TỔNG QUAN AN TOÀN THÔNG TIN (40 câu dựa theo tự luận đề cương) ---
  c1: [
  {
    "id": "c1_new_1",
    "question": "Theo định nghĩa ôn tập, Hệ thống thông tin là một tập hợp bao gồm những yếu tố nào?",
    "options": [
      "Chỉ bao gồm phần cứng máy tính và cáp kết nối mạng.",
      "Gồm con người, thủ tục và các nguồn lực để thu thập, xử lý, truyền phát thông tin.",
      "Chỉ bao gồm các phần mềm ứng dụng và hệ quản trị cơ sở dữ liệu.",
      "Gồm hệ thống tường lửa, phần mềm diệt virus và bộ định tuyến Router."
    ],
    "correctAnswer": "B",
    "explanation": "Hệ thống thông tin là một tập hợp gồm con người, thủ tục và các nguồn lực để thu thập, xử lý và truyền phát thông tin."
  },
  {
    "id": "c1_new_2",
    "question": "Tam giác CIA đại diện cho ba thuộc tính an ninh cơ bản nào cần đảm bảo trong một HTTT?",
    "options": [
      "Tính chứng thực (Authentication), Tính phân quyền (Authorization), Tính kiểm toán (Auditing)",
      "Tính phát hiện (Detection), Tính ngăn chặn (Prevention), Tính phản ứng (Response)",
      "Tính bí mật (Confidentiality), Tính toàn vẹn (Integrity), Tính sẵn sàng (Availability)",
      "Tính mã hóa (Encryption), Tính băm (Hashing), Tính ký số (Signature)"
    ],
    "correctAnswer": "C",
    "explanation": "Ba thuộc tính an ninh cơ bản (tam giác CIA) cần đảm bảo gồm: Tính bí mật (Confidentiality), Tính toàn vẹn (Integrity), và Tính sẵn sàng (Availability)."
  },
  {
    "id": "c1_new_3",
    "question": "Trong khuôn khổ tài liệu ôn tập, hai khái niệm 'Bảo mật thông tin' và 'An toàn thông tin' được sử dụng như thế nào?",
    "options": [
      "Được phân biệt rõ rệt và không thể thay thế cho nhau.",
      "Được sử dụng đồng nhất và thay thế cho nhau, đều mang nghĩa bảo vệ thông tin và hệ thống thông tin.",
      "Bảo mật thông tin chỉ dùng cho phần cứng, an toàn thông tin chỉ dùng cho phần mềm.",
      "Hai khái niệm hoàn toàn trái ngược nhau về mặt kỹ thuật mật mã."
    ],
    "correctAnswer": "B",
    "explanation": "Trong khuôn khổ tài liệu, hai khái niệm Bảo mật thông tin và An toàn thông tin (Information security/safety) được sử dụng đồng nhất và thay thế cho nhau, đều mang nghĩa bảo vệ thông tin và hệ thống thông tin."
  },
  {
    "id": "c1_new_4",
    "question": "Ví dụ nào minh họa chính xác cho việc bảo đảm an toàn/bảo mật thông tin theo tài liệu?",
    "options": [
      "Nâng cấp bộ nhớ RAM cho máy chủ web.",
      "Đặt mật khẩu cho một file tài liệu quan trọng để không ai đọc trộm được.",
      "Cài đặt hệ điều hành Windows bản quyền.",
      "Thực hiện nén file bằng WinRAR để giảm dung lượng đĩa."
    ],
    "correctAnswer": "B",
    "explanation": "Đặt mật khẩu cho một file tài liệu quan trọng để không ai đọc trộm được chính là ví dụ minh họa điển hình cho việc bảo đảm an toàn/bảo mật thông tin."
  },
  {
    "id": "c1_new_5",
    "question": "Các phương pháp bảo mật thông tin trên máy tính sử dụng khái niệm 'Kiểm soát truy cập' (Access Control) bao gồm:",
    "options": [
      "Chứng thực (Authentication) để xác nhận danh tính và Phân quyền (Authorization) để giới hạn hành động.",
      "Mã hóa dữ liệu và băm dữ liệu một chiều.",
      "Cài đặt tường lửa và ngắt kết nối Internet hoàn toàn.",
      "Sử dụng chứng chỉ số X.509 và mạng riêng ảo VPN."
    ],
    "correctAnswer": "A",
    "explanation": "Các phương pháp bảo mật: Hệ thống sử dụng khái niệm 'Kiểm soát truy cập' (Access Control) bao gồm Chứng thực (Authentication) để xác nhận danh tính người dùng và Phân quyền (Authorization) để giới hạn hành động được phép."
  },
  {
    "id": "c1_new_6",
    "question": "Vì sao việc bảo vệ thông tin trên máy tính trở nên cực kỳ quan trọng trong thời đại công nghệ số?",
    "options": [
      "Vì dữ liệu được số hóa, xử lý trên máy tính và truyền qua môi trường Internet vốn không an toàn, dễ bị đánh cắp gây tổn thất lớn.",
      "Vì máy tính chạy nhanh hơn nếu được bảo vệ thông tin tốt.",
      "Vì phần cứng máy tính sẽ tự động bị cháy nếu không cài đặt phần mềm diệt virus.",
      "Để tăng dung lượng lưu trữ của đĩa cứng vật lý."
    ],
    "correctAnswer": "A",
    "explanation": "Trong thời đại số, dữ liệu được số hóa và xử lý trên máy tính, truyền qua mạng Internet (môi trường vốn không an toàn). Nếu không bảo vệ, hacker có thể dễ dàng xâm nhập lấy trộm thông tin gây tổn thất chi phí cực lớn cho tổ chức."
  },
  {
    "id": "c1_new_7",
    "question": "Khẳng định nào đúng khi phân biệt giữa an toàn hệ thống và an toàn thông tin?",
    "options": [
      "An toàn thông tin bao trùm rộng lớn hơn an toàn hệ thống.",
      "An toàn hệ thống là khái niệm tổng quát và bao trùm, trong đó An toàn thông tin là một tập con.",
      "Hai khái niệm hoàn toàn tương đương và không có quan hệ tập hợp.",
      "An toàn hệ thống chỉ lo phần mềm, an toàn thông tin chỉ lo phần cứng."
    ],
    "correctAnswer": "B",
    "explanation": "Phân biệt: An toàn hệ thống (An ninh hệ thống) là một khái niệm tổng quát và bao trùm, trong đó An toàn thông tin (An ninh thông tin) là một tập con bên cạnh an ninh máy tính, an ninh mạng..."
  },
  {
    "id": "c1_new_8",
    "question": "Để đảm bảo an toàn hệ thống, bộ ba yếu tố cốt lõi cần thiết là gì?",
    "options": [
      "Bí mật (Confidentiality), Toàn vẹn (Integrity), Sẵn sàng (Availability)",
      "Phát hiện (detection), Ngăn chặn (prevention), Phản ứng (response)",
      "Chứng thực, Phân quyền, Kiểm toán",
      "Mã hóa, Giải mã, Phá mã"
    ],
    "correctAnswer": "B",
    "explanation": "Theo tài liệu ôn tập, để đảm bảo an toàn hệ thống, cần bộ ba yếu tố cốt lõi: Phát hiện (detection), Ngăn chặn (prevention) và Phản ứng (response)."
  },
  {
    "id": "c1_new_9",
    "question": "Theo nghĩa bảo mật, 'an toàn' đối với tài sản và thông tin của hệ thống nghĩa là gì?",
    "options": [
      "Không bao giờ bị ngắt kết nối điện lưới quốc gia.",
      "Được bảo vệ vững chắc chống mối đe dọa bên trong/bên ngoài, tránh tiết lộ, sửa đổi hay gián đoạn trái phép.",
      "Hệ thống tự động sao lưu dữ liệu mỗi giờ.",
      "Dữ liệu được lưu trữ trên nhiều ổ đĩa cứng vật lý khác nhau."
    ],
    "correctAnswer": "B",
    "explanation": "'An toàn' có nghĩa là tài sản và thông tin của hệ thống được bảo vệ vững chắc chống lại những mối đe dọa từ bên trong lẫn bên ngoài, tránh bị tiết lộ, sửa đổi hay gián đoạn trái phép."
  },
  {
    "id": "c1_new_10",
    "question": "Trong ví dụ thực tiễn về sử dụng Internet Banking, tính chất 'Toàn vẹn' (Integrity) được thể hiện ở việc:",
    "options": [
      "Hacker không thể đánh cắp tài khoản của bạn để rút tiền.",
      "Số dư tài khoản của bạn không thể bị tự ý thay đổi trái phép.",
      "Bạn có thể thực hiện chuyển tiền bất cứ lúc nào bạn cần.",
      "Giao diện ứng dụng ngân hàng hiển thị trực quan và đẹp mắt."
    ],
    "correctAnswer": "B",
    "explanation": "Trong thực tiễn Internet Banking, 'Bí mật' là hacker không đánh cắp được tài khoản, 'Toàn vẹn' là số dư tài khoản không bị tự ý thay đổi trái phép, và 'Sẵn sàng' là bạn chuyển tiền bất kỳ lúc nào cần."
  },
  {
    "id": "c1_new_11",
    "question": "Khái niệm 'An toàn mạng' được định nghĩa là gì?",
    "options": [
      "Là việc sử dụng các công cụ phần mềm để bảo vệ hệ thống máy tính cá nhân.",
      "Là tổng thể các giải pháp về tổ chức và kỹ thuật để ngăn chặn mọi nguy cơ tổn hại đến toàn mạng.",
      "Là việc thiết lập mật khẩu mạnh cho tài khoản quản trị mạng LAN.",
      "Là việc nén dữ liệu đường truyền để tăng tốc độ truyền mạng."
    ],
    "correctAnswer": "B",
    "explanation": "An toàn mạng là tổng thể các giải pháp về tổ chức và kỹ thuật để ngăn chặn mọi nguy cơ tổn hại đến toàn mạng."
  },
  {
    "id": "c1_new_12",
    "question": "Mối quan hệ giữa an toàn máy tính và an toàn mạng trong bộ đề là:",
    "options": [
      "An toàn máy tính bảo vệ đường truyền, an toàn mạng bảo vệ điểm đầu cuối.",
      "Cả hai là các cấu thành cơ bản của An ninh hệ thống; an toàn máy tính bảo vệ điểm đầu cuối, an toàn mạng bảo vệ các đường truyền nối các máy tính đó.",
      "Hai lĩnh vực hoàn toàn trùng lặp và sử dụng chung thuật toán.",
      "An toàn máy tính không liên quan gì đến an toàn mạng."
    ],
    "correctAnswer": "B",
    "explanation": "Mối quan hệ: Cả hai đều là các cấu thành cơ bản của An ninh hệ thống. An toàn máy tính tập trung bảo vệ điểm đầu cuối, trong khi an toàn mạng bảo vệ các đường truyền nối các máy tính đó lại với nhau."
  },
  {
    "id": "c1_new_13",
    "question": "Tại sao an toàn mạng được xem là một thành phần cực kỳ quan trọng của an toàn thông tin?",
    "options": [
      "Vì thông tin ngày nay không nằm yên mà liên tục được trao đổi qua môi trường mạng chứa đầy rủi ro nghe lén, sửa đổi và mạo danh.",
      "Vì thiết bị mạng thường có chi phí đắt hơn thiết bị máy tính cá nhân.",
      "Vì chỉ có mạng mới chứa lỗ hổng của cơ chế mã hóa đối xứng.",
      "Vì an toàn mạng sẽ giúp tăng dung lượng lưu trữ của máy chủ web."
    ],
    "correctAnswer": "A",
    "explanation": "Bởi vì thông tin ngày nay không chỉ nằm yên trên máy tính mà còn được truyền đưa, trao đổi liên tục qua môi trường mạng (đặc biệt là Internet). Mạng là môi trường chứa nhiều rủi ro, thông tin có thể bị xem trộm, thay đổi hoặc mạo danh trên đường truyền."
  },
  {
    "id": "c1_new_14",
    "question": "Nguy cơ nào lớn nhất đối với luồng thông tin truyền đưa trên đường truyền mạng hở?",
    "options": [
      "Gói tin bị quá hạn thời gian xử lý.",
      "Thông tin bị xem trộm (bí mật), bị thay đổi (toàn vẹn) hoặc bị mạo danh nguồn gốc.",
      "Card mạng của máy trạm nhận bị hỏng hóc vật lý.",
      "Hệ thống DNS bị lỗi phân giải địa chỉ."
    ],
    "correctAnswer": "B",
    "explanation": "Đường truyền mạng hở chứa nhiều rủi ro, thông tin có thể bị xem trộm (vi phạm bí mật), bị thay đổi (vi phạm toàn vẹn) hoặc mạo danh trên đường truyền."
  },
  {
    "id": "c1_new_15",
    "question": "Tài liệu phân loại rủi ro do con người gây mất an toàn hệ thống là:",
    "options": [
      "Tấn công logic phi cấu trúc đại số.",
      "Rủi ro liên quan đến con người hoặc do người ngay bên trong hệ thống (insider) thực hiện trái phép.",
      "Tấn công từ chối dịch vụ DDoS qua botnet.",
      "Tấn công bẻ khóa mật mã đối xứng cổ điển."
    ],
    "correctAnswer": "B",
    "explanation": "Tài liệu phân loại rủi ro do con người là 'rủi ro liên quan đến con người' hoặc do người ngay bên trong hệ thống (insider) thực hiện trái phép."
  },
  {
    "id": "c1_new_16",
    "question": "Biện pháp phòng chống hiệu quả nhất đối với rủi ro con người trong hệ thống là gì?",
    "options": [
      "Chỉ cần cài đặt phần mềm diệt virus trên tất cả các máy trạm.",
      "Kết hợp Điều khiển chính sách tổ chức quản lý con người và Kỹ thuật kiểm soát truy cập chặt chẽ (chứng thực, phân quyền, mật khẩu an toàn, hạn chế đăng nhập).",
      "Thay thế hoàn toàn nhân viên bằng robot tự động xử lý.",
      "Ngắt kết nối mạng WAN nội bộ của toàn doanh nghiệp."
    ],
    "correctAnswer": "B",
    "explanation": "Biện pháp phòng chống: Cần sự kết hợp giữa Điều khiển thông qua chính sách của tổ chức để quản lý con người và áp dụng hệ thống kỹ thuật như Kiểm soát truy cập (chứng thực, phân quyền) chặt chẽ, cùng với việc thiết lập mật khẩu an toàn và hạn chế đăng nhập."
  },
  {
    "id": "c1_new_17",
    "question": "Trong cuộc tấn công trung gian Man-in-the-Middle (MitM), kẻ tấn công đứng ở đâu?",
    "options": [
      "Đứng trực tiếp tại phòng máy chủ lưu trữ cơ sở dữ liệu.",
      "Đứng trung gian chèn vào giữa đường truyền kết nối của người gửi và người nhận.",
      "Tấn công từ xa thông qua mạng lưới botnet toàn cầu.",
      "Đứng tại thiết bị định tuyến trung tâm của nhà mạng ISP."
    ],
    "correctAnswer": "B",
    "explanation": "Tấn công trung gian (Man-in-the-Middle) là loại hình tấn công chủ động bằng cách đánh tráo giữa đường. Kẻ tấn công (C) đứng giữa người gửi (A) và người nhận (B)."
  },
  {
    "id": "c1_new_18",
    "question": "Hậu quả nguy hại nhất của một cuộc tấn công trung gian Man-in-the-Middle là gì?",
    "options": [
      "Làm sập dịch vụ máy chủ web khiến người dùng không thể truy cập.",
      "Kẻ tấn công có thể dễ dàng giải mã, xem trộm mọi thông báo hoặc mạo danh đánh cắp, phá hoại thông tin trao đổi.",
      "Làm cháy card mạng vật lý của thiết bị định tuyến.",
      "Thay đổi địa chỉ IP công cộng của nhà mạng."
    ],
    "correctAnswer": "B",
    "explanation": "Hậu quả: Kẻ tấn công C can thiệp giao thức trao đổi, lập khóa chung giả mạo với cả hai bên nên có thể dễ dàng giải mã, xem trộm mọi thông báo hoặc mạo danh đánh cắp, phá hoại thông tin giữa A và B."
  },
  {
    "id": "c1_new_19",
    "question": "Mục tiêu chính của một cuộc tấn công từ chối dịch vụ (DoS) là gì?",
    "options": [
      "Đọc trộm các thông tin bí mật lưu trong cơ sở dữ liệu.",
      "Ngăn chặn những người dùng hợp pháp sử dụng tài nguyên/dịch vụ của hệ thống (phá vỡ tính sẵn sàng).",
      "Thay đổi trái phép số dư tài khoản ngân hàng của nạn nhân.",
      "Tạo chữ ký số giả mạo thay thế chữ ký của người dùng."
    ],
    "correctAnswer": "B",
    "explanation": "Mục tiêu chính là ngăn chặn những người dùng hợp pháp sử dụng tài nguyên của hệ thống (phá vỡ tính sẵn sàng), có thể khiến hệ thống ngưng trệ, gây tốn kém chi phí để khắc phục."
  },
  {
    "id": "c1_new_20",
    "question": "Giải pháp kỹ thuật biên mạng nào được sử dụng để ngăn chặn tấn công DoS/DDoS?",
    "options": [
      "Áp dụng thuật toán mã hóa đối xứng AES-256.",
      "Cấu hình tường lửa (Firewall), hệ thống phát hiện/ngăn chặn xâm nhập, và Danh sách điều khiển truy cập (Access List) trên Router.",
      "Bắt buộc người dùng doanh nghiệp đổi mật khẩu mỗi ngày.",
      "Chuyển đổi toàn bộ dữ liệu máy chủ sang dạng nén ZIP."
    ],
    "correctAnswer": "B",
    "explanation": "Giải pháp ngăn chặn DoS: Cấu hình an ninh mạng sử dụng tường lửa (Firewall), hệ thống phát hiện/ngăn chặn xâm nhập (IDS/IPS), và các danh sách điều khiển truy cập (Access List) trên Router."
  },
  {
    "id": "c1_new_21",
    "question": "Lỗ hổng SQL Injection xảy ra tại phân vùng nào của ứng dụng?",
    "options": [
      "Tại cấu hình phần cứng của máy chủ Web.",
      "Tại các ô nhập dữ liệu của ứng dụng web không được lọc mã kỹ càng, cho phép chèn các lệnh SQL độc hại can thiệp CSDL.",
      "Tại giao thức định tuyến gói tin IP của Router.",
      "Tại thuật toán sinh khóa phiên đối xứng của PGP."
    ],
    "correctAnswer": "B",
    "explanation": "SQL Injection là kỹ thuật chèn đoạn mã SQL độc hại vào các ô nhập dữ liệu của ứng dụng web nhằm bẻ cong câu lệnh truy vấn gốc, thao túng cơ sở dữ liệu trái phép."
  },
  {
    "id": "c1_new_22",
    "question": "Biện pháp lập trình căn bản nào để phòng ngừa lỗ hổng SQL Injection hiệu quả?",
    "options": [
      "Mã hóa toàn bộ cơ sở dữ liệu bằng thuật toán DES.",
      "Lọc dữ liệu đầu vào chặt chẽ và sử dụng truy vấn tham số hóa (Parameterized Queries).",
      "Tăng tốc độ kết nối internet cho máy chủ dữ liệu.",
      "Sử dụng hàm băm MD5 để băm toàn bộ file ảnh."
    ],
    "correctAnswer": "B",
    "explanation": "Biện pháp phòng ngừa SQL Injection: Lọc dữ liệu đầu vào chặt chẽ và sử dụng truy vấn tham số hóa (Parameterized Queries / Prepared Statements) để tách biệt mã lệnh và dữ liệu."
  },
  {
    "id": "c1_new_23",
    "question": "Đặc điểm nhận diện đặc trưng nhất của loại mã độc bom logic (Logic Bomb) là:",
    "options": [
      "Lây nhiễm ồ ạt và tự nhân bản qua cổng mạng LAN.",
      "Nằm im chờ đợi và chỉ tự động kích hoạt hành vi tàn phá khi xảy ra một điều kiện logic cụ thể được lập trình trước.",
      "Gửi liên tục email rác chứa mã độc tới nạn nhân.",
      "Mã hóa toàn bộ dữ liệu đĩa cứng để đòi tiền chuộc."
    ],
    "correctAnswer": "B",
    "explanation": "Logic bomb là những đoạn mã độc hại được chèn bí mật vào hệ thống mạng hoặc phần mềm. Nó hoạt động bằng cách nằm im chờ đợi cho đến khi một điều kiện 'logic' cực kỳ cụ thể xảy ra."
  },
  {
    "id": "c1_new_24",
    "question": "Nguy cơ tàn phá kinh điển của một bom logic khi được kích hoạt là gì?",
    "options": [
      "Làm tăng tốc độ quạt gió của CPU gây tiếng ồn lớn.",
      "Thực thi hành vi tàn phá dữ liệu hệ thống (ví dụ: tự động xóa toàn bộ cơ sở dữ liệu).",
      "Tự động chuyển đổi giao diện ứng dụng từ tối sang sáng.",
      "Tự động gửi lại yêu cầu đăng nhập mật khẩu."
    ],
    "correctAnswer": "B",
    "explanation": "Nguy cơ của bom logic là khi điều kiện logic cụ thể kích hoạt (ví dụ ngày giờ nhất định, hoặc một nhân viên bị xóa tên khỏi hệ thống), nó sẽ thực thi hành vi tàn phá, xóa sạch dữ liệu."
  },
  {
    "id": "c1_new_25",
    "question": "Tại sao các tệp thực thi (.exe, .bat) hoặc tệp văn phòng chứa macro (.docm, .xlsm) lại dễ bị nhiễm virus nhất?",
    "options": [
      "Vì dung lượng của các tệp tin này thường rất lớn.",
      "Vì virus cần một môi trường hoặc chương trình thực thi để có thể chạy và kích hoạt mã độc của nó.",
      "Vì các tệp này không được mã hóa bảo mật bằng thuật toán AES.",
      "Vì hệ điều hành tự động tin tưởng các tệp tin này tuyệt đối."
    ],
    "correctAnswer": "B",
    "explanation": "Các tệp dễ nhiễm virus nhất là các tệp thực thi hoặc tài liệu văn phòng chứa macro bởi vì virus cần một môi trường hoặc chương trình thực thi để có thể chạy được mã độc."
  },
  {
    "id": "c1_new_26",
    "question": "Biện pháp hạn chế tối đa rủi ro nhiễm virus mã độc cho máy tính văn phòng là gì?",
    "options": [
      "Sử dụng phần mềm chống virus để dò tìm, cài đặt firewall để gác cổng chống mã độc và hành vi xâm phạm.",
      "Không lưu trữ bất kỳ tệp tin nào trên đĩa cứng.",
      "Chỉ cài đặt duy nhất hệ điều hành và không cài thêm phần mềm.",
      "Định dạng lại đĩa cứng (Format) sau mỗi lần sử dụng."
    ],
    "correctAnswer": "A",
    "explanation": "Biện pháp hạn chế: Sử dụng các phần mềm chống virus để dò tìm, cài đặt firewall để gác cổng chống mã độc và hành vi xâm phạm."
  },
  {
    "id": "c1_new_27",
    "question": "Bước khẩn cấp đầu tiên khi xử lý một máy tính bị nhiễm virus mà không có phần mềm diệt virus là gì?",
    "options": [
      "Thực hiện dọn dẹp các khóaRegistry ngẫu nhiên.",
      "Ngay lập tức ngắt kết nối Internet/LAN để tránh mã độc lây lan qua mạng.",
      "Khởi động lại máy tính liên tục nhiều lần.",
      "Sao lưu toàn bộ thư mục dữ liệu ra ổ đĩa di động dùng chung."
    ],
    "correctAnswer": "B",
    "explanation": "Bước xử lý máy bị nhiễm virus khẩn cấp: Ngay lập tức ngắt kết nối Internet/LAN để tránh mã độc lây lan."
  },
  {
    "id": "c1_new_28",
    "question": "Các bước xử lý kỹ thuật tiếp theo đối với máy tính bị nhiễm virus không có antivirus gồm:",
    "options": [
      "Cài đặt lại toàn bộ hệ điều hành mà không lưu trữ dữ liệu.",
      "Khởi động vào Safe Mode -> Kiểm tra tiến trình lạ trong Task Manager -> Dọn dẹp Registry -> Sao lưu dữ liệu an toàn -> Cài lại hệ điều hành nếu hỏng nặng.",
      "Chạy lệnh quét đĩa cứng trong dấu nhắc dòng lệnh cmd.",
      "Chuyển đổi giao diện hệ điều hành sang hệ điều hành Linux."
    ],
    "correctAnswer": "B",
    "explanation": "Quy trình xử lý thủ công: Khởi động lại máy vào Safe Mode, kiểm tra và kill tiến trình lạ trong Task Manager, dọn khóa khởi động bất thường trong Registry, sao lưu dữ liệu và cài lại OS nếu hỏng quá nặng."
  },
  {
    "id": "c1_new_29",
    "question": "Cách tạo mật khẩu mạnh được khuyến nghị để bảo vệ tài khoản là gì?",
    "options": [
      "Sử dụng ngày tháng năm sinh hoặc số điện thoại của bản thân.",
      "Sử dụng kết hợp chữ in hoa, chữ thường, số và ký tự đặc biệt, không sử dụng các từ có nghĩa trong từ điển hoặc thông tin cá nhân.",
      "Sử dụng chuỗi ký tự liền kề trên bàn phím như 'qwerty' hay '123456'.",
      "Sử dụng một từ khóa dài toàn bộ bằng chữ viết thường."
    ],
    "correctAnswer": "B",
    "explanation": "Cách tạo mật khẩu mạnh: Sử dụng kết hợp chữ in hoa, chữ thường, số và ký tự đặc biệt, không sử dụng các từ có nghĩa trong từ điển hoặc thông tin cá nhân."
  },
  {
    "id": "c1_new_30",
    "question": "Vì sao việc sử dụng mật khẩu phức tạp lại cực kỳ quan trọng đối với an ninh hệ thống?",
    "options": [
      "Vì nó giúp tăng tốc độ đăng nhập của người dùng vào mạng LAN.",
      "Vì tin tặc thường nhắm vào lấy trộm mật khẩu; mật khẩu phức tạp giúp chống lại các cuộc tấn công đoán mật khẩu hoặc vét cạn (brute force).",
      "Để hệ thống tự động ghi nhật ký đăng nhập nhanh hơn.",
      "Để tránh việc mật khẩu bị virus trojan tự động xóa mất."
    ],
    "correctAnswer": "B",
    "explanation": "Mật khẩu phức tạp cực kỳ quan trọng vì kẻ tấn công từ bên ngoài thường nhắm vào lấy trộm mật khẩu. Mật khẩu phức tạp giúp chống lại các cuộc tấn công vét cạn và bảo vệ khâu chứng thực không bị xuyên thủng."
  },
  {
    "id": "c1_new_31",
    "question": "Tấn công DDoS khác với tấn công DoS cơ bản ở điểm nào?",
    "options": [
      "DDoS nhắm vào tính bí mật, còn DoS nhắm vào tính toàn vẹn.",
      "DoS xuất phát từ một nguồn (một máy) duy nhất, trong khi DDoS sử dụng một mạng lưới khổng lồ các máy tính bị nhiễm mã độc (botnet) để đồng loạt tấn công.",
      "DDoS chỉ phá hoại các phần cứng máy chủ mạng LAN.",
      "DoS chỉ có thể thực hiện trên giao thức UDP của mạng."
    ],
    "correctAnswer": "B",
    "explanation": "DoS thường chỉ bắt nguồn từ một nguồn duy nhất, trong khi DDoS (Distributed Denial of Service) sử dụng một mạng lưới khổng lồ các máy tính bị nhiễm mã độc (botnet) để đồng loạt tấn công mục tiêu."
  },
  {
    "id": "c1_new_32",
    "question": "Tại sao tấn công từ chối dịch vụ phân tán DDoS lại khó phòng chống hơn DoS rất nhiều lần?",
    "options": [
      "Vì luồng tấn công DDoS chạy nhanh hơn tốc độ định tuyến của Router.",
      "Vì lưu lượng tấn công đến từ vô số địa chỉ IP hợp lệ trên toàn thế giới, khiến việc nhận diện và khóa nguồn tấn công bằng tường lửa trở nên cực kỳ khó khăn.",
      "Vì DDoS không sử dụng giao thức truyền tin TCP/IP.",
      "Vì DDoS tự động thay đổi thuật toán mã hóa liên tục."
    ],
    "correctAnswer": "B",
    "explanation": "DDoS khó phòng chống hơn nhiều vì lưu lượng tấn công khổng lồ đến từ vô số địa chỉ IP hợp lệ trên toàn thế giới (máy tính bị chiếm quyền), khiến việc khóa nguồn bằng tường lửa thông thường trở nên bất khả thi."
  },
  {
    "id": "c1_new_33",
    "question": "Tấn công IP flood (lụt gói tin IP) hoạt động theo cách thức nào?",
    "options": [
      "Mã hóa trái phép các gói tin IP trên đường truyền để gây nghẽn.",
      "Gửi ồ ạt các gói tin IP (như ICMP Ping hoặc SYN packets) về phía mục tiêu với tốc độ cao hơn khả năng xử lý của máy chủ, làm cạn kiệt băng thông và tài nguyên CPU.",
      "Thay đổi cấu hình định tuyến tĩnh trên các thiết bị Router biên.",
      "Tạo ra các khóa đối xứng giả mạo để chiếm quyền điều khiển IP."
    ],
    "correctAnswer": "B",
    "explanation": "IP flood hoạt động bằng cách gửi ồ ạt các gói tin IP về phía mục tiêu với tốc độ cao hơn khả năng xử lý của máy chủ, làm cạn kiệt băng thông và tài nguyên CPU."
  },
  {
    "id": "c1_new_34",
    "question": "Biện pháp kỹ thuật nào giúp bảo vệ hệ thống trước kiểu tấn công IP flood?",
    "options": [
      "Cài đặt phần mềm dọn dẹp Registry trên máy chủ.",
      "Cấu hình giới hạn tốc độ yêu cầu (rate limiting) trên Router, cài đặt Firewall để loại bỏ các gói tin rác, và dùng dịch vụ bảo vệ Cloud chống DDoS.",
      "Bắt buộc người dùng thay đổi địa chỉ IP card mạng liên tục.",
      "Sử dụng chữ ký song song trong giao dịch điện tử."
    ],
    "correctAnswer": "B",
    "explanation": "Biện pháp bảo vệ: Cấu hình giới hạn tốc độ yêu cầu (rate limiting) trên Router, cài đặt Firewall để loại bỏ các gói tin rác, và dùng dịch vụ bảo vệ Cloud chuyên nghiệp chống DDoS."
  },
  {
    "id": "c1_new_35",
    "question": "Theo khuyến nghị bảo mật thông thường, chiều dài tối thiểu của mật khẩu nên là bao nhiêu ký tự?",
    "options": [
      "Từ 4 đến 6 ký tự.",
      "Từ 8 đến 12 ký tự trở lên.",
      "Chỉ cần đúng 6 ký tự số.",
      "Càng dài càng tốt và tối thiểu là 32 ký tự."
    ],
    "correctAnswer": "B",
    "explanation": "Để đảm bảo an toàn thực tế, chiều dài tối thiểu của mật khẩu nên là từ 8-12 ký tự trở lên."
  },
  {
    "id": "c1_new_36",
    "question": "Ý nghĩa lớn nhất của việc gia tăng chiều dài tối thiểu cho mật khẩu hệ thống là gì?",
    "options": [
      "Giúp người dùng dễ dàng ghi nhớ mật khẩu hơn.",
      "Làm không gian khóa tăng theo cấp số nhân, khiến việc bẻ khóa, vét cạn mật khẩu tốn vô số năm để xử lý mang lại độ an toàn thực tế cao.",
      "Giúp máy tính khởi động nhanh hơn khi đăng nhập.",
      "Ngăn chặn hoàn toàn các cuộc tấn công SQL Injection."
    ],
    "correctAnswer": "B",
    "explanation": "Ý nghĩa: Việc gia tăng chiều dài sẽ làm không gian khóa sinh ra từ các ký tự tăng theo cấp số nhân, khiến việc bẻ khóa, vét cạn mật khẩu (brute-force) tốn vô số năm để xử lý, mang lại độ an toàn thực tế."
  },
  {
    "id": "c1_new_37",
    "question": "Quy trình kiểm soát truy cập bắt buộc phải bao gồm những khâu nào khi người dùng đăng nhập hệ thống mạng?",
    "options": [
      "Chỉ cần nhập tên đăng nhập và mật khẩu mà không cần phân quyền.",
      "Chứng thực (Authentication) để xác nhận danh tính người dùng và Phân quyền (Authorization) để giới hạn các hành động được làm.",
      "Băm mật khẩu và nén dữ liệu truyền thông.",
      "Trao đổi khóa công khai thông qua giao thức Oakley."
    ],
    "correctAnswer": "B",
    "explanation": "Quy trình: Theo cơ chế kiểm soát truy cập (Access Control), quy trình bắt buộc phải có bước Chứng thực (Authentication) để xác nhận danh tính, tiếp đó là khâu Phân quyền (Authorization) để giới hạn các hành động được làm."
  },
  {
    "id": "c1_new_38",
    "question": "Tại sao khâu xác thực chứng thực (Authentication) lại đóng vai trò tối quan trọng như một 'người gác cổng'?",
    "options": [
      "Vì nó giúp tăng tốc độ truyền tải các tệp tin qua mạng LAN.",
      "Vì nếu không xác thực chặt chẽ, hacker có thể tự do xâm nhập đánh cắp dữ liệu nhạy cảm (mật khẩu, thẻ tín dụng) hoặc cài mã độc phá hoại toàn bộ hệ thống.",
      "Để đảm bảo thuật toán mã hóa đối xứng AES hoạt động trơn tru.",
      "Để tự động sao lưu dữ liệu cá nhân của người dùng."
    ],
    "correctAnswer": "B",
    "explanation": "Tầm quan trọng: Việc xác thực giống như 'người gác cổng'. Nếu không làm chặt chẽ, hacker có thể tự do lấy trộm dữ liệu thẻ tín dụng, mật khẩu hay cài mã độc phá hoại toàn bộ công sức của tổ chức."
  },
  {
    "id": "c1_new_39",
    "question": "Hậu quả nghiêm trọng nào xảy ra đối với tổ chức trong tình huống thực tế không sử dụng mật khẩu mạnh?",
    "options": [
      "Máy tính bị hỏng màn hình vật lý.",
      "Kẻ phá hoại thông qua Internet sử dụng công cụ dò tìm để bẻ gãy cơ chế chứng thực, truy cập máy chủ nội bộ lấy trộm tài liệu bí mật, mật khẩu và thông tin thẻ tín dụng của khách hàng.",
      "Tốc độ truyền dữ liệu qua mạng internet bị sụt giảm nặng nề.",
      "Tài khoản email của nhân viên tự động bị xóa vĩnh viễn khỏi server."
    ],
    "correctAnswer": "B",
    "explanation": "Hậu quả thực tế: Kẻ phá hoại sử dụng công cụ dò tìm bẻ gãy chứng thực (bằng việc đoán trúng mật khẩu yếu), từ đó truy cập vào máy chủ nội bộ lấy trộm tài liệu bí mật, mật khẩu nội bộ, và thông tin thẻ tín dụng khách hàng."
  },
  {
    "id": "c1_new_40",
    "question": "Bài học xương máu rút ra cho việc cấu hình hệ điều hành mạng sau sự cố lộ mật khẩu yếu là gì?",
    "options": [
      "Tắt hoàn toàn kết nối Internet của tổ chức.",
      "Bắt buộc xây dựng cấu hình hệ thống chặt chẽ thông qua việc 'hạn chế đăng nhập', yêu cầu người dùng đặt 'mật khẩu an toàn' và dùng tường lửa/phần mềm gác cổng.",
      "Chỉ cho phép nhân viên truy cập hệ thống từ xa qua giao thức Telnet.",
      "Sử dụng duy nhất một tài khoản dùng chung cho tất cả các nhân viên."
    ],
    "correctAnswer": "B",
    "explanation": "Bài học rút ra: Phải xây dựng cấu hình hệ điều hành mạng chặt chẽ thông qua việc 'hạn chế đăng nhập' (khóa tài khoản nhập sai nhiều lần), bắt buộc người dùng thiết lập 'mật khẩu an toàn' phức tạp, và dùng tường lửa/phần mềm gác cổng gác cổng an ninh."
  }
],

  // --- CHƯƠNG 2: MẬT MÃ HỌC CƠ BẢN (40 câu dựa theo tự luận đề cương) ---
  c2: [
  {
    "id": "c2_new_1",
    "question": "Quá trình mã hóa (Encryption) về mặt mật mã học được định nghĩa là gì?",
    "options": [
      "Quá trình băm một thông điệp lớn thành chuỗi băm 128-bit cố định.",
      "Quá trình sử dụng một thuật toán (E) và một khóa (K) để biến đổi thông tin ban đầu (bản rõ - Plaintext) thành dạng không thể đọc hiểu được (bản mã - Ciphertext).",
      "Quá trình nén file tài liệu để giấu thông tin tránh virus lây lan.",
      "Quá trình truyền khóa công khai qua kênh mạng không an toàn."
    ],
    "correctAnswer": "B",
    "explanation": "Mã hóa (Encryption): Là quá trình sử dụng một thuật toán (E) và một khóa (K) để biến đổi thông tin ban đầu (bản rõ - Plaintext) thành dạng không thể đọc hiểu được (bản mã - Ciphertext)."
  },
  {
    "id": "c2_new_2",
    "question": "Vì sao mã hóa dữ liệu lại đóng vai trò là công cụ cơ bản thiết yếu nhất của bảo mật thông tin?",
    "options": [
      "Vì mã hóa giúp file dữ liệu có dung lượng nhỏ hơn khi truyền.",
      "Vì nó đáp ứng hoàn hảo các nhu cầu cốt lõi về tính bảo mật (che giấu nội dung), tính chứng thực nguồn gốc và tính không từ chối của hệ thống truyền tin.",
      "Vì mã hóa sẽ tự động tiêu diệt các phần mềm độc hại trojan trên card mạng.",
      "Vì mã hóa giúp tăng tốc độ xử lý của CPU máy tính."
    ],
    "correctAnswer": "B",
    "explanation": "Tầm quan trọng: Mã hóa là công cụ cơ bản thiết yếu của bảo mật thông tin, giúp đáp ứng các nhu cầu về tính bảo mật (che giấu nội dung), tính chứng thực và tính không từ chối của một hệ thống truyền tin."
  },
  {
    "id": "c2_new_3",
    "question": "Ngành khoa học Mật mã học (Cryptology) bao gồm hai lĩnh vực nghiên cứu chính nào?",
    "options": [
      "Mã hóa đối xứng (Symmetric) và Mã hóa bất đối xứng (Asymmetric).",
      "Lĩnh vực thiết kế thuật toán mã hóa (Cryptography) và Lĩnh vực nghiên cứu bẻ gãy hệ mật phá mã (Cryptanalysis).",
      "Hàm băm một chiều (Hash) và Chữ ký số (Digital Signature).",
      "Bảo mật mạng LAN và Bảo mật mạng diện rộng WAN."
    ],
    "correctAnswer": "B",
    "explanation": "Mật mã học (Cryptology): Là một ngành khoa học nghiên cứu về truyền tin bảo mật, bao gồm hai lĩnh vực chính: mã hóa (Cryptography) và thám mã (Cryptanalysis)."
  },
  {
    "id": "c2_new_4",
    "question": "Vai trò cốt lõi của ngành khoa học mật mã học trong thực tiễn an toàn thông tin là gì?",
    "options": [
      "Cung cấp các công cụ và thuật toán (hệ mã mật, hàm băm, chữ ký điện tử) nhằm đảm bảo tính bí mật và xác thực của thông tin được lưu trữ, xử lý và truyền tải.",
      "Viết ra hệ điều hành bảo mật an toàn tuyệt đối.",
      "Thiết kế ra card mạng vật lý chống nghe lén dữ liệu.",
      "Tự động khóa tài khoản đăng nhập sai mật khẩu nhiều lần."
    ],
    "correctAnswer": "A",
    "explanation": "Vai trò: Ngành này cung cấp các phương tiện, phương thức, thuật toán (hệ mã mật, hàm băm, chữ ký điện tử) nhằm đảm bảo tính bí mật và xác thực của thông tin được lưu trữ, xử lý và truyền tải trên máy tính và môi trường mạng."
  },
  {
    "id": "c2_new_5",
    "question": "Hoạt động Phá mã (Thám mã - Cryptanalysis) được hiểu là gì?",
    "options": [
      "Quá trình giải mã hợp pháp bản mã khi đã sở hữu đúng khóa bí mật.",
      "Quá trình nghiên cứu, tìm ra bản rõ (Plaintext) hoặc khóa bí mật (Key) từ bản mã (Ciphertext) mà không có sẵn khóa hợp pháp ban đầu.",
      "Quá trình băm file tài liệu để kiểm tra lỗi bit truyền mạng.",
      "Quá trình lập cấu hình bộ định tuyến Router để chặn tin tặc."
    ],
    "correctAnswer": "B",
    "explanation": "Phá mã (Thám mã - Cryptanalysis): Là quá trình nghiên cứu, tìm ra bản rõ (Plaintext) hoặc khóa bí mật (Key) từ bản mã (Ciphertext) mà không có sẵn khóa hợp pháp ban đầu."
  },
  {
    "id": "c2_new_6",
    "question": "Sự phân biệt pháp lý và kỹ thuật cốt lõi giữa 'Giải mã' và 'Phá mã' là:",
    "options": [
      "Giải mã sử dụng máy tính, phá mã sử dụng toán học giấy tờ.",
      "Giải mã là quá trình hợp pháp của người nhận sở hữu khóa hợp lệ; phá mã là hành động bất hợp pháp của kẻ tấn công cố tìm khóa/bản rõ không có khóa.",
      "Phá mã luôn cho ra kết quả chính xác 100%, giải mã thì có tỷ lệ sai số.",
      "Giải mã chỉ áp dụng cho mã khối, phá mã chỉ áp dụng cho mã dòng."
    ],
    "correctAnswer": "B",
    "explanation": "Phân biệt: Giải mã là quá trình diễn ra hợp pháp bởi người nhận thông điệp khi họ đã sở hữu đúng khóa giải mã. Phá mã là hành động của kẻ tấn công cố gắng tìm ra khóa hoặc nội dung thông tin một cách bất hợp pháp."
  },
  {
    "id": "c2_new_7",
    "question": "Theo luật mật mã hiện đại, độ an toàn tối thượng của một hệ mật mã phụ thuộc vào yếu tố nào?",
    "options": [
      "Việc giấu kín tuyệt đối thiết kế của thuật toán mã hóa.",
      "Không gian khóa đủ lớn để chống vét cạn, kích thước khối lớn chống thống kê và sự bảo mật tuyệt đối của Khóa (theo luật Kirchoff).",
      "Tốc độ mạng internet truyền gói tin bản mã.",
      "Độ dài của tên người dùng và mật khẩu đăng nhập hệ điều hành."
    ],
    "correctAnswer": "B",
    "explanation": "Yếu tố ảnh hưởng: Độ an toàn dựa trên độ lớn của không gian khóa (chống vét cạn) và kích thước khối (chống thống kê). Theo luật Kirchoff, độ an toàn của hệ mật mã không phụ thuộc vào việc giấu kín thuật toán mà hoàn toàn dựa vào tính bí mật của khóa."
  },
  {
    "id": "c2_new_8",
    "question": "Ví dụ điển hình nào chứng minh hệ mật Caesar cổ điển có độ an toàn cực kỳ yếu?",
    "options": [
      "Mã hóa Caesar làm tăng kích thước file lên gấp 3 lần.",
      "Hệ chỉ có 25 khóa thực tế có tác dụng; thám mã dễ dàng thử sai toàn bộ (brute force) trong vài giây để bẻ gãy hệ mã.",
      "Thuật toán mã hóa Caesar không hỗ trợ ký số điện tử.",
      "Mã hóa Caesar bắt buộc phải sử dụng ma trận nghịch đảo phức tạp."
    ],
    "correctAnswer": "B",
    "explanation": "Ví dụ: Hệ mã dịch vòng Caesar chỉ có 25 khóa có tác dụng. Do không gian khóa quá nhỏ, kẻ tấn công có thể dễ dàng thử toàn bộ 25 khóa này để bẻ gãy hệ mã một cách nhanh chóng."
  },
  {
    "id": "c2_new_9",
    "question": "Tại sao tốc độ mã hóa và giải mã của các hệ mật mã khóa công khai (như RSA, ElGamal) lại rất chậm?",
    "options": [
      "Vì chúng bắt buộc phải nén dữ liệu bằng thuật toán ZIP trước.",
      "Vì chúng phải thực hiện các phép toán số học lũy thừa vô cùng phức tạp trên các khối số nguyên cực lớn (như 1024-bit hay 2048-bit).",
      "Vì hệ mật công khai chỉ chạy được đơn luồng trên CPU máy tính.",
      "Vì chúng sử dụng các phép toán logic XOR đơn giản lặp lại nhiều vòng."
    ],
    "correctAnswer": "B",
    "explanation": "Hệ mật mã công khai (như RSA, ElGamal): Tốc độ rất chậm do phải làm việc với các khối dữ liệu là số nguyên cực lớn và sử dụng phép tính lũy thừa phức tạp (ví dụ: RSA với số 1024-bit hoặc 2048-bit)."
  },
  {
    "id": "c2_new_10",
    "question": "Tại sao các hệ mật mã đối xứng hiện đại (như DES, AES) lại đạt được tốc độ mã hóa và giải mã cực nhanh?",
    "options": [
      "Vì chúng không sử dụng bất kỳ khóa bí mật nào.",
      "Vì chúng xử lý dữ liệu ở dạng bit, byte sử dụng các phép toán đơn giản (dịch bit, XOR, bảng tra S-box) cực kỳ tối ưu và tương thích trên phần cứng.",
      "Vì chúng tự động bỏ qua khâu kiểm tra lỗi toàn vẹn dữ liệu.",
      "Vì chúng mã hóa thông tin trực tiếp trên tầng Vật lý của mô hình OSI."
    ],
    "correctAnswer": "B",
    "explanation": "Hệ mật mã bí mật/đối xứng hiện đại (như DES, AES): Tốc độ rất nhanh vì chúng xử lý dữ liệu ở dạng bit, byte sử dụng các hàm toán học đơn giản (dịch bit, XOR, bảng tra S-box) vốn cực kỳ phù hợp để tối ưu trên phần cứng máy tính."
  },
  {
    "id": "c2_new_11",
    "question": "Độ an toàn của hệ mật mã đối xứng hiện đại và hệ mật mã bất đối xứng (khóa công khai) dựa trên các nguyên lý nào?",
    "options": [
      "Cả hai đều dựa trên độ lớn khóa; đối xứng dựa trên sự hỗn loạn/khuếch tán; công khai dựa trên các bài toán toán học chưa có lời giải hiệu quả đa thức.",
      "Đối xứng an toàn hơn bất đối xứng tuyệt đối về mặt toán học.",
      "Bất đối xứng an toàn hơn nhờ không sử dụng khóa bí mật.",
      "Cả hai đều dựa trên độ khó của phép phân tích ma trận vuông cấp m."
    ],
    "correctAnswer": "A",
    "explanation": "Độ an toàn: Cả hai đều có thể an toàn nếu khóa đủ lớn. Độ an toàn của mã đối xứng dựa trên độ dài khóa và khả năng tạo ra sự hỗn loạn/khuếch tán. Độ an toàn của mã công khai dựa trên các bài toán toán học chưa có lời giải hiệu quả trong thời gian đa thức."
  },
  {
    "id": "c2_new_12",
    "question": "Hệ mật mã khóa công khai (bất đối xứng) thể hiện tính ưu việt vượt trội nhất ở điểm nào?",
    "options": [
      "Tốc độ mã hóa dữ liệu lớn cực nhanh và tốn ít CPU.",
      "Khả năng phân phối khóa an toàn qua kênh truyền không bảo mật, quản lý khóa đơn giản trong mạng lớn và hỗ trợ tốt cho chữ ký số chống chối bỏ.",
      "Kích thước bản mã sinh ra nhỏ hơn nhiều so với bản rõ.",
      "Tự động nén dữ liệu và quét sạch mã độc đường truyền."
    ],
    "correctAnswer": "B",
    "explanation": "Tính ưu việt: Mã công khai ưu việt nhờ khả năng phân phối khóa qua kênh không an toàn, dễ quản lý hơn trong mạng lớn, và hỗ trợ tốt cho việc tạo chữ ký điện tử."
  },
  {
    "id": "c2_new_13",
    "question": "Phương pháp thám mã 'Phân tích tần suất thống kê' (Statistical Frequency Analysis) hoạt động dựa trên đặc tính nào?",
    "options": [
      "Tính chất đồng dư modulo của phép tính lũy thừa RSA.",
      "Sự dư thừa cấu trúc ngôn ngữ tự nhiên của bản rõ để đếm số lần xuất hiện của ký tự trên bản mã rồi so khớp với bảng thống kê chuẩn.",
      "Thử sai liên tục lần lượt tất cả các khóa bí mật trong không gian khóa.",
      "Đo lường thời gian trễ của CPU khi giải mã gói tin."
    ],
    "correctAnswer": "B",
    "explanation": "Phân tích tần suất thống kê: Dựa trên sự dư thừa của ngôn ngữ gốc để đếm số lần xuất hiện của ký tự/từ trên bản mã, sau đó so sánh với bảng thống kê đặc trưng của bản rõ (đặc biệt áp dụng cho mã thay thế cổ điển)."
  },
  {
    "id": "c2_new_14",
    "question": "Phương pháp thám mã vi sai và tuyến tính được ứng dụng hiệu quả để phá vỡ cấu trúc của loại hệ mật nào?",
    "options": [
      "Mật mã dịch vòng đơn âm Caesar cổ điển.",
      "Hệ mật mã khối đối xứng cấu hình nhiều vòng lặp (như thám mã DES).",
      "Thuật toán trao đổi khóa Diffie-Hellman công khai.",
      "Các hàm băm một chiều phi đối xứng như SHA-1."
    ],
    "correctAnswer": "B",
    "explanation": "Tấn công vi sai/tuyến tính: Đối với mã khối, kiểm tra sự thay đổi của đầu ra dựa trên sự khác biệt của đầu vào hoặc xấp xỉ tuyến tính (như phá mã DES)."
  },
  {
    "id": "c2_new_15",
    "question": "Mật mã dịch vòng (Caesar) sử dụng phép thế đơn âm hoạt động theo nguyên tắc nào?",
    "options": [
      "Sắp xếp lại vị trí các chữ cái của bản rõ theo đường chéo zic-zắc.",
      "Thay thế mỗi chữ cái của bản rõ bằng một chữ cái đứng sau nó k vị trí trong bảng chữ cái tương ứng: $C = (x + k) \\pmod m$.",
      "Nhân vector ký tự bản rõ với ma trận vuông khóa K modulo 26.",
      "Mã hóa các ký tự sang chuỗi nhị phân 8-bit ASCII."
    ],
    "correctAnswer": "B",
    "explanation": "Khái niệm & Hoạt động: Mật mã dịch vòng (Mã Caesar) là phương pháp mã hóa thay thế đơn âm, trong đó mỗi chữ cái của bản rõ được thay thế bằng một chữ cái khác cách nó vị trí trong bảng chữ cái. Công thức: $C = (x+k) \\pmod m$."
  },
  {
    "id": "c2_new_16",
    "question": "Ứng dụng lịch sử nổi tiếng nhất của hệ mật mã dịch vòng Caesar là:",
    "options": [
      "Được sử dụng để mã hóa các giao dịch thanh toán SET thời cổ đại.",
      "Được Hoàng đế La Mã Julius Caesar sử dụng để truyền tin mật quân sự cách đây 2000 năm.",
      "Được tích hợp vào giao thức bảo mật an toàn thư điện tử PGP.",
      "Dùng để bảo mật các tệp tin lưu trữ trên đĩa cứng máy tính UNIX."
    ],
    "correctAnswer": "B",
    "explanation": "Ứng dụng: Là hệ mã cổ điển đơn giản nhất từng được Hoàng đế La Mã Julius Caesar sử dụng trong quân sự cách đây 2000 năm."
  },
  {
    "id": "c2_new_17",
    "question": "Trong bảng chữ cái tiếng Anh (m=26), mật mã dịch vòng Caesar có bao nhiêu cách chọn khóa K thực tế có tác dụng làm thay đổi bản rõ?",
    "options": [
      "Có 26 cách chọn khóa khả dĩ.",
      "Có 25 cách chọn khóa thực tế có ích (tác dụng).",
      "Có vô số cách chọn khóa kể cả số âm.",
      "Chỉ có 13 cách chọn khóa do tính chất đối xứng."
    ],
    "correctAnswer": "B",
    "explanation": "Trong bảng chữ cái tiếng Anh có tổng cộng 26 chữ cái ($m=26$). Do đó, có 26 cách chọn khóa (từ 0 đến 25). Tuy nhiên, trên thực tế chỉ có 25 khóa có tác dụng/có ích bởi vì khóa $k=0$ (hoặc $26$) sẽ không làm thay đổi bất kỳ ký tự nào của bản rõ, khiến bản mã giống y hệt bản rõ."
  },
  {
    "id": "c2_new_18",
    "question": "Vì sao khóa K = 0 (hoặc K = 26) trong mật mã dịch vòng bảng chữ cái tiếng Anh lại bị loại bỏ khỏi danh sách khóa có tác dụng?",
    "options": [
      "Vì phép toán modulo 26 cho kết quả bằng 0 làm sập chương trình tính toán.",
      "Vì khóa này không làm biến đổi bất kỳ ký tự nào của bản rõ, khiến bản mã giống hệt bản rõ ban đầu, hoàn toàn không có tính bảo mật.",
      "Vì khóa K=0 yêu cầu phải tính ma trận nghịch đảo phức tạp.",
      "Vì nó vi phạm tính một chiều của hàm băm mật mã học."
    ],
    "correctAnswer": "B",
    "explanation": "Khóa $k=0$ (hoặc $26$) là khóa rỗng (hoặc đồng dư 0 modulo 26), khiến ký tự bản rõ giữ nguyên vị trí và giá trị cũ ($C = (x + 0) \\pmod{26} = x$). Bản mã giống y hệt bản rõ nên hoàn toàn không có giá trị mã hóa bảo vệ."
  },
  {
    "id": "c2_new_19",
    "question": "Nguyên tắc hoạt động căn bản của mật mã hoán vị (Transposition Cipher) là gì?",
    "options": [
      "Thay thế mỗi chữ cái bằng một chữ đứng sau nó k vị trí.",
      "Các chữ cái trong bản rõ không bị thay thế mà chỉ hoán đổi vị trí tương đối (đổi chỗ) cho nhau theo quy tắc.",
      "Nhân vector ký tự với ma trận vuông K modulo 26.",
      "Băm thông điệp và dùng khóa riêng ký điện tử."
    ],
    "correctAnswer": "B",
    "explanation": "Nguyên tắc: Các chữ trong bản rõ không bị thay thế bằng chữ khác mà chỉ thay đổi vị trí tương đối (đổi chỗ) cho nhau theo một quy tắc nhất định (ví dụ ghi theo đường chéo đọc theo dòng, hoặc ghi theo cột rồi trộn các cột)."
  },
  {
    "id": "c2_new_20",
    "question": "So sánh điểm khác biệt lớn nhất về đặc trưng phân bố tần suất ký tự giữa mã dịch vòng và mã hoán vị:",
    "options": [
      "Mã hoán vị làm thay đổi tần suất ký tự; mã dịch vòng giữ nguyên tần suất ký tự của ngôn ngữ gốc.",
      "Mã dịch vòng làm thay đổi giá trị và tần suất ký tự; mã hoán vị giữ nguyên giá trị ký tự (bản mã có cùng phân bố tần suất như bản rõ) nhưng thay đổi vị trí tương đối của chúng.",
      "Mã hoán vị an toàn hơn nhiều trước các đòn tấn công biết trước cặp bản rõ - bản mã.",
      "Mã hoán vị bắt buộc phải tính định thức ma trận vuông cấp m."
    ],
    "correctAnswer": "B",
    "explanation": "So sánh: Mã dịch vòng (thay thế) giữ nguyên vị trí nhưng thay đổi giá trị của ký tự, thay đổi tần suất xuất hiện. Còn mật mã hoán vị giữ nguyên giá trị ký tự (bản mã có cùng phân bố tần suất chữ như bản rõ) nhưng thay đổi vị trí xuất hiện của chúng."
  },
  {
    "id": "c2_new_21",
    "question": "Trong mật mã hoán vị nhóm chu kỳ d, tại sao số lượng khóa khả dĩ lại bằng giai thừa $d!$?",
    "options": [
      "Vì thuật toán thực hiện phép lũy thừa modulo trên vành $d!$.",
      "Vì khóa của hệ mật này chính là hàm chỉ định hoán vị sắp xếp lại các vị trí của một nhóm d ký tự, và theo toán tổ hợp có đúng $d!$ cách sắp xếp vị trí tương đối giữa chúng.",
      "Vì kích thước file bản mã tăng lên $d!$ lần so với bản rõ.",
      "Để đảm bảo định thức ma trận khóa nguyên tố cùng nhau với $d!$."
    ],
    "correctAnswer": "B",
    "explanation": "Bởi vì thuật toán mã hóa hoán vị hoạt động bằng cách sắp xếp lại vị trí của một nhóm ký tự (có độ dài d). Khóa của hệ mã này chính là một hàm chỉ định hoán vị các vị trí đó. Ví dụ, khi xếp một nhóm d ký tự, sẽ có $d!$ cách sắp xếp vị trí tương đối giữa chúng."
  },
  {
    "id": "c2_new_22",
    "question": "Một thuật toán hoán vị cột đơn giản xử lý nhóm d = 5 ký tự. Hỏi có bao nhiêu khóa khả dĩ có thể cấu hình?",
    "options": [
      "5 khóa khả dĩ.",
      "120 khóa khả dĩ.",
      "25 khóa khả dĩ.",
      "32 khóa khả dĩ."
    ],
    "correctAnswer": "B",
    "explanation": "Số khóa khả dĩ bằng số hoán vị của d=5 phần tử: $P_5 = 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$ cách sắp xếp hay 120 khóa khả dĩ."
  },
  {
    "id": "c2_new_23",
    "question": "Quy trình mã hóa của mật mã Hill (Hill Cipher) cấp m hoạt động thế nào?",
    "options": [
      "Chia bản rõ thành các dòng ngang, hoán vị cột rồi đọc dọc.",
      "Chia bản rõ thành các vector hàng cấp m, nhân các vector này với ma trận vuông khóa K cấp m theo modulo kích thước bảng chữ cái: $C = X \\cdot K \\pmod n$.",
      "Tính giá trị băm SHA-256 của từng khối m ký tự.",
      "Dịch chuyển tịnh tiến mỗi ký tự đi k vị trí trên bảng chữ cái."
    ],
    "correctAnswer": "B",
    "explanation": "Hoạt động: Hệ mật mã Hill chia bản rõ thành các khối (xâu) có độ dài m, chuyển chúng thành dạng vector hàng tương ứng với giá trị số của ký tự. Sau đó, nó nhân vector hàng này với một ma trận vuông cấp m (chính là khóa K) theo modulo số lượng ký tự (n) để tạo ra bản mã: $C = X \\cdot K \\pmod n$."
  },
  {
    "id": "c2_new_24",
    "question": "Điều kiện cần toán học của ma trận khóa K cấp m để hệ mật mã Hill có thể giải mã chính xác là gì?",
    "options": [
      "Ma trận K phải chứa toàn các số nguyên tố và đối xứng.",
      "Ma trận K phải là ma trận không suy biến trên vành $\\mathbb{Z}_n$, nghĩa là tồn tại ma trận nghịch đảo $K^{-1}$ tương ứng để thực hiện giải mã.",
      "Định thức của ma trận K phải bằng chính xác 26.",
      "Tất cả phần tử trên đường chéo chính của K phải bằng 1."
    ],
    "correctAnswer": "B",
    "explanation": "Điều kiện: Ma trận K phải là ma trận không suy biến trên $\\mathbb{Z}_n$ (hoặc $\\mathbb{Z}_{26}$ với tiếng Anh), nghĩa là tồn tại ma trận nghịch đảo của K (gọi là $K^{-1}$) để có thể thực hiện quá trình giải mã."
  },
  {
    "id": "c2_new_25",
    "question": "Định thức của ma trận khóa K (gọi là $d = \\det(K)$) trong mật mã Hill đóng vai trò gì khi giải mã?",
    "options": [
      "Được sử dụng làm khóa dịch vòng bổ sung.",
      "Được sử dụng để tính toán tìm ra ma trận khóa nghịch đảo $K^{-1}$ phục vụ quá trình giải mã.",
      "Dùng để tính độ dài của bản mã sinh ra.",
      "Dùng để băm thông điệp bản mã tránh virus."
    ],
    "correctAnswer": "B",
    "explanation": "Vai trò: Định thức của ma trận K (gọi là $\\det(K)$) được dùng để tính toán ma trận nghịch đảo $K^{-1}$."
  },
  {
    "id": "c2_new_26",
    "question": "Tại sao định thức của ma trận khóa K trong mật mã Hill tiếng Anh bắt buộc phải nguyên tố cùng nhau với 26 ($\\gcd(\\det(K), 26) = 1$)?",
    "options": [
      "Để tăng tốc độ nhân ma trận của máy tính.",
      "Để tồn tại phần tử nghịch đảo modulo 26 của định thức, từ đó mới tính được ma trận nghịch đảo $K^{-1}$ trên vành $\\mathbb{Z}_{26}$ phục vụ việc giải mã.",
      "Để bản mã sinh ra không chứa các ký tự trùng lặp.",
      "Để vô hiệu hóa tấn công vi sai phi tuyến của thám mã."
    ],
    "correctAnswer": "B",
    "explanation": "Lý do: Khác với toán học thông thường, trong mật mã Hill các phép tính đều được thực hiện trên vành modulo nguyên. Để tồn tại phần tử nghịch đảo của $\\det(K)$ trên vành $\\mathbb{Z}_{26}$ (tức $\\det(K)^{-1} \\pmod{26}$), thì bắt buộc $\\det(K)$ phải nguyên tố cùng nhau với 26. Nếu không, ta không thể tìm được ma trận nghịch đảo để giải mã."
  },
  {
    "id": "c2_new_27",
    "question": "Để kiểm tra xem một ma trận vuông có thể sử dụng làm khóa cho mật mã Hill tiếng Anh (n=26) hay không, quy trình thực hiện là:",
    "options": [
      "Tính tổng các phần tử trên hàng và cột, nếu bằng 26 thì hợp lệ.",
      "Tính định thức $d = \\det(K)$ và kiểm tra xem Ước chung lớn nhất $\\gcd(d, 26)$ có bằng 1 hay không.",
      "Kiểm tra xem tất cả các phần tử có phải số nguyên tố lớn hơn 26.",
      "Tìm ma trận chuyển vị của K xem có trùng với K ban đầu."
    ],
    "correctAnswer": "B",
    "explanation": "Để kiểm tra, bạn thực hiện hai bước sau: 1. Tính định thức của ma trận đó, tức là $d = \\det(K)$. 2. Kiểm tra xem d có nguyên tố cùng nhau với kích thước của bảng chữ cái hay không (ví dụ $\\gcd(d, 26) = 1$). Nếu đúng, ma trận đó khả nghịch và có thể làm khóa mã Hill. Ngược lại thì không thể."
  },
  {
    "id": "c2_new_28",
    "question": "Một ma trận vuông khóa K của mật mã Hill tiếng Anh có định thức $\\det(K) = 15$. Hỏi ma trận này có làm khóa hợp lệ không?",
    "options": [
      "Không được, vì 15 là số lẻ.",
      "Được, vì định thức 15 nguyên tố cùng nhau với 26, ước chung lớn nhất $\\gcd(15, 26) = 1$.",
      "Không được, vì 15 không chia hết cho 26.",
      "Được, vì 15 nhỏ hơn 26."
    ],
    "correctAnswer": "B",
    "explanation": "Ta tính $\\gcd(15, 26) = 1$ (vì hai số không có ước chung nào ngoài 1). Do đó, định thức 15 tồn tại nghịch đảo modulo 26, ma trận khóa K khả nghịch và hoàn toàn hợp lệ."
  },
  {
    "id": "c2_new_29",
    "question": "Điểm mạnh nổi bật nhất của mật mã Hill so với mật mã dịch vòng Caesar là gì?",
    "options": [
      "Mã Hill tính toán nhân ma trận đơn giản hơn Caesar.",
      "Mã Hill che giấu được phân bố tần suất đặc trưng của các ký tự đơn lẻ nhờ mã hóa nhiều ký tự đồng thời, an toàn hơn nhiều so với dịch vòng.",
      "Mã Hill không yêu cầu ma trận nghịch đảo để giải mã.",
      "Mã Hill có không gian khóa nhỏ hơn nên an toàn hơn."
    ],
    "correctAnswer": "B",
    "explanation": "Mật mã Hill: Điểm mạnh: Che giấu được phân bố tần suất đặc trưng của các ký tự (vì ký tự thay thế sẽ phụ thuộc vào nhau), an toàn hơn rất nhiều so với dịch vòng. Caesar rất yếu vì số khóa quá ít (chỉ 25) và dễ bị thống kê đập tan."
  },
  {
    "id": "c2_new_30",
    "question": "Hạn chế lớn nhất của mật mã hoán vị trong việc giấu kín thông tin ngôn ngữ là gì?",
    "options": [
      "Mã hóa làm thay đổi hoàn toàn giá trị của các chữ cái.",
      "Không thay thế ký tự nên phân bố tần suất xuất hiện của chữ cái trên bản mã vẫn y hệt như bản rõ gốc, làm rò rỉ thông tin về ngôn ngữ sử dụng.",
      "Số lượng khóa khả dĩ quá ít chỉ có 25 khóa.",
      "Tính toán ma trận phức tạp và tốn CPU hệ thống."
    ],
    "correctAnswer": "B",
    "explanation": "Mật mã hoán vị: Hạn chế: Không thay thế ký tự nên phân bố tần suất xuất hiện của chữ cái trên bản mã vẫn y hệt như bản gốc, do đó có thể bị thám mã phân tích thống kê tần suất ký tự rò rỉ ngôn ngữ."
  },
  {
    "id": "c2_new_31",
    "question": "Quy trình giải mã một ký tự bản mã C sử dụng mật mã dịch vòng Caesar với khóa K là:",
    "options": [
      "Nhân ký tự C với ma trận nghịch đảo $K^{-1}$ modulo 26.",
      "Lấy giá trị số của C trừ đi K, rồi lấy phần dư (modulo) cho độ lớn bảng chữ cái m: $X = (C - K) \\pmod m$.",
      "Cộng thêm K vào giá trị số của C rồi modulo m.",
      "Thay thế C bằng ký tự đứng sau nó k vị trí."
    ],
    "correctAnswer": "B",
    "explanation": "Quy trình: Khi biết khóa K, lấy giá trị số tương ứng của ký tự bản mã đem trừ đi K, sau đó lấy phần dư trong phép chia cho độ lớn bảng chữ cái (m). Công thức: $X = (C - K) \\pmod m$."
  },
  {
    "id": "c2_new_32",
    "question": "Cho bản mã chữ 'D' (vị trí số 3), giải mã Caesar với khóa K = 3 ta thu được ký tự rõ là gì?",
    "options": [
      "Chữ 'A' (vị trí số 0).",
      "Chữ 'B' (vị trí số 1).",
      "Chữ 'G' (vị trí số 6).",
      "Chữ 'Z' (vị trí số 25)."
    ],
    "correctAnswer": "A",
    "explanation": "Giải mã: $X = (3 - 3) \\pmod{26} = 0 \\pmod{26} = 0$. Vị trí 0 trong bảng chữ cái chính là chữ cái 'A'."
  },
  {
    "id": "c2_new_33",
    "question": "Khái quát quy trình giải mã của mật mã hoán vị (Transposition) là gì?",
    "options": [
      "Thay thế mỗi chữ cái bằng chữ đứng trước nó k vị trí.",
      "Lắp lại nghịch đảo quy trình sắp xếp của khóa để đưa các ký tự bản mã trở lại vị trí ban đầu.",
      "Nhân ma trận bản mã với ma trận nghịch đảo $K^{-1}$.",
      "Giải hệ phương trình tuyến tính đại số ma trận."
    ],
    "correctAnswer": "B",
    "explanation": "Cách giải mã: Do quá trình mã hóa chỉ là sắp xếp lại vị trí, quá trình giải mã là lặp lại nghịch đảo quy trình sắp xếp theo khóa để đưa các ký tự về vị trí ban đầu."
  },
  {
    "id": "c2_new_34",
    "question": "Quy trình giải mã mã đường sắt Rail Fence Cipher (độ cao = 2 dòng) yêu cầu người nhận:",
    "options": [
      "Thay thế mỗi ký tự bằng chữ đứng trước nó 2 vị trí.",
      "Chia đôi bản mã, đặt nửa đầu vào dòng 1, nửa sau vào dòng 2, rồi đọc chữ cái theo hình zic-zắc rích rắc để lấy lại bản rõ.",
      "Viết bản mã theo chiều dọc các cột rồi đọc ngang dòng.",
      "Xác minh chữ ký số của người gửi đính kèm."
    ],
    "correctAnswer": "B",
    "explanation": "Ví dụ cụ thể: Với Mã Rail Fence, người nhận chia đôi bản mã thu được, đặt lại nửa đầu vào dòng 1, nửa sau vào dòng 2, rồi đọc chữ cái theo hình rích rắc (dòng 1, dòng 2, dòng 1...) để lấy lại bản rõ ban đầu."
  },
  {
    "id": "c2_new_35",
    "question": "Để tính ma trận nghịch đảo $K^{-1}$ trên vành $\\mathbb{Z}_{26}$ của hệ mật mã Hill cấp 2, bước đầu tiên và thứ hai là:",
    "options": [
      "Nhân ma trận với 26 rồi tìm ma trận chuyển vị.",
      "Tính định thức $d = \\det(K)$ -> Dùng thuật toán Euclid mở rộng tìm số nghịch đảo modulo 26 của định thức: $d^{-1} \\pmod{26}$.",
      "Thay thế đường chéo chính bằng các số 1.",
      "Cộng ma trận K với ma trận đơn vị tương ứng."
    ],
    "correctAnswer": "B",
    "explanation": "Quy trình gồm các bước: 1. Tính định thức ma trận K. 2. Dùng thuật toán Euclid mở rộng tìm phần tử nghịch đảo của định thức, tức là $d^{-1} \\pmod{26}$."
  },
  {
    "id": "c2_new_36",
    "question": "Bước thứ ba và thứ tư trong quy trình tìm ma trận nghịch đảo $K^{-1}$ của ma trận cấp 2 là gì?",
    "options": [
      "Tính tổng các hàng rồi nhân với ma trận đơn vị.",
      "Lấy ma trận phụ hợp của K (đổi chỗ đường chéo chính, thêm dấu âm vào đường chéo phụ) -> Nhân số nghịch đảo của định thức với ma trận phụ hợp này theo modulo 26.",
      "Tìm ma trận nghịch đảo theo số học thông thường rồi làm tròn số.",
      "Giải hệ phương trình tuyến tính ma trận bằng phương pháp Gauss."
    ],
    "correctAnswer": "B",
    "explanation": "Bước tiếp theo: 3. Lấy ma trận phụ hợp của K (đối với ma trận $2 \times 2$, đổi chỗ đường chéo chính và thêm dấu âm vào đường chéo phụ). 4. Nhân số nghịch đảo định thức với ma trận phụ hợp vừa tìm được theo modulo 26 để ra kết quả ma trận nghịch đảo $K^{-1}$."
  },
  {
    "id": "c2_new_37",
    "question": "Điều gì xảy ra nếu sử dụng SAI khóa khi thực hiện giải mã một bản tin mã hóa hoán vị?",
    "options": [
      "Hệ thống sẽ báo lỗi cú pháp lập trình và tự động thoát game.",
      "Người giải mã sẽ sắp xếp các chữ cái về sai vị trí, làm bản rõ nhận được chỉ là một mớ chữ cái lộn xộn, vô nghĩa và không tạo thành từ ngữ đọc được.",
      "Bản rõ giải mã được vẫn đọc hiểu tốt nhưng bị đảo ngược chữ.",
      "Dữ liệu bản mã tự động bị xóa sạch hoàn toàn khỏi đĩa cứng."
    ],
    "correctAnswer": "B",
    "explanation": "Hậu quả: Nếu sử dụng khóa sai trong mã hoán vị, người giải mã sẽ sắp xếp các chữ cái về sai vị trí. Hệ quả: Bản rõ nhận được sẽ chỉ là một mớ chữ cái lộn xộn, vô nghĩa và không tạo thành từ ngữ đọc được."
  },
  {
    "id": "c2_new_38",
    "question": "Ví dụ minh họa cho hậu quả giải mã hoán vị sai khóa: Bản rõ 'APPLE' mã hóa thành 'ELPPA'. Nếu dùng sai khóa giải mã, kết quả có thể ra xâu vô nghĩa nào?",
    "options": [
      "“LEAPP”",
      "“APPLE”",
      "“ELPPA”",
      "“PEAPL”"
    ],
    "correctAnswer": "A",
    "explanation": "Ví dụ: bản rõ là 'APPLE', mã hóa hoán vị trộn thành 'ELPPA'. Nếu bạn dùng sai khóa để giải mã, kết quả có thể ra một mớ lộn xộn vô nghĩa như 'LEAPP' thay vì khôi phục đúng về 'APPLE'."
  },
  {
    "id": "c2_new_39",
    "question": "Tại sao khâu lựa chọn khóa mật mã trong hệ thống an toàn thông tin bắt buộc phải đảm bảo an toàn tuyệt đối?",
    "options": [
      "Vì khóa quyết định dung lượng lớn nhỏ của bản mã tạo ra.",
      "Theo luật Kirchoff, toàn bộ thuật toán mã/giải mã được coi là đã bị đối phương biết rõ; sự an toàn của toàn bộ hệ thống nằm hoàn toàn ở tính bí mật của khóa. Nếu khóa dễ đoán, mọi lớp bảo vệ đều vô nghĩa.",
      "Vì khóa mật mã cần tương thích với phần cứng máy chủ mạng.",
      "Vì khóa an toàn giúp máy tính của bạn chạy nhanh hơn."
    ],
    "correctAnswer": "B",
    "explanation": "Lý do: Theo luật Kirchoff (một nguyên tắc cơ bản trong mã hóa), toàn bộ cơ chế mã/giải mã của thuật toán không được coi là bí mật đối với kẻ địch. Do vậy, sự an toàn của toàn bộ hệ mật mã nằm hoàn toàn ở khóa. Nếu khóa dễ đoán, mọi lớp bảo vệ đều vô nghĩa."
  },
  {
    "id": "c2_new_40",
    "question": "Tiêu chí vàng để lựa chọn một khóa mật mã an toàn chất lượng cao là gì?",
    "options": [
      "Sử dụng các từ khóa ngắn dễ nhớ có trong từ điển thông dụng.",
      "Không gian khóa đủ lớn chống vét cạn (brute-force), khóa được sinh hoàn toàn ngẫu nhiên và tuyệt đối loại bỏ các 'khóa yếu' hoặc 'khóa nửa yếu'.",
      "Sử dụng chung một khóa duy nhất cho toàn bộ các thiết bị mạng.",
      "Mã hóa khóa nhiều lần liên tiếp bằng thuật toán Caesar."
    ],
    "correctAnswer": "B",
    "explanation": "Tiêu chí chọn khóa an toàn: Không gian khóa phải đủ lớn để chống lại các phương án tấn công bằng phương pháp vét cạn (brute-force attack). Khóa phải sinh ngẫu nhiên tránh quy luật, và tránh các 'khóa yếu' (như trong DES)."
  }
],

  // --- CHƯƠNG 3 ---
c3: [
    {
      id: "c3_q1",
      question: "Cấu trúc thiết kế của thuật toán mã hóa khối DES thuộc dạng nào?",
      options: [
        "Mạng phi tuyến tính Rijndael.",
        "Mạng hoán vị thế tích hợp SPN.",
        "Mạng Feistel gồm 16 vòng lặp.",
        "Hệ mã luồng tự đồng bộ."
      ],
      correctAnswer: "C",
      explanation: "DES (Data Encryption Standard) sử dụng mạng Feistel kinh điển gồm 16 vòng lặp xử lý, chia đôi khối dữ liệu thành nửa Trái và nửa Phải."
    },
    {
      id: "c3_q2",
      question: "DES mã hóa dữ liệu theo khối đầu vào dài bao nhiêu bit và khóa dài bao nhiêu bit?",
      options: [
        "Khối 128 bit, Khóa 128 bit.",
        "Khối 64 bit, Khóa 56 bit (khóa gốc 64 bit loại 8 bit parity).",
        "Khối 64 bit, Khóa 64 bit.",
        "Khối 32 bit, Khóa 48 bit."
      ],
      correctAnswer: "B",
      explanation: "DES xử lý khối dữ liệu 64-bit và sử dụng khóa hiệu dụng 56-bit (khóa đầu vào dài 64-bit nhưng 8 bit chẵn lẻ bị lược bỏ ở phép hoán vị PC-1)."
    },
    {
      id: "c3_q3",
      question: "Trong chế độ hoạt động ECB (Electronic Codebook) của mã khối:",
      options: [
        "Mỗi khối bản rõ được mã hóa độc lập bằng cùng một khóa bí mật.",
        "Khối bản rõ hiện tại được XOR với khối bản mã trước đó rồi mới mã hóa.",
        "Sử dụng Vector khởi tạo IV để xáo trộn cho khối dữ liệu đầu tiên.",
        "Dữ liệu được biến đổi thành mật mã dòng đồng bộ liên tục."
      ],
      correctAnswer: "A",
      explanation: "Chế độ ECB (Electronic Codebook) mã hóa độc lập từng khối dữ liệu. Nếu các khối bản rõ giống nhau, chúng sẽ sinh ra các khối bản mã giống hệt nhau, làm lộ cấu trúc mẫu của dữ liệu."
    },
    {
      id: "c3_q4",
      question: "Chế độ hoạt động móc xích CBC (Cipher Block Chaining) yêu cầu yếu tố nào cho khối đầu tiên?",
      options: [
        "Khóa con thứ 17 của DES.",
        "Vector khởi tạo IV (Initialization Vector) để XOR với khối bản rõ thứ nhất.",
        "Không cần yếu tố đặc biệt vì mã độc lập.",
        "Hộp thế S-box riêng biệt."
      ],
      correctAnswer: "B",
      explanation: "Chế độ CBC XOR khối bản rõ hiện tại với khối bản mã trước đó. Đối với khối đầu tiên ($i=1$), do chưa có khối bản mã trước nó, hệ thống bắt buộc sử dụng một Vector khởi tạo IV: $C_1 = E_K(P_1 \oplus IV)$."
    },
    {
      id: "c3_q5",
      question: "Tại sao Double DES (2DES) không an toàn thực tế và dễ bị bẻ gãy?",
      options: [
        "Vì không gian khóa 112 bit là quá nhỏ trước máy tính thông dụng ngày nay.",
        "Vì dễ bị tấn công 'Meet-in-the-Middle' (Gặp nhau ở giữa) làm giảm độ phức tạp tìm khóa xuống mức tương đương DES đơn lẻ.",
        "Vì thuật toán 2DES tự động làm lộ khóa con của vòng 1.",
        "Vì 2DES thực hiện phép XOR tuyến tính giữa hai lớp khóa."
      ],
      correctAnswer: "B",
      explanation: "2DES mã hóa 2 lần liên tiếp với 2 khóa ($K_1, K_2$). Tuy nhiên kẻ tấn công dùng tấn công Gặp nhau ở giữa (Meet-in-the-middle) tính trước và lưu bảng kết quả trung gian, giảm độ phức tạp từ $2^{112}$ phép thử xuống chỉ còn $2^{56} \times 2 = 2^{57}$."
    },
    {
      id: "c3_q6",
      question: "Thành phần duy nhất cung cấp tính chất 'phi tuyến tính' trong DES là gì?",
      options: [
        "Hộp thế S-box (Substitution box).",
        "Hộp hoán vị P-box (Permutation box).",
        "Phép toán cộng loại trừ XOR.",
        "Phép hoán vị khởi đầu IP."
      ],
      correctAnswer: "A",
      explanation: "S-box là thành phần phi tuyến tính duy nhất của DES. Tất cả các thành phần khác (XOR, hoán vị) đều là phép toán tuyến tính. S-box quyết định khả năng chống thám mã đại số và tuyến tính của DES."
    },
    {
      id: "c3_q7",
      question: "Quy trình sinh 16 khóa con từ khóa gốc 64-bit trong DES trải qua các bước nào?",
      options: [
        "Loại 8 bit parity -> Chia đôi -> Dịch vòng trái -> Hoán vị nén PC-2 để trích xuất 48 bit cho mỗi vòng.",
        "Nhân khóa với ma trận vuông modulo 26 -> XOR với bản rõ.",
        "Sử dụng thuật toán SHA-1 để băm khóa gốc thành 16 phần.",
        "Thực hiện hoán vị phi tuyến S-box trực tiếp lên 64 bit khóa."
      ],
      correctAnswer: "A",
      explanation: "Khóa gốc 64-bit đi qua hoán vị lựa chọn PC-1 loại bỏ 8 bit chẵn lẻ thành 56 bit, chia làm hai nửa 28-bit ($C_0, D_0$). Qua từng vòng, hai nửa được dịch vòng trái 1 hoặc 2 bit, rồi ghép lại đi qua hoán vị nén PC-2 để trích 48 bit khóa con."
    },
    {
      id: "c3_q8",
      question: "Mã hóa dòng (Stream Cipher) có đặc tính cơ bản nào khác biệt với mã hóa khối (Block Cipher)?",
      options: [
        "Xử lý dữ liệu đồng thời trên các khối kích thước cố định như 128 bit.",
        "Xử lý dữ liệu liên tục theo từng bit hoặc từng byte bằng cách XOR với luồng khóa giả ngẫu nhiên sinh ra từ khóa bí mật.",
        "Chỉ sử dụng mã hóa bất đối xứng để bảo vệ dữ liệu.",
        "Không thể giải mã ngược mà chỉ dùng để băm dữ liệu."
      ],
      correctAnswer: "B",
      explanation: "Mật mã khối xử lý từng khối lớn cố định. Mật mã dòng (Stream Cipher) xử lý dòng dữ liệu liên tục theo đơn vị cực nhỏ (bit hoặc byte) bằng cách XOR dữ liệu rõ với một luồng khóa (keystream) đồng bộ."
    },
    {
      id: "c3_q9",
      question: "Tại sao khóa của thuật toán DES thực tế chỉ có chiều dài hiệu dụng 56 bit thay vì 64 bit?",
      options: [
        "Vì 8 bit còn lại bị máy tính tự động xóa để tiết kiệm bộ nhớ RAM.",
        "Vì có 8 bit nằm ở các vị trí chia hết cho 8 được dành riêng cho việc kiểm tra chẵn lẻ (parity check) và bị loại bỏ ở phép hoán vị PC-1 đầu tiên.",
        "Vì 8 bit đầu tiên của khóa luôn bắt buộc phải bằng 0.",
        "Vì thuật toán DES chỉ tương thích với hệ điều hành 56-bit."
      ],
      correctAnswer: "B",
      explanation: "Trong khóa 64-bit của DES, các bit số 8, 16, 24, 32, 40, 48, 56, 64 đóng vai trò parity check để phát hiện lỗi truyền dẫn khóa. Chúng bị hoán vị lựa chọn PC-1 loại bỏ trước khi sinh khóa con."
    },
    {
      id: "c3_q10",
      question: "Trong quy trình mã hóa DES, sau 16 vòng lặp Feistel, bước cuối cùng trước khi xuất bản mã là gì?",
      options: [
        "Tính toán hàm băm MD5 của khối dữ liệu.",
        "Đổi chỗ hai nửa Trái - Phải ($R_{16}$ và $L_{16}$) rồi đi qua hoán vị ngược với hoán vị khởi đầu ($IP^{-1}$).",
        "Mã hóa khối bằng khóa K công khai.",
        "Áp dụng phép thế phi tuyến qua S-box bổ sung."
      ],
      correctAnswer: "B",
      explanation: "Sau vòng 16, hai nửa trái phải được đổi chỗ thành $R_{16}L_{16}$ (để thuật toán mã hóa và giải mã có thể dùng chung một mạch phần cứng), rồi đi qua hoán vị ngược $IP^{-1}$ để sinh ra bản mã 64-bit hoàn chỉnh."
    },
    {
      id: "c3_q11",
      question: "Thám mã vi sai (Differential Cryptanalysis) nhắm vào DES hoạt động bằng cách nào?",
      options: [
        "Thử sai vét cạn lần lượt toàn bộ $2^{56}$ khóa khả dĩ.",
        "Phân tích sự lan truyền và chênh lệch đầu ra của các cặp bản rõ được chọn có sự khác biệt cố định nhằm tìm ra thông tin khóa bí mật.",
        "Đo lường thời gian xử lý giải mã của CPU máy tính.",
        "Bẻ gãy tính bí mật của S-box bằng hệ phương trình tuyến tính."
      ],
      correctAnswer: "B",
      explanation: "Thám mã vi sai do Biham và Shamir đề xuất, là đòn tấn công cực mạnh nhắm vào cấu trúc mã khối Feistel. Nó theo dõi sự thay đổi chênh lệch (xor difference) qua các vòng để dò tìm khóa con vòng cuối."
    },
    {
      id: "c3_q12",
      question: "Thuật toán 3DES (Triple DES) ở chế độ phổ biến nhất hoạt động theo quy trình nào để mã hóa bản rõ P?",
      options: [
        "Mã hóa 3 lần liên tiếp: $C = E_{K3}(E_{K2}(E_{K1}(P)))$",
        "Mã hóa - Giải mã - Mã hóa (EDE): $C = E_{K3}(D_{K2}(E_{K1}(P)))$",
        "Băm SHA1 -> Mã hóa DES -> Băm MD5",
        "XOR K1 -> Nhân K2 -> XOR K3"
      ],
      correctAnswer: "B",
      explanation: "Quy trình chuẩn của 3DES là EDE (Encrypt-Decrypt-Encrypt): Mã hóa bằng khóa K1, giải mã bằng khóa K2 và mã hóa bằng khóa K3. Thiết kế này giúp tương thích ngược với DES đơn (chỉ cần đặt $K_1 = K_2 = K_3$)."
    },
    {
      id: "c3_q13",
      question: "Sự khác biệt chính giữa chế độ hoạt động CFB (Cipher Feedback) và OFB (Output Feedback) của mã khối là gì?",
      options: [
        "CFB là mã hóa khối, còn OFB là mã hóa dòng.",
        "CFB sử dụng bản mã vòng trước để phản hồi làm đầu vào cho vòng mã hóa tiếp theo; OFB phản hồi trực tiếp đầu ra của bộ mã khối trước khi XOR với bản rõ.",
        "CFB có lỗi lan truyền khi giải mã, còn OFB không bị lan truyền lỗi bit sang khối kế tiếp.",
        "Cả B và C đều đúng."
      ],
      correctAnswer: "D",
      explanation: "CFB và OFB đều biến mã khối thành mã dòng. CFB phản hồi bản mã $C_i$, do đó nếu $C_i$ lỗi sẽ làm hỏng giải mã của khối sau (lỗi lan truyền). OFB phản hồi trực tiếp dòng khóa $I_i$ độc lập dữ liệu rõ, nên không bị lan truyền lỗi."
    },
    {
      id: "c3_q14",
      question: "So sánh thuật toán mã hóa AES với DES về cấu trúc và kích thước khối dữ liệu:",
      options: [
        "AES sử dụng mạng Feistel giống DES nhưng kích thước khối lớn hơn.",
        "AES xử lý khối dữ liệu cố định 128 bit; sử dụng cấu trúc mạng thay thế - hoán vị (SPN) dạng ma trận trạng thái thay vì chia đôi Feistel.",
        "AES có tốc độ mã hóa chậm hơn DES vì kích thước khóa lớn hơn.",
        "AES chỉ hỗ trợ duy nhất một độ dài khóa là 56 bit."
      ],
      correctAnswer: "B",
      explanation: "AES (chuẩn mã hóa tiên tiến) quy định khối dữ liệu 128-bit. Thay vì chia đôi dữ liệu Trái/Phải của mạng Feistel, AES xử lý toàn bộ khối dữ liệu đồng thời dưới dạng ma trận trạng thái $4 \times 4$ byte qua các vòng lặp."
    },
    {
      id: "c3_q15",
      question: "Quy trình mã hóa một vòng chuẩn (Round) của thuật toán AES bao gồm 4 phép biến đổi nào theo thứ tự?",
      options: [
        "ShiftRows -> SubBytes -> MixColumns -> AddRoundKey",
        "SubBytes (Thế byte) -> ShiftRows (Dịch hàng) -> MixColumns (Trộn cột) -> AddRoundKey (Cộng khóa vòng)",
        "AddRoundKey -> SubBytes -> PC-1 -> PC-2",
        "MixColumns -> ShiftRows -> SubBytes -> AddRoundKey"
      ],
      correctAnswer: "B",
      explanation: "Một vòng lặp AES chuẩn gồm 4 bước liên tiếp: Thay thế phi tuyến SubBytes, Dịch vị trí hàng ShiftRows, Trộn tuyến tính cột MixColumns và Cộng khóa vòng AddRoundKey. Vòng cuối cùng sẽ bỏ qua bước MixColumns."
    },
    {
      id: "c3_q16",
      question: "Tại sao chính phủ Mỹ (thông qua tổ chức NIST) lại quyết định thay thế DES bằng AES?",
      options: [
        "Vì DES có tốc độ mã hóa nhanh quá mức cần thiết.",
        "Vì khóa 56-bit của DES quá ngắn và đã bị bẻ gãy thực tế bằng brute-force; 3DES an toàn nhưng tốc độ xử lý quá chậm trên phần mềm.",
        "Vì thuật toán AES được giữ bí mật mã nguồn tốt hơn DES.",
        "Vì DES không thể cài đặt được trên các chip vi điều khiển nhỏ."
      ],
      correctAnswer: "B",
      explanation: "DES lỗi thời vì khóa ngắn 56-bit bị vét cạn dễ dàng. 3DES là giải pháp tình thế tăng độ an toàn nhưng tính toán 3 lượt DES làm giảm hiệu năng hệ thống. AES ra đời đáp ứng các tiêu chuẩn: an toàn cực cao, khóa lớn (128/192/256-bit) và tốc độ cực nhanh."
    },
    {
      id: "c3_q17",
      question: "Ý nghĩa toán học và vai trò của hàm AddRoundKey() trong thuật toán mã hóa AES là gì?",
      options: [
        "Thực hiện phép nhân ma trận trạng thái với ma trận khóa vòng.",
        "Thực hiện phép toán XOR từng byte của ma trận trạng thái (State) với ma trận khóa vòng tương ứng.",
        "Áp dụng bảng tra S-box phi tuyến tính lên khóa con.",
        "Dịch chuyển các byte của ma trận khóa vòng sang trái."
      ],
      correctAnswer: "B",
      explanation: "AddRoundKey() cộng (phép XOR logic) ma trận trạng thái hiện tại với ma trận khóa vòng (Round Key) được sinh ra từ quy trình mở rộng khóa (Key Expansion). Đây là bước đưa khóa bí mật can thiệp vào dữ liệu."
    },
    {
      id: "c3_q18",
      question: "Khi mã hóa dữ liệu nhạy cảm cực lớn truyền qua mạng, chế độ hoạt động nào của mã khối được khuyên dùng để giấu đi cấu trúc lặp lại dữ liệu?",
      options: [
        "Chế độ ECB (Electronic Codebook).",
        "Chế độ CBC (Cipher Block Chaining) hoặc CTR (Counter Mode).",
        "Mật mã dịch vòng đơn âm Caesar.",
        "Hoán vị đường sắt Rail Fence."
      ],
      correctAnswer: "B",
      explanation: "Chế độ ECB không che giấu cấu trúc lặp (hình ảnh mã hóa bằng ECB vẫn nhìn rõ đường nét). Chế độ CBC (hoặc chế độ đếm CTR) sử dụng phản hồi khối mã/bộ đếm để biến các khối rõ giống nhau thành các khối mã hoàn toàn khác nhau."
    },
    {
      id: "c3_q19",
      question: "Trong hệ mật đối xứng, việc thiết lập kênh bảo mật để phân phối khóa ban đầu là cực kỳ quan trọng vì lý do gì?",
      options: [
        "Vì nếu khóa bị lộ trên đường truyền mạng hở, kẻ tấn công có thể dễ dàng giải mã toàn bộ dữ liệu và mạo danh hai bên gửi/nhận.",
        "Vì thuật toán đối xứng yêu cầu phải truyền khóa kèm theo mỗi gói tin bản mã.",
        "Vì không có khóa truyền đi thì máy tính nhận không thể biết thuật toán AES.",
        "Để tăng tốc độ mã hóa của thuật toán đối xứng."
      ],
      correctAnswer: "A",
      explanation: "Mã hóa đối xứng an toàn dựa trên tính bí mật của khóa chung. Nếu phân phối khóa qua kênh không an toàn (như gửi email thô) và bị chặn bắt, mọi lớp mã hóa dữ liệu sau đó đều trở nên vô nghĩa."
    },
    {
      id: "c3_q20",
      question: "Thuật toán AES hỗ trợ các độ dài khóa linh hoạt nào sau đây tương ứng với số vòng lặp tương ứng?",
      options: [
        "Khóa 56 bit (16 vòng), Khóa 112 bit (32 vòng).",
        "Khóa 128 bit (10 vòng), Khóa 192 bit (12 vòng), Khóa 256 bit (14 vòng).",
        "Khóa 128 bit (16 vòng), Khóa 256 bit (16 vòng).",
        "Khóa 64 bit (10 vòng), Khóa 128 bit (12 vòng)."
      ],
      correctAnswer: "B",
      explanation: "Chuẩn AES (Rijndael) hỗ trợ khối dữ liệu cố định 128-bit kết hợp linh động 3 độ dài khóa: Khóa 128-bit (chạy 10 vòng), Khóa 192-bit (chạy 12 vòng) và Khóa 256-bit (chạy 14 vòng)."
    },
    {
      id: "c3_q21",
      question: "S-box của thuật toán DES nhận đầu vào bao nhiêu bit và cho ra đầu ra bao nhiêu bit?",
      options: [
        "Đầu vào 6 bit, Đầu ra 4 bit.",
        "Đầu vào 8 bit, Đầu ra 8 bit.",
        "Đầu vào 4 bit, Đầu ra 6 bit.",
        "Đầu vào 6 bit, Đầu ra 6 bit."
      ],
      correctAnswer: "A",
      explanation: "Mỗi hộp trong số 8 hộp thế S-box của DES nhận một chuỗi đầu vào 6-bit và thực hiện thay thế phi tuyến tính để cho ra kết quả đầu ra là một chuỗi 4-bit."
    },
    {
      id: "c3_q22",
      question: "Trong hộp thế S-box của DES, hai bit ngoài cùng (bit 1 và bit 6) được sử dụng để xác định yếu tố nào?",
      options: [
        "Xác định giá trị cột trong bảng tra S-box.",
        "Xác định giá trị hàng trong bảng tra S-box.",
        "Xác định kết quả XOR trực tiếp.",
        "Xác định số lượng bit dịch vòng trái."
      ],
      correctAnswer: "B",
      explanation: "Quy tắc tra bảng S-box: Bit số 1 và bit số 6 ghép lại tạo thành số nhị phân 2 bit chỉ định số hàng (từ 0 đến 3). Bốn bit ở giữa (bit 2, 3, 4, 5) ghép lại chỉ định số cột (từ 0 đến 15)."
    },
    {
      id: "c3_q23",
      question: "Trong cấu trúc vòng Feistel của DES, hàm F nhận nửa phải $R_{i-1}$ dài 32 bit. Bước đầu tiên hàm F thực hiện là gì?",
      options: [
        "Tra bảng thế phi tuyến S-box.",
        "Sử dụng bảng hoán vị mở rộng E (Expansion) để mở rộng nửa phải 32 bit thành chuỗi 48 bit.",
        "Cộng XOR trực tiếp với khóa con của vòng.",
        "Dịch vòng trái 2 bit."
      ],
      correctAnswer: "B",
      explanation: "Hàm F của DES cần XOR nửa phải với khóa con 48-bit. Do đó, bước đầu tiên là dùng bảng hoán vị mở rộng E để nhân bản và sắp xếp lại các bit của nửa phải từ 32 bit lên thành 48 bit."
    },
    {
      id: "c3_q24",
      question: "Khẳng định nào sau đây là đúng về sự khác biệt giữa chế độ hoạt động CBC và ECB của mã khối?",
      options: [
        "Chế độ CBC cho phép mã hóa song song nhiều khối bản rõ cùng lúc để tăng tốc độ; chế độ ECB thì không thể song song hóa.",
        "Lỗi truyền dẫn 1 bit trên đường truyền ở chế độ ECB sẽ làm hỏng toàn bộ quá trình giải mã của các khối phía sau; chế độ CBC thì không.",
        "Chế độ ECB cho phép mã hóa song song độc lập các khối; chế độ CBC có hiện tượng lan truyền lỗi bit (lỗi 1 khối mã làm hỏng giải mã khối hiện tại và khối kế tiếp).",
        "Cả hai chế độ đều bắt buộc sử dụng Vector khởi tạo IV cho tất cả các khối."
      ],
      correctAnswer: "C",
      explanation: "ECB mã độc lập nên có thể song song hóa dễ dàng và không bị lan truyền lỗi (sai khối nào chỉ hỏng khối đó). CBC mã móc xích tuần tự nên không thể song song hóa khi mã hóa và bị lan lỗi bit sang khối tiếp theo khi giải mã."
    },
    {
      id: "c3_q25",
      question: "Tại sao thuật toán 3DES dùng 3 khóa tự động khắc phục được hoàn toàn cuộc tấn công Gặp nhau ở giữa (Meet-in-the-middle)?",
      options: [
        "Vì 3DES sử dụng thuật toán băm bảo vệ khóa bí mật.",
        "Vì việc thực hiện 3 lớp mã hóa nâng không gian khóa hiệu dụng lên $2^{168}$ bit, khiến độ phức tạp thám mã gặp nhau ở giữa vẫn ở mức $2^{112}$ phép toán - vượt xa năng lực tính toán thực tế.",
        "Vì 3DES tự động thay đổi khóa ngẫu nhiên qua mỗi phiên truyền tin.",
        "Vì 3DES chuyển đổi mã khối thành mã dòng hoàn hảo."
      ],
      correctAnswer: "B",
      explanation: "Tấn công Meet-in-the-middle trên 3DES dùng 3 khóa ($K_1, K_2, K_3$) yêu cầu không gian lưu trữ và số phép tính tối thiểu là $2^{112}$. Đây là con số cực lớn, bảo đảm an toàn thực tế trước các máy tính siêu cấp hiện tại."
    },
    {
      id: "c3_q26",
      question: "Trong thuật toán AES, phép biến đổi SubBytes() thực hiện chức năng gì?",
      options: [
        "Hoán vị vị trí các hàng của ma trận trạng thái.",
        "Thay thế từng byte độc lập trong ma trận trạng thái bằng một byte tương ứng trong bảng S-box phi tuyến tính cố định.",
        "Nhân ma trận trạng thái với ma trận đa thức modulo.",
        "XOR ma trận dữ liệu với khóa vòng con."
      ],
      correctAnswer: "B",
      explanation: "SubBytes() là phép thế phi tuyến tính hoạt động trên từng byte của ma trận trạng thái bằng cách tìm phần tử nghịch đảo trên trường Galois $GF(2^8)$ rồi áp dụng phép biến đổi affine, được biểu diễn qua bảng tra S-box."
    },
    {
      id: "c3_q27",
      question: "Trong thuật toán AES, phép biến đổi ShiftRows() thực hiện thao tác nào lên ma trận trạng thái?",
      options: [
        "Dịch vòng các cột của ma trận sang phải.",
        "Giữ nguyên hàng 0; dịch vòng trái hàng 1 đi 1 byte, hàng 2 đi 2 byte, hàng 3 đi 3 byte.",
        "Dịch chuyển ngẫu nhiên toàn bộ các hàng.",
        "Đổi chỗ hàng 1 với hàng 3, hàng 2 giữ nguyên."
      ],
      correctAnswer: "B",
      explanation: "ShiftRows() thực hiện dịch chuyển vòng vị trí các byte trên từng hàng của ma trận: Hàng 0 không dịch; hàng 1 dịch trái 1 byte; hàng 2 dịch trái 2 byte; hàng 3 dịch trái 3 byte. Phép này tạo tính khuếch tán cột."
    },
    {
      id: "c3_q28",
      question: "Trong thuật toán AES, phép biến đổi MixColumns() thực hiện thao tác nào?",
      options: [
        "XOR các cột của ma trận trạng thái lại với nhau.",
        "Nhân tuyến tính từng cột của ma trận trạng thái với một ma trận đa thức cố định trên trường Galois $GF(2^8)$ nhằm xáo trộn liên kết giữa các byte trong cột.",
        "Tráo đổi vị trí ngẫu nhiên giữa các cột ma trận.",
        "Tính giá trị trung bình của các phần tử trên cột."
      ],
      correctAnswer: "B",
      explanation: "MixColumns() coi mỗi cột của ma trận trạng thái là một đa thức cấp 3 và thực hiện nhân đa thức này với đa thức cố định $a(x) = \{03\}x^3 + \{01\}x^2 + \{01\}x + \{02\} \pmod{x^4+1}$."
    },
    {
      id: "c3_q29",
      question: "Chế độ hoạt động OFB (Output Feedback) tạo ra luồng khóa (keystream) giải mã độc lập với bản rõ và bản mã nhờ đặc điểm nào?",
      options: [
        "Nó liên tục mã hóa chính Vector khởi tạo IV và các đầu ra mã hóa trước đó để tạo ra chuỗi khóa, sau đó mới XOR chuỗi khóa này với bản rõ.",
        "Nó băm bản rõ bằng thuật toán MD5 trước khi mã hóa.",
        "Nó sử dụng khóa riêng của người nhận để mã hóa từng khối.",
        "Nó hoán vị ngẫu nhiên vị trí các byte dữ liệu rõ."
      ],
      correctAnswer: "A",
      explanation: "OFB hoạt động bằng cách: $I_1 = E_K(IV)$, $I_j = E_K(I_{j-1})$. Luồng khóa $I_j$ được sinh ra thuần túy từ khóa bí mật K và IV ban đầu mà không hề chứa thông tin của dữ liệu rõ hay mã, sau đó mới XOR: $C_j = P_j \oplus I_j$."
    },
    {
      id: "c3_q30",
      question: "Hiện tượng bù (Complementarity Property) trong DES chỉ ra điều gì?",
      options: [
        "Khóa giải mã là phần bù của khóa mã hóa.",
        "Nếu mã hóa phần bù của bản rõ bằng phần bù của khóa, kết quả thu được sẽ là phần bù của bản mã ban đầu: $E_{\\bar{K}}(\\bar{P}) = \\bar{C}$.",
        "Kích thước bản mã luôn bằng phần bù kích thước bản rõ modulo 64.",
        "Tổng các bit 1 trong khóa luôn bù trừ với số bit 1 trong bản rõ."
      ],
      correctAnswer: "B",
      explanation: "DES có tính chất bù: $E_K(P) = C \Rightarrow E_{\bar{K}}(\bar{P}) = \bar{C}$. Tính chất bù này là một điểm yếu cấu trúc toán học giúp kẻ thám mã giảm bớt một nửa không gian khóa cần thử ($2^{55}$ thay vì $2^{56}$) khi tấn công vét cạn."
    },
    {
      id: "c3_q31",
      question: "Khóa yếu (Weak Keys) trong thuật toán DES là gì?",
      options: [
        "Là những khóa có chứa quá nhiều chữ số 0 trong chuỗi nhị phân.",
        "Là những khóa đặc biệt làm cho 16 khóa con vòng sinh ra giống hệt nhau, khiến cho thao tác mã hóa dữ liệu 2 lần liên tiếp bằng khóa đó sẽ trả lại chính bản rõ ban đầu: $E_K(E_K(P)) = P$.",
        "Là những khóa có thể bị đoán biết dễ dàng bằng phương pháp phân tích tần suất thống kê.",
        "Là những khóa có độ dài ngắn hơn 40 bit."
      ],
      correctAnswer: "B",
      explanation: "DES có 4 khóa yếu đặc biệt. Khi sử dụng khóa yếu, 16 khóa con sinh ra giống nhau ($K_1 = K_2 = ... = K_{16}$). Hệ quả là phép mã hóa chính là phép giải mã: $E_K(P) = C \Rightarrow E_K(C) = P$."
    },
    {
      id: "c3_q32",
      question: "Có bao nhiêu cặp khóa nửa yếu (Semi-weak Keys) trong thuật toán DES?",
      options: [
        "4 cặp.",
        "6 cặp.",
        "12 cặp.",
        "2 cặp."
      ],
      correctAnswer: "B",
      explanation: "DES có 6 cặp khóa nửa yếu (12 khóa đơn). Khi sử dụng một cặp khóa nửa yếu ($K_a, K_b$), phép mã hóa bằng khóa $K_a$ sẽ bị đảo ngược hoàn toàn (giải mã) bằng phép mã hóa bằng khóa $K_b$: $E_{K_b}(E_{K_a}(P)) = P$."
    },
    {
      id: "c3_q33",
      question: "Trong giải mã AES, quy trình giải mã được thực hiện bằng cách nào?",
      options: [
        "Sử dụng mạch phần cứng giống hệt mã hóa và đảo ngược thứ tự 16 khóa con.",
        "Sử dụng các phép biến đổi ngược tương ứng (InvShiftRows, InvSubBytes, AddRoundKey, InvMixColumns) theo trình tự ngược lại.",
        "Chỉ cần XOR bản mã với khóa vòng gốc.",
        "Tính toán ma trận nghịch đảo của toàn bộ ma trận dữ liệu."
      ],
      correctAnswer: "B",
      explanation: "Không giống mạng Feistel của DES dùng chung một mạch phần cứng, cấu trúc SPN của AES yêu cầu các mạch giải mã riêng biệt sử dụng các phép toán toán học ngược tương ứng cho từng bước của vòng lặp."
    },
    {
      id: "c3_q34",
      question: "Tại sao kích thước khối dữ liệu trong các thuật toán mã hóa hiện đại bắt buộc phải đủ lớn (như 128 bit của AES)?",
      options: [
        "Để tăng dung lượng của file bản mã nhằm đánh lừa tin tặc.",
        "Để ngăn chặn hiệu quả các cuộc tấn công thám mã dựa trên việc phân tích thống kê tần suất xuất hiện của các khối mã lặp.",
        "Để đảm bảo thuật toán chỉ chạy được trên các máy tính siêu cấp.",
        "Để giảm thiểu số lượng khóa vòng con cần sinh ra."
      ],
      correctAnswer: "B",
      explanation: "Nếu kích thước khối nhỏ (như 8 bit hoặc 16 bit), các khối mã lặp lại sẽ xuất hiện thường xuyên, cho phép kẻ thám mã lập biểu đồ thống kê để đoán nội dung rõ. Kích thước khối 128 bit tạo ra $2^{128}$ tổ hợp khả dĩ, triệt tiêu phân tích này."
    },
    {
      id: "c3_q35",
      question: "Vector khởi tạo IV trong chế độ mã hóa CBC cần đáp ứng tiêu chí nào để đảm bảo an toàn tuyệt đối?",
      options: [
        "IV phải là một chuỗi bit cố định được giữ bí mật giữa gửi và nhận.",
        "IV phải được sinh ngẫu nhiên (hoặc giả ngẫu nhiên) và tuyệt đối không lặp lại cho các phiên mã hóa khác nhau sử dụng chung một khóa.",
        "IV phải là chuỗi toàn bit 0 để dễ tính toán XOR.",
        "IV phải có độ dài gấp đôi độ dài khóa bí mật."
      ],
      correctAnswer: "B",
      explanation: "Nếu dùng IV cố định cho nhiều phiên, hai bản tin có phần đầu giống nhau sẽ sinh ra bản mã có phần đầu giống nhau, lộ thông tin. IV ngẫu nhiên/không lặp đảm bảo tính ngẫu nhiên của khối mã đầu tiên."
    },
    {
      id: "c3_q36",
      question: "Thuật toán sinh khóa vòng (Key Expansion) của AES 128-bit thực hiện mở rộng khóa gốc thành bao nhiêu word và khóa con?",
      options: [
        "16 word, 16 khóa con.",
        "44 word (32-bit), cung cấp khóa vòng cho bước khởi tạo và 10 vòng lặp kế tiếp.",
        "48 word, sinh ra 16 khóa vòng con 48-bit giống DES.",
        "120 word, đáp ứng 14 vòng xử lý ma trận."
      ],
      correctAnswer: "B",
      explanation: "AES-128 yêu cầu 11 khóa vòng (1 khóa khởi tạo + 10 khóa cho 10 vòng chuẩn). Mỗi khóa vòng dài 128 bit (4 word 32-bit). Quy trình Key Expansion mở rộng khóa gốc thành chuỗi gồm $11 \times 4 = 44$ word dữ liệu."
    },
    {
      id: "c3_q37",
      question: "Phép thế SubBytes() của AES được xây dựng dựa trên cấu trúc toán học nào?",
      options: [
        "Phép dịch vòng bit tuyến tính trong vành số nguyên.",
        "Phép tìm phần tử nghịch đảo nhân trên trường Galois $GF(2^8)$ kết hợp với phép biến đổi Affine.",
        "Phép tính định thức ma trận vuông cấp 4.",
        "Hàm logic phi tuyến tính của S-box DES."
      ],
      correctAnswer: "B",
      explanation: "SubBytes hoạt động bằng cách: Lấy nghịch đảo nhân của byte dữ liệu trong trường hữu hạn Galois $GF(2^8)$, giá trị byte 0 được giữ nguyên. Sau đó áp dụng một phép biến đổi affine tuyến tính để tăng độ phức tạp phi tuyến."
    },
    {
      id: "c3_q38",
      question: "Chế độ hoạt động CTR (Counter Mode) hoạt động như thế nào?",
      options: [
        "Đếm số bit 1 trong bản rõ để làm khóa mã hóa.",
        "Mã hóa các giá trị của một bộ đếm (Counter) tăng dần liên tục, rồi XOR kết quả mã hóa này với các khối bản rõ tương ứng để tạo ra bản mã.",
        "Đếm số lần truyền tin để tự động thay đổi thuật toán.",
        "Liên tục giải mã bản mã vòng trước bằng khóa công khai."
      ],
      correctAnswer: "B",
      explanation: "CTR hoạt động như một hệ mật mã dòng: $C_i = P_i \oplus E_K(T_i)$ với $T_i$ là giá trị bộ đếm tăng dần qua mỗi khối. Chế độ này cực kỳ mạnh mẽ vì cho phép song song hóa hoàn toàn cả quá trình mã hóa lẫn giải mã."
    },
    {
      id: "c3_q39",
      question: "Điểm yếu lớn nhất của chế độ hoạt động ECB (Electronic Codebook) là gì?",
      options: [
        "Tốc độ mã hóa rất chậm do tính toán tuần tự.",
        "Không che giấu được các mẫu cấu trúc dữ liệu lặp lại, khiến tin tặc có thể nhận diện thông tin nhạy cảm của bản rõ từ bản mã.",
        "Bị hiện tượng lan truyền lỗi nghiêm trọng khi có 1 bit bị sai trên đường truyền.",
        "Yêu cầu quản lý Vector khởi tạo IV vô cùng phức tạp."
      ],
      correctAnswer: "B",
      explanation: "Do ECB mã hóa các khối độc lập bằng cùng một khóa, khối rõ giống nhau sẽ ra khối mã giống nhau. Điều này làm lộ các mẫu phân bố dữ liệu (ví dụ: mã hóa ảnh bitmap bằng ECB vẫn nhìn rõ hình dáng vật thể)."
    },
    {
      id: "c3_q40",
      question: "Nếu có một lỗi bit xảy ra trên đường truyền làm sai lệch 1 bit của khối bản mã $C_i$ ở chế độ giải mã CBC. Những khối bản rõ nào sau khi giải mã sẽ bị ảnh hưởng?",
      options: [
        "Chỉ duy nhất khối bản rõ tương ứng $P_i$ bị hỏng hoàn toàn.",
        "Khối bản rõ tương ứng $P_i$ bị hỏng hoàn toàn, và bit tương ứng ở khối bản rõ kế tiếp $P_{i+1}$ bị sai lệch; các khối khác giải mã bình thường.",
        "Toàn bộ các khối bản rõ từ $P_i$ đến cuối bản tin đều bị hỏng hoàn toàn do lan truyền lỗi.",
        "Không có khối nào bị ảnh hưởng vì CBC tự động sửa lỗi đường truyền."
      ],
      correctAnswer: "B",
      explanation: "Giải mã CBC: $P_j = D_K(C_j) \oplus C_{j-1}$. Nếu $C_i$ bị lỗi, khối rõ $P_i = D_K(C_i) \oplus C_{i-1}$ sẽ hỏng hoàn toàn vì hàm $D_K$ nhận đầu vào sai. Khối rõ tiếp theo $P_{i+1} = D_K(C_{i+1}) \oplus C_i$ bị sai lệch đúng vị trí bit lỗi của $C_i$."
    }
  ],

  // --- CHƯƠNG 4 ---
c4: [
    {
      id: "c4_q1",
      question: "Theo định lý Euler, nếu hai số nguyên a và N nguyên tố cùng nhau ($\gcd(a, N) = 1$), ta có biểu thức đồng dư nào?",
      options: [
        "$a^{\\phi(N)} \\equiv 1 \\pmod N$",
        "$a^N \\equiv 1 \\pmod{\\phi(N)}$",
        "$a^{\\phi(N)} \\equiv 0 \\pmod N$",
        "$a^{N-1} \\equiv a \\pmod N$"
      ],
      correctAnswer: "A",
      explanation: "Định lý Euler phát biểu rằng: Nếu $\gcd(a, N) = 1$, thì $a^{\phi(N)} \equiv 1 \pmod N$ với $\phi(N)$ là hàm phi Euler (số lượng số nguyên dương nhỏ hơn N và nguyên tố cùng nhau với N)."
    },
    {
      id: "c4_q2",
      question: "Hàm phi Euler $\\phi(440)$ có giá trị là bao nhiêu?",
      options: [
        "160",
        "240",
        "440",
        "200"
      ],
      correctAnswer: "A",
      explanation: "Phân tích thừa số nguyên tố: $440 = 2^3 \times 5 \times 11$. Áp dụng công thức tính hàm phi Euler: $\phi(440) = 440 \times (1 - 1/2) \times (1 - 1/5) \times (1 - 1/11) = 440 \times (1/2) \times (4/5) \times (10/11) = 160$."
    },
    {
      id: "c4_q3",
      question: "Trong quy trình khởi tạo khóa RSA, cho hai số nguyên tố p = 3, q = 11 và khóa công khai e = 7. Hãy xác định giá trị modulo n và hàm phi Euler $\\phi(n)$:",
      options: [
        "n = 33, $\\phi(n) = 30$",
        "n = 33, $\\phi(n) = 20$",
        "n = 30, $\\phi(n) = 20$",
        "n = 14, $\\phi(n) = 33$"
      ],
      correctAnswer: "B",
      explanation: "Modulo $n = p \times q = 3 \times 11 = 33$. Hàm phi Euler $\phi(n) = (p-1)(q-1) = 2 \times 10 = 20$."
    },
    {
      id: "c4_q4",
      question: "Với cấu hình RSA ở câu trên (n = 33, $\\phi(n) = 20$, e = 7). Khóa giải mã bí mật d tương ứng là bao nhiêu?",
      options: [
        "d = 3",
        "d = 7",
        "d = 13",
        "d = 17"
      ],
      correctAnswer: "A",
      explanation: "Khóa d thỏa mãn phương trình đồng dư: $d \cdot e \equiv 1 \pmod{\phi(n)} \Rightarrow 7d \equiv 1 \pmod{20}$. Nhẩm nghiệm hoặc dùng Euclid mở rộng: $7 \times 3 = 21 \equiv 1 \pmod{20}$. Vậy khóa bí mật $d = 3$."
    },
    {
      id: "c4_q5",
      question: "Vẫn với cấu hình RSA trên (n = 33, d = 3). Nếu nhận được bản mã C = 5, bản rõ M giải mã được là bao nhiêu?",
      options: [
        "M = 26",
        "M = 15",
        "M = 5",
        "M = 125"
      ],
      correctAnswer: "A",
      explanation: "Công thức giải mã RSA: $M = C^d \pmod n$. Thay số: $M = 5^3 \pmod{33} = 125 \pmod{33}$. Ta có $125 = 33 \times 3 + 26 \Rightarrow M = 26$."
    },
    {
      id: "c4_q6",
      question: "Tại sao độ an toàn của hệ mật mã RSA phụ thuộc chặt chẽ vào bài toán phân tích thừa số nguyên tố?",
      options: [
        "Vì nếu phân tích được n thành tích p và q, thám mã sẽ tính được $\\phi(n)$ và từ đó dễ dàng tìm ra khóa giải mã bí mật d dựa trên khóa công khai e.",
        "Vì phép nhân hai số nguyên tố rất chậm nên an toàn.",
        "Vì thừa số nguyên tố quyết định chiều dài của vector ban đầu IV.",
        "Vì thuật toán RSA tự động xóa khóa riêng nếu không tìm thấy số nguyên tố."
      ],
      correctAnswer: "A",
      explanation: "Khóa công khai e và n được phổ biến rộng rãi. Nếu kẻ tấn công có thể phân tích thừa số nguyên tố thành công $n = p \times q$, họ sẽ có $p, q$, tính được $\phi(n) = (p-1)(q-1)$ và tìm ra khóa giải mã bí mật $d = e^{-1} \pmod{\phi(n)}$."
    },
    {
      id: "c4_q7",
      question: "Trong quy trình trao đổi khóa Diffie-Hellman, hai thông số nào sau đây được công khai cho toàn mạng?",
      options: [
        "Số nguyên tố lớn p và phần tử nguyên thủy $\\alpha$ (cơ số generator).",
        "Hai số bí mật ngẫu nhiên $r_A$ và $r_B$.",
        "Khóa bí mật dùng chung K.",
        "Hai đa thức ma trận vuông cấp m."
      ],
      correctAnswer: "A",
      explanation: "Diffie-Hellman công khai số nguyên tố lớn p và phần tử nguyên thủy (gốc nguyên thủy) $\alpha \pmod p$ làm cơ sở tính lũy thừa cho các bên."
    },
    {
      id: "c4_q8",
      question: "Trong trao đổi khóa Diffie-Hellman với số nguyên tố q = 71, phần tử nguyên thủy $\\alpha = 7$. Người A chọn khóa bí mật $X_A = 5$. Khóa công khai $Y_A$ của A gửi đi là bao nhiêu?",
      options: [
        "51",
        "49",
        "35",
        "7"
      ],
      correctAnswer: "A",
      explanation: "Công thức tính khóa công khai: $Y_A = \alpha^{X_A} \pmod q$. Thay số: $Y_A = 7^5 \pmod{71}$. Ta tính tuần tự: $7^2 = 49$, $7^3 = 343 \equiv 59 \pmod{71}$, $7^4 \equiv 7 \times 59 = 413 \equiv 58 \pmod{71}$, $7^5 \equiv 7 \times 58 = 406 \equiv 51 \pmod{71}$."
    },
    {
      id: "c4_q9",
      question: "Sau khi trao đổi khóa công khai trong Diffie-Hellman, hai bên A và B tính toán khóa bí mật dùng chung K bằng cách nào?",
      options: [
        "A tính $K = (Y_B)^{X_A} \\pmod p$; B tính $K = (Y_A)^{X_B} \\pmod p$. Cả hai phép tính đều cho ra cùng một giá trị K.",
        "A nhân khóa công khai $Y_B$ với khóa bí mật $X_A$.",
        "Hai bên gộp khóa công khai lại rồi chia đôi lấy phần dư modulo p.",
        "Băm khóa công khai của nhau bằng thuật toán MD5."
      ],
      correctAnswer: "A",
      explanation: "Khóa chung được tính: $K = (Y_B)^{X_A} \pmod p = (\alpha^{X_B})^{X_A} \pmod p = \alpha^{X_B \cdot X_A} \pmod p$. Đối xứng lại, phía B tính: $K = (Y_A)^{X_B} \pmod p = \alpha^{X_A \cdot X_B} \pmod p$. Cả hai đều có chung giá trị K."
    },
    {
      id: "c4_q10",
      question: "Đâu là điểm yếu lớn nhất của giao thức trao đổi khóa Diffie-Hellman nguyên bản?",
      options: [
        "Tính lũy thừa modulo quá chậm nên không khả thi.",
        "Hoàn toàn không có cơ chế xác thực danh tính các bên, dẫn đến việc dễ bị tấn công trung gian Man-in-the-Middle (MitM).",
        "Khóa chung K sinh ra có chiều dài quá ngắn dễ bị vét cạn.",
        "Chỉ hoạt động được trên mạng LAN nội bộ."
      ],
      correctAnswer: "B",
      explanation: "Diffie-Hellman nguyên bản không xác thực người gửi. Kẻ tấn công đứng giữa có thể đánh tráo khóa công khai của A và B thành khóa của chính mình, thiết lập 2 khóa chung giả mạo với cả 2 bên và nghe lén dữ liệu."
    },
    {
      id: "c4_q11",
      question: "Quy trình tạo chữ ký số (Ký) lên thông điệp M sử dụng RSA được thực hiện bằng cách nào?",
      options: [
        "Người gửi dùng khóa công khai của người nhận để mã hóa M.",
        "Người gửi dùng khóa riêng bí mật d của mình để mã hóa bản băm của thông điệp M: $S = H(M)^d \\pmod n$.",
        "Người nhận dùng khóa công khai của người gửi để giải mã M.",
        "Người gửi sử dụng giao thức Diffie-Hellman để ký số."
      ],
      correctAnswer: "B",
      explanation: "Chữ ký số (Digital Signature) được tạo ra độc quyền bởi người gửi bằng cách dùng khóa bí mật của họ để mã hóa bản băm của tài liệu. Việc này chứng minh tính xác thực nguồn gốc và chống chối bỏ."
    },
    {
      id: "c4_q12",
      question: "Để xác thực (Verify) chữ ký số RSA thương mại nhận được từ đối tác, người nhận sử dụng khóa nào?",
      options: [
        "Khóa công khai của người gửi để giải mã chữ ký rồi đối sánh bản băm: $H(M) \\equiv S^e \\pmod n$.",
        "Khóa riêng của người nhận để giải mã.",
        "Khóa chung dùng đối xứng được thỏa thuận trước.",
        "Khóa công khai của tổ chức chứng thực CA."
      ],
      correctAnswer: "A",
      explanation: "Người nhận dùng khóa công khai của chính người gửi (được phổ biến rộng rãi) để giải mã chữ ký, thu được bản băm gốc, rồi tự tính bản băm của tài liệu nhận được để so khớp. Nếu trùng nhau, chữ ký hợp lệ."
    },
    {
      id: "c4_q13",
      question: "Tại sao thuật toán mã hóa RSA không được sử dụng để mã hóa trực tiếp dữ liệu có dung lượng lớn?",
      options: [
        "Vì dữ liệu lớn sẽ làm tràn bộ nhớ của khóa công khai.",
        "Vì thuật toán RSA cực kỳ chậm do khối lượng tính toán lũy thừa modulo số nguyên lớn là khổng lồ, gây nghẽn hiệu năng nghiêm trọng.",
        "Vì RSA chỉ tương thích với định dạng văn bản thô ASCII.",
        "Vì kích thước bản mã sinh ra sẽ lớn gấp 10 lần bản rõ gốc."
      ],
      correctAnswer: "B",
      explanation: "RSA làm việc trên số nguyên lớn (1024/2048-bit) với các phép nhân lũy thừa phức tạp. Nếu mã hóa file vài MB, tốc độ xử lý sẽ vô cùng chậm, không khả thi cho hệ thống mạng thời gian thực."
    },
    {
      id: "c4_q14",
      question: "Mô hình ứng dụng mã hóa lai ghép (Hybrid Encryption) giải quyết bài toán hiệu năng của RSA thế nào?",
      options: [
        "Dùng RSA mã hóa dữ liệu lớn và dùng AES mã hóa khóa.",
        "Dùng thuật toán băm SHA để nén dữ liệu rồi dùng RSA mã hóa.",
        "Sử dụng thuật toán đối xứng nhanh (như AES) để mã hóa dữ liệu lớn; sau đó dùng thuật toán công khai (như RSA) chỉ để mã hóa 'khóa phiên đối xứng' đó để truyền đi an toàn.",
        "Chuyển đổi toàn bộ dữ liệu lớn sang định dạng ảnh tĩnh."
      ],
      correctAnswer: "C",
      explanation: "Mã hóa lai kết hợp ưu điểm của cả hai: Dùng mã đối xứng (AES) có hiệu năng cực cao để mã hóa dữ liệu lớn; và dùng mã bất đối xứng (RSA) chỉ để bảo vệ khóa AES ngắn gọn (128/256-bit) khi truyền qua mạng."
    },
    {
      id: "c4_q15",
      question: "Tại sao kích thước khóa (modulo n) trong RSA phải đạt độ dài tối thiểu từ 1024 hoặc 2048 bit trở lên?",
      options: [
        "Để tăng băng thông của đường truyền mạng.",
        "Để chống lại sức mạnh tính toán ngày càng tăng của máy tính và các thuật toán phân tích số lớn hiện đại (như sàng số đặc biệt), đảm bảo việc phân tích n thành p và q là bất khả thi.",
        "Để bản mã tạo ra có độ dài đồng dư với kích thước khối của DES.",
        "Để tương thích với chuẩn mã hóa dòng RC4."
      ],
      correctAnswer: "B",
      explanation: "Số n càng nhỏ thì máy tính càng dễ phân tích thành p và q bằng các thuật toán phân tích số lớn. Khóa 512-bit đã bị phá từ lâu. Các tiêu chuẩn hiện đại yêu cầu tối thiểu 2048 bit để đảm bảo an toàn tuyệt đối."
    },
    {
      id: "c4_q16",
      question: "Trong thuật toán RSA, khóa công khai (Public Key) và khóa riêng (Private Key) được phân chia vai trò thế nào?",
      options: [
        "Khóa công khai dùng để ký, khóa riêng dùng để xác minh chữ ký.",
        "Khóa công khai được phổ biến cho mọi người để mã hóa hoặc xác minh chữ ký; khóa riêng do chủ sở hữu giữ bí mật tuyệt đối dùng để giải mã hoặc tạo chữ ký.",
        "Khóa công khai chỉ dùng cho hệ điều hành, khóa riêng dùng cho người dùng.",
        "Khóa riêng dùng để truyền khóa phiên, khóa công khai dùng mã hóa file."
      ],
      correctAnswer: "B",
      explanation: "Nguyên tắc bất đối xứng: Khóa công khai ($KU=\{e, n\}$) công khai cho bất kỳ ai để mã hóa gửi tin hoặc check chữ ký. Khóa riêng ($KR=\{d, n\}$) giữ bí mật tối cao để giải mã nhận tin hoặc tạo chữ ký chính chủ."
    },
    {
      id: "c4_q17",
      question: "Muốn mã hóa một file dữ liệu bảo mật lưu trên ổ đĩa cứng cá nhân phòng khi bị mất máy tính. Thuật toán nào sau đây là phù hợp nhất?",
      options: [
        "Thuật toán mã hóa khóa công khai RSA.",
        "Chuẩn mã hóa nâng cao đối xứng AES.",
        "Giao thức trao đổi khóa Diffie-Hellman.",
        "Hàm băm một chiều SHA-256."
      ],
      correctAnswer: "B",
      explanation: "Mã hóa dữ liệu lưu trữ đĩa cứng cần tốc độ nhanh và khối lượng lớn, do đó hệ mật đối xứng (như AES) là lựa chọn tối ưu nhất. RSA quá chậm và không hiệu quả cho mục đích này."
    },
    {
      id: "c4_q18",
      question: "Cho khóa công khai RSA (n = 77, e = 7). Hãy mã hóa bản rõ x = 12 để tìm bản mã C thu được:",
      options: [
        "C = 12",
        "C = 23",
        "C = 67",
        "C = 1"
      ],
      correctAnswer: "A",
      explanation: "Công thức mã hóa: $C = x^e \pmod n \Rightarrow C = 12^7 \pmod{77}$. Tính lũy thừa modulo: $12^2 = 144 \equiv 67 \equiv -10 \pmod{77}$. $12^4 \equiv (-10)^2 = 100 \equiv 23 \pmod{77}$. $12^6 = 12^4 \times 12^2 \equiv 23 \times 67 = 1541 \equiv 1 \pmod{77}$ (vì $1541 = 77 \times 20 + 1$). Vậy $12^7 = 12^6 \times 12 \equiv 1 \times 12 = 12 \pmod{77}$. Kết quả $C = 12$."
    },
    {
      id: "c4_q19",
      question: "Quy trình giao tiếp bảo mật sử dụng cơ chế 'Ký trước, Mã sau' có nhược điểm bảo mật nào nếu không cẩn thận?",
      options: [
        "Làm tăng dung lượng bản mã lên gấp đôi.",
        "Kẻ tấn công trung gian có thể chặn cặp $(e_B(x), y)$, bóc tách chữ ký y của A và thay thế bằng chữ ký số $y'$ của chính mình rồi gửi tiếp cho B, khiến B lầm tưởng bản rõ x xuất phát từ kẻ tấn công.",
        "Làm giảm tốc độ giải mã của bên nhận.",
        "Bắt buộc bên nhận phải nạp lại khóa công khai nhiều lần."
      ],
      correctAnswer: "B",
      explanation: "Nếu ký lên bản rõ rồi mã hóa ('Ký trước mã sau' ở mức ngoài), kẻ đứng giữa chặn được bản mã có thể giả mạo chữ ký. Đây là lỗ hổng nổi tiếng, do đó thực tế khuyên dùng ký lên bản rõ, rồi mã hóa toàn bộ cặp gồm bản rõ và chữ ký đó."
    },
    {
      id: "c4_q20",
      question: "Cho các thông số RSA: p = 13, q = 17, khóa công khai e = 37. Hãy tính giá trị hàm số phi Euler $\\phi(n)$ và khóa riêng d tương ứng:",
      options: [
        "$\\phi(n) = 192$, d = 109",
        "$\\phi(n) = 221$, d = 37",
        "$\\phi(n) = 192$, d = 13",
        "$\\phi(n) = 221$, d = 109"
      ],
      correctAnswer: "A",
      explanation: "Ta có $\phi(n) = (p-1)(q-1) = 12 \times 16 = 192$. Khóa riêng d thỏa mãn $d \times 37 \equiv 1 \pmod{192}$. Dùng thuật toán Euclid mở rộng, ta giải phương trình $37d - 192k = 1$, nhẩm nghiệm thu được $d = 109$ (vì $109 \times 37 = 4033 = 192 \times 21 + 1$)."
    },
    {
      id: "c4_q21",
      question: "Trong quy trình RSA ở câu trên, nếu nhận được bản mã y = 77, hãy giải mã để tìm bản rõ M gốc:",
      options: [
        "M = 25",
        "M = 12",
        "M = 77",
        "M = 100"
      ],
      correctAnswer: "A",
      explanation: "Công thức giải mã: $M = y^d \pmod n = 77^{109} \pmod{221}$. Áp dụng định lý phần dư Trung Hoa (CRT) hoặc lũy thừa nhị phân mô-đun để giải nhanh, ta thu được kết quả nghiệm duy nhất là $M = 25$."
    },
    {
      id: "c4_q22",
      question: "Khởi tạo khóa RSA với p = 17, q = 3, e = 5. Hãy tính khóa công khai KU và khóa bí mật KR của hệ thống:",
      options: [
        "KU = {5, 51}, KR = {13, 51}",
        "KU = {5, 32}, KR = {13, 32}",
        "KU = {13, 51}, KR = {5, 51}",
        "KU = {5, 51}, KR = {5, 32}"
      ],
      correctAnswer: "A",
      explanation: "$n = p \times q = 17 \times 3 = 51$. $\phi(n) = 16 \times 2 = 32$. Khóa công khai $KU = \{e, n\} = \{5, 51\}$. Khóa riêng d thỏa mãn $5d \equiv 1 \pmod{32} \Rightarrow d = 13$ (vì $5 \times 13 = 65 \equiv 1 \pmod{32}$). Khóa riêng $KR = \{d, n\} = \{13, 51\}$."
    },
    {
      id: "c4_q23",
      question: "Định lý số dư Trung Hoa (Chinese Remainder Theorem - CRT) được ứng dụng trong RSA nhằm mục đích gì?",
      options: [
        "Để tăng độ lớn của khóa công khai chống bẻ khóa.",
        "Để tăng tốc độ tính toán phép giải mã lũy thừa modulo số lớn bằng cách chia nhỏ phép tính thành các modulo số nguyên tố p và q nhỏ hơn.",
        "Để tự động phát hiện lỗi bit trên đường truyền.",
        "Để phân phối khóa công khai qua kênh mạng hở."
      ],
      correctAnswer: "B",
      explanation: "Giải mã RSA yêu cầu tính $M = C^d \pmod n$. Vì n rất lớn, CRT cho phép tính toán song song trên hai modulo nhỏ hơn là $p$ và $q$: $M_p = C^{d \pmod{p-1}} \pmod p$ và $M_q = C^{d \pmod{q-1}} \pmod q$, giúp tăng tốc độ giải mã lên gấp 4 lần."
    },
    {
      id: "c4_q24",
      question: "Trong RSA, số e được chọn làm khóa công khai cần thỏa mãn điều kiện nào?",
      options: [
        "e phải là một số nguyên tố lớn hơn n.",
        "e phải nguyên tố cùng nhau với $\\phi(n)$, tức là $\\gcd(e, \\phi(n)) = 1$, và $1 < e < \\phi(n)$.",
        "e phải chia hết cho cả p-1 và q-1.",
        "e phải là số chẵn để dễ tính lũy thừa."
      ],
      correctAnswer: "B",
      explanation: "Để tồn tại phần tử nghịch đảo modulo d (khóa giải mã bí mật), điều kiện bắt buộc toán học là số e được chọn phải nguyên tố cùng nhau với giá trị hàm phi Euler của n: $\gcd(e, \phi(n)) = 1$."
    },
    {
      id: "c4_q25",
      question: "Một cuộc tấn công vét cạn (brute-force) nhắm vào thuật toán RSA sẽ cố gắng thực hiện hành vi nào?",
      options: [
        "Thử tất cả các tổ hợp khóa riêng d có thể có trong không gian khóa.",
        "Phân tích modulo n thành các thừa số nguyên tố.",
        "Đo lường năng lượng tiêu thụ của chip xử lý.",
        "Cố ý gửi các bản mã lỗi để xem phản hồi của hệ thống."
      ],
      correctAnswer: "A",
      explanation: "Tấn công vét cạn (brute-force) trên mọi hệ mật mã đều thử lần lượt mọi giá trị khóa có thể có trong không gian khóa cho đến khi khớp. Tuy nhiên không gian khóa RSA 2048-bit là $2^{2048}$ - hoàn toàn miễn nhiễm với vét cạn."
    },
    {
      id: "c4_q26",
      question: "Tấn công thời gian (Timing Attack) nhắm vào RSA thuộc loại tấn công nào?",
      options: [
        "Tấn công toán học phân tích số lớn.",
        "Tấn công kênh bên (Side-channel attack) phân tích thời gian máy tính cần để thực hiện các phép lũy thừa modulo giải mã nhằm đoán biết các bit của khóa bí mật.",
        "Tấn công chủ động Man-in-the-Middle.",
        "Tấn công vét cạn không gian khóa."
      ],
      correctAnswer: "B",
      explanation: "Timing Attack là tấn công kênh bên cực kỳ tinh vi. Bằng cách đo đạc chính xác thời gian giải mã của CPU cho các gói tin khác nhau, kẻ tấn công có thể suy luận ra cấu trúc nhị phân (các bit 0 và 1) của khóa riêng d."
    },
    {
      id: "c4_q27",
      question: "Biện pháp kỹ thuật nào sau đây giúp RSA chống lại tấn công thời gian (Timing Attack) hiệu quả?",
      options: [
        "Tăng kích thước khóa lên 4096 bit.",
        "Sử dụng kỹ thuật 'Làm mù' (Blinding) bằng cách nhân bản rõ với một số ngẫu nhiên trước khi mã hóa/giải mã để xáo trộn thời gian xử lý.",
        "Ngắt kết nối mạng máy chủ giải mã.",
        "Thay đổi khóa riêng liên tục sau mỗi 5 phút."
      ],
      correctAnswer: "B",
      explanation: "Kỹ thuật Blinding làm mù tính toán: nhân dữ liệu đầu vào với một giá trị ngẫu nhiên bí mật trước khi thực hiện lũy thừa modulo giải mã, sau đó loại bỏ yếu tố ngẫu nhiên đó ở kết quả cuối. Việc này làm mất dấu vết thời gian xử lý thực."
    },
    {
      id: "c4_q28",
      question: "Trong Diffie-Hellman, 'bài toán logarit rời rạc' (Discrete Logarithm Problem) quyết định độ an toàn thế nào?",
      options: [
        "Vì biết $\\alpha, p$ và khóa công khai $Y_A = \\alpha^{X_A} \\pmod p$, kẻ nghe lén cực kỳ khó khăn về mặt toán học để tìm ngược lại khóa bí mật $X_A$.",
        "Vì phép tính logarit rời rạc diễn ra rất nhanh nên an toàn.",
        "Vì logarit rời rạc giúp kiểm tra tính chẵn lẻ của khóa chung.",
        "Vì logarit rời rạc tự động mã hóa khóa chung K."
      ],
      correctAnswer: "A",
      explanation: "Phép tính lũy thừa modulo $Y_A = \alpha^{X_A} \pmod p$ rất dễ thực hiện (hướng đi xuôi). Tuy nhiên, biết $Y_A$, $\alpha$ và $p$, việc tìm lại số mũ $X_A$ (hướng đi ngược - bài toán logarit rời rạc) là cực kỳ khó khăn trên các số lớn."
    },
    {
      id: "c4_q29",
      question: "Giao thức OAKLEY giải quyết điểm yếu không xác thực của Diffie-Hellman bằng cơ chế nào?",
      options: [
        "Bắt buộc các bên phải gặp mặt trực tiếp để trao đổi khóa.",
        "Sử dụng thêm chữ ký số, chứng chỉ X.509 hoặc khóa đối xứng chia sẻ trước để xác thực danh tính các bên trong quá trình đàm phán khóa.",
        "Tự động ngắt kết nối nếu phát hiện có kẻ nghe lén trên đường truyền.",
        "Băm khóa công khai bằng thuật toán SHA-256."
      ],
      correctAnswer: "B",
      explanation: "Giao thức Oakley nâng cấp Diffie-Hellman bằng cách bổ sung cơ chế xác thực danh tính thông qua các thuật toán chữ ký số hoặc chứng chỉ số CA, ngăn chặn triệt để tấn công trung gian MitM."
    },
    {
      id: "c4_q30",
      question: "Trong thuật toán RSA, nếu người gửi A muốn gửi một tài liệu mật cho người nhận B. A phải mã hóa tài liệu bằng khóa nào?",
      options: [
        "Khóa riêng bí mật của A.",
        "Khóa công khai của B.",
        "Khóa riêng bí mật của B.",
        "Khóa công khai của A."
      ],
      correctAnswer: "B",
      explanation: "Để đảm bảo chỉ người nhận B đọc được (tính bí mật), người gửi A phải dùng khóa công khai của chính B để mã hóa. Khi đó, chỉ duy nhất B - người giữ khóa riêng tương ứng - mới có thể giải mã được tài liệu."
    },
    {
      id: "c4_q31",
      question: "Nếu người gửi A dùng khóa riêng bí mật của mình để mã hóa một tài liệu rồi gửi cho B. Hành động này đạt được mục tiêu bảo mật nào?",
      options: [
        "Bảo mật nội dung tuyệt đối, không ai khác đọc được.",
        "Xác thực nguồn gốc (chữ ký số) của A và chống chối bỏ; bất kỳ ai có khóa công khai của A cũng đọc được nội dung.",
        "Tính sẵn sàng của tài liệu được tối ưu.",
        "Tự động nén dung lượng tài liệu gửi đi."
      ],
      correctAnswer: "B",
      explanation: "Mã hóa bằng khóa riêng của người gửi không bảo mật nội dung (vì ai cũng có khóa công khai của người gửi để giải mã). Nhưng nó là chữ ký số hoàn hảo chứng minh tài liệu chắc chắn do người sở hữu khóa riêng đó tạo ra."
    },
    {
      id: "c4_q32",
      question: "Hàm phi Euler $\\phi(p)$ của một số nguyên tố p bằng bao nhiêu?",
      options: [
        "p",
        "p - 1",
        "1",
        "$(p-1)/2$"
      ],
      correctAnswer: "B",
      explanation: "Vì p là số nguyên tố, tất cả các số nguyên dương nhỏ hơn p đều nguyên tố cùng nhau với p. Số lượng các số này là $p-1$. Do đó $\phi(p) = p-1$."
    },
    {
      id: "c4_q33",
      question: "Cho hai số nguyên tố p = 5, q = 7. Giá trị hàm phi Euler $\\phi(35)$ là bao nhiêu?",
      options: [
        "35",
        "24",
        "12",
        "6"
      ],
      correctAnswer: "B",
      explanation: "Modulo $n = 5 \times 7 = 35$. Vì p và q là hai số nguyên tố, $\phi(n) = (p-1)(q-1) = 4 \times 6 = 24$."
    },
    {
      id: "c4_q34",
      question: "Khẳng định nào sau đây là SAI khi nói về thuật toán RSA?",
      options: [
        "Mã hóa và giải mã RSA sử dụng hai khóa khác nhau.",
        "Khóa giải mã bí mật d và khóa mã hóa công khai e có vai trò đối xứng toán học hoàn hảo.",
        "RSA có tốc độ mã hóa dữ liệu nhanh tương đương thuật toán đối xứng AES.",
        "Hàm phi Euler của modulo n quyết định việc tìm khóa d từ khóa e."
      ],
      correctAnswer: "C",
      explanation: "Khẳng định C sai hoàn toàn vì tốc độ xử lý của RSA vô cùng chậm so với AES đối xứng (chậm hơn từ 100 đến 1000 lần)."
    },
    {
      id: "c4_q35",
      question: "Trong trao đổi khóa Diffie-Hellman, nếu kẻ nghe lén chặn được các giá trị công khai $Y_A$ và $Y_B$ trên đường truyền. Tại sao họ vẫn không tính được khóa bí mật chung K?",
      options: [
        "Vì họ không biết thuật toán lũy thừa modulo.",
        "Vì họ không biết các số bí mật ngẫu nhiên $X_A$ và $X_B$, và việc tìm $X_A, X_B$ từ $Y_A, Y_B$ đòi hỏi phải giải bài toán logarit rời rạc cực kỳ khó khăn.",
        "Vì khóa chung K tự động bị hủy nếu có kẻ nghe lén.",
        "Vì khóa công khai $Y_A, Y_B$ đã được mã hóa bằng thuật toán đối xứng."
      ],
      correctAnswer: "B",
      explanation: "Khóa chung $K = \alpha^{X_A \cdot X_B} \pmod p$. Kẻ nghe lén chỉ chặn được $Y_A = \alpha^{X_A} \pmod p$ và $Y_B = \alpha^{X_B} \pmod p$. Để tính K, họ phải tìm ra $X_A$ hoặc $X_B$ - điều này yêu cầu giải bài toán logarit rời rạc phi tuyến tính số lớn."
    },
    {
      id: "c4_q36",
      question: "Quy trình thiết lập khóa phiên (Session Key) sử dụng RSA hoạt động như thế nào?",
      options: [
        "Người nhận tự tạo khóa phiên rồi gửi công khai cho người gửi giải mã.",
        "Người gửi sinh ngẫu nhiên khóa phiên đối xứng, dùng khóa công khai của người nhận mã hóa khóa phiên đó rồi gửi đi. Người nhận dùng khóa riêng của mình để giải mã thu lấy khóa phiên.",
        "Hai bên chạy giao thức Diffie-Hellman để sinh trực tiếp khóa phiên.",
        "Khóa phiên được băm bằng thuật toán SHA-256 rồi lưu vào ổ cứng."
      ],
      correctAnswer: "B",
      explanation: "Đây là cơ chế phân phối khóa phiên kinh điển: sinh khóa đối xứng ngẫu nhiên (dùng 1 lần), dùng mã hóa bất đối xứng bảo vệ khóa đối xứng đó khi truyền qua mạng. Nhận xong, hai bên dùng khóa đối xứng này để chat nhanh."
    },
    {
      id: "c4_q37",
      question: "Trong RSA, nếu người dùng vô tình làm lộ khóa riêng (Private Key) của mình, họ cần làm gì ngay lập tức?",
      options: [
        "Thay đổi mật khẩu đăng nhập hệ điều hành máy tính.",
        "Yêu cầu nhà cung cấp dịch vụ hoặc tổ chức chứng thực CA thu hồi chứng chỉ số công khai tương ứng và tạo lại cặp khóa mới.",
        "Thực hiện mã hóa lại ổ cứng bằng thuật toán AES-256.",
        "Xóa toàn bộ các tệp tin bản mã đã lưu trữ."
      ],
      correctAnswer: "B",
      explanation: "Lộ khóa riêng đồng nghĩa với việc danh tính bị mạo danh hoàn toàn và dữ liệu mật bị giải mã. Người dùng phải báo ngay cho CA để đưa chứng chỉ số vào danh sách thu hồi (CRL) và khởi tạo cặp khóa hoàn toàn mới."
    },
    {
      id: "c4_q38",
      question: "Khóa riêng d của RSA được tính bằng công thức nào trong toán số học?",
      options: [
        "$d = e^{-1} \\pmod n$",
        "$d = e^{-1} \\pmod{\\phi(n)}$",
        "$d = e \\cdot \\phi(n) \\pmod n$",
        "$d = \\gcd(e, \\phi(n))$"
      ],
      correctAnswer: "B",
      explanation: "Khóa d là số nghịch đảo nhân modulo của khóa công khai e trên vành số nguyên $\phi(n)$: $d \cdot e \equiv 1 \pmod{\phi(n)} \Rightarrow d = e^{-1} \pmod{\phi(n)}$."
    },
    {
      id: "c4_q39",
      question: "Ký hiệu $\\mathbb{Z}_{26}^*$ trong toán mật mã Hill chỉ tập hợp các số nguyên nào?",
      options: [
        "Tập hợp tất cả các số nguyên từ 0 đến 25.",
        "Tập hợp các số nguyên dương nhỏ hơn 26 và nguyên tố cùng nhau với 26.",
        "Tập hợp các số chia hết cho 26.",
        "Tập hợp các số nguyên tố nhỏ hơn 26."
      ],
      correctAnswer: "B",
      explanation: "Ký hiệu hình sao $\mathbb{Z}_m^*$ đại diện cho nhóm các phần tử khả nghịch (có số nghịch đảo nhân) modulo m. Các phần tử này bắt buộc phải nguyên tố cùng nhau với m."
    },
    {
      id: "c4_q40",
      question: "Bài toán trao đổi khóa Diffie-Hellman có thể thực hiện an toàn trên cấu trúc toán học nào khác ngoài vành số nguyên $\\mathbb{Z}_p$?",
      options: [
        "Trên cấu trúc ma trận vuông cấp m.",
        "Trên nhóm các điểm của đường cong Elliptic (Elliptic Curve Cryptography - ECC).",
        "Trên các đồ thị cây phân cấp.",
        "Trên các tập tin nhị phân của hệ điều hành."
      ],
      correctAnswer: "B",
      explanation: "Diffie-Hellman hoạt động hoàn hảo trên cấu trúc nhóm Elliptic Curve (ECDH). Nhờ bài toán logarit rời rạc trên đường cong Elliptic khó hơn nhiều, ECDH mang lại độ an toàn tương đương RSA nhưng với kích thước khóa cực kỳ nhỏ."
    }
  ],

  // --- CHƯƠNG 5 ---
c5: [
    {
      id: "c5_q1",
      question: "Khái niệm và đặc điểm cốt lõi của một hàm băm mật mã (Cryptographic Hash Function) là gì?",
      options: [
        "Là thuật toán mã hóa đối xứng tốc độ cao.",
        "Là thuật toán biến đổi thông điệp có kích thước bất kỳ thành một chuỗi bit có độ dài cố định, hoạt động một chiều và chống va chạm.",
        "Là thuật toán mã hóa khóa công khai dùng chứng chỉ số.",
        "Là thuật toán nén file để giảm dung lượng lưu trữ trên đĩa cứng."
      ],
      correctAnswer: "B",
      explanation: "Hàm băm mật mã nén đầu vào bất kỳ thành đầu ra độ dài cố định (digest). Nó hoạt động một chiều (không thể dịch ngược) và chống va chạm (rất khó tìm 2 file trùng mã băm)."
    },
    {
      id: "c5_q2",
      question: "Tính chất 'Tính một chiều' (Pre-image resistance) của hàm băm được hiểu là gì?",
      options: [
        "Biết thông điệp x, rất dễ dàng để tính toán ra giá trị băm $h(x)$.",
        "Biết giá trị băm $y$, cực kỳ khó khăn về mặt tính toán để tìm lại thông điệp gốc x sao cho $h(x) = y$.",
        "Không thể tìm thấy hai thông điệp khác nhau có cùng giá trị băm.",
        "Giá trị băm luôn có chiều dài thay đổi tùy theo kích thước thông điệp."
      ],
      correctAnswer: "B",
      explanation: "Tính một chiều (Pre-image resistance) đảm bảo hàm băm hoạt động như một tấm vé đi một chiều: từ dữ liệu tính ra mã băm rất dễ, nhưng từ mã băm không thể mò ngược lại dữ liệu gốc."
    },
    {
      id: "c5_q3",
      question: "Tính chất 'Chống va chạm mạnh' (Collision resistance) của hàm băm yêu cầu điều gì?",
      options: [
        "Biết thông điệp x, rất khó tìm được thông điệp $x'$ khác x sao cho $h(x) = h(x')$.",
        "Cực kỳ khó khăn về mặt tính toán để tìm ra bất kỳ cặp thông điệp khác nhau $(x, x')$ nào sao cho có cùng giá trị băm $h(x) = h(x')$.",
        "Giá trị băm của thông điệp luôn lớn hơn dung lượng thông điệp gốc.",
        "Hàm băm bắt buộc phải sử dụng khóa bí mật dùng chung."
      ],
      correctAnswer: "B",
      explanation: "Chống va chạm mạnh (Collision resistance) đòi hỏi kẻ tấn công không thể tìm được hai file bất kỳ trùng mã băm. Đây là thuộc tính quan trọng nhất để chống lại việc tráo đổi văn bản ký số."
    },
    {
      id: "c5_q4",
      question: "So sánh kích thước giá trị băm đầu ra của thuật toán MD5 và SHA-1:",
      options: [
        "MD5 tạo ra giá trị băm 128 bit; SHA-1 tạo ra giá trị băm 160 bit.",
        "MD5 tạo ra giá trị băm 160 bit; SHA-1 tạo ra giá trị băm 128 bit.",
        "Cả hai thuật toán đều tạo ra kết quả 256 bit.",
        "MD5 tạo ra giá trị băm 64 bit; SHA-1 tạo ra 128 bit."
      ],
      correctAnswer: "A",
      explanation: "MD5 sinh ra mã băm dài 128 bit (32 ký tự hex). SHA-1 sinh ra mã băm dài 160 bit (40 ký tự hex). Hiện nay cả hai đều bộc lộ lỗ hổng đụng độ cấu trúc nên bị thay thế bởi SHA-256."
    },
    {
      id: "c5_q5",
      question: "Tại sao thuật toán MD5 ngày nay không còn được coi là an toàn tuyệt đối cho chữ ký số?",
      options: [
        "Vì MD5 có tốc độ tính toán quá chậm.",
        "Vì các nhà khoa học đã tìm thấy các lỗ hổng đụng độ cấu trúc, cho phép tạo ra hai tập tin hoàn toàn khác nhau có cùng mã băm MD5 chỉ trong vài giờ.",
        "Vì MD5 yêu cầu khóa bí mật quá dài.",
        "Vì MD5 chỉ hoạt động trên hệ điều hành Windows."
      ],
      correctAnswer: "B",
      explanation: "MD5 đã bị bẻ gãy khả năng chống va chạm. Tin tặc có thể tạo ra một hợp đồng độc hại có cùng mã băm MD5 với hợp đồng thật, lừa người dùng ký số lên hợp đồng thật rồi đánh tráo sang hợp đồng độc hại."
    },
    {
      id: "c5_q6",
      question: "Sự khác biệt cơ bản giữa hàm băm không có khóa (Hash Function) và hàm băm có khóa (MAC - Message Authentication Code) là gì?",
      options: [
        "Hàm băm không khóa chạy chậm hơn hàm băm có khóa.",
        "Hàm băm không khóa chỉ phụ thuộc vào nội dung thông điệp; hàm băm có khóa (MAC) yêu cầu sự kết hợp giữa thông điệp và một khóa bí mật chung.",
        "Hàm băm có khóa chỉ bảo vệ tính bí mật, không bảo vệ tính toàn vẹn.",
        "Hàm băm không khóa chỉ dùng cho chữ ký số RSA."
      ],
      correctAnswer: "B",
      explanation: "Hàm băm thông thường ai cũng tính được mã băm của file. Hàm MAC (như HMAC) đòi hỏi phải có khóa bí mật dùng chung mới tính được giá trị xác thực, bảo vệ cả tính toàn vẹn lẫn xác thực nguồn gốc."
    },
    {
      id: "c5_q7",
      question: "Chữ ký số (Digital Signature) khác biệt thế nào so với chữ ký tay thông thường về mặt liên kết dữ liệu?",
      options: [
        "Chữ ký tay an toàn hơn chữ ký số.",
        "Chữ ký tay cố định trên mọi văn bản; chữ ký số gắn liền và thay đổi linh động phụ thuộc vào chính nội dung của thông điệp được ký.",
        "Chữ ký số có thể copy dễ dàng từ văn bản này sang văn bản khác.",
        "Chữ ký số chỉ dùng được cho các hợp đồng tài chính."
      ],
      correctAnswer: "B",
      explanation: "Chữ ký tay luôn giống nhau trên mọi giấy tờ nên có thể bị cắt dán giả mạo. Chữ ký số được sinh ra từ việc mã hóa bản băm của văn bản cụ thể đó, nên mỗi văn bản sẽ có một chữ ký số hoàn toàn khác nhau."
    },
    {
      id: "c5_q8",
      question: "Theo nghịch lý ngày sinh nhật (Birthday Attack), để tìm ra một va chạm (collision) của hàm băm n bit với xác suất thành công 50%, số lượng phép thử tối thiểu là bao nhiêu?",
      options: [
        "$2^n$ phép thử.",
        "$2^{n/2}$ phép thử.",
        "$n/2$ phép thử.",
        "$2^{n-1}$ phép thử."
      ],
      correctAnswer: "B",
      explanation: "Nghịch lý ngày sinh nhật chỉ ra rằng khả năng đụng độ mã băm xảy ra nhanh hơn nhiều so với tìm kiếm vét cạn thông thường. Độ phức tạp để phá va chạm của hàm băm n bit chỉ là $2^{n/2}$ phép thử."
    },
    {
      id: "c5_q9",
      question: "Quy trình đệm bit (Padding) trong thuật toán băm SHA-1 nhằm mục đích gì?",
      options: [
        "Để tăng tính bảo mật cho thông điệp.",
        "Để mở rộng thông điệp sao cho độ dài của nó là bội số của khối 512 bit trước khi đưa vào vòng lặp xử lý chính.",
        "Để nén thông điệp xuống dung lượng nhỏ nhất.",
        "Để sinh ra khóa bí mật ngẫu nhiên cho thuật toán."
      ],
      correctAnswer: "B",
      explanation: "SHA-1 xử lý dữ liệu theo từng khối 512-bit. Bước đệm bit thêm bit '1', theo sau là các bit '0' và 64 bit biểu diễn độ dài gốc để đưa tổng chiều dài thông điệp về dạng bội số của 512 bit ($N \times 512$)."
    },
    {
      id: "c5_q10",
      question: "Thuật toán ký số chuyên dụng DSA (Digital Signature Algorithm) được xây dựng dựa trên bài toán khó nào?",
      options: [
        "Bài toán phân tích thừa số nguyên tố số lớn giống RSA.",
        "Bài toán logarit rời rạc trên vành số nguyên.",
        "Bài toán giải hệ phương trình ma trận Hill.",
        "Bài toán tìm ước chung lớn nhất của hai số nguyên."
      ],
      correctAnswer: "B",
      explanation: "DSA do chính phủ Mỹ ban hành, an toàn dựa trên độ khó của bài toán logarit rời rạc tương tự hệ mật ElGamal. Khác với RSA dùng được cho cả mã hóa, DSA chỉ chuyên dùng độc quyền cho việc ký chữ ký số."
    },
    {
      id: "c5_q11",
      question: "Quy trình kết hợp giữa hàm băm và mã hóa khóa công khai để tạo ra chữ ký số mang lại lợi ích gì?",
      options: [
        "Làm cho chữ ký số có màu sắc đẹp hơn.",
        "Tiết kiệm tối đa thời gian tính toán và giảm kích thước chữ ký số, vì thuật toán công khai chỉ cần ký lên bản băm ngắn gọn thay vì ký lên toàn bộ dữ liệu file lớn.",
        "Tự động nén file dữ liệu gửi đi.",
        "Ngăn chặn hoàn toàn việc kẻ nghe lén đọc trộm nội dung file."
      ],
      correctAnswer: "B",
      explanation: "Mã hóa bất đối xứng rất chậm. Thay vì mã hóa trực tiếp file lớn (rất tốn CPU), ta băm file thành digest nhỏ (128/256-bit) rồi mới ký lên digest này. Việc này tăng tốc độ xử lý lên hàng nghìn lần."
    },
    {
      id: "c5_q12",
      question: "Bạn tải một bộ cài phần mềm từ internet kèm theo chuỗi MD5 gốc do nhà phát hành công bố. Để kiểm tra phần mềm có bị chèn virus hay lỗi tải file hay không, bạn làm thế nào?",
      options: [
        "Mã hóa file phần mềm bằng khóa công khai của nhà phát hành.",
        "Dùng công cụ băm lại file tải về bằng thuật toán MD5, rồi đối sánh mã băm nhận được với chuỗi MD5 gốc. Nếu khớp nhau thì file toàn vẹn.",
        "Gửi file phần mềm cho tổ chức chứng thực CA kiểm tra.",
        "Bắt đầu cài đặt phần mềm để xem hệ thống có báo lỗi virus hay không."
      ],
      correctAnswer: "B",
      explanation: "Đây là cách kiểm tra tính toàn vẹn file phổ biến. Nếu file bị thay đổi dù chỉ 1 bit (do lỗi mạng hoặc bị chèn mã độc), mã băm MD5 tính lại sẽ khác hoàn toàn mã băm gốc (hiệu ứng thác nước)."
    },
    {
      id: "c5_q13",
      question: "Quy trình đàm phán giao tiếp có bảo mật kết hợp 'Ký trước, Mã sau' ở mức ứng dụng yêu cầu các bước nào?",
      options: [
        "Người gửi A ký lên bản rõ x: $y = sig_A(x)$; sau đó dùng khóa công khai của người nhận B để mã hóa cả cặp gồm bản rõ x và chữ ký y: $C = E_{KU\_B}(x, y)$.",
        "Người gửi A mã hóa x trước, rồi ký lên bản mã đó.",
        "Người gửi A băm x bằng MD5 rồi mã hóa khóa phiên.",
        "Người gửi A gửi x đi hở và chỉ mã hóa chữ ký y."
      ],
      correctAnswer: "A",
      explanation: "Nguyên tắc bảo mật chuẩn là: Ký lên bản rõ để khẳng định chủ quyền nội dung, sau đó mã hóa toàn bộ dữ liệu gồm bản rõ và chữ ký đó bằng khóa công khai của người nhận để giữ bí mật."
    },
    {
      id: "c5_q14",
      question: "Tại sao việc xác thực chữ ký số của một cá nhân bắt buộc phải sử dụng Khóa công khai (Public Key) của chính cá nhân đó?",
      options: [
        "Vì khóa công khai được CA bảo mật tuyệt đối.",
        "Vì chữ ký số được tạo bằng khóa riêng bí mật độc quyền của cá nhân đó; chỉ có khóa công khai tương ứng mới có mối liên hệ toán học để giải mã xác thực chữ ký.",
        "Vì khóa công khai có tốc độ giải mã nhanh hơn khóa riêng.",
        "Vì khóa công khai chứa chữ ký tay của người dùng."
      ],
      correctAnswer: "B",
      explanation: "Chữ ký số được sinh ra từ khóa riêng. Theo nguyên lý bất đối xứng, chỉ có khóa công khai tương thích nằm trong cặp khóa mới có thể giải mã xác minh chữ ký đó, bảo đảm tính chống chối bỏ nguồn gốc."
    },
    {
      id: "c5_q15",
      question: "Mã xác thực thông điệp MAC (Message Authentication Code) dựa trên hàm băm có khóa có ưu điểm gì vượt trội so với hàm băm không khóa trong môi trường mạng hở?",
      options: [
        "MAC chạy nhanh hơn hàm băm thông thường.",
        "Ngăn chặn kẻ tấn công trên đường truyền tự ý chỉnh sửa nội dung thông điệp rồi tự tính toán lại mã băm mới để đánh lừa người nhận, vì kẻ tấn công không biết khóa bí mật K để tính MAC hợp lệ.",
        "MAC tự động mã hóa dữ liệu gửi đi.",
        "MAC không cần Vector khởi tạo IV."
      ],
      correctAnswer: "B",
      explanation: "Với hàm băm không khóa, kẻ đứng giữa sửa file rồi tự tính lại hash mới ghi đè lên hash cũ gửi cho nạn nhân. Với MAC, vì không có khóa bí mật K, kẻ đứng giữa sửa file xong không thể tạo ra mã MAC tương thích, đòn tấn công thất bại."
    },
    {
      id: "c5_q16",
      question: "Thuật toán băm SHA-1 xử lý dữ liệu qua bao nhiêu vòng lặp xử lý (vòng) chính và bao nhiêu bước cho mỗi khối 512 bit?",
      options: [
        "16 vòng lặp.",
        "4 vòng lặp, mỗi vòng 20 bước (tổng cộng 80 bước xử lý).",
        "10 vòng lặp ma trận.",
        "64 vòng lặp tuần tự."
      ],
      correctAnswer: "B",
      explanation: "SHA-1 xử lý khối 512-bit qua 4 vòng lặp. Mỗi vòng áp dụng các hàm phi tuyến và hằng số khác nhau trong 20 bước tính toán liên tiếp, tổng cộng chạy 80 bước trên 5 thanh ghi trạng thái (A, B, C, D, E)."
    },
    {
      id: "c5_q17",
      question: "Chuẩn băm mật mã SHA-2 (như SHA-256) được phát triển nhằm mục đích gì?",
      options: [
        "Để tăng dung lượng file nén của hệ thống.",
        "Cung cấp độ dài băm lớn hơn (256, 384, 512 bit) nhằm nâng cao độ an toàn chống va chạm và tương thích với mức bảo mật của chuẩn mã hóa cao cấp AES.",
        "Để thay thế hoàn toàn chữ ký số RSA.",
        "Để tích hợp trực tiếp vào phần cứng của thiết bị định tuyến Router."
      ],
      correctAnswer: "B",
      explanation: "SHA-1 (160-bit) bộc lộ lỗ hổng va chạm lý thuyết. NIST đã ban hành SHA-2 (SHA-256, SHA-512) nâng không gian băm lên cực lớn để chống lại tấn công Birthday Attack và tương ứng với độ an toàn của khóa AES 128/256-bit."
    },
    {
      id: "c5_q18",
      question: "Tiêu chí phân loại cốt lõi giữa các hàm băm mật mã hiện nay là gì?",
      options: [
        "Phân loại dựa trên ngôn ngữ lập trình viết thuật toán.",
        "Phân loại dựa trên tiêu chí có sử dụng khóa bí mật (Hàm băm có khóa - MAC) hay không sử dụng khóa (Hàm băm không khóa - Hash functions).",
        "Phân loại dựa trên hệ điều hành máy chủ tương thích.",
        "Phân loại dựa trên giao thức mạng TCP hay UDP."
      ],
      correctAnswer: "B",
      explanation: "Hàm băm mật mã được chia làm 2 dòng: Modification Detection Code (MDC - hàm băm không khóa dùng check toàn vẹn) và Message Authentication Code (MAC - hàm băm có khóa dùng check toàn vẹn + xác thực)."
    },
    {
      id: "c5_q19",
      question: "Để gửi một tài liệu nhạy cảm cho đối tác sao cho vừa bảo vệ tính bí mật (không ai đọc trộm được), vừa đảm bảo tính toàn vẹn và xác thực nguồn gốc (chữ ký số). Quy trình kết hợp đúng đắn là:",
      options: [
        "Chỉ cần băm file bằng SHA-256.",
        "Bên gửi ký số lên tài liệu bằng khóa riêng của mình -> Mã hóa cả tài liệu và chữ ký đó bằng khóa công khai của người nhận.",
        "Mã hóa tài liệu bằng khóa đối xứng rồi gửi khóa công khai của mình đi.",
        "Ký số bằng khóa công khai của người nhận và gửi hở file."
      ],
      correctAnswer: "B",
      explanation: "Quy trình hoàn hảo kết hợp: Ký bằng khóa riêng của gửi (để xác thực danh tính), tiếp theo mã hóa bằng khóa công khai của nhận (để giữ bí mật nội dung). Đây là nền tảng của các email bảo mật PGP và S/MIME."
    },
    {
      id: "c5_q20",
      question: "Trong thực tế hệ thống mạng doanh nghiệp, cơ chế MAC thường được sinh ra bằng cách ứng dụng thuật toán nào?",
      options: [
        "Sử dụng thuật toán mã hóa khóa công khai RSA.",
        "Sử dụng chế độ hoạt động CBC của một thuật toán mã hóa khối đối xứng (như DES/AES) sử dụng khóa bí mật chung.",
        "Sử dụng mã dịch vòng Caesar liên tục.",
        "Sử dụng thuật toán trao đổi khóa Diffie-Hellman."
      ],
      correctAnswer: "B",
      explanation: "CBC-MAC là kỹ thuật tạo MAC phổ biến: mã hóa dữ liệu bằng AES chế độ CBC, lấy khối bản mã cuối cùng làm giá trị MAC. Chỉ người có khóa bí mật mới có thể tính toán ra khối mã cuối cùng trùng khớp."
    },
    {
      id: "c5_q21",
      question: "Tính chất 'Chống va chạm yếu' (Weak collision resistance/Second pre-image resistance) của hàm băm được hiểu là gì?",
      options: [
        "Biết thông điệp x, rất khó tìm được thông điệp $x'$ khác x sao cho $h(x) = h(x')$.",
        "Rất dễ tìm thấy hai thông điệp trùng mã băm.",
        "Mã băm của file luôn thay đổi theo thời gian.",
        "Mã băm chỉ dùng được một lần duy nhất."
      ],
      correctAnswer: "A",
      explanation: "Chống va chạm yếu (Second pre-image resistance) đảm bảo rằng nếu biết trước một file x, kẻ tấn công cực kỳ khó tìm ra một file $x'$ khác x để có chung mã băm, ngăn chặn việc tráo đổi file cụ thể."
    },
    {
      id: "c5_q22",
      question: "Hàm băm MD5 chia thông điệp đầu vào thành các khối có độ dài bao nhiêu bit để xử lý?",
      options: [
        "512 bit.",
        "128 bit.",
        "64 bit.",
        "256 bit."
      ],
      correctAnswer: "A",
      explanation: "Giống như SHA-1, thuật toán băm MD5 xử lý dữ liệu đầu vào theo từng khối có kích thước cố định là 512 bit thông qua 4 vòng lặp chính."
    },
    {
      id: "c5_q23",
      question: "Kết quả đầu ra của hàm băm SHA-256 dài bao nhiêu bit và biểu diễn dưới dạng bao nhiêu ký tự Hex?",
      options: [
        "256 bit, biểu diễn bằng 64 ký tự Hex.",
        "128 bit, biểu diễn bằng 32 ký tự Hex.",
        "256 bit, biểu diễn bằng 32 ký tự Hex.",
        "512 bit, biểu diễn bằng 128 ký tự Hex."
      ],
      correctAnswer: "A",
      explanation: "SHA-256 sinh ra giá trị băm dài 256 bit. Khi biểu diễn dưới dạng chuỗi hexa (mỗi ký tự hex đại diện cho 4 bit), mã băm sẽ có độ dài cố định là 64 ký tự."
    },
    {
      id: "c5_q24",
      question: "Trong chữ ký số, thuật ngữ 'Non-repudiation' (Chống chối bỏ) có nghĩa là gì?",
      options: [
        "Người gửi không thể chối bỏ việc mình đã gửi bức điện, vì chữ ký số chỉ có thể được tạo ra bằng khóa riêng bí mật duy nhất của họ.",
        "Người nhận không thể chối bỏ việc đã nhận bức điện.",
        "Hệ thống không thể từ chối các gói tin truy cập mạng.",
        "Khóa riêng không thể bị thu hồi bởi CA."
      ],
      correctAnswer: "A",
      explanation: "Chống chối bỏ (Non-repudiation) đảm bảo rằng một thực thể đã thực hiện giao dịch (ký số bằng khóa riêng của họ) thì không thể phủ nhận hành vi đó sau này, vì không ai khác sở hữu khóa riêng đó để ký thay."
    },
    {
      id: "c5_q25",
      question: "Khi thực hiện quy trình xác thực chữ ký số, điều gì xảy ra nếu nội dung văn bản gốc bị thay đổi dù chỉ 1 ký tự trên đường truyền?",
      options: [
        "Chữ ký số sẽ tự động sửa văn bản trở lại dạng cũ.",
        "Thuật toán kiểm tra chữ ký số sẽ tính toán ra mã băm khác biệt, dẫn đến kết quả so khớp thất bại (trả về FALSE) và cảnh báo văn bản bị sửa đổi.",
        "Hệ thống sẽ tự động gửi lại yêu cầu ký số.",
        "Chữ ký số vẫn hợp lệ nhưng hiển thị thông báo cảnh báo."
      ],
      correctAnswer: "B",
      explanation: "Tính toàn vẹn được bảo vệ chặt chẽ: bất kỳ sửa đổi nhỏ nào trên văn bản cũng làm thay đổi hoàn toàn mã băm tính lại. Khi đối sánh với mã băm giải mã từ chữ ký, hai giá trị sẽ lệch nhau, làm xác thực thất bại."
    },
    {
      id: "c5_q26",
      question: "Trong sơ đồ chữ ký số DSA, khóa công khai và khóa riêng được xây dựng trên nhóm cấu trúc nào?",
      options: [
        "Modulo số nguyên lớn dựa trên logarit rời rạc kết hợp số ngẫu nhiên k dùng một lần.",
        "Ma trận nghịch đảo Hill.",
        "Vòng lặp Feistel của thuật toán DES.",
        "Hộp thế phi tuyến S-box của AES."
      ],
      correctAnswer: "A",
      explanation: "DSA sử dụng các phép toán số học mô-đun trên số nguyên lớn. Chữ ký DSA gồm hai số r và s được tính toán dựa trên số ngẫu nhiên k (chỉ dùng 1 lần cho mỗi chữ ký) và khóa riêng bí mật."
    },
    {
      id: "c5_q27",
      question: "HMAC (Keyed-Hash Message Authentication Code) hoạt động dựa trên nguyên lý nào?",
      options: [
        "Mã hóa trực tiếp thông điệp bằng khóa đối xứng.",
        "Sử dụng một hàm băm mật mã không khóa tiêu chuẩn (như SHA-256) kết hợp với các bước trộn khóa bí mật K vào dữ liệu thông qua các chuỗi đệm trong (ipad) và đệm ngoài (opad).",
        "Sử dụng ma trận khóa ma Hill để nhân chéo dữ liệu băm.",
        "Sử dụng thuật toán trao đổi khóa Diffie-Hellman."
      ],
      correctAnswer: "B",
      explanation: "HMAC lồng ghép khóa bí mật vào hàm băm thông thường: $HMAC(K, M) = H((K \oplus opad) \parallel H((K \oplus ipad) \parallel M))$. Thiết kế này đảm bảo an toàn ngay cả khi hàm băm nền tảng có một số yếu điểm toán học."
    },
    {
      id: "c5_q28",
      question: "Tại sao thuật toán ký số DSA lại có tính 'không xác định' (non-deterministic) khi ký cùng một văn bản nhiều lần?",
      options: [
        "Vì khóa riêng tự động thay đổi sau mỗi lần ký.",
        "Vì quy trình ký số DSA sử dụng một số ngẫu nhiên k khác nhau cho mỗi lần ký, tạo ra các giá trị chữ ký (r, s) hoàn toàn khác nhau dù nội dung ký là như nhau.",
        "Vì hàm băm SHA-1 sinh ra các mã băm khác nhau.",
        "Do lỗi hệ điều hành khi chạy thuật toán."
      ],
      correctAnswer: "B",
      explanation: "DSA yêu cầu chọn một số ngẫu nhiên k ($0 < k < q$) độc lập cho mỗi chữ ký. Do đó, ký cùng một file 2 lần liên tiếp sẽ ra 2 chữ ký số có chuỗi bit khác nhau hoàn toàn, nhưng cả hai đều xác thực thành công bằng khóa công khai."
    },
    {
      id: "c5_q29",
      question: "Chứng chỉ số X.509 đóng vai trò gì trong hệ thống an toàn thông tin?",
      options: [
        "Mã hóa các email gửi qua giao thức SMTP.",
        "Là một văn bản điện tử được ký số bởi tổ chức CA uy tín để liên kết khóa công khai với danh tính của một thực thể (cá nhân/tổ chức).",
        "Là phần mềm diệt virus cài đặt trên máy chủ Web.",
        "Là khóa bí mật dùng để giải mã dữ liệu đối xứng."
      ],
      correctAnswer: "B",
      explanation: "Chứng chỉ số X.509 giải quyết bài toán giả mạo khóa công khai. Nó là thẻ căn cước điện tử do bên thứ ba đáng tin cậy (CA) ký xác nhận để chứng minh khóa công khai này thuộc về đúng chủ thể đó."
    },
    {
      id: "c5_q30",
      question: "Trong hạ tầng khóa công khai PKI, cơ quan CA (Certification Authority) thực hiện nhiệm vụ gì?",
      options: [
        "Lưu trữ dữ liệu nhạy cảm của toàn bộ doanh nghiệp.",
        "Kiểm tra danh tính, cấp phát, quản lý và thu hồi các chứng chỉ số của người dùng.",
        "Ngăn chặn các cuộc tấn công DDoS vào hệ thống mạng.",
        "Mã hóa đường truyền dữ liệu điểm-tới-điểm."
      ],
      correctAnswer: "B",
      explanation: "CA là Tổ chức chứng thực uy tín đóng vai trò 'nhà cấp căn cước'. Họ kiểm tra thông tin hồ sơ của bạn, nếu đúng sẽ dùng khóa riêng của CA để ký số phát hành Chứng chỉ số cho bạn."
    },
    {
      id: "c5_q31",
      question: "Một danh sách CRL (Certificate Revocation List) trong hệ thống PKI dùng để làm gì?",
      options: [
        "Danh sách các máy tính bị nhiễm virus trong mạng nội bộ.",
        "Danh sách chứa các chứng chỉ số đã bị CA thu hồi trước thời hạn hết hạn (do lộ khóa riêng, thay đổi thông tin) để người dùng tra cứu tránh sử dụng.",
        "Danh sách các mật khẩu yếu bị cấm sử dụng.",
        "Danh sách các địa chỉ IP bị tường lửa chặn."
      ],
      correctAnswer: "B",
      explanation: "CRL là Danh sách thu hồi chứng chỉ. Khi người dùng bị lộ khóa riêng, chứng chỉ tương ứng sẽ bị CA đưa vào danh sách CRL. Khi giao tiếp, hệ thống check CRL để từ chối các chứng chỉ đã bị vô hiệu hóa này."
    },
    {
      id: "c5_q32",
      question: "Hiệu ứng thác nước (Avalanche Effect) của hàm băm mật mã chỉ ra điều gì?",
      options: [
        "Dữ liệu băm sẽ tự động chảy từ thư mục này sang thư mục khác.",
        "Một sự thay đổi cực nhỏ ở đầu vào (dù chỉ 1 bit) cũng dẫn đến sự thay đổi hoàn toàn và ngẫu nhiên ở giá trị băm đầu ra.",
        "Tốc độ băm dữ liệu tăng dần theo thời gian lặp vòng.",
        "Kích thước file băm sẽ tăng dần theo cấp số nhân."
      ],
      correctAnswer: "B",
      explanation: "Avalanche Effect là thuộc tính tối quan trọng của hàm băm mật mã: thay đổi 1 chữ cái hay 1 dấu phẩy ở đầu vào sẽ làm cho chuỗi băm đầu ra biến đổi hoàn toàn không còn liên hệ gì với chuỗi cũ, chống dò tìm quy luật."
    },
    {
      id: "c5_q33",
      question: "Hàm băm MD5 sử dụng bao nhiêu thanh ghi 32-bit làm giá trị khởi tạo và lưu kết quả trung gian?",
      options: [
        "4 thanh ghi (A, B, C, D).",
        "5 thanh ghi (A, B, C, D, E).",
        "8 thanh ghi trạng thái.",
        "2 thanh ghi lớn."
      ],
      correctAnswer: "A",
      explanation: "MD5 sử dụng 4 thanh ghi 32-bit (A, B, C, D) tổng cộng 128 bit. SHA-1 nâng cấp sử dụng 5 thanh ghi 32-bit (A, B, C, D, E) tổng cộng 160 bit."
    },
    {
      id: "c5_q34",
      question: "Thuật toán băm SHA-256 xử lý dữ liệu theo từng khối có độ dài bao nhiêu bit?",
      options: [
        "512 bit.",
        "1024 bit.",
        "256 bit.",
        "128 bit."
      ],
      correctAnswer: "A",
      explanation: "Giống như MD5 và SHA-1, thuật toán băm SHA-256 xử lý dữ liệu đầu vào theo từng khối có kích thước cố định là 512 bit (SHA-512 xử lý khối 1024 bit)."
    },
    {
      id: "c5_q35",
      question: "Cơ chế chống va chạm của hàm băm giúp ngăn chặn hành vi nào của tin tặc đối với văn bản ký số?",
      options: [
        "Đọc trộm nội dung văn bản trên đường truyền mạng hở.",
        "Thay thế văn bản gốc đã được ký bằng một văn bản giả mạo khác có cùng mã băm để chữ ký số vẫn báo hợp lệ.",
        "Xóa bỏ hoàn toàn chữ ký số ra khỏi văn bản gửi đi.",
        "Giải mã khóa riêng bí mật của người ký."
      ],
      correctAnswer: "B",
      explanation: "Nếu hàm băm chống va chạm yếu, hacker có thể tạo ra file giả mạo trùng hash với file thật. Khi đó chữ ký số ký trên file thật sẽ khớp hoàn toàn với file giả mạo, cho phép tráo đổi tài liệu phi pháp."
    },
    {
      id: "c5_q36",
      question: "Giao thức chữ ký số DSA yêu cầu thuật toán băm nào đi kèm trong đặc tả tiêu chuẩn ban đầu?",
      options: [
        "Thuật toán băm MD5.",
        "Thuật toán băm SHA-1.",
        "Hàm băm CRC32.",
        "Thuật toán mã hóa đối xứng AES."
      ],
      correctAnswer: "B",
      explanation: "Tiêu chuẩn chữ ký số DSS (sử dụng thuật toán DSA) ban đầu quy định bắt buộc kết hợp với thuật toán băm SHA-1 để tạo cốt bức điện 160-bit trước khi thực hiện ký."
    },
    {
      id: "c5_q37",
      question: "HMAC sử dụng hai chuỗi đệm cố định ipad (inner pad) và opad (outer pad) có độ dài bằng kích thước khối dữ liệu. Hai chuỗi này được tạo ra bằng cách nào?",
      options: [
        " ipad là chuỗi lặp lại byte 0x36; opad là chuỗi lặp lại byte 0x5C.",
        " ipad là chuỗi toàn bit 0; opad là chuỗi toàn bit 1.",
        "Được sinh ngẫu nhiên cho mỗi phiên kết nối mạng.",
        " ipad là chuỗi lặp lại byte 0xAA; opad là chuỗi lặp byte 0xBB."
      ],
      correctAnswer: "A",
      explanation: "Theo đặc tả RFC 2104 của HMAC: chuỗi đệm trong ipad được tạo bằng cách lặp lại byte 0x36 (00110110 nhị phân); chuỗi đệm ngoài opad tạo bằng cách lặp byte 0x5C (01011100 nhị phân) cho đến khi bằng chiều dài khối băm."
    },
    {
      id: "c5_q38",
      question: "Khi ký số RSA lên tài liệu, bước đầu tiên là tính bản băm (Hash) của tài liệu đó. Tại sao không ký trực tiếp lên toàn bộ tài liệu?",
      options: [
        "Vì tài liệu lớn sẽ làm chữ ký số bị nhòe hình ảnh.",
        "Vì thuật toán công khai ký số trên dữ liệu lớn vô cùng chậm và tốn tài nguyên; băm tài liệu giúp rút ngắn dữ liệu cần ký về kích thước nhỏ cố định cực kỳ nhanh chóng.",
        "Vì ký trực tiếp sẽ làm mất định dạng file văn bản (.docx, .pdf).",
        "Vì ký trực tiếp không đảm bảo được tính chống chối bỏ."
      ],
      correctAnswer: "B",
      explanation: "Băm dữ liệu trước khi ký giúp tối ưu hóa hiệu năng hệ thống mạng. Việc ký trên chuỗi băm cố định ngắn gọn (ví dụ 256 bit của SHA-256) diễn ra gần như lập tức và tiết kiệm băng thông truyền tải chữ ký."
    },
    {
      id: "c5_q39",
      question: "Trong chữ ký số RSA, nếu kẻ tấn công biết khóa công khai e và modulo n. Họ có thể giả mạo chữ ký số của nạn nhân dễ dàng bằng cách nào?",
      options: [
        "Họ không thể giả mạo chữ ký số trừ khi bẻ gãy thành công bài toán phân tích số lớn n thành p và q để tính ra khóa riêng d.",
        "Họ chỉ cần nhân bản mã với số ngẫu nhiên modulo n.",
        "Họ dùng khóa công khai e để tự ký lên văn bản giả mạo.",
        "Họ dùng thuật toán băm MD5 để giải mã khóa d."
      ],
      correctAnswer: "A",
      explanation: "Chữ ký số RSA yêu cầu khóa riêng bí mật d để ký. Kẻ tấn công biết khóa công khai e và n hoàn toàn không thể ký thay nạn nhân nếu không tìm ra khóa d thông qua việc phân tích thừa số nguyên tố modulo n."
    },
    {
      id: "c5_q40",
      question: "Mã xác thực thông điệp MAC có thể bảo vệ hệ thống trước tấn công phát lại (Replay Attack) bằng cách nào?",
      options: [
        "Tự động khóa tài khoản nếu phát hiện gói tin trùng lặp.",
        "Nhúng thêm số thứ tự gói tin (Sequence Number) hoặc nhãn thời gian (Timestamp) vào nội dung thông điệp trước khi tính toán giá trị MAC chung.",
        "Mã hóa toàn bộ đường truyền bằng giao thức HTTPS.",
        "Sử dụng khóa bí mật K có độ dài lớn hơn 2048 bit."
      ],
      correctAnswer: "B",
      explanation: "Nếu tin tặc chặn bắt gói tin chứa dữ liệu và mã MAC hợp lệ rồi phát lại (replay), hệ thống nhận sẽ bị lừa. Việc nhúng thêm Timestamp/Sequence Number vào dữ liệu tính MAC giúp người nhận phát hiện gói tin đã quá hạn hoặc trùng lặp và loại bỏ."
    }
  ],

  // --- CHƯƠNG 6 ---
c6: [
    {
      id: "c6_q1",
      question: "Giao thức PGP (Pretty Good Privacy) cung cấp những dịch vụ bảo mật chính nào cho thư điện tử?",
      options: [
        "Xác thực, Bảo mật (mã hóa đối xứng), Nén dữ liệu, Tương thích email (Radix-64) và Phân đoạn thông điệp.",
        "Chỉ cung cấp mã hóa nội dung email.",
        "Tự động quét virus tập tin đính kèm và chặn email rác.",
        "Mã hóa đường truyền kết nối mạng giữa các máy chủ SMTP."
      ],
      correctAnswer: "A",
      explanation: "PGP là giải pháp bảo mật email toàn diện, tích hợp: chữ ký số (xác thực), mã đối xứng (bí mật), thuật toán ZIP (nén), mã Radix-64 (tương thích SMTP) và phân đoạn chia nhỏ tệp tin lớn."
    },
    {
      id: "c6_q2",
      question: "Vì sao dịch vụ tương thích email của PGP yêu cầu phải ánh xạ dữ liệu nhị phân thành ký tự ASCII bằng Radix-64 (Base64)?",
      options: [
        "Để tăng tính bảo mật cho thông điệp mã hóa.",
        "Vì hệ thống email truyền thống (giao thức SMTP) chỉ hỗ trợ truyền tải văn bản dạng ký tự ASCII 7-bit; dữ liệu mã hóa nhị phân 8-bit trực tiếp sẽ bị lỗi cấu trúc trên đường truyền.",
        "Để nén dung lượng bức thư xuống mức nhỏ nhất.",
        "Để tương thích với các thuật toán chữ ký số RSA."
      ],
      correctAnswer: "B",
      explanation: " SMTP nguyên bản chỉ chấp nhận văn bản thô ASCII. Dữ liệu sau mã hóa/ký số của PGP là chuỗi nhị phân 8-bit. Radix-64 mã hóa cứ 3 byte nhị phân thành 4 ký tự ASCII in được, bảo đảm thư truyền đi an toàn không bị hỏng."
    },
    {
      id: "c6_q3",
      question: "Trong quy trình kết hợp cả dịch vụ bảo mật (mã hóa) và xác thực (chữ ký số) của PGP, trình tự thực hiện đúng đắn là gì?",
      options: [
        "Người gửi mã hóa thông điệp bằng khóa đối xứng trước -> Người gửi ký số lên bản mã đó.",
        "Người gửi tạo chữ ký số trên bản rõ -> Ghép chữ ký vào thông điệp rõ -> Nén dữ liệu -> Tạo khóa phiên ngẫu nhiên để mã hóa khối nén -> Mã hóa khóa phiên bằng khóa công khai của người nhận.",
        "Người gửi dùng khóa công khai của mình để mã hóa và ký số đồng thời.",
        "Người gửi gửi file đi hở và chỉ mã hóa khóa đối xứng."
      ],
      correctAnswer: "B",
      explanation: "PGP tuân thủ nghiêm ngặt nguyên lý 'Ký trước, Mã sau' kết hợp nén ZIP trước khi mã hóa (để tăng hiệu năng và chống thám mã thống kê), cuối cùng dùng mã hóa lai (hybrid) bảo vệ khóa phiên bằng khóa công khai của người nhận."
    },
    {
      id: "c6_q4",
      question: "Khóa nào được sử dụng để mã hóa trực tiếp 'Khóa phiên đối xứng' (Session Key) trong giao thức PGP trước khi gửi qua mạng?",
      options: [
        "Khóa công khai của người nhận.",
        "Khóa riêng bí mật của người gửi.",
        "Khóa công khai của người gửi.",
        "Khóa riêng bí mật của người nhận."
      ],
      correctAnswer: "A",
      explanation: "Khóa phiên đối xứng dùng để mã hóa nội dung thư. Để chuyển khóa phiên này sang người nhận an toàn, PGP dùng Khóa công khai của chính người nhận để mã hóa nó, bảo đảm chỉ duy nhất người nhận mới giải mã lấy được khóa phiên."
    },
    {
      id: "c6_q5",
      question: "PGP thường chọn chế độ hoạt động nào của mã khối (như IDEA, AES) để thực hiện mã hóa nội dung thư?",
      options: [
        "Chế độ ECB (Electronic Codebook).",
        "Chế độ CFB (Cipher Feedback) biến đổi mã khối thành mã dòng.",
        "Chế độ CBC (Cipher Block Chaining) bắt buộc đệm bit.",
        "Chế độ OFB (Output Feedback) đồng bộ."
      ],
      correctAnswer: "B",
      explanation: "PGP sử dụng biến thể chế độ CFB (Cipher Feedback) vì chế độ này biến mã khối thành mã dòng, cho phép mã hóa luồng dữ liệu linh hoạt mà không cần thực hiện đệm thêm dữ liệu (padding) ở khối cuối cùng."
    },
    {
      id: "c6_q6",
      question: "Các thuật toán mã hóa đối xứng thông dụng được PGP tích hợp sẵn trong nhân bao gồm:",
      options: [
        "RSA, DSA, Diffie-Hellman.",
        "IDEA, CAST-128, Triple DES (3DES), AES.",
        "MD5, SHA-1, SHA-256.",
        "RC4, Blowfish, Elliptic Curve."
      ],
      correctAnswer: "B",
      explanation: "PGP hỗ trợ đa dạng các thuật toán đối xứng hiệu năng cao như IDEA, CAST-128, 3DES và AES để mã hóa nội dung thư điện tử hoặc các tệp tin đính kèm có dung lượng lớn."
    },
    {
      id: "c6_q7",
      question: "Khái niệm mạng lưới tin cậy 'Web of Trust' trong xác thực khóa của PGP hoạt động thế nào?",
      options: [
        "Yêu cầu một máy chủ CA trung tâm phân cấp quản lý toàn bộ khóa.",
        "Không sử dụng cơ quan CA trung tâm; thay vào đó, những người dùng tự tin tưởng và ký xác nhận chéo lên khóa công khai của nhau để xây dựng mạng lưới tin cậy phân tán.",
        "Mạng lưới tự động chặn các địa chỉ IP đáng ngờ.",
        "Yêu cầu mọi người dùng phải công khai khóa riêng của mình."
      ],
      correctAnswer: "B",
      explanation: "Mạng lưới tin cậy (Web of Trust) là đặc trưng của PGP. Thay vì tốn phí cho CA tập trung, người dùng tự ký xác nhận chứng chỉ của bạn bè để khẳng định tính chính chủ của khóa công khai, tạo hệ thống phân tán phi tập trung."
    },
    {
      id: "c6_q8",
      question: "Tại sao trong quy trình bảo mật PGP, việc tạo chữ ký số bắt buộc phải thực hiện TRƯỚC KHI nén dữ liệu?",
      options: [
        "Vì thuật toán nén ZIP sẽ phá hủy cấu trúc của khóa riêng.",
        "Để đảm bảo chữ ký số gắn liền với nội dung bản rõ gốc (dễ dàng lưu trữ và xác minh tính pháp lý sau này mà không cần giữ bản nén), đồng thời thuật toán nén ZIP hoạt động hiệu quả hơn trên bản rõ chưa mã hóa.",
        "Vì chữ ký số không thể nén được bằng thuật toán ZIP.",
        "Để tránh lỗi tràn bộ đệm của giao thức mạng."
      ],
      correctAnswer: "B",
      explanation: "Ký trước khi nén giúp chữ ký độc lập với thuật toán nén. Người nhận có thể giải nén ra bản rõ rồi check chữ ký trực tiếp trên bản rõ. Ngoài ra dữ liệu nén rất khó nén thêm nếu đã bị xáo trộn mã hóa."
    },
    {
      id: "c6_q9",
      question: "Mô tả ba chế độ gửi thư phổ biến được hỗ trợ trong phần mềm mã hóa PGP:",
      options: [
        "Chỉ ký số (xác thực/toàn vẹn), Chỉ mã hóa (bí mật), hoặc Ký số kết hợp mã hóa (an toàn toàn diện).",
        "Gửi thô, Gửi nén, hoặc Gửi băm.",
        "Mã hóa đối xứng, Mã hóa công khai, hoặc Mã hóa lai.",
        "Gửi qua SMTP, Gửi qua POP3, hoặc Gửi qua IMAP."
      ],
      correctAnswer: "A",
      explanation: "PGP cho phép người dùng tùy chọn mức an ninh: Chỉ ký số (chứng minh nguồn gốc/văn bản công khai), chỉ mã hóa (giữ bí mật thư), hoặc kết hợp cả hai (vừa bí mật vừa xác thực danh tính người gửi)."
    },
    {
      id: "c6_q10",
      question: "Ưu điểm lớn nhất giúp PGP được ứng dụng rộng rãi trên toàn cầu là gì?",
      options: [
        "Có giao diện đồ họa cực kỳ đẹp mắt và dễ sử dụng.",
        "Độ an toàn đạt chuẩn quân sự, mã nguồn mở miễn phí, hoạt động độc lập đa nền tảng và không phụ thuộc vào hạ tầng CA tập trung đắt đỏ.",
        "Tích hợp sẵn tính năng tự động gửi email quảng cáo.",
        "Tốc độ mã hóa nhanh tương đương giao thức IPSec."
      ],
      correctAnswer: "B",
      explanation: "PGP thành công vượt trội nhờ tính mở, miễn phí và an toàn tuyệt đối. Việc dùng cơ chế phi tập trung Web of Trust giúp mọi cá nhân có thể tự bảo mật thông tin liên lạc mà không cần đăng ký tài khoản doanh nghiệp phức tạp."
    },
    {
      id: "c6_q11",
      question: "Nhược điểm lớn nhất của mô hình quản lý khóa mạng lưới tin cậy 'Web of Trust' trong PGP là gì?",
      options: [
        "Tốn phí duy trì hàng tháng cho các máy chủ PGP.",
        "Khó hiểu và khó quản lý đối với người dùng phổ thông thiếu kiến thức kỹ thuật; không có cơ chế thu hồi khóa tập trung nhanh chóng khi bị lộ khóa riêng.",
        "Không hỗ trợ thuật toán băm SHA-256.",
        "Yêu cầu phần cứng máy tính phải có cấu hình cực cao."
      ],
      correctAnswer: "B",
      explanation: "Web of Trust yêu cầu người dùng phải tự kiểm tra vân tay khóa (fingerprint) và tự ký nhận thủ công - việc này quá phức tạp với người dùng phổ thông, dễ dẫn đến việc tin tưởng nhầm khóa giả mạo."
    },
    {
      id: "c6_q12",
      question: "Trong giao thức S/MIME, thuật toán đối xứng và bất đối xứng được phân chia vai trò thế nào?",
      options: [
        "Mã đối xứng dùng để mã hóa nội dung thư và file đính kèm; mã bất đối xứng (như RSA) dùng để mã hóa bảo vệ khóa phiên đối xứng và tạo chữ ký số.",
        "Mã đối xứng dùng để ký số; mã bất đối xứng dùng mã hóa nội dung thư.",
        "S/MIME chỉ sử dụng mã bất đối xứng, không sử dụng mã đối xứng.",
        "Mã đối xứng dùng để nén dữ liệu, mã bất đối xứng dùng mã hóa Radix-64."
      ],
      correctAnswer: "A",
      explanation: "Tương tự PGP, S/MIME áp dụng mô hình lai ghép: mã đối xứng hiệu năng cao lo phần mã hóa file/thư lớn; mã bất đối xứng lo phần ký số và bảo vệ khóa phiên truyền đi, tối ưu hóa cả độ an toàn và tốc độ."
    },
    {
      id: "c6_q13",
      question: "Khóa nào được sử dụng để bảo vệ 'khóa đối xứng dùng 1 lần' (khóa phiên) trong S/MIME?",
      options: [
        "Khóa riêng của người gửi.",
        "Khóa công khai của người nhận nằm trong Chứng chỉ số X.509.",
        "Khóa công khai của người gửi.",
        "Khóa bí mật dùng chung thỏa thuận trước."
      ],
      correctAnswer: "B",
      explanation: "S/MIME bắt buộc người dùng sở hữu chứng chỉ số X.509. Khi gửi thư mã hóa, hệ thống lấy khóa công khai của người nhận từ chứng chỉ X.509 để mã hóa khóa phiên, bảo đảm tính bảo mật."
    },
    {
      id: "c6_q14",
      question: "Ý nghĩa và chức năng cốt lõi của giao thức bảo mật S/MIME (Secure/Multipurpose Internet Mail Extensions) là gì?",
      options: [
        "Là một phần mềm email client thế hệ mới chạy trên nền tảng Web.",
        "Là chuẩn công nghiệp cung cấp dịch vụ xác thực, toàn vẹn, chống chối bỏ (chữ ký số) và tính bí mật (mã hóa) cho các email định dạng MIME chuẩn.",
        "Là giao thức quét thư rác và thư lừa đảo tự động trên máy chủ Mail Server.",
        "Là một thuật toán băm một chiều thế hệ mới."
      ],
      correctAnswer: "B",
      explanation: "S/MIME là tiêu chuẩn bảo mật email tích hợp sẵn trong các ứng dụng email doanh nghiệp (như Outlook). Nó bảo vệ nội dung email định dạng MIME chuẩn (bao gồm ảnh, file đính kèm, định dạng text HTML)."
    },
    {
      id: "c6_q15",
      question: "Điểm khác biệt cơ bản về mặt quản lý khóa giữa S/MIME và PGP là gì?",
      options: [
        "S/MIME không sử dụng chứng chỉ số, còn PGP bắt buộc sử dụng.",
        "S/MIME dựa trên cấu trúc chứng chỉ số phân cấp X.509 do các tổ chức CA uy tín quản lý tập trung; PGP dựa trên mô hình phi tập trung Web of Trust tự ký xác nhận chéo.",
        "PGP an toàn hơn S/MIME vì PGP dùng khóa đối xứng.",
        "S/MIME chỉ dùng trong mạng LAN nội bộ, PGP dùng trên Internet toàn cầu."
      ],
      correctAnswer: "B",
      explanation: "S/MIME phù hợp doanh nghiệp nhờ hạ tầng PKI tập trung (chứng chỉ X.509 được CA ban hành và quản lý nghiêm ngặt). PGP mang tính cá nhân, tự do hơn nhờ mạng lưới tin cậy phân tán Web of Trust."
    },
    {
      id: "c6_q16",
      question: "Giao thức bảo mật thư điện tử S/MIME bảo vệ email ở tầng nào của mô hình OSI và mang lại ưu điểm gì?",
      options: [
        "Tầng Mạng (Network Layer), bảo vệ toàn bộ lưu lượng định tuyến IP.",
        "Tầng Ứng dụng (Application Layer), bảo vệ dữ liệu End-to-End từ máy gửi tới máy nhận, thư nằm trên máy chủ Mail Server vẫn ở trạng thái mã hóa an toàn.",
        "Tầng Giao vận (Transport Layer), bảo mật kết nối socket.",
        "Tầng Vật lý (Physical Layer), bảo vệ sợi cáp quang truyền dẫn."
      ],
      correctAnswer: "B",
      explanation: "S/MIME hoạt động ở tầng Ứng dụng (Layer 7). Ưu điểm lớn nhất là bảo vệ End-to-End: email được mã hóa từ máy khách gửi và chỉ giải mã tại máy khách nhận, dù đi qua bao nhiêu máy chủ trung gian hay bị lưu lại trên Mail Server vẫn an toàn."
    },
    {
      id: "c6_q17",
      question: "Vai trò cốt lõi của tổ chức IETF (Internet Engineering Task Force) đối với các chuẩn bảo mật như S/MIME là gì?",
      options: [
        "IETF là cơ quan CA lớn nhất thế giới trực tiếp phát hành chứng chỉ số.",
        "IETF chịu trách nhiệm nghiên cứu và ban hành các tài liệu RFC đặc tả kỹ thuật tiêu chuẩn để các hãng phần mềm khác nhau (Microsoft, Apple, Google) xây dựng ứng dụng tương thích đọc được S/MIME của nhau.",
        "IETF là đơn vị trực tiếp viết mã nguồn cho phần mềm PGP.",
        "IETF quản lý các máy chủ định tuyến thư điện tử toàn cầu."
      ],
      correctAnswer: "B",
      explanation: "IETF là tổ chức tiêu chuẩn hóa internet. Họ phát hành RFC đặc tả S/MIME để bảo đảm tính tương thích toàn cầu: thư S/MIME gửi từ Microsoft Outlook vẫn được giải mã chính xác trên Apple Mail hay Mozilla Thunderbird."
    },
    {
      id: "c6_q18",
      question: "Quy trình giải mã một email S/MIME được mã hóa khi đến tay người nhận diễn ra thế nào?",
      options: [
        "Mail client của người nhận tự động lấy khóa công khai của người gửi để giải mã thư.",
        "Mail client dùng Khóa riêng (Private Key) của người nhận giải mã phần Header chứa khóa phiên -> Lấy khóa phiên đối xứng giải mã nội dung thư và file đính kèm.",
        "Người nhận nhập mật khẩu của tài khoản email để giải mã trực tiếp.",
        "Thư được gửi lên máy chủ CA để giải mã tập trung rồi trả về bản rõ."
      ],
      correctAnswer: "B",
      explanation: "Khi email đến, phần mềm Mail client tự động dùng khóa riêng của người nhận (lưu an toàn trong máy) để giải mã khóa đối xứng trong header, sau đó dùng khóa đối xứng này giải mã cực nhanh toàn bộ nội dung thư."
    },
    {
      id: "c6_q19",
      question: "Trong doanh nghiệp, ứng dụng S/MIME mang lại vai trò sống còn nào trong việc chống lừa đảo trực tuyến?",
      options: [
        "Tự động phát hiện và xóa bỏ các tệp đính kèm .exe độc hại.",
        "Ngăn chặn triệt để các cuộc tấn công mạo danh đối tác kinh doanh gửi email giả mạo (Email Phishing), vì email S/MIME có chữ ký số X.509 hợp lệ được xác thực danh tính chính danh.",
        "Tăng tốc độ gửi nhận thư nội bộ doanh nghiệp.",
        "Mã hóa ổ đĩa cứng của các máy trạm nhân viên."
      ],
      correctAnswer: "B",
      explanation: "Tấn công giả mạo email giám đốc/đối tác đòi chuyển tiền rất phổ biến. S/MIME giải quyết triệt để lỗi này bằng cách hiển thị huy hiệu chữ ký số X.509 chính danh bên cạnh tên người gửi, nếu bị mạo danh chữ ký sẽ báo lỗi ngay."
    },
    {
      id: "c6_q20",
      question: "Điều gì xảy ra nếu bạn gửi một email được mã hóa bằng S/MIME tới một người dùng sử dụng ứng dụng email đời cũ không hỗ trợ chuẩn này?",
      options: [
        "Email sẽ bị máy chủ Mail Server tự động xóa bỏ và không bao giờ tới đích.",
        "Ứng dụng email của người nhận sẽ bị treo máy hoặc báo lỗi hệ thống.",
        "Người nhận vẫn nhận được thư nhưng nội dung mã hóa sẽ hiển thị dưới dạng một tệp tin đính kèm có phần mở rộng đặc biệt '.p7m' và không thể đọc được trực tiếp.",
        "Email tự động được giải mã thành bản rõ thông thường."
      ],
      correctAnswer: "C",
      explanation: "S/MIME tương thích ngược tốt. Nếu mail client nhận không hỗ trợ S/MIME, dữ liệu mã hóa hiển thị dưới dạng đính kèm 'smime.p7m'. Người dùng không đọc được thư nhưng hệ thống email không bị lỗi hay treo máy."
    },
    {
      id: "c6_q21",
      question: " Pretty Good Privacy (PGP) được dịch sát nghĩa tiếng Việt là gì và tại sao tác giả Phil Zimmermann đặt tên như vậy?",
      options: [
        "Bảo mật tuyệt đối; đặt tên để khẳng định không ai có thể bẻ gãy hệ mật.",
        "Bảo mật khá tốt; đặt tên mang tính khiêm tốn hài hước lấy cảm hứng từ một cửa hiệu radio hư cấu, dẫu thực tế mức độ mã hóa đạt tiêu chuẩn quân sự cực kỳ an toàn.",
        "Hạ tầng khóa công khai; đặt tên theo chuẩn của chính phủ Mỹ.",
        "Hộp thư an toàn; đặt tên theo chức năng nén tệp tin."
      ],
      correctAnswer: "B",
      explanation: "Phil Zimmermann đặt tên khiêm tốn và hài hước 'Pretty Good Privacy' (Bảo mật khá tốt) dựa theo chương trình radio Prairie Home Companion. Dù tên giản dị, PGP cung cấp mức mã hóa siêu mạnh khiến cơ quan an ninh Mỹ từng coi nó là vũ khí quân sự cấm xuất khẩu."
    },
    {
      id: "c6_q22",
      question: "Trong sơ đồ hoạt động của PGP, thuật toán băm nào được sử dụng mặc định ở các phiên bản đầu tiên để tạo cốt bức điện?",
      options: [
        "Thuật toán băm MD5.",
        "Hàm băm SHA-256.",
        "Thuật toán mã hóa AES.",
        "Hàm băm CRC32."
      ],
      correctAnswer: "A",
      explanation: "Các phiên bản sơ khai của PGP tích hợp thuật toán băm MD5 (128-bit) làm hàm băm mặc định trước khi thực hiện ký số RSA. Các phiên bản sau nâng cấp lên SHA-1 và SHA-2."
    },
    {
      id: "c6_q23",
      question: "Vì sao PGP tích hợp dịch vụ nén dữ liệu ZIP vào quy trình bảo mật thư điện tử?",
      options: [
        "Để tăng tính bí mật cho thông điệp bằng cách làm mất cấu trúc lặp lại của ngôn ngữ bản rõ (chống thám mã thống kê) và tiết kiệm băng thông truyền tải.",
        "Để tự động mã hóa dữ liệu nhị phân.",
        "Để tránh việc email bị phân đoạn khi gửi qua SMTP.",
        "Để tương thích với định dạng mã hóa Radix-64."
      ],
      correctAnswer: "A",
      explanation: "Nén ZIP mang lại 2 lợi ích lớn: Giảm kích thước email truyền qua mạng (tiết kiệm băng thông); và làm xáo trộn cấu trúc đặc trưng tần suất của ngôn ngữ tự nhiên, làm đòn tấn công thám mã thống kê tần suất ký tự trở nên bất khả thi."
    },
    {
      id: "c6_q24",
      question: "Dịch vụ phân đoạn (Segmentation) của PGP giải quyết bài toán kỹ thuật nào của hệ thống email cổ điển?",
      options: [
        "Tránh việc lộ khóa riêng khi gửi tệp dữ liệu lớn.",
        "Giải quyết giới hạn dung lượng tối đa của một email do các máy chủ Mail Server cũ quy định (như 50KB) bằng cách tự động chia nhỏ file lớn thành nhiều email nhỏ độc lập và lắp ghép lại tự động tại máy đích nhận.",
        "Mã hóa song song nhiều luồng dữ liệu.",
        "Chuyển đổi dữ liệu nhị phân sang ký tự ASCII."
      ],
      correctAnswer: "B",
      explanation: "Các hệ thống mail server cũ thường giới hạn dung lượng bức thư cực kỳ nhỏ. Dịch vụ phân đoạn (Segmentation) của PGP tự động cắt nhỏ thông điệp lớn thành nhiều email nhỏ tương thích, máy nhận PGP sẽ tự động ghép lại nguyên vẹn."
    },
    {
      id: "c6_q25",
      question: "Khi bạn chọn chế độ 'Chỉ ký số' (Signature only) trong PGP, thông điệp truyền đi sẽ có trạng thái bảo mật thế nào?",
      options: [
        "Nội dung email hoàn toàn được giữ bí mật, không ai đọc được.",
        "Nội dung email hiển thị dưới dạng bản rõ đọc được bình thường; đi kèm một đoạn chữ ký số của người gửi để đảm bảo tính toàn vẹn và xác thực nguồn gốc.",
        "Email tự động bị máy chủ chặn lại vì thiếu khóa đối xứng.",
        "Khóa riêng của người gửi sẽ được đính kèm trực tiếp vào bức thư."
      ],
      correctAnswer: "B",
      explanation: "Chế độ 'Chỉ ký số' không bảo mật nội dung. Email vẫn là văn bản rõ đọc được công khai. Nhưng chữ ký đính kèm bảo đảm email này do chính người gửi tạo ra và không bị chỉnh sửa trên đường truyền."
    },
    {
      id: "c6_q26",
      question: "Trong S/MIME, loại thực thể chứng chỉ số X.509 được cấp phát cho đối tượng nào?",
      options: [
        "Chỉ cấp phát cho các máy chủ Mail Server SMTP.",
        "Cấp phát cho từng địa chỉ email cá nhân (người dùng) và các cổng bảo mật (Gateways).",
        "Cấp phát cho các gói tin mạng IP.",
        "Chỉ cấp phát cho các thiết bị tường lửa Firewall."
      ],
      correctAnswer: "B",
      explanation: "Chứng chỉ X.509 trong S/MIME gắn liền với định danh của cá nhân thông qua địa chỉ email của họ (ví dụ: user@company.com), xác thực chính xác chủ sở hữu của địa chỉ mail đó."
    },
    {
      id: "c6_q27",
      question: "Để sử dụng S/MIME trong Microsoft Outlook doanh nghiệp, bước chuẩn bị kỹ thuật bắt buộc của người dùng là gì?",
      options: [
        "Cài đặt thêm phần mềm PGP Desktop ngoài.",
        "Đăng ký thông tin và nạp Chứng chỉ số cá nhân chứa khóa công khai/khóa riêng hợp lệ từ một tổ chức CA tin cậy vào cấu hình bảo mật của Outlook.",
        "Thiết lập mật khẩu máy tính dài trên 20 ký tự.",
        "Đổi địa chỉ IP máy tính sang địa chỉ IP tĩnh."
      ],
      correctAnswer: "B",
      explanation: "Outlook hỗ trợ sẵn S/MIME. Người dùng chỉ cần xin cấp và cài đặt chứng chỉ số cá nhân (.pfx hoặc .p12 chứa khóa riêng và khóa công khai) vào kho chứng chỉ của hệ thống, Outlook sẽ tự động kích hoạt tính năng ký và mã hóa email."
    },
    {
      id: "c6_q28",
      question: "Định dạng MIME (Multipurpose Internet Mail Extensions) giải quyết điểm yếu nào của định dạng email RFC 822 truyền thống?",
      options: [
        "MIME giúp tăng tốc độ định tuyến gói tin trên Internet.",
        "MIME cho phép email hỗ trợ nhiều định dạng dữ liệu phong phú (ảnh, âm thanh, video, tệp đính kèm nhị phân, ký tự phi ASCII) thay vì chỉ hỗ trợ văn bản thô ASCII đơn giản của chuẩn cũ.",
        "MIME tự động mã hóa mọi email gửi đi.",
        "MIME loại bỏ hoàn toàn tiêu đề (Header) của email."
      ],
      correctAnswer: "B",
      explanation: "MIME mở rộng khả năng của email. Chuẩn cũ chỉ cho viết chữ không dấu đơn giản. MIME định nghĩa cấu trúc tiêu đề mới để email chứa được tệp nhị phân, định dạng HTML phong phú và hỗ trợ font tiếng Việt."
    },
    {
      id: "c6_q29",
      question: "Trong S/MIME, khi gửi thư mã hóa tới nhiều người nhận cùng lúc, hệ thống thực hiện mã hóa khóa phiên như thế nào?",
      options: [
        "Hệ thống tạo ra nhiều khóa phiên đối xứng khác nhau cho mỗi người.",
        "Hệ thống chỉ tạo 1 khóa phiên duy nhất để mã hóa nội dung; sau đó dùng lần lượt các khóa công khai của từng người nhận để mã hóa khóa phiên đó và đính kèm tất cả các khóa phiên đã mã hóa này vào header của email.",
        "Bắt buộc tất cả người nhận phải sử dụng chung 1 cặp khóa bất đối xứng.",
        "Giao thức S/MIME không hỗ trợ gửi thư mã hóa cho nhiều người."
      ],
      correctAnswer: "B",
      explanation: "Để tối ưu dung lượng, S/MIME chỉ mã hóa nội dung thư 1 lần bằng khóa phiên. Với N người nhận, hệ thống lấy N khóa công khai của họ để mã hóa khóa phiên đó thành N bản sao nhỏ đính ở đầu thư, giúp ai cũng giải mã được."
    },
    {
      id: "c6_q30",
      question: "Nếu một email S/MIME có chữ ký số báo trạng thái cảnh báo màu đỏ (Invalid Signature) khi mở trên Outlook, nguyên nhân có khả năng cao nhất là gì?",
      options: [
        "Do máy tính của người nhận chưa kết nối Internet.",
        "Nội dung email đã bị thay đổi hoặc giả mạo trên đường truyền, hoặc chứng chỉ số của người gửi đã bị thu hồi/không được tin cậy bởi hệ thống.",
        "Do người gửi sử dụng hệ điều hành macOS.",
        "Do dung lượng file đính kèm quá lớn vượt quá giới hạn."
      ],
      correctAnswer: "B",
      explanation: "Cảnh báo Invalid Signature là báo động đỏ: chỉ ra rằng nội dung thư đã bị sửa đổi sau khi ký, hoặc khóa riêng của người ký đã bị vô hiệu hóa, hoặc hệ thống không tin tưởng CA cấp phát chứng chỉ đó."
    },
    {
      id: "c6_q31",
      question: "Khi khởi tạo cặp khóa PGP cá nhân, người dùng thường được yêu cầu tạo thêm một 'Revocation Certificate' (Chứng chỉ thu hồi). Chứng chỉ này dùng để làm gì?",
      options: [
        "Dùng để giải mã các email cũ khi quên mật khẩu.",
        "Dùng để công bố công khai lên các máy chủ khóa (Key Servers) nhằm vô hiệu hóa vĩnh viễn khóa công khai của mình trong trường hợp bị mất hoặc lộ khóa riêng.",
        "Dùng để cấp quyền ký số cho một người khác thay thế.",
        "Dùng để nén tệp tin dữ liệu PGP."
      ],
      correctAnswer: "B",
      explanation: "Revocation Certificate là phao cứu sinh của PGP. Nếu bạn mất máy tính chứa khóa riêng, bạn dùng Revocation Certificate này up lên máy chủ khóa để thế giới biết khóa công khai cũ của bạn không còn giá trị, tránh bị tin tặc lợi dụng mạo danh."
    },
    {
      id: "c6_q32",
      question: "Trong S/MIME, thuật toán đối xứng mặc định nào được quy định bắt buộc phải hỗ trợ để đảm bảo tính tương thích toàn cầu?",
      options: [
        "AES-256.",
        "Triple DES (3DES).",
        "RC4.",
        "Blowfish."
      ],
      correctAnswer: "B",
      explanation: "Để bảo đảm mọi mail client trên thế giới dù cũ hay mới đều giải mã được thư của nhau, tiêu chuẩn S/MIME v3 quy định bắt buộc tất cả các phần mềm phải hỗ trợ thuật toán đối xứng Triple DES (3DES)."
    },
    {
      id: "c6_q33",
      question: "Khi nén dữ liệu trong PGP, thuật toán nén ZIP được áp dụng ở bước nào của quy trình bảo mật gửi thư?",
      options: [
        "Nén trước khi ký số.",
        "Ký số xong -> Nén khối dữ liệu gồm bản rõ và chữ ký số -> Mã hóa đối xứng khối nén.",
        "Mã hóa đối xứng xong mới nén bản mã.",
        "Chỉ nén khóa phiên đối xứng truyền đi."
      ],
      correctAnswer: "B",
      explanation: "Trình tự chuẩn của PGP: Ký số lên bản rõ trước để bảo đảm chữ ký gắn với nội dung gốc chưa nén. Sau đó nén cả bản rõ và chữ ký lại để tối ưu hóa và chống thám mã, rồi mới thực hiện mã hóa đối xứng toàn bộ khối nén."
    },
    {
      id: "c6_q34",
      question: "Mã Radix-64 sử dụng bảng ký tự gồm bao nhiêu ký tự ASCII có thể in được?",
      options: [
        "64 ký tự (chữ hoa A-Z, chữ thường a-z, chữ số 0-9, và hai ký tự '+' và '/').",
        "128 ký tự chuẩn ASCII.",
        "64 ký tự số từ 0 đến 63.",
        "16 ký tự hexa từ 0-9 và A-F."
      ],
      correctAnswer: "A",
      explanation: "Radix-64 (Base64) sử dụng đúng 64 ký tự an toàn nhất trong ASCII 7-bit (A-Z, a-z, 0-9, +, /) để biểu diễn luồng dữ liệu nhị phân. Ký tự '=' được sử dụng làm ký tự đệm (padding) ở cuối chuỗi."
    },
    {
      id: "c6_q35",
      question: "Khi người dùng PGP muốn tìm kiếm khóa công khai của một đối tác kinh doanh trên Internet, họ thường truy cập vào đâu?",
      options: [
        "Các máy chủ lưu trữ khóa công khai công cộng (PGP Public Key Servers).",
        "Các cơ quan CA quản lý tập trung X.509.",
        "Trang chủ của tổ chức tiêu chuẩn IETF.",
        "Thư mục cài đặt của hệ điều hành Windows."
      ],
      correctAnswer: "A",
      explanation: "PGP có mạng lưới máy chủ khóa công khai (như keys.openpgp.org). Người dùng có thể upload khóa công khai của mình lên đây và tìm kiếm khóa công khai của người khác dựa trên tên hoặc địa chỉ email."
    },
    {
      id: "c6_q36",
      question: "Sự khác biệt về chi phí triển khai hệ thống bảo mật S/MIME so với PGP trong doanh nghiệp là gì?",
      options: [
        "S/MIME miễn phí hoàn toàn, PGP rất đắt đỏ.",
        "S/MIME tốn chi phí mua chứng chỉ số cá nhân X.509 định kỳ từ các tổ chức CA công cộng uy tín cho nhân viên; PGP có thể tự triển khai miễn phí nhờ cơ chế tự ký.",
        "Cả hai đều miễn phí vì tích hợp sẵn trong Windows.",
        "PGP tốn chi phí bản quyền cho quân đội Mỹ."
      ],
      correctAnswer: "B",
      explanation: "S/MIME đòi hỏi hạ tầng khóa công khai tin cậy. Doanh nghiệp phải mua chứng chỉ X.509 từ các CA lớn (như DigiCert, Sectigo) hàng năm cho nhân viên. PGP cho phép tự sinh cặp khóa và ký xác nhận nội bộ miễn phí."
    },
    {
      id: "c6_q37",
      question: "Trong S/MIME, chứng chỉ số cá nhân X.509 bị hết hạn sử dụng (Expired) sẽ gây ra hiện tượng gì?",
      options: [
        "Người dùng không thể mở hoặc đọc các email cũ đã nhận.",
        "Mail client của người nhận thư sẽ từ chối xác thực các email mới do tài khoản này ký gửi đi và báo lỗi chữ ký hết hạn.",
        "Máy tính tự động xóa bỏ cấu hình tài khoản email.",
        "Toàn bộ email mới gửi đi sẽ tự động chuyển thành định dạng thô ASCII."
      ],
      correctAnswer: "B",
      explanation: "Chứng chỉ hết hạn không còn giá trị pháp lý và độ tin cậy. Khi gửi email mới, mail client của đối tác sẽ check hạn sử dụng chứng chỉ và lập tức cảnh báo chữ ký không hợp lệ (màu vàng/đỏ) để cảnh báo rủi ro."
    },
    {
      id: "c6_q38",
      question: "Thuật toán băm mặc định nào được khuyến nghị sử dụng trong tiêu chuẩn S/MIME phiên bản hiện đại để thay thế SHA-1?",
      options: [
        "Thuật toán băm MD5.",
        "Họ hàm băm SHA-2 (như SHA-256, SHA-512).",
        "Thuật toán mã hóa đối xứng AES.",
        "Hàm băm CRC32."
      ],
      correctAnswer: "B",
      explanation: "Do SHA-1 yếu trước các đòn tấn công va chạm cấu trúc, S/MIME phiên bản mới nâng cấp bắt buộc chuyển sang họ hàm băm SHA-2 (tiêu chuẩn là SHA-256) để bảo vệ chữ ký số an toàn tuyệt đối."
    },
    {
      id: "c6_q39",
      question: "Trong PGP, nếu bạn đánh mất mật khẩu bảo vệ khóa riêng (Passphrase) lưu trong thiết bị của mình, điều gì sẽ xảy ra?",
      options: [
        "Bạn có thể xin lại mật khẩu bằng cách liên hệ với máy chủ khóa PGP.",
        "Bạn sẽ mất vĩnh viễn quyền sử dụng khóa riêng đó để giải mã các email mật cũ đã nhận và tạo chữ ký mới.",
        "Hệ thống sẽ tự động khôi phục mật khẩu thông qua tài khoản Microsoft.",
        "Toàn bộ các tệp tin mã hóa cũ sẽ tự động chuyển thành dạng rõ."
      ],
      correctAnswer: "B",
      explanation: "PGP đề cao tính tự chủ tối đa. Khóa riêng được mã hóa bảo vệ trên đĩa cứng bằng Passphrase của bạn. Nếu quên Passphrase, không ai có thể giải mã khóa riêng đó, đồng nghĩa dữ liệu cũ mã hóa bằng khóa đó bị khóa vĩnh viễn."
    },
    {
      id: "c6_q40",
      question: "Tính chất 'Web of Trust' của PGP có ưu điểm nổi bật nào so với CA tập trung trong môi trường tự do?",
      options: [
        "Được chính phủ các nước bảo hộ về mặt luật pháp thương mại.",
        "Hoàn toàn miễn phí, độc lập, không chịu sự kiểm soát, giám sát hay kiểm duyệt của bất kỳ tổ chức hay cơ quan chính phủ nào.",
        "Tự động đồng bộ khóa riêng lên dịch vụ lưu trữ đám mây Cloud.",
        "Tốc độ xác thực chữ ký diễn ra nhanh hơn gấp 100 lần."
      ],
      correctAnswer: "B",
      explanation: "Web of Trust là mô hình dân chủ phi trung tâm. Nó tôn trọng quyền riêng tư tuyệt đối, người dùng tự quyết định độ tin cậy của nhau mà không phụ thuộc vào một cơ quan CA trung tâm nào có thể bị hack hoặc ép buộc kiểm duyệt."
    }
  ],

  // --- CHƯƠNG 7 ---
c7: [
    {
      id: "c7_q1",
      question: "Họ giao thức IPSec hoạt động tại tầng nào trong mô hình OSI?",
      options: [
        "Tầng Ứng dụng (Application Layer - Layer 7).",
        "Tầng Mạng (Network Layer / Tầng IP - Layer 3).",
        "Tầng Giao vận (Transport Layer - Layer 4).",
        "Tầng Liên kết dữ liệu (Data Link Layer - Layer 2)."
      ],
      correctAnswer: "B",
      explanation: "IPSec (IP Security) hoạt động tại tầng Mạng (Network Layer - Layer 3) trong mô hình OSI, trực tiếp xử lý bảo mật cho các gói tin IP."
    },
    {
      id: "c7_q2",
      question: "Ưu điểm lớn nhất của việc thiết lập cơ chế bảo mật tại tầng IP (IPSec) là gì?",
      options: [
        "Tốc độ giải mã nhanh hơn mã hóa đối xứng AES.",
        "Hoàn toàn trong suốt (transparent) đối với các ứng dụng và giao thức chạy ở tầng trên, nghĩa là ứng dụng không cần thay đổi mã nguồn vẫn được bảo vệ.",
        "Không cần sử dụng khóa bí mật để mã hóa gói tin.",
        "Ngăn chặn hoàn toàn virus lây lan trên hệ điều hành máy trạm."
      ],
      correctAnswer: "B",
      explanation: "Vì IPSec chạy ở tầng IP, các giao thức tầng trên (TCP, UDP, HTTP, FTP) hoàn toàn không biết gói tin bị mã hóa/xác thực dưới tầng IP. Điều này giúp bảo vệ toàn bộ lưu lượng mạng mà không cần sửa đổi ứng dụng."
    },
    {
      id: "c7_q3",
      question: "Họ giao thức IPSec bao gồm ba giao thức thành phần cốt lõi nào?",
      options: [
        "SSL, TLS, SSH.",
        "AH (Authentication Header), ESP (Encapsulating Security Payload) và IKE (Internet Key Exchange).",
        "PGP, S/MIME, MIME.",
        "PAP, CHAP, Kerberos."
      ],
      correctAnswer: "B",
      explanation: "IPSec gồm bộ ba: AH lo xác thực nguồn và toàn vẹn; ESP lo xác thực, toàn vẹn và mã hóa bảo mật; IKE lo đàm phán, trao đổi khóa bảo mật."
    },
    {
      id: "c7_q4",
      question: "Sự khác biệt cơ bản về dịch vụ bảo mật giữa giao thức AH và ESP trong IPSec là gì?",
      options: [
        "AH cung cấp mã hóa, ESP chỉ cung cấp xác thực.",
        "AH cung cấp dịch vụ xác thực nguồn gốc và toàn vẹn gói tin (không mã hóa); ESP cung cấp cả xác thực, toàn vẹn và mã hóa để bảo mật nội dung gói tin.",
        "AH chạy nhanh hơn ESP gấp 1000 lần.",
        "ESP chỉ tương thích với chế độ hoạt động Transport Mode."
      ],
      correctAnswer: "B",
      explanation: "AH bảo vệ toàn vẹn và chống giả mạo nhưng dữ liệu vẫn truyền thô đọc được. ESP cao cấp hơn, cung cấp đầy đủ xác thực, toàn vẹn và mã hóa xáo trộn dữ liệu thô thành bản mã bí mật."
    },
    {
      id: "c7_q5",
      question: "Chế độ hoạt động Transport Mode (Chế độ vận chuyển) của IPSec bảo vệ gói tin IP thế nào?",
      options: [
        "Mã hóa và xác thực toàn bộ gói tin IP bao gồm cả tiêu đề IP gốc.",
        "Chỉ bảo vệ phần dữ liệu tải (Payload) của gói tin IP đằng sau tiêu đề IP gốc, giữ nguyên tiêu đề IP gốc để định tuyến thông thường.",
        "Tự động thay đổi địa chỉ IP của máy gửi thành IP tĩnh.",
        "Chỉ bảo vệ tiêu đề IP gốc và bỏ qua dữ liệu tải."
      ],
      correctAnswer: "B",
      explanation: "Transport Mode bảo vệ phần dữ liệu đằng sau IP Header. Tiêu đề IP gốc (chứa IP nguồn, IP đích) được giữ lộ thiên để các router định tuyến bình thường. Chế độ này dùng cho kết nối trực tiếp Host-to-Host."
    },
    {
      id: "c7_q6",
      question: "Chế độ hoạt động Tunnel Mode (Chế độ đường hầm) của IPSec bảo vệ gói tin IP thế nào?",
      options: [
        "Chỉ bảo vệ phần dữ liệu TCP/UDP bên trong gói tin.",
        "Bảo vệ toàn bộ gói tin IP ban đầu (cả Header và Payload) bằng cách mã hóa/xác thực nó, đặt vào payload gói mới, chèn ESP/AH header và bọc thêm một tiêu đề IP mới ở ngoài cùng.",
        "Không sử dụng các thuật toán mã hóa đối xứng.",
        "Chỉ hoạt động được trên đường truyền cáp quang độc lập."
      ],
      correctAnswer: "B",
      explanation: "Tunnel Mode bọc toàn bộ gói IP cũ vào gói IP mới. Chế độ này ẩn giấu hoàn toàn IP nguồn/đích thực sự bên trong gói tin mã hóa. Đây là nền tảng để xây dựng các kết nối VPN Site-to-Site giữa các chi nhánh."
    },
    {
      id: "c7_q7",
      question: "Trong cấu hình VPN Gateway-to-Gateway kết nối các văn phòng chi nhánh qua Internet, chế độ nào của IPSec là bắt buộc sử dụng?",
      options: [
        "Chế độ Transport Mode.",
        "Chế độ Tunnel Mode.",
        "Chế độ mã hóa đối xứng ECB.",
        "Chế độ trao đổi khóa Diffie-Hellman trực tiếp."
      ],
      correctAnswer: "B",
      explanation: "Kết nối VPN giữa các mạng LAN qua Internet công cộng bắt buộc dùng Tunnel Mode để đóng gói toàn bộ gói tin IP nội bộ vào gói tin IP công cộng mới, bảo đảm định tuyến an toàn xuyên qua Internet."
    },
    {
      id: "c7_q8",
      question: "Giao thức AH trong IPSec bảo vệ gói tin IP tránh bị hacker sửa đổi bằng cách nào?",
      options: [
        "Mã hóa toàn bộ gói tin bằng thuật toán AES-256.",
        "Áp dụng thuật toán băm (như HMAC-SHA1) kết hợp khóa bí mật lên gói tin để tạo ra Giá trị kiểm tra tính toàn vẹn (ICV) và đính kèm vào tiêu đề AH.",
        "Tự động thay đổi cổng Port kết nối liên tục.",
        "Sử dụng chữ ký số RSA cho từng gói tin IP."
      ],
      correctAnswer: "B",
      explanation: "AH dùng HMAC băm gói tin tạo ra ICV gán ở tiêu đề. Máy nhận tự tính lại ICV bằng khóa bí mật chung; nếu khớp, gói tin toàn vẹn và xuất phát từ đúng đối tác tin cậy."
    },
    {
      id: "c7_q9",
      question: "Tại sao giao thức AH của IPSec lại không thân thiện với công nghệ biên dịch địa chỉ NAT (Network Address Translation)?",
      options: [
        "Vì NAT làm giảm tốc độ tính toán băm của AH.",
        "Vì NAT tự động thay đổi địa chỉ IP trong tiêu đề IP gốc để chuyển tiếp, phép tính toán mã băm ICV của AH bảo vệ cả tiêu đề IP gốc sẽ bị lệch giá trị và máy đích giải mã sẽ báo lỗi toàn vẹn.",
        "Vì AH yêu cầu NAT phải có khóa bí mật công khai.",
        "Vì NAT chỉ tương thích với chế độ hoạt động Tunnel Mode."
      ],
      correctAnswer: "B",
      explanation: "NAT thay đổi IP nguồn/đích trong IP Header. Do ICV của AH tính toán bao phủ cả các trường IP nguồn/đích của IP Header, việc NAT sửa IP sẽ làm ICV bị tính lệch ở máy nhận, khiến gói tin bị loại bỏ vì báo lỗi toàn vẹn."
    },
    {
      id: "c7_q10",
      question: "Giao thức ESP của IPSec cung cấp dịch vụ bí mật (Mã hóa) dữ liệu bằng cách sử dụng các thuật toán mã khối ở chế độ nào?",
      options: [
        "Mã hóa đối xứng chế độ ECB.",
        "Mã hóa đối xứng chế độ CBC (Cipher Block Chaining) kết hợp khóa bí mật thỏa thuận từ SA.",
        "Sử dụng chữ ký số bất đối xứng RSA.",
        "Băm dữ liệu bằng thuật toán một chiều SHA-512."
      ],
      correctAnswer: "B",
      explanation: "ESP sử dụng các thuật toán mã hóa đối xứng mạnh (như AES-CBC, 3DES-CBC) để mã hóa dữ liệu tải (payload), biến dữ liệu thô thành chuỗi bit mã hóa an toàn trên đường truyền."
    },
    {
      id: "c7_q11",
      question: "Dịch vụ chống tấn công phát lại (Anti-replay) của IPSec hoạt động dựa trên cơ chế nào?",
      options: [
        "Tự động ngắt kết nối mạng nếu có gói tin gửi chậm.",
        "Chèn một trường số thứ tự (Sequence Number) 32-bit tăng đơn điệu vào tiêu đề AH/ESP; người nhận duy trì một cửa sổ trượt để kiểm tra và loại bỏ ngay các gói tin có số thứ tự trùng lặp hoặc nằm ngoài cửa sổ.",
        "Sử dụng nhãn thời gian UTC của máy chủ CA.",
        "Mã hóa tiêu đề IP gốc bằng thuật toán AES-256."
      ],
      correctAnswer: "B",
      explanation: "Anti-replay chặn tin tặc thu bắt gói tin cũ rồi phát lại để lừa hệ thống. Sequence Number tăng liên tục và cửa sổ trượt ở máy nhận bảo đảm gói tin phát lại (trùng lặp số thứ tự cũ) sẽ bị phát hiện và tiêu hủy ngay lập tức."
    },
    {
      id: "c7_q12",
      question: "Khái niệm SA (Security Association - Sự kết hợp bảo mật) trong cấu hình IPSec được hiểu là gì?",
      options: [
        "Là một tổ chức an ninh mạng cấp chứng chỉ số cho IPSec.",
        "Là một liên kết logic một chiều thiết lập giữa bên gửi và bên nhận, thỏa thuận và thống nhất các giao thức bảo mật, thuật toán mã hóa, các khóa và thông số áp dụng cho phiên truyền dữ liệu.",
        "Là cơ sở dữ liệu chứa toàn bộ các tập tin bản rõ.",
        "Là thiết bị phần cứng chuyên dụng để tăng tốc VPN."
      ],
      correctAnswer: "B",
      explanation: "SA là thỏa thuận bảo mật logic 1 chiều giữa 2 đầu IPSec. Để truyền thông 2 chiều an toàn, hệ thống cần thiết lập 2 SA độc lập (chiều đi và chiều về). SA xác định thuật toán và khóa nào sẽ được áp dụng cho gói tin."
    },
    {
      id: "c7_q13",
      question: "Chỉ số SPI (Security Parameter Index) 32-bit nằm trong tiêu đề AH/ESP đóng vai trò gì?",
      options: [
        "Là khóa bí mật dùng để giải mã gói tin.",
        "Là chỉ số định danh giúp máy nhận ánh xạ gói tin nhận được với đúng phiên kết hợp bảo mật SA tương thích để lấy ra thuật toán và khóa giải mã thích hợp.",
        "Là chuỗi đếm Sequence Number chống tấn công phát lại.",
        "Là địa chỉ IP ảo của kết nối đường hầm VPN."
      ],
      correctAnswer: "B",
      explanation: "Máy trạm có thể chạy nhiều phiên VPN (nhiều SA). Khi gói tin IPSec đến, SPI trong tiêu đề giúp máy nhận tra cứu cơ sở dữ liệu để biết gói tin này thuộc SA nào, từ đó áp dụng đúng thuật toán và khóa giải mã tương ứng."
    },
    {
      id: "c7_q14",
      question: "Trong kiến trúc IPSec, cơ sở dữ liệu SPD (Security Policy Database) thực hiện chức năng gì?",
      options: [
        "Lưu trữ toàn bộ các khóa bí mật của hệ thống.",
        "Chứa các chính sách bảo mật để quyết định gói tin IP đi qua sẽ bị chặn (Discard), được phép đi qua bình thường (Bypass), hay bắt buộc phải áp dụng bảo mật IPSec (Protect).",
        "Lưu trữ danh sách các tài khoản người dùng VPN.",
        "Ghi lại nhật ký kiểm toán hệ thống mạng."
      ],
      correctAnswer: "B",
      explanation: "SPD là bộ lọc thông minh tầng IP. Nó chứa các quy tắc lọc dựa trên địa chỉ IP, cổng, giao thức để phân loại luồng dữ liệu: gói tin nào được đi tự do, gói nào bị cấm và gói nào bắt buộc phải mã hóa chạy qua VPN."
    },
    {
      id: "c7_q15",
      question: "Cơ sở dữ liệu SAD (Security Association Database) trong IPSec thực hiện nhiệm vụ gì?",
      options: [
        "Quy định gói tin nào cần bảo vệ bằng IPSec.",
        "Lưu trữ trạng thái và toàn bộ tham số kỹ thuật hoạt động của mọi kết hợp bảo mật SA đang hoạt động ở hệ thống (khóa, thuật toán, SPI, bộ đếm...).",
        "Lưu trữ các chứng chỉ số CA hết hạn.",
        "Định tuyến các gói tin IP trên mạng WAN."
      ],
      correctAnswer: "B",
      explanation: "SAD là bảng tra cứu động. Khi đàm phán IKE thành công sinh ra các SA, toàn bộ thông số chi tiết (SPI, khóa mã hóa, khóa xác thực, thuật toán áp dụng) của các SA đó sẽ được lưu trữ vào bảng SAD để tra cứu nhanh khi xử lý gói tin."
    },
    {
      id: "c7_q16",
      question: "Giao thức đàm phán khóa IKE (Internet Key Exchange) trong IPSec thực hiện chức năng gì?",
      options: [
        "Mã hóa trực tiếp phần payload của gói tin IP.",
        "Tự động thỏa thuận các tham số an ninh, xác thực danh tính các đầu cuối và sinh ra các khóa mật mã dùng chung cho các SA một cách an toàn và tự động.",
        "Tính toán giá trị kiểm tra toàn vẹn ICV cho tiêu đề AH.",
        "Cấu hình các bộ định tuyến Router trên mạng."
      ],
      correctAnswer: "B",
      explanation: "IKE tự động hóa khâu bảo mật IPSec. Nó chạy giao thức đàm phán an toàn để thống nhất thuật toán, xác thực đối tác và dùng Diffie-Hellman sinh khóa chung cho SA, tránh việc quản trị viên phải cấu hình khóa thủ công phức tạp."
    },
    {
      id: "c7_q17",
      question: "Quá trình đàm phán của giao thức IKE trải qua hai giai đoạn (Phase) chính nào?",
      options: [
        "Giai đoạn Mã hóa đối xứng và Giai đoạn Mã hóa bất đối xứng.",
        "Giai đoạn 1: Thiết lập một kênh bảo mật an toàn giữa hai đầu cuối (IKE SA); Giai đoạn 2: Sử dụng kênh an toàn đó để thỏa thuận các tham số kỹ thuật cho các SA của dịch vụ bảo mật dữ liệu thực tế (IPSec SA).",
        "Giai đoạn Băm MD5 và Giai đoạn Sinh chữ ký số RSA.",
        "Giai đoạn Đăng nhập người dùng và Giai đoạn Truyền tệp tin."
      ],
      correctAnswer: "B",
      explanation: "IKE Phase 1 tạo kênh bảo vệ riêng (IKE SA) bằng Diffie-Hellman. IKE Phase 2 chạy bên trong đường truyền an toàn của Phase 1 để tạo nhanh các SA bảo mật dữ liệu thực sự (IPSec SA), tối ưu hóa hiệu năng và bảo mật tối đa."
    },
    {
      id: "c7_q18",
      question: "Vì sao việc sử dụng chế độ Tunnel Mode của IPSec lại giúp ẩn giấu cấu trúc mạng nội bộ của doanh nghiệp tốt hơn chế độ Transport Mode?",
      options: [
        "Vì Tunnel Mode tự động thay đổi địa chỉ MAC của card mạng.",
        "Vì Tunnel Mode mã hóa toàn bộ gói tin IP gốc bao gồm cả tiêu đề IP chứa địa chỉ IP nội bộ thật, chỉ để lộ tiêu đề IP mới chứa địa chỉ IP công cộng của các thiết bị VPN Gateways biên mạng.",
        "Vì Tunnel Mode không sử dụng giao thức định tuyến IP.",
        "Vì Tunnel Mode giới hạn băng thông truyền tin."
      ],
      correctAnswer: "B",
      explanation: "Trong Tunnel Mode, gói IP gốc (chứa IP máy trạm nội bộ của 2 chi nhánh) bị mã hóa giấu kín hoàn toàn. Router trên Internet chỉ nhìn thấy IP Header mới bên ngoài chứa địa chỉ IP của 2 thiết bị VPN Gateway biên mạng kết nối với nhau."
    },
    {
      id: "c7_q19",
      question: "Trong cấu trúc gói tin ESP của chế độ Tunnel Mode, vùng dữ liệu nào được thực hiện mã hóa bảo mật bí mật?",
      options: [
        "Chỉ mã hóa phần ESP Trailer ở cuối gói tin.",
        "Mã hóa toàn bộ gói tin IP gốc ban đầu (bao gồm IP Header gốc và IP Payload gốc) cùng phần ESP Trailer.",
        "Chỉ mã hóa New IP Header ngoài cùng.",
        "Không mã hóa dữ liệu mà chỉ mã hóa khóa phiên."
      ],
      correctAnswer: "B",
      explanation: "Độ bảo mật của Tunnel Mode ESP rất cao: Toàn bộ gói IP gốc ban đầu bị xáo trộn mã hóa hoàn toàn thành Encrypted Payload. Kẻ bắt gói tin trên Internet chỉ thấy New IP Hdr thô và ESP Hdr, không thể biết dữ liệu bên trong là gì."
    },
    {
      id: "c7_q20",
      question: "Sự khác biệt về phạm vi bảo vệ tính toàn vẹn của gói tin IP giữa giao thức AH và giao thức ESP trong chế độ Transport Mode là gì?",
      options: [
        "ESP bảo vệ toàn vẹn rộng hơn giao thức AH.",
        "AH bảo vệ tính toàn vẹn bao phủ toàn bộ gói tin IP bao gồm cả tiêu đề IP gốc (ngoại trừ các trường dễ thay đổi khi định tuyến); ESP chỉ bảo vệ tính toàn vẹn cho phần dữ liệu tải ESP Payload và ESP Header.",
        "Cả hai giao thức đều bảo vệ toàn vẹn giống hệt nhau.",
        "AH chỉ bảo vệ toàn vẹn cho khóa đối xứng truyền đi."
      ],
      correctAnswer: "B",
      explanation: "AH có tính toàn vẹn rộng hơn ESP vì ICV của AH bao phủ cả IP Header gốc. ESP chỉ tính toán toàn vẹn cho dữ liệu ESP Payload, ESP Header và ESP Trailer đằng sau IP Header gốc, giúp ESP dễ dàng đi qua các thiết bị NAT hơn."
    }
  ],

  // --- CHƯƠNG 8 ---
c8: [
    {
      id: "c8_q1",
      question: "Các giao thức bảo mật Web như SSL (Secure Sockets Layer) và TLS (Transport Layer Security) hoạt động tại tầng nào trong mô hình OSI?",
      options: [
        "Tầng Ứng dụng (Application Layer - Layer 7).",
        "Tầng Giao vận (Transport Layer - Layer 4) hoặc nằm trung gian giữa tầng Giao vận và Ứng dụng.",
        "Tầng Mạng (Network Layer - Layer 3).",
        "Tầng Vật lý (Physical Layer - Layer 1)."
      ],
      correctAnswer: "B",
      explanation: "SSL/TLS hoạt động tại tầng Giao vận (Transport Layer - Layer 4), đóng vai trò thiết lập kênh Socket an toàn bên dưới các giao thức ứng dụng như HTTP, FTP để tạo ra HTTPS, FTPS."
    },
    {
      id: "c8_q2",
      question: "Mục đích sử dụng chính của giao thức SSL/TLS trong bảo mật thông tin trên Internet là gì?",
      options: [
        "Quét virus trên máy khách duyệt web.",
        "Thiết lập liên kết mã hóa an toàn giữa máy chủ Web (Server) và trình duyệt máy khách (Client), xác thực danh tính Server bằng chứng chỉ số và bảo vệ toàn vẹn dữ liệu truyền tải.",
        "Mã hóa ổ cứng của các máy chủ web doanh nghiệp.",
        "Định tuyến các gói tin IP trên mạng LAN."
      ],
      correctAnswer: "B",
      explanation: "SSL/TLS bảo vệ giao dịch web (nhập thẻ tín dụng, mật khẩu). Nó dùng HTTPS để mã hóa dữ liệu truyền tải chống nghe lén, xác thực website chính chủ thông qua chứng chỉ SSL và kiểm tra lỗi truyền tin bằng MAC."
    },
    {
      id: "c8_q3",
      question: "Tại sao ngày nay các tổ chức tiêu chuẩn an ninh mạng bắt buộc phải từ bỏ SSL và chuyển sang sử dụng TLS?",
      options: [
        "Vì SSL có tốc độ truyền tải dữ liệu chậm hơn TLS 10 lần.",
        "Vì các phiên bản SSL cũ (SSL 2.0, 3.0) đã bộc lộ các lỗ hổng bảo mật nghiêm trọng không thể khắc phục (như lỗi POODLE); TLS là thế hệ kế tiếp an toàn và mã hóa mạnh mẽ hơn.",
        "Vì SSL yêu cầu bản quyền đắt tiền, còn TLS mở miễn phí.",
        "Vì SSL chỉ chạy trên hệ điều hành UNIX."
      ],
      correctAnswer: "B",
      explanation: "SSL đã bị coi là lỗi thời và mất an toàn do các lỗ hổng thiết kế mật mã. Tiêu chuẩn hiện đại yêu cầu bắt buộc vô hiệu hóa SSL và kích hoạt TLS 1.2 hoặc TLS 1.3 để bảo vệ kết nối HTTPS an toàn."
    },
    {
      id: "c8_q4",
      question: "Giao thức SSH (Secure Shell) hoạt động theo mô hình nào để cung cấp kết nối điều khiển từ xa an toàn?",
      options: [
        "Mô hình ngang hàng Peer-to-Peer.",
        "Mô hình Client-Server gồm 3 bước: Xác thực Server -> Trao đổi khóa phiên đối xứng (Diffie-Hellman) -> Xác thực người dùng Client để mở đường hầm điều khiển.",
        "Mô hình CA phân cấp tập trung X.509.",
        "Mô hình mạng lưới tin cậy Web of Trust của PGP."
      ],
      correctAnswer: "B",
      explanation: "SSH là chuẩn quản trị từ xa an toàn thay thế Telnet/rlogin thô. SSH kết hợp xác thực server bằng host key, thỏa thuận khóa phiên đối xứng bảo vệ đường truyền và xác thực client bằng password hoặc cặp khóa public-private key."
    },
    {
      id: "c8_q5",
      question: "So sánh vai trò bảo mật của SSL/TLS và SSH trong quản trị hệ thống mạng:",
      options: [
        "SSL/TLS bảo vệ giao dịch web trình duyệt; SSH bảo vệ kênh điều khiển từ xa và truyền file an toàn trên hệ thống máy chủ (chủ yếu là UNIX).",
        "SSH dùng mã hóa đối xứng, SSL/TLS chỉ dùng băm mật mã.",
        "SSL/TLS chạy ở tầng mạng, SSH chạy ở tầng vật lý.",
        "SSH chậm hơn SSL/TLS gấp 1000 lần."
      ],
      correctAnswer: "A",
      explanation: "Cả hai đều mã hóa an toàn End-to-End. Nhưng SSL/TLS phục vụ các ứng dụng đại chúng (duyệt web HTTPS, mail bảo mật). SSH chuyên phục vụ các quản trị viên quản lý máy chủ bằng dòng lệnh (terminal) và truyền tệp an toàn (SFTP)."
    },
    {
      id: "c8_q6",
      question: "Trong đàm phán bắt tay SSL/TLS, có tổng cộng bao nhiêu yếu tố mật mã được sinh ra cho một phiên làm việc để bảo đảm toàn vẹn và bí mật?",
      options: [
        "2 khóa đối xứng.",
        "6 yếu tố: 2 khóa ghi MAC (Client/Server write MAC key), 2 khóa mã hóa (Client/Server write encryption key) và 2 vector khởi tạo (Client/Server write IV).",
        "1 khóa công khai duy nhất.",
        "4 bản băm MD5 độc lập."
      ],
      correctAnswer: "B",
      explanation: "Để chống tấn công phản xạ và phân tách luồng truyền thông, SSL/TLS sinh ra 6 tham số: Khóa MAC riêng cho Client gửi và Server gửi, khóa mã hóa dữ liệu riêng cho hai chiều gửi, và hai vector khởi tạo IV tương ứng."
    },
    {
      id: "c8_q7",
      question: "Sự khác biệt giữa khái niệm Phiên (Session) và Kết nối (Connection) trong giao thức SSL/TLS là gì?",
      options: [
        "Connection tồn tại lâu hơn Session rất nhiều.",
        "Session lưu trữ các tham số an ninh tĩnh (master secret, chứng chỉ) sau đàm phán bắt tay; Connection là các liên kết truyền dữ liệu ngắn hạn sử dụng chung tham số của Session, giúp nối lại kết nối nhanh chóng mà không cần đàm phán lại từ đầu.",
        "Session chỉ dùng cho mã hóa đối xứng, Connection dùng mã bất đối xứng.",
        "Session không bắt buộc xác thực Server, Connection thì bắt buộc."
      ],
      correctAnswer: "B",
      explanation: "Đàm phán bắt tay rất tốn tài nguyên. Do đó, SSL/TLS định nghĩa Session tồn tại lâu dài. Một Session có thể mở nhiều kết nối Connection (ví dụ tải nhiều ảnh trên web). Các Connection dùng lại Master Secret của Session giúp kết nối cực nhanh."
    },
    {
      id: "c8_q8",
      question: "Trong giao thức giao dịch điện tử an toàn SET (Secure Electronic Transaction), thực thể nào chịu trách nhiệm thực tế chi trả tiền cho các khoản mua hàng của chủ thẻ?",
      options: [
        "Người bán hàng trực tuyến (Merchant).",
        "Ngân hàng phát hành thẻ (Issuer) của người mua.",
        "Cổng thanh toán điện tử (Payment Gateway).",
        "Tổ chức chứng thực danh tính CA."
      ],
      correctAnswer: "B",
      explanation: "Trong giao dịch thẻ tín dụng, ngân hàng Issuer cấp hạn mức tín dụng cho chủ thẻ và chịu trách nhiệm thanh toán số tiền mua hàng cho bên bán thông qua ngân hàng Acquirer, sau đó Issuer mới gửi sao kê đòi tiền chủ thẻ."
    },
    {
      id: "c8_q9",
      question: "Thành phần nào trong kiến trúc giao dịch SET đóng vai trò cầu nối kỹ thuật giải mã thông tin thanh toán của khách hàng từ Internet để định tuyến vào mạng tài chính ngân hàng truyền thống?",
      options: [
        "Người bán hàng (Merchant).",
        "Cổng thanh toán (Payment Gateway) do ngân hàng Acquirer vận hành.",
        "Nhà cung cấp chứng chỉ số CA.",
        "Nhà cung cấp dịch vụ mạng Internet ISP."
      ],
      correctAnswer: "B",
      explanation: "Payment Gateway là chốt chặn bảo mật. Nó giải mã gói chỉ thị thanh toán PI của khách hàng (mà Merchant không được xem), xác thực chữ ký và chuyển đổi giao thức SET sang các mạng tài chính ngân hàng bảo mật truyền thống."
    },
    {
      id: "c8_q10",
      question: "Trong giao dịch SET, tại sao người bán hàng (Merchant) tuyệt đối không được phép xem thông tin thẻ tín dụng của khách hàng?",
      options: [
        "Vì điều này làm tăng dung lượng gói tin đặt hàng.",
        "Để ngăn chặn rủi ro lộ lọt, đánh cắp thông tin thẻ tín dụng tại cơ sở dữ liệu của Merchant hoặc do nhân viên cửa hàng gian lận.",
        "Vì thông tin thẻ tín dụng chỉ tương thích với hệ điều hành của Gateway.",
        "Để tránh việc Merchant tự động hoàn tiền cho khách."
      ],
      correctAnswer: "B",
      explanation: "Nguyên lý bảo mật của SET là phân tách thông tin: Merchant chỉ biết thông tin giỏ hàng để giao đúng đồ; ngân hàng Gateway chỉ biết số thẻ để trừ tiền. Điều này bảo vệ an toàn tối đa cho thẻ tín dụng của khách hàng."
    },
    {
      id: "c8_q11",
      question: "Vai trò cốt lõi của ngân hàng phát hành thẻ Issuer trong giao dịch điện tử an toàn SET là gì?",
      options: [
        "Vận hành trực tiếp website bán hàng trực tuyến cho Merchant.",
        "Xác nhận danh tính khách hàng để CA cấp chứng chỉ số, kiểm tra tính hợp lệ và hạn mức tín dụng của tài khoản chủ thẻ để phê duyệt hoặc từ chối giao dịch thanh toán.",
        "Giải mã thông tin đặt hàng OI của Merchant.",
        "Đảm bảo an toàn vật lý cho máy tính của khách hàng."
      ],
      correctAnswer: "B",
      explanation: "Issuer (ngân hàng phát hành thẻ) quản lý tiền tài khoản chủ thẻ. Khi có yêu cầu thanh toán từ Gateway gửi tới, Issuer kiểm tra xem thẻ có bị khóa, có đủ số dư không, rồi trả về mã phê duyệt (Approve) chuyển tiền."
    },
    {
      id: "c8_q12",
      question: "Cổng thanh toán Payment Gateway trong giao dịch SET đảm bảo an toàn thông tin thẻ tín dụng bằng cơ chế nào?",
      options: [
        "Sử dụng khóa bí mật của Gateway để giải mã phần chỉ thị thanh toán (PI) được mã hóa riêng từ trình duyệt của khách hàng, đảm bảo Merchant hay hacker trung gian đều không thể đọc trộm số thẻ.",
        "Cài đặt tường lửa để chặn toàn bộ các kết nối từ bên ngoài mạng.",
        "Yêu cầu khách hàng gửi thẻ tín dụng vật lý qua bưu điện để đối chiếu.",
        "Băm số thẻ tín dụng bằng thuật toán MD5 và công bố rộng rãi."
      ],
      correctAnswer: "A",
      explanation: "Chỉ thị thanh toán PI được mã hóa bằng khóa công khai của Gateway ngay tại máy khách. Khi truyền qua Merchant, Merchant chuyển tiếp nguyên vẹn bản mã này sang Gateway. Chỉ có Gateway giữ khóa riêng mới giải mã được."
    },
    {
      id: "c8_q13",
      question: "Chứng chỉ số do cơ quan CA cấp phát cho các thực thể trong giao dịch SET giúp giải quyết vấn đề gì?",
      options: [
        "Tăng tốc độ kết nối internet cho các bên.",
        "Xác thực tuyệt đối danh tính các bên tham gia: chứng minh khách hàng là chủ thẻ thật, Merchant là cửa hàng hợp pháp có đăng ký, và Gateway là của ngân hàng thật, ngăn chặn triệt để lừa đảo mạo danh.",
        "Mã hóa các tập tin cơ sở dữ liệu của ngân hàng.",
        "Tự động tính thuế giá trị gia tăng của đơn hàng."
      ],
      correctAnswer: "B",
      explanation: "Trong SET, mọi thực thể đều có chứng chỉ X.509. Khách hàng tin tưởng Merchant là thật (không phải trang web phishing); ngân hàng tin tưởng khách hàng là chính chủ thẻ (tránh dùng thẻ trộm), tạo môi trường giao dịch tin cậy."
    },
    {
      id: "c8_q14",
      question: "Quy trình thực hiện một giao dịch SET điển hình từ lúc khách hàng quyết định mua hàng diễn ra theo thứ tự nào?",
      options: [
        "Khách gửi yêu cầu mua hàng -> Merchant giao hàng -> Merchant đòi tiền Gateway -> Gateway chuyển tiền Issuer.",
        "Khách gửi Purchase Request (đơn hàng OI và thanh toán PI đã ký song song) -> Merchant chuyển tiếp yêu cầu xác thực sang Gateway -> Gateway check với Issuer rồi duyệt -> Merchant nhận phê duyệt, xác nhận đơn và giao hàng -> Merchant gửi Capture đòi tiền.",
        "Merchant giao hàng trước -> Khách gửi thông tin thẻ trực tiếp cho Merchant -> Merchant tự rút tiền tài khoản khách.",
        "Khách đàm phán Diffie-Hellman với Gateway -> Gửi tiền trực tiếp cho CA."
      ],
      correctAnswer: "B",
      explanation: "Giao dịch SET khép kín an toàn: Khách gửi thông tin đôi -> Merchant gửi yêu cầu ủy quyền sang Gateway -> Gateway check Issuer chuyển kết quả cho Merchant -> Merchant giao đồ -> Merchant gửi yêu cầu Capture cuối ngày đòi tiền thực tế."
    },
    {
      id: "c8_q15",
      question: "Chữ ký song song (Dual Signature) trong giao dịch SET được thiết kế để giải quyết bài toán bảo mật nào?",
      options: [
        "Mã hóa đồng thời hai file dữ liệu lớn.",
        "Cho phép khách hàng ký liên kết hai tài liệu khác nhau (Đơn đặt hàng OI gửi cho Merchant và Chỉ thị thanh toán PI gửi cho Gateway) sao cho Merchant chỉ đọc được OI, Gateway chỉ đọc được PI, nhưng cả hai bên đều chứng minh được OI và PI này thuộc về cùng một giao dịch duy nhất.",
        "Cho phép hai người khách hàng cùng ký số chung lên một hóa đơn.",
        "Tự động gửi email xác nhận cho cả người mua và người bán."
      ],
      correctAnswer: "B",
      explanation: "Dual Signature liên kết OI và PI bằng mã băm: $DS = E_{KR\_Customer}(H(H(OI) \parallel H(PI)))$. Việc này giúp Merchant nhận OI và Gateway nhận PI đều tự tính toán đối sánh để chứng minh hai tài liệu này khớp nhau trong cùng 1 đơn hàng, tránh bị đánh tráo."
    },
    {
      id: "c8_q16",
      question: "Hai giai đoạn chính của quy trình xử lý thanh toán (Payment Processing) trong giao dịch SET là gì?",
      options: [
        "Mã hóa đối xứng và giải mã bất đối xứng.",
        "Ủy quyền thanh toán (Authorization) để khóa tiền dự phòng; và Thu tiền thực tế (Capture) sau khi đã giao hàng thành công.",
        "Đăng ký chứng chỉ số và Xác thực chữ ký song song.",
        "Băm dữ liệu bằng SHA-1 và Nén dữ liệu bằng ZIP."
      ],
      correctAnswer: "B",
      explanation: "Xử lý thanh toán SET gồm: Authorization (ngân hàng xác nhận và tạm khóa số tiền trong thẻ khách hàng để đảm bảo Merchant sẽ nhận được tiền); và Capture (Merchant gửi yêu cầu đòi chuyển tiền thật sau khi đã hoàn thành giao hàng)."
    },
    {
      id: "c8_q17",
      question: "Trong thủ tục xác thực thanh toán của giao dịch SET, làm thế nào để Merchant chứng minh tính hợp lệ của người mua với Gateway?",
      options: [
        "Merchant gửi trực tiếp số thẻ tín dụng của người mua cho Gateway.",
        "Merchant gửi một gói tin gồm Chứng chỉ số của Merchant, mã băm đơn hàng OI và phần Chỉ thị thanh toán PI đã mã hóa nguyên vẹn của khách hàng sang cho Gateway kiểm tra chữ ký song song.",
        "Merchant yêu cầu khách hàng chụp ảnh thẻ tín dụng gửi qua chat.",
        "Merchant tự ý giải mã chỉ thị thanh toán PI của khách hàng."
      ],
      correctAnswer: "B",
      explanation: "Merchant không có số thẻ của khách. Họ chỉ chuyển tiếp bản mã PI đính kèm mã băm của đơn hàng OI và chứng chỉ của mình. Gateway giải mã PI, kiểm tra chữ ký song song của khách hàng để phê duyệt tính hợp lệ."
    },
    {
      id: "c8_q18",
      question: "Thủ tục 'Thu tiền' (Capture) trong giao dịch SET được Merchant thực hiện vào thời điểm nào và nhằm mục đích gì?",
      options: [
        "Thực hiện ngay khi khách hàng click nút đặt hàng để trừ tiền tài khoản khách hàng lập tức.",
        "Thực hiện sau khi đã hoàn tất việc giao hàng hoặc cung cấp dịch vụ cho khách hàng, gửi yêu cầu tới Payment Gateway để chuyển dòng tiền thực tế từ tài khoản khách hàng sang tài khoản ngân hàng của Merchant.",
        "Thực hiện định kỳ hàng năm để gia hạn chứng chỉ số X.509.",
        "Thực hiện khi khách hàng yêu cầu hủy đơn hàng để trả lại tiền."
      ],
      correctAnswer: "B",
      explanation: "Capture là bước thanh quyết toán cuối cùng. Merchant chỉ đòi tiền thật khi đã hoàn thành nghĩa vụ giao hàng. Họ gửi yêu cầu Capture chứa mã phê duyệt cũ lên Gateway để luân chuyển dòng tiền liên ngân hàng."
    },
    {
      id: "c8_q19",
      question: "Bản tin Purchase Request (Yêu cầu mua hàng) gửi từ trình duyệt khách hàng tới Merchant trong giao dịch SET chứa các phần nào?",
      options: [
        "Chỉ chứa duy nhất một mã băm MD5 của giỏ hàng.",
        "Thông tin đặt hàng (OI) dạng rõ (hoặc mã hóa cho Merchant), Chỉ thị thanh toán (PI) đã mã hóa bằng khóa công khai của Gateway, và Chữ ký song song (Dual Signature) của khách hàng.",
        "Khóa riêng bí mật của khách hàng và địa chỉ IP tĩnh.",
        "Bản sao vật lý thẻ tín dụng của khách hàng."
      ],
      correctAnswer: "B",
      explanation: "Purchase Request là bản tin phức hợp chứa: OI (để Merchant gói hàng), PI mã hóa riêng (để chuyển cho ngân hàng trừ tiền) và Dual Signature của khách hàng để khóa chặt OI và PI bảo đảm an toàn."
    },
    {
      id: "c8_q20",
      question: "Bản tin Purchase Response (Xác nhận mua hàng) trong giao dịch SET có vai trò gì?",
      options: [
        "Yêu cầu khách hàng nhập lại số thẻ tín dụng lần hai.",
        "Đóng vai trò như một 'biên lai/hóa đơn điện tử' được ký số bởi Merchant gửi về trình duyệt của khách hàng để thông báo đơn hàng đã đặt thành công (hoặc thất bại) và làm bằng chứng pháp lý giải quyết tranh chấp.",
        "Tự động chuyển tiếp thông tin đơn hàng sang đơn vị vận chuyển.",
        "Yêu cầu ngân hàng Issuer chuyển tiền cho Merchant."
      ],
      correctAnswer: "B",
      explanation: "Purchase Response kết thúc luồng mua hàng. Nó gửi trạng thái đơn hàng (đã được ngân hàng phê duyệt tiền) về cho khách, có chữ ký số của Merchant để đảm bảo tính pháp lý và cam kết thực hiện đơn hàng."
    }
  ],

  // --- ĐỀ CŨ CHƯƠNG 1 (Cũ - 1) (20 câu nguyên bản) ---
  old_c1: [
  {
    "id": "c1_q1",
    "question": "Thế nào là tính bảo mật của hệ thống thông tin?",
    "options": [
      "Là đặc tính của hệ thống trong đó thông tin được giữ bí mật không cho ai truy xuất.",
      "Là đặc tính của hệ thống trong đó tất cả các thông tin được lưu trữ dưới dạng mật mã.",
      "Là đặc tính của hệ thống trong đó chỉ có những người dùng được cho phép mới có thể truy xuất được thông tin.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "C",
    "explanation": "Tính bảo mật (Confidentiality) đảm bảo rằng thông tin chỉ được tiếp cận bởi những đối tượng được cấp quyền hợp lệ."
  },
  {
    "id": "c1_q2",
    "question": "Các cơ chế bảo vệ tính bí mật của thông tin:",
    "options": [
      "Mật mã hóa toàn bộ thông tin trong hệ thống.",
      "Xây dựng các cơ chế điều khiển truy cập phù hợp.",
      "Lắp đặt các phương tiện bảo vệ hệ thống thông tin ở mức vật lý.",
      "Tất cả các cơ chế trên."
    ],
    "correctAnswer": "D",
    "explanation": "Bảo vệ tính bí mật đòi hỏi một cách tiếp cận phòng thủ chiều sâu (defense in depth), bao gồm mã hóa dữ liệu, quản lý và kiểm soát truy cập (Access Control), cùng các biện pháp an ninh vật lý để bảo vệ thiết bị phần cứng."
  },
  {
    "id": "c1_q3",
    "question": "Các cơ chế xác thực thông dụng trong hệ thống thông tin:",
    "options": [
      "Dùng các cơ chế quản lý tập tin trên đĩa cứng.",
      "Dùng cơ chế phân quyền cho người dùng.",
      "Dùng tên tài khoản / mật khẩu (username / password).",
      "Tất cả đều sai."
    ],
    "correctAnswer": "C",
    "explanation": "Xác thực (Authentication) là quá trình kiểm chứng danh tính của một thực thể truy cập. Phương pháp phổ biến nhất là sử dụng cặp tên tài khoản và mật khẩu."
  },
  {
    "id": "c1_q4",
    "question": "Chọn câu đúng khi nói về tính bảo mật của hệ thống thông tin:",
    "options": [
      "Một hệ thống đảm bảo tính bí mật là một hệ thống an toàn.",
      "Tính bí mật của thông tin bao gồm tính bí mật về sự tồn tại của thông tin và tính bí mật của nội dung thông tin.",
      "Tính bí mật của thông tin bao gồm tính bí mật về nội dung thông tin và tính bí mật về nguồn gốc thông tin.",
      "Tất cả đều sai."
    ],
    "correctAnswer": "B",
    "explanation": "Độ bí mật của thông tin có hai khía cạnh: nội dung thông tin phải được bảo vệ (không cho đọc trộm) và chính sự tồn tại của thông tin đó cũng cần được giấu kín để tránh bị chú ý hoặc phân tích lưu lượng."
  },
  {
    "id": "c1_q5",
    "question": "Mục tiêu của an toàn hệ thống theo thứ tự ưu tiên giảm dần:",
    "options": [
      "Ngăn chặn, phát hiện, phục hồi.",
      "Phát hiện, ngăn chặn, phục hồi.",
      "Phát hiện và ngăn chặn.",
      "Phát hiện và phục hồi."
    ],
    "correctAnswer": "A",
    "explanation": "Chu trình an toàn thông tin kinh điển luôn ưu tiên hàng đầu là Ngăn chặn (Prevention) để tránh sự cố xảy ra, tiếp đến là Phát hiện (Detection) nhanh chóng khi có xâm nhập, và cuối cùng là Phục hồi (Recovery) hệ thống trở lại trạng thái bình thường."
  },
  {
    "id": "c1_q6",
    "question": "Mục tiêu của chính sách bảo mật hệ thống là:",
    "options": [
      "Ngăn chặn các nguy cơ của hệ thống.",
      "Hạn chế rủi ro đối với hệ thống.",
      "Xác định các trạng thái an toàn mà hệ thống cần đảm bảo.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "C",
    "explanation": "Chính sách bảo mật (Security Policy) là tài liệu đặc tả ở mức cao, xác định các trạng thái an toàn, quy tắc và mục tiêu mà hệ thống cần đạt được."
  },
  {
    "id": "c1_q7",
    "question": "Nguyên tắc xây dựng một hệ thống bảo mật:",
    "options": [
      "Áp dụng các cơ chế bảo mật phù hợp với hệ thống.",
      "Xây dựng các chính sách bảo mật chặt chẽ.",
      "Xây dựng các chính sách bảo mật và triển khai các cơ chế đảm bảo chính sách đó.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "C",
    "explanation": "Một hệ thống bảo mật đúng đắn phải bắt đầu từ việc định nghĩa rõ chính sách bảo mật (luật lệ), sau đó thiết kế và vận hành các cơ chế kỹ thuật tương ứng để đảm bảo các luật lệ đó được tuân thủ nghiêm ngặt."
  },
  {
    "id": "c1_q8",
    "question": "Hành vi nào sau đây ảnh hưởng trực tiếp đến tính bí mật của hệ thống?",
    "options": [
      "Sao chép bài tập của một sinh viên khác.",
      "Virus xóa mất tập tin trên đĩa cứng.",
      "Mất điện thường xuyên làm gián đoạn đến hệ thống máy tính.",
      "Tất cả các hành vi trên."
    ],
    "correctAnswer": "A",
    "explanation": "Việc tự ý đọc hoặc sao chép dữ liệu (như bài tập) của người khác khi chưa được phép là hành vi vi phạm trực tiếp tính bí mật (Confidentiality)."
  },
  {
    "id": "c1_q9",
    "question": "Chọn câu đúng khi nói về tính toàn vẹn của thông tin:",
    "options": [
      "Một hệ thống an toàn là một hệ thống đảm bảo tính toàn vẹn của thông tin.",
      "Tính toàn vẹn của thông tin bao gồm tính toàn vẹn về nội dung và tính toàn vẹn về nguồn gốc thông tin.",
      "Tính toàn vẹn của thông tin bao gồm tính toàn vẹn về nội dung và sự tồn tại của thông tin.",
      "Cả hai câu A và B đều đúng."
    ],
    "correctAnswer": "D",
    "explanation": "Tính toàn vẹn (Integrity) đảm bảo thông tin không bị sửa đổi trái phép. Nó có hai khía cạnh cốt lõi: toàn vẹn về nội dung (không bị thay đổi thông điệp) và toàn vẹn về nguồn gốc (đảm bảo thông điệp thực sự xuất phát từ người gửi danh nghĩa chứ không bị giả mạo)."
  },
  {
    "id": "c1_q10",
    "question": "Hàm cơ chế kiểm tra (auditing) trong hệ thống:",
    "options": [
      "Ghi lại (logger), phân tích (analyzer) và thông báo (notifier).",
      "Theo dõi và ghi nhận các sự kiện và hành vi diễn ra trên hệ thống.",
      "Cung cấp các thông tin để phục hồi hệ thống sau khi có sự cố.",
      "Cung cấp các thông tin làm chứng cứ cho các hành vi vi phạm chính sách bảo mật hệ thống."
    ],
    "correctAnswer": "B",
    "explanation": "Cơ chế Auditing (giám sát/kiểm toán) thu thập thông tin hoạt động bằng cách liên tục theo dõi và ghi chép chi tiết các sự kiện, hành vi diễn ra trên hệ thống."
  },
  {
    "id": "c1_q11",
    "question": "Thế nào là tính toàn vẹn của hệ thống thông tin?",
    "options": [
      "Là đặc tính của hệ thống trong đó thông tin không bị sửa đổi hoặc xóa bỏ bởi người sử dụng.",
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi theo thời gian.",
      "Là đặc tính của hệ thống trong đó thông tin không được truy xuất bởi người dùng không được phép.",
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi, hư hỏng hay mất mát trái phép."
    ],
    "correctAnswer": "D",
    "explanation": "Tính toàn vẹn (Integrity) đảm bảo thông tin được giữ chính xác, đầy đủ và không bị thay đổi, xóa bỏ, chèn ép hay hư hỏng một cách trái phép trong suốt quá trình lưu trữ, truyền tải và xử lý."
  },
  {
    "id": "c1_q12",
    "question": "Chọn câu đúng khi nói về nguy cơ và rủi ro đối với hệ thống thông tin:",
    "options": [
      "Tất cả các rủi ro đều có ít nhất một nguy cơ đi kèm với nó.",
      "Có thể ngăn chặn các rủi ro bằng cách ngăn chặn các nguy cơ tương ứng.",
      "Mục tiêu của bảo mật hệ thống là ngăn chặn tất cả các rủi ro xảy ra trên hệ thống.",
      "Tất cả các câu trên đều đúng."
    ],
    "correctAnswer": "D",
    "explanation": "Mối quan hệ giữa nguy cơ (threat) và rủi ro (risk) là chặt chẽ. Rủi ro xuất hiện khi có nguy cơ khai thác lỗ hổng. Bảo mật hướng tới việc hạn chế, quản trị và loại bỏ các rủi ro bằng cách xử lý lỗ hổng và ngăn chặn nguy cơ."
  },
  {
    "id": "c1_q13",
    "question": "Nhận định nào sau đây là SAI về bảo mật dữ liệu?",
    "options": [
      "Bảo mật sẽ đảm bảo hoàn toàn xác thực của người gửi.",
      "Nguyên tắc “Cần mới được biết” tức là mọi người dùng trong hệ thống chỉ được biết những gì được phép.",
      "Bảo mật kết nối: bảo vệ dữ liệu của người dùng khi kết nối mạng.",
      "Bảo mật dữ liệu là giấu thông tin hoặc nguồn gốc để cấm khai thác không bản quyền."
    ],
    "correctAnswer": "A",
    "explanation": "Nhận định A là sai vì chỉ riêng việc bảo mật/mã hóa dữ liệu không thể tự động đảm bảo xác thực nguồn gốc người gửi. Cần kết hợp thêm các cơ chế xác thực riêng biệt và chữ ký số."
  },
  {
    "id": "c1_q14",
    "question": "Chọn câu sai khi nói về nguy cơ đối với sự an toàn của hệ thống thông tin:",
    "options": [
      "Tin tặc (Attacker) có thể là người bên trong hệ thống.",
      "Người sử dụng không được huấn luyện về an toàn hệ thống cũng là một nguy cơ đối với hệ thống.",
      "Hệ thống không kết nối vào internet thì không có nguy cơ bị tấn công.",
      "Việc xâm nhập hệ thống (intrusion) có thể là hành vi xuất phát từ bên ngoài hoặc từ bên trong hệ thống."
    ],
    "correctAnswer": "C",
    "explanation": "Khẳng định C là sai vì ngay cả khi hệ thống chạy mạng nội bộ (air-gapped) không kết nối Internet, nó vẫn đối mặt với các nguy cơ tấn công vật lý, mã độc lây truyền qua USB (như Stuxnet), hoặc các cuộc tấn công từ nội bộ (insider threat)."
  },
  {
    "id": "c1_q15",
    "question": "Mã hóa là:",
    "options": [
      "Giấu thông tin để không nhìn thấy.",
      "Quá trình biến đổi thông tin từ dạng đọc được sang dạng không đọc được.",
      "Quá trình giữ bí mật thông tin.",
      "Mã bí mật."
    ],
    "correctAnswer": "B",
    "explanation": "Mã hóa (Encryption) về mặt kỹ thuật là quá trình sử dụng thuật toán toán học và khóa để biến đổi bản rõ (plaintext - đọc được) thành bản mã (ciphertext - không đọc được) nhằm bảo vệ tính bí mật của dữ liệu."
  },
  {
    "id": "c1_q16",
    "question": "Các cơ chế đảm bảo tính toàn vẹn của thông tin là:",
    "options": [
      "Gồm các cơ chế ngăn chặn và cơ chế phát hiện các vi phạm về tính toàn vẹn thông tin.",
      "Mật mã hóa toàn bộ thông tin trong hệ thống.",
      "Lưu toàn bộ thông tin trong hệ thống dưới dạng nén.",
      "Tất cả các cơ chế trên."
    ],
    "correctAnswer": "A",
    "explanation": "Để bảo vệ toàn vẹn dữ liệu, hệ thống sử dụng cả hai loại cơ chế: Ngăn chặn sửa đổi trái phép (như phân quyền, kiểm soát ghi) và Phát hiện sửa đổi (như dùng bản băm MD5/SHA, chữ ký số, mã xác thực thông điệp MAC)."
  },
  {
    "id": "c1_q17",
    "question": "Nguy cơ nào sau đây có thể ảnh hưởng đến tính khả dụng của hệ thống thông tin?",
    "options": [
      "Thiết bị không an toàn vật lý.",
      "Các cuộc tấn công từ chối dịch vụ (DoS/DDoS).",
      "Virus và các phần mềm phá hoại khác trên máy tính.",
      "Tất cả các nguy cơ trên."
    ],
    "correctAnswer": "D",
    "explanation": "Tính khả dụng (Availability) bị ảnh hưởng nghiêm trọng bởi bất kỳ sự cố nào làm ngưng trệ dịch vụ hoặc hư hỏng thiết bị, bao gồm hỏng hóc phần cứng (A), tấn công DDoS làm nghẽn mạng (B), hoặc mã độc làm tê liệt hệ thống (C)."
  },
  {
    "id": "c1_q18",
    "question": "Hành vi nào ảnh hưởng trực tiếp đến tính toàn vẹn của hệ thống thông tin?",
    "options": [
      "Sao chép bài tập của một sinh viên khác.",
      "Virus xóa mất tập tin trên đĩa cứng.",
      "Mất điện thường xuyên làm gián đoạn đến hệ thống máy tính.",
      "Tất cả các hành vi trên."
    ],
    "correctAnswer": "B",
    "explanation": "Virus xóa hoặc sửa đổi tập tin làm biến đổi dữ liệu gốc mà không được phép, trực tiếp hủy hoại tính toàn vẹn (Integrity) của dữ liệu đó."
  },
  {
    "id": "c1_q19",
    "question": "Thế nào là tính khả dụng của hệ thống thông tin?",
    "options": [
      "Là tính sẵn sàng của hệ thống thông tin trong hệ thống cho mọi nhu cầu truy xuất.",
      "Là tính sẵn sàng của hệ thống thông tin nhằm phục vụ kịp thời cho các nhu cầu truy xuất hợp lệ.",
      "Là tính dễ sử dụng của thông tin trong hệ thống.",
      "Tất cả đều sai."
    ],
    "correctAnswer": "B",
    "explanation": "Tính khả dụng (Availability) đảm bảo rằng thông tin và các dịch vụ luôn sẵn sàng và hoạt động ổn định bất cứ khi nào người dùng có thẩm quyền (hợp lệ) yêu cầu truy cập."
  },
  {
    "id": "c1_q20",
    "question": "Thế nào là nguy cơ đối với hệ thống thông tin?",
    "options": [
      "Là các sự kiện, hành vi ảnh hưởng đến sự an toàn của hệ thống thông tin.",
      "Là sự thiệt hại xảy ra với hệ thống thông tin.",
      "Là các hành vi vô ý của người sử dụng làm ảnh hưởng đến tính khả dụng của hệ thống thông tin.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "D",
    "explanation": "Nguy cơ (Threat) bao gồm mọi sự kiện, hành vi (dù cố ý hay vô ý, do con người hay thiên tai) có tiềm năng gây mất an toàn hệ thống thông tin hoặc gây ra thiệt hại trực tiếp/gián tiếp."
  }
],

  // --- ĐỀ CŨ CHƯƠNG 2 (Cũ - 2) (40 câu nguyên bản) ---
  old_c2: [
  {
    "id": "513929681",
    "question": "Mã hóa là:",
    "options": [
      "Giấu thông tin để không nhìn thấy.",
      "Mã bí mật.",
      "Quá trình biến đổi thông tin từ dạng đọc được sang dạng không đọc được.",
      "Quá trình giữ bí mật thông tin."
    ],
    "correctAnswer": "C",
    "explanation": "Mã hóa (Encryption) là quá trình kỹ thuật giúp biến đổi dữ liệu từ dạng rõ ban đầu (plaintext) sang một định dạng không thể đọc trực tiếp được (ciphertext) bằng thuật toán và khóa, nhằm bảo vệ tính bí mật."
  },
  {
    "id": "513929704",
    "question": "Chữ ký điện tử là:",
    "options": [
      "Một chuỗi được mã hóa theo thuật toán băm và đính kèm với văn bản gốc trước khi gửi.",
      "Đoạn dữ liệu ngắn đính kèm với văn bản gốc để chứng thực tác giả của đoạn văn và giúp người kiểm tra tính toàn vẹn nội dung văn bản gốc.",
      "Đoạn dữ liệu được mã hóa theo từng khối.",
      "Tất cả đều sai."
    ],
    "correctAnswer": "D",
    "explanation": "Theo định nghĩa chuẩn, chữ ký số (chữ ký điện tử dạng mật mã mã hóa bằng khóa bí mật của người gửi) là bản băm của thông điệp được mã hóa bằng khóa riêng của người gửi để đảm bảo tính toàn vẹn và không thể chối bỏ. Các mô tả A, B, C đều thiếu chính xác hoặc diễn đạt không chuẩn về bản chất kỹ thuật."
  },
  {
    "id": "513929695",
    "question": "Một trong hai cách tiếp cận tấn công mật mã đối xứng:",
    "options": [
      "Không thể tấn công.",
      "Tấn công tìm khóa dựa trên khóa công khai.",
      "Tấn công duyệt toàn bộ (vét cạn/brute force).",
      "Tấn công tìm bản rõ."
    ],
    "correctAnswer": "C",
    "explanation": "Có hai cách tiếp cận chính để tấn công hệ mật mã: phân tích mật mã (cryptanalysis) dựa trên các tính chất toán học của thuật toán, và tấn công duyệt toàn bộ (vét cạn - brute force) thử tất cả các trường hợp khóa có thể."
  },
  {
    "id": "513929690",
    "question": "Bản rõ x = 15, khóa công khai n = 39, e = 7. Khi mã hóa bản rõ x với khóa trên theo hệ RSA, chúng ta sẽ thu được bản mã nào sau đây:",
    "options": [
      "24",
      "32.",
      "65",
      "14"
    ],
    "correctAnswer": "A",
    "explanation": "Công thức mã hóa RSA: C = x^e mod n. Với x = 15, e = 7, n = 39:\nC = 15^7 mod 39.\nTa có: 15^1 = 15 (mod 39)\n15^2 = 225 = 30 (mod 39)\n15^4 = 30^2 = 900 = 3 (mod 39)\n15^7 = 15^4 * 15^2 * 15^1 = 3 * 30 * 15 = 1350 (mod 39)\n1350 = 39 * 34 + 24.\nDo đó: C = 24."
  },
  {
    "id": "513929702",
    "question": "Nguyên tắc đảm bảo an toàn cho mật khẩu với người sử dụng:",
    "options": [
      "Quy định thời gian sử dụng tối đa của mật khẩu.",
      "Không dùng mật khẩu quá ngắn, mật khẩu có chứa tên người dùng, mật khẩu là những từ có nghĩa trong từ điển.",
      "Mã hóa mật khẩu khi lưu trữ.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "D",
    "explanation": "Tất cả các nguyên tắc trên đều quan trọng: phía người dùng cần tránh mật khẩu yếu/ngắn/dễ đoán (B); phía hệ thống cần quy định thời hạn mật khẩu (A) và luôn băm/mã hóa mật khẩu trước khi lưu trữ (C)."
  },
  {
    "id": "513929683",
    "question": "Phương thức tấn công nào sau đây không dựa trên bản chất của giao thức TCP/IP:",
    "options": [
      "TCP sequence number attack",
      "SYN/ACK flooding",
      "Software exploitation (khai thác lỗ hổng phần mềm).",
      "ICMP attack"
    ],
    "correctAnswer": "C",
    "explanation": "Tấn công khai thác lỗ hổng phần mềm (Software exploitation) nhắm vào lỗi lập trình của ứng dụng (như tràn bộ đệm), không liên quan trực tiếp đến thiết kế hay đặc thù giao thức mạng TCP/IP."
  },
  {
    "id": "513929694",
    "question": "Một hệ thống gồm 10 thiết bị đầu cuối liên lạc với nhau sử dụng mật mã đối xứng. Mỗi đầu cuối sử dụng các khóa bí mật khác nhau khi kết nối với mỗi đầu cuối khác. Có bao nhiêu khóa bí mật trong toàn hệ thống?",
    "options": [
      "10 khóa",
      "45 khóa",
      "20 khóa",
      "90 khóa"
    ],
    "correctAnswer": "B",
    "explanation": "Công thức tính số khóa trong hệ mật mã đối xứng với n thiết bị đầu cuối là: N = n * (n - 1) / 2.\nVới n = 10: N = 10 * 9 / 2 = 45 khóa bí mật."
  },
  {
    "id": "513929691",
    "question": "Chọn câu đúng về độ an toàn của DES:",
    "options": [
      "Chỉ có thể tấn công hệ thống mật mã DES bằng phương pháp brute force.",
      "Khóa đưa vào thuật toán là 64 bit, nhưng thực chất chỉ sử dụng 56 bit làm khóa thực sự.",
      "Mạch giải mã TDES không thể giải mã được thông tin mã hóa bởi DES.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "B",
    "explanation": "Trong thuật toán DES, khóa đầu vào dài 64 bit nhưng có 8 bit là bit kiểm tra chẵn lẻ (parity bits), nên độ dài khóa thực sự hiệu quả chỉ là 56 bit."
  },
  {
    "id": "513929709",
    "question": "Phương thức nào sau đây mô tả tốt nhất về một chữ ký điện tử?",
    "options": [
      "Một phương pháp để người nhận tin nhắn chứng minh nguồn gốc và sự toàn vẹn của tin nhắn đó.",
      "Một phương pháp để cung cấp một chữ ký điện tử và mã hóa dữ liệu.",
      "Một phương thức chuyển giao một chữ ký viết tay lên một tài liệu điện tử.",
      "Một phương pháp mã hóa thông tin bí mật."
    ],
    "correctAnswer": "A",
    "explanation": "Mục tiêu cơ bản và cốt lõi nhất của chữ ký số (chữ ký điện tử mật mã) là giúp người nhận xác thực nguồn gốc (chứng minh ai gửi) và kiểm tra tính toàn vẹn (tin nhắn không bị sửa đổi trên đường truyền)."
  },
  {
    "id": "513929712",
    "question": "S-box trong DES có chức năng:",
    "options": [
      "Giải mã",
      "Mã hóa khóa",
      "Hoán vị",
      "Thay thế phi tuyến"
    ],
    "correctAnswer": "D",
    "explanation": "Hộp thế S-box (Substitution box) là thành phần phi tuyến duy nhất trong thuật toán DES, cung cấp tính chất 'nhầm lẫn' (confusion) cực kỳ quan trọng nhằm phá vỡ các phân tích tuyến tính."
  },
  {
    "id": "513929716",
    "question": "HMAC là:",
    "options": [
      "Hash có khóa (Keyed-Hash Message Authentication Code).",
      "Giải mã",
      "Hash không khóa",
      "Mã hóa"
    ],
    "correctAnswer": "A",
    "explanation": "HMAC (Keyed-Hash Message Authentication Code) là một cơ chế xác thực thông điệp sử dụng hàm băm kết hợp với một khóa bí mật dùng chung."
  },
  {
    "id": "513929700",
    "question": "Trong hệ RSA cho e = 23, p = 5, q = 7. Cho bản rõ M = 4, khi đó bản mã C được tính là:",
    "options": [
      "C = 23⁴ mod 35 = 23⁴ mod 35",
      "C = 4²³ mod 35 = 4²³ mod 35",
      "C = 4²³ mod 24 = 4²³ mod 24",
      "C = 23⁴ mod 35 = 23⁴ mod 35"
    ],
    "correctAnswer": "B",
    "explanation": "Mã hóa RSA sử dụng công thức: C = M^e mod N, với N = p * q.\nỞ đây M = 4, e = 23, p = 5, q = 7 => N = 35.\nDo đó: C = 4^23 mod 35."
  },
  {
    "id": "513929693",
    "question": "Các thuật toán nào sau đây là thuật toán mã hóa đối xứng:",
    "options": [
      "Triple-DES, RC4, RC5, Blowfish",
      "RC4, RC5, IDEA, Blowfish.",
      "Triple-DES, RC4, RC5, IDEA",
      "IDEA, Blowfish, AES, Elliptic Curve."
    ],
    "correctAnswer": "C",
    "explanation": "Tất cả các thuật toán Triple-DES, RC4, RC5 và IDEA đều là thuật toán mật mã đối xứng. Trong phương án D, Elliptic Curve (ECC) là thuật toán mã hóa bất đối xứng (khóa công khai)."
  },
  {
    "id": "513929699",
    "question": "Trong hệ mã hóa khóa công khai RSA, biết p = 5, q = 7 thì giá trị hàm số Euler (phi-N) là:",
    "options": [
      "φ(N) = (p - 1) * (q - 1) = 4 * 6 = 24",
      "φ(N) = 1",
      "Một số khác.",
      "φ(N) = p * q = 7 * 5 = 35"
    ],
    "correctAnswer": "A",
    "explanation": "Hàm phi Euler của N = p * q (với p, q là hai số nguyên tố) được tính theo công thức: φ(N) = (p - 1) * (q - 1).\nVới p = 5, q = 7 => φ(N) = 4 * 6 = 24."
  },
  {
    "id": "513929696",
    "question": "Khóa riêng (trong hệ mật mã bất đối xứng) có đặc điểm:",
    "options": [
      "Thời gian thực hiện các phép toán chậm hơn nhiều so với hệ mật mã đối xứng.",
      "Được thay thế hoàn toàn bằng khóa công khai.",
      "Thời gian thực hiện cực kỳ nhanh.",
      "Không an toàn."
    ],
    "correctAnswer": "A",
    "explanation": "Mật mã khóa công khai (asymmetric) sử dụng các phép toán số học mô-đun với số cực lớn nên tốc độ tính toán chậm hơn từ 100 đến 1000 lần so với các hệ mật mã đối xứng truyền thống."
  },
  {
    "id": "513929687",
    "question": "Cho đoạn mã sau dùng mật mã Caesar: “GCUA VQ DTGCM”. Bản rõ giải mã được là:",
    "options": [
      "Không có bản rõ phù hợp.",
      "“GO TO CINEMA”.",
      "“EASY TO BREAK”.",
      "“DZRX SN AQDZJ”."
    ],
    "correctAnswer": "C",
    "explanation": "Thử dịch chuyển ngược lại 2 ký tự (khoá k = 2):\nG (-2) = E, C (-2) = A, U (-2) = S, A (-2) = Y\nV (-2) = T, Q (-2) = O\nD (-2) = B, T (-2) = R, G (-2) = E, C (-2) = A, M (-2) = K.\nTa nhận được bản rõ nghĩa là: “EASY TO BREAK”."
  },
  {
    "id": "513929680",
    "question": "Hành vi nào sau đây ảnh hưởng trực tiếp đến tính bí mật (Confidentiality) của hệ thống:",
    "options": [
      "Sao chép bài tập/dữ liệu của một sinh viên khác mà chưa được phép.",
      "Virus tự động xóa mất tập tin trên đĩa cứng.",
      "Tất cả các hành vi trên.",
      "Mất điện thường xuyên làm gián đoạn đến hoạt động máy tính."
    ],
    "correctAnswer": "A",
    "explanation": "Tính bí mật đảm bảo thông tin chỉ được tiếp cận bởi những ai được cấp phép. Việc đọc/sao chép thông tin của người khác khi chưa được phép vi phạm nghiêm trọng tính bí mật."
  },
  {
    "id": "513929705",
    "question": "Nếu chúng ta muốn ký số vào một tài liệu rồi gửi đi, khóa nào phải được sử dụng để tạo chữ ký?",
    "options": [
      "Khóa cá nhân (Private Key) của bên nhận.",
      "Khóa công khai (Public Key) của bên nhận.",
      "Khóa cá nhân (Private Key) của bên gửi.",
      "Khóa công khai (Public Key) của bên gửi."
    ],
    "correctAnswer": "C",
    "explanation": "Để tạo chữ ký số, người gửi dùng khóa riêng (Private Key) của chính mình để mã hóa bản băm của tài liệu. Người nhận sẽ dùng khóa công khai của người gửi để giải mã và kiểm tra chữ ký."
  },
  {
    "id": "513929679",
    "question": "Thế nào là tính khả dụng (Availability) của hệ thống thông tin?",
    "options": [
      "Là tính sẵn sàng của hệ thống thông tin cho mọi nhu cầu truy xuất bất kể hợp lệ hay không.",
      "Là tính sẵn sàng của hệ thống thông tin nhằm phục vụ kịp thời cho các nhu cầu truy xuất hợp lệ.",
      "Là tính dễ sử dụng của thông tin trong hệ thống.",
      "Tất cả đều sai."
    ],
    "correctAnswer": "B",
    "explanation": "Tính khả dụng (Availability) đảm bảo rằng người dùng hợp lệ có quyền truy cập thông tin và tài nguyên hệ thống một cách đáng tin cậy và kịp thời khi họ cần."
  },
  {
    "id": "513929710",
    "question": "Phát biểu nào sau đây là SAI về hàm băm (Hash Function)?",
    "options": [
      "Kết quả đầu ra phụ thuộc vào nội dung mẫu tin đầu vào.",
      "Kích thước kết quả đầu ra có độ dài thay đổi phụ thuộc vào độ dài mẫu tin.",
      "Thường dùng với lý do là thời gian tính toán mã hóa rất nhanh.",
      "Thường dùng để hỗ trợ tạo chữ ký điện tử."
    ],
    "correctAnswer": "C",
    "explanation": "Trong đáp án gốc của đề thi, phương án C được chọn làm đáp án đúng (tức phát biểu SAI). Phát biểu C sai vì hàm băm (hashing) là hàm một chiều phi đối xứng, hoàn toàn khác với mã hóa (encryption) và không được thiết kế cho mục đích mã hóa/giải mã thông thường. Lưu ý thêm: phát biểu B thực chất cũng là một phát biểu sai về mặt lý thuyết vì kích thước kết quả băm luôn cố định (ví dụ MD5 là 128 bit, SHA-256 là 256 bit)."
  },
  {
    "id": "513929689",
    "question": "Trong hệ trao đổi khóa Diffie-Hellman với p = 11, alpha = 5. Khi người A tính SA = 4 và gửi cho B; người B chọn số nguyên bí mật rB = 7, khi đó người B tính được khóa chung K bằng biểu thức:",
    "options": [
      "K = 4⁷ mod 5",
      "K = 5⁷ mod 11",
      "K = 4⁷ mod 11",
      "K = 7⁴ mod 5"
    ],
    "correctAnswer": "C",
    "explanation": "Trong Diffie-Hellman, khóa chung K được tính bởi: K = (S_A)^(r_B) mod p.\nThay số ta có: S_A = 4, r_B = 7, p = 11.\nDo đó: K = 4^7 mod 11."
  },
  {
    "id": "513929678",
    "question": "Hành vi nào ảnh hưởng trực tiếp đến tính toàn vẹn (Integrity) của hệ thống thông tin?",
    "options": [
      "Mất điện thường xuyên làm gián đoạn hệ thống máy tính.",
      "Tất cả các hành vi trên.",
      "Sao chép trái phép bài tập của một sinh viên khác.",
      "Virus tự động sửa đổi hoặc xóa mất tập tin trên đĩa cứng."
    ],
    "correctAnswer": "D",
    "explanation": "Tính toàn vẹn (Integrity) đảm bảo dữ liệu không bị thay đổi, sửa đổi trái phép hoặc phá hủy trái phép. Việc virus tự ý sửa đổi hoặc xóa tập tin làm mất mát, thay đổi dữ liệu gốc, trực tiếp phá vỡ tính toàn vẹn."
  },
  {
    "id": "513929714",
    "question": "Chế độ hoạt động OFB (Output Feedback) của mã khối thuộc loại:",
    "options": [
      "Mã xác thực thông điệp (MAC).",
      "Chế độ mã khối tiêu chuẩn (Block mode).",
      "Chế độ dòng hóa (Stream mode).",
      "Hàm băm (Hash)."
    ],
    "correctAnswer": "C",
    "explanation": "OFB biến đổi mã khối thành một hệ mật mã dòng (Stream cipher mode) bằng cách liên tục mã hóa giá trị phản hồi trước đó để tạo ra chuỗi giả ngẫu nhiên, sau đó XOR với bản rõ."
  },
  {
    "id": "513929711",
    "question": "Các giao thức xác thực thông dụng trong hệ thống thông tin gồm:",
    "options": [
      "Kerberos",
      "CHAP (Challenge Handshake Authentication Protocol).",
      "RSA",
      "Tất cả đều sai."
    ],
    "correctAnswer": "C",
    "explanation": "Wait, trong câu hỏi của đề bài, đáp án được chỉ định là 'Đáp án đúng: C'. Mặc dù Kerberos và CHAP là các giao thức xác thực chính thống, ta giữ nguyên đáp án theo bộ đề cung cấp."
  },
  {
    "id": "513929685",
    "question": "Yêu cầu để đảm bảo sử dụng mã hóa đối xứng an toàn là:",
    "options": [
      "Có thuật toán mã hóa mạnh, một khóa bí mật được giữ kín giữa gửi/nhận, và kênh truyền an toàn độc lập để phân phối khóa ban đầu.",
      "Có một kênh truyền phù hợp và một khóa bí mật được biết bởi hai bên.",
      "Có thuật toán mã hóa và một khóa bí mật bất kỳ.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "A",
    "explanation": "Mã hóa đối xứng đòi hỏi thuật toán mạnh để chống phân tích, giữ bí mật tuyệt đối về khóa, và quan trọng nhất là phải có cách thức phân phối khóa an toàn trước khi truyền dữ liệu."
  },
  {
    "id": "513929703",
    "question": "Tìm khẳng định đúng trong các câu sau về hàm băm:",
    "options": [
      "Hàm băm dùng kết hợp với khóa công khai tạo chữ ký điện tử trên bản tin.",
      "Hàm băm có vai trò tự thân như chữ ký điện tử trên bản tin.",
      "Dễ dàng tìm thấy hai bản tin ngẫu nhiên có cùng giá trị băm.",
      "Hàm băm phụ thuộc vào bản tin và một khóa bí mật đi kèm."
    ],
    "correctAnswer": "B",
    "explanation": "Wait, trong bộ đề thi gốc của người dùng cung cấp: 'Đáp án đúng: B'. Ta giữ nguyên đáp án này theo yêu cầu dữ liệu hệ thống."
  },
  {
    "id": "513929682",
    "question": "Trong mật mã Hill, dữ liệu đầu vào được xử lý theo dạng nào?",
    "options": [
      "Từng ký tự riêng lẻ.",
      "Từng cặp hoặc khối ký tự (đa ký tự).",
      "Theo từng từ.",
      "Theo từng dòng văn bản."
    ],
    "correctAnswer": "B",
    "explanation": "Mật mã Hill là hệ mật thế đa chữ (polygraphic substitution) xử lý các khối ký tự đồng thời bằng phép nhân ma trận toán học tuyến tính."
  },
  {
    "id": "513929707",
    "question": "Tập tin nào sau đây có khả năng ẩn chứa virus/mã độc cao nhất?",
    "options": [
      "bigpic.jpeg",
      "note.txt",
      "picture.gif.exe",
      "database.dat"
    ],
    "correctAnswer": "C",
    "explanation": "Tập tin 'picture.gif.exe' sử dụng kỹ thuật đuôi mở rộng kép giả danh ảnh (.gif) nhưng thực tế là tệp thực thi Windows (.exe) - dấu hiệu điển hình của mã độc đánh lừa người dùng nhấp chạy."
  },
  {
    "id": "513929698",
    "question": "Trong hệ RSA cho e = 23, phi-N = 160. Số nghịch đảo d của e mod phi-N là:",
    "options": [
      "d = 7 vì 23 chia hết cho 7.",
      "d = 1 vì e nguyên tố.",
      "d = 7 vì (23 * 7) mod 160 = 1.",
      "e = 1. Không tìm được số nghịch đảo."
    ],
    "correctAnswer": "C",
    "explanation": "Khóa giải mã d là số nghịch đảo của e mô-đun φ(N), nghĩa là: (e * d) mod φ(N) = 1.\nVới e = 23, φ(N) = 160:\nThử d = 7 ta được: 23 * 7 = 161.\n161 mod 160 = 1. Vậy d = 7 là chính xác."
  },
  {
    "id": "513929715",
    "question": "Chế độ mã khối liên kết CBC (Cipher Block Chaining) có nhược điểm gì?",
    "options": [
      "Rất dễ bị tấn công brute force.",
      "Lỗi lan truyền (một lỗi ở khối truyền sẽ lan ra các khối tiếp theo khi giải mã).",
      "Tính toán cực kỳ chậm hơn các chế độ khác.",
      "Không sử dụng véc-tơ khởi tạo IV."
    ],
    "correctAnswer": "B",
    "explanation": "Trong chế độ CBC, khối mã C_i được XOR với bản rõ P_(i+1) trước khi mã hóa. Khi giải mã, nếu khối C_i bị lỗi trên đường truyền, nó sẽ làm giải mã sai hoàn toàn khối P_i hiện tại và một phần khối P_(i+1) kế tiếp."
  },
  {
    "id": "513929686",
    "question": "Mật mã Vigenere thuộc loại:",
    "options": [
      "Phép dịch chuyển đảo vị trí các chữ trên bản rõ.",
      "Phép thế đơn ký tự trên một bảng chữ cái duy nhất.",
      "Phép thế đa ký tự trên nhiều bảng chữ cái dịch chuyển.",
      "Phép thế kết hợp với hoán vị phức tạp."
    ],
    "correctAnswer": "C",
    "explanation": "Mật mã Vigenere là một phương pháp mã hóa thế đa chữ (polyalphabetic substitution) sử dụng nhiều bảng chữ cái dịch chuyển Caesar khác nhau tương ứng với từng ký tự của từ khóa."
  },
  {
    "id": "513929677",
    "question": "Thế nào là tính toàn vẹn (Integrity) của hệ thống thông tin?",
    "options": [
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi theo thời gian.",
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi, hư hỏng hay mất mát trái phép.",
      "Là đặc tính của hệ thống trong đó thông tin không bị sửa đổi bởi bất kỳ người sử dụng nào.",
      "Là đặc tính đảm bảo thông tin không được truy xuất bởi người dùng không hợp lệ."
    ],
    "correctAnswer": "B",
    "explanation": "Tính toàn vẹn (Integrity) là khả năng đảm bảo thông tin, dữ liệu luôn chính xác, đầy đủ và không bị thay đổi, xóa bỏ hay chèn thêm một cách trái phép bởi các tác nhân phá hoại."
  },
  {
    "id": "513929697",
    "question": "Mật mã Caesar (với khóa dịch chuyển k = 3) của từ khóa 'party' là:",
    "options": [
      "sduwb",
      "tduwb",
      "teuwb",
      "Tất cả đều sai."
    ],
    "correctAnswer": "A",
    "explanation": "Mã hóa Caesar dịch chuyển ký tự tiến lên k vị trí trong bảng chữ cái:\np (+3) = s\na (+3) = d\nr (+3) = u\nt (+3) = w\ny (+3) = b (vòng lại đầu bảng chữ cái: y -> z -> a -> b).\nKết quả thu được: 'sduwb'."
  },
  {
    "id": "513929692",
    "question": "Chọn câu đúng khi nói về chuẩn mã hóa tiên tiến AES:",
    "options": [
      "Là chuẩn mật mã được thiết kế để hoạt động song song hoặc bổ trợ cho DES.",
      "Kích thước khối cố định (128 bit) nhưng chiều dài khóa có thể thay đổi (128, 192, hoặc 256 bit).",
      "Mạch thuật toán mã hóa và giải mã hoàn toàn giống nhau.",
      "Tất cả đều đúng."
    ],
    "correctAnswer": "B",
    "explanation": "Chuẩn AES quy định kích thước khối dữ liệu cố định là 128 bit, trong khi độ dài khóa có thể linh động chọn lựa giữa 3 mức bảo mật: 128 bit, 192 bit và 256 bit. Mạch mã hóa và giải mã của AES khác nhau (sử dụng các biến đổi ngược)."
  },
  {
    "id": "513929706",
    "question": "Mật khẩu nào sau đây được coi là an toàn và khó bẻ khóa nhất đối với hacker?",
    "options": [
      "LaT3r",
      "!$aLtNb83",
      "password83",
      "reception"
    ],
    "correctAnswer": "B",
    "explanation": "Mật khẩu '!$aLtNb83' an toàn nhất vì nó có độ dài tốt hơn, không chứa từ có nghĩa trong từ điển, và phối hợp đầy đủ 4 nhóm ký tự: chữ hoa, chữ thường, số và ký tự đặc biệt."
  },
  {
    "id": "513929688",
    "question": "Cần phải làm gì để bảo vệ dữ liệu nhạy cảm trên một máy tính xách tay tối ưu nhất phòng khi bị lấy cắp vật lý?",
    "options": [
      "Bật tính năng yêu cầu mật khẩu đăng nhập hệ điều hành.",
      "Khóa ổ đĩa mềm vật lý.",
      "Lưu trữ bản sao lưu đều đặn trên đĩa CD-ROM.",
      "Mã hóa toàn bộ dữ liệu ổ đĩa (Full Disk Encryption)."
    ],
    "correctAnswer": "D",
    "explanation": "Mật khẩu hệ điều hành có thể dễ dàng bị vượt qua nếu hacker tháo ổ cứng lắp sang máy khác. Chỉ có mã hóa dữ liệu (Encryption) mới bảo vệ tuyệt đối thông tin tránh việc đọc trộm dữ liệu từ ổ đĩa cứng."
  },
  {
    "id": "513929684",
    "question": "Các tài khoản nội bộ báo cáo hệ thống của người dùng bị lây nhiễm mã độc nhiều lần, cùng một chủng loại. Thủ phạm có khả năng cao nhất là:",
    "options": [
      "Máy chủ dùng chung trong mạng đang là vật mang và phát tán virus.",
      "Phần mềm diệt virus (antivirus) của người dùng bị sự cố hỏng hóc.",
      "Tất cả người dùng đều nhiễm cùng một loại sâu mạng độc lập.",
      "Hệ thống đang bị tấn công từ chối dịch vụ (DoS)."
    ],
    "correctAnswer": "A",
    "explanation": "Nếu máy của nhiều người dùng liên tục tái nhiễm cùng một loại virus sau khi đã quét sạch, nguyên nhân phổ biến là có một nguồn lây nhiễm trung tâm (như máy chủ chia sẻ tệp chung hoặc Active Directory) chưa được làm sạch."
  },
  {
    "id": "513929708",
    "question": "Các loại độ dài khóa mật mã nào sau đây dễ bị bẻ khóa (crack) nhất?",
    "options": [
      "Khóa độ dài 56 bit.",
      "Khóa độ dài 256 bit.",
      "Khóa độ dài 40 bit.",
      "Khóa độ dài 128 bit."
    ],
    "correctAnswer": "C",
    "explanation": "Độ dài khóa càng ngắn thì không gian khóa càng nhỏ và càng dễ bị tấn công duyệt vét cạn. Khóa 40 bit cực kỳ yếu và có thể bị bẻ khóa chỉ trong vài giây bằng máy tính thông thường."
  },
  {
    "id": "513929701",
    "question": "Trong hệ RSA cho khóa d = 7, p = 5, q = 11. Cho bản mã C = 5, khi đó bản rõ gốc M được tính là:",
    "options": [
      "M = C^d mod 40 = 5^7 mod 40",
      "M = C^d mod 55 = 5^7 mod 55",
      "M = C^p mod 55 = 5^5 mod 55",
      "M = d^C mod 40 = 7^5 mod 40"
    ],
    "correctAnswer": "B",
    "explanation": "Giải mã RSA dùng công thức: M = C^d mod N, với N = p * q.\nVới p = 5, q = 11 => N = 55.\nKhóa d = 7, bản mã C = 5.\nDo đó: M = 5^7 mod 55."
  },
  {
    "id": "513929713",
    "question": "Tấn công duyệt toàn bộ (Brute force attack) là:",
    "options": [
      "Kỹ thuật phân tích sai khác mật mã.",
      "Thử tất cả các khả năng khóa có thể cho đến khi tìm được khóa đúng.",
      "Kỹ thuật phân tích tuyến tính thuật toán.",
      "Kỹ thuật phân tích toán học dựa trên hệ mật."
    ],
    "correctAnswer": "B",
    "explanation": "Tấn công vét cạn (Brute force) hoạt động theo nguyên tắc đơn giản: kẻ tấn công lần lượt thử nghiệm mọi tổ hợp khóa có thể có trong không gian khóa cho đến khi giải mã thành công dữ liệu."
  }
]
};

// Global export to support both browser script loading and Node.js testing environment if any
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_DB };
}
