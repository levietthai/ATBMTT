/* ==========================================================================
   CYBERQUIZ SYSTEM ENGINE
   Features: 40-Question Database, Web Audio Synth, Dynamic Confetti, Timers
   ========================================================================== */

// 1. QUESTION DATABASE
const CHAPTER_1_DB = [
  {
    id: "c1_q1",
    question: "Thế nào là tính bảo mật của hệ thống thông tin?",
    options: [
      "Là đặc tính của hệ thống trong đó thông tin được giữ bí mật không cho ai truy xuất.",
      "Là đặc tính của hệ thống trong đó tất cả các thông tin được lưu trữ dưới dạng mật mã.",
      "Là đặc tính của hệ thống trong đó chỉ có những người dùng được cho phép mới có thể truy xuất được thông tin.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "C",
    explanation: "Tính bảo mật (Confidentiality) đảm bảo rằng thông tin chỉ được tiếp cận bởi những đối tượng được cấp quyền hợp lệ."
  },
  {
    id: "c1_q2",
    question: "Các cơ chế bảo vệ tính bí mật của thông tin:",
    options: [
      "Mật mã hóa toàn bộ thông tin trong hệ thống.",
      "Xây dựng các cơ chế điều khiển truy cập phù hợp.",
      "Lắp đặt các phương tiện bảo vệ hệ thống thông tin ở mức vật lý.",
      "Tất cả các cơ chế trên."
    ],
    correctAnswer: "D",
    explanation: "Bảo vệ tính bí mật đòi hỏi một cách tiếp cận phòng thủ chiều sâu (defense in depth), bao gồm mã hóa dữ liệu, quản lý và kiểm soát truy cập (Access Control), cùng các biện pháp an ninh vật lý để bảo vệ thiết bị phần cứng."
  },
  {
    id: "c1_q3",
    question: "Các cơ chế xác thực thông dụng trong hệ thống thông tin:",
    options: [
      "Dùng các cơ chế quản lý tập tin trên đĩa cứng.",
      "Dùng cơ chế phân quyền cho người dùng.",
      "Dùng tên tài khoản / mật khẩu (username / password).",
      "Tất cả đều sai."
    ],
    correctAnswer: "C",
    explanation: "Xác thực (Authentication) là quá trình kiểm chứng danh tính của một thực thể truy cập. Phương pháp phổ biến nhất là sử dụng cặp tên tài khoản và mật khẩu."
  },
  {
    id: "c1_q4",
    question: "Chọn câu đúng khi nói về tính bảo mật của hệ thống thông tin:",
    options: [
      "Một hệ thống đảm bảo tính bí mật là một hệ thống an toàn.",
      "Tính bí mật của thông tin bao gồm tính bí mật về sự tồn tại của thông tin và tính bí mật của nội dung thông tin.",
      "Tính bí mật của thông tin bao gồm tính bí mật về nội dung thông tin và tính bí mật về nguồn gốc thông tin.",
      "Tất cả đều sai."
    ],
    correctAnswer: "B",
    explanation: "Độ bí mật của thông tin có hai khía cạnh: nội dung thông tin phải được bảo vệ (không cho đọc trộm) và chính sự tồn tại của thông tin đó cũng cần được giấu kín để tránh bị chú ý hoặc phân tích lưu lượng."
  },
  {
    id: "c1_q5",
    question: "Mục tiêu của an toàn hệ thống theo thứ tự ưu tiên giảm dần:",
    options: [
      "Ngăn chặn, phát hiện, phục hồi.",
      "Phát hiện, ngăn chặn, phục hồi.",
      "Phát hiện và ngăn chặn.",
      "Phát hiện và phục hồi."
    ],
    correctAnswer: "A",
    explanation: "Chu trình an toàn thông tin kinh điển luôn ưu tiên hàng đầu là Ngăn chặn (Prevention) để tránh sự cố xảy ra, tiếp đến là Phát hiện (Detection) nhanh chóng khi có xâm nhập, và cuối cùng là Phục hồi (Recovery) hệ thống trở lại trạng thái bình thường."
  },
  {
    id: "c1_q6",
    question: "Mục tiêu của chính sách bảo mật hệ thống là:",
    options: [
      "Ngăn chặn các nguy cơ của hệ thống.",
      "Hạn chế rủi ro đối với hệ thống.",
      "Xác định các trạng thái an toàn mà hệ thống cần đảm bảo.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "C",
    explanation: "Chính sách bảo mật (Security Policy) là tài liệu đặc tả ở mức cao, xác định các trạng thái an toàn, quy tắc và mục tiêu mà hệ thống cần đạt được."
  },
  {
    id: "c1_q7",
    question: "Nguyên tắc xây dựng một hệ thống bảo mật:",
    options: [
      "Áp dụng các cơ chế bảo mật phù hợp với hệ thống.",
      "Xây dựng các chính sách bảo mật chặt chẽ.",
      "Xây dựng các chính sách bảo mật và triển khai các cơ chế đảm bảo chính sách đó.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "C",
    explanation: "Một hệ thống bảo mật đúng đắn phải bắt đầu từ việc định nghĩa rõ chính sách bảo mật (luật lệ), sau đó thiết kế và vận hành các cơ chế kỹ thuật tương ứng để đảm bảo các luật lệ đó được tuân thủ nghiêm ngặt."
  },
  {
    id: "c1_q8",
    question: "Hành vi nào sau đây ảnh hưởng trực tiếp đến tính bí mật của hệ thống?",
    options: [
      "Sao chép bài tập của một sinh viên khác.",
      "Virus xóa mất tập tin trên đĩa cứng.",
      "Mất điện thường xuyên làm gián đoạn đến hệ thống máy tính.",
      "Tất cả các hành vi trên."
    ],
    correctAnswer: "A",
    explanation: "Việc tự ý đọc hoặc sao chép dữ liệu (như bài tập) của người khác khi chưa được phép là hành vi vi phạm trực tiếp tính bí mật (Confidentiality)."
  },
  {
    id: "c1_q9",
    question: "Chọn câu đúng khi nói về tính toàn vẹn của thông tin:",
    options: [
      "Một hệ thống an toàn là một hệ thống đảm bảo tính toàn vẹn của thông tin.",
      "Tính toàn vẹn của thông tin bao gồm tính toàn vẹn về nội dung và tính toàn vẹn về nguồn gốc thông tin.",
      "Tính toàn vẹn của thông tin bao gồm tính toàn vẹn về nội dung và sự tồn tại của thông tin.",
      "Cả hai câu A và B đều đúng."
    ],
    correctAnswer: "D",
    explanation: "Tính toàn vẹn (Integrity) đảm bảo thông tin không bị sửa đổi trái phép. Nó có hai khía cạnh cốt lõi: toàn vẹn về nội dung (không bị thay đổi thông điệp) và toàn vẹn về nguồn gốc (đảm bảo thông điệp thực sự xuất phát từ người gửi danh nghĩa chứ không bị giả mạo)."
  },
  {
    id: "c1_q10",
    question: "Hàm cơ chế kiểm tra (auditing) trong hệ thống:",
    options: [
      "Ghi lại (logger), phân tích (analyzer) và thông báo (notifier).",
      "Theo dõi và ghi nhận các sự kiện và hành vi diễn ra trên hệ thống.",
      "Cung cấp các thông tin để phục hồi hệ thống sau khi có sự cố.",
      "Cung cấp các thông tin làm chứng cứ cho các hành vi vi phạm chính sách bảo mật hệ thống."
    ],
    correctAnswer: "B",
    explanation: "Cơ chế Auditing (giám sát/kiểm toán) thu thập thông tin hoạt động bằng cách liên tục theo dõi và ghi chép chi tiết các sự kiện, hành vi diễn ra trên hệ thống."
  },
  {
    id: "c1_q11",
    question: "Thế nào là tính toàn vẹn của hệ thống thông tin?",
    options: [
      "Là đặc tính của hệ thống trong đó thông tin không bị sửa đổi hoặc xóa bỏ bởi người sử dụng.",
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi theo thời gian.",
      "Là đặc tính của hệ thống trong đó thông tin không được truy xuất bởi người dùng không được phép.",
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi, hư hỏng hay mất mát trái phép."
    ],
    correctAnswer: "D",
    explanation: "Tính toàn vẹn (Integrity) đảm bảo thông tin được giữ chính xác, đầy đủ và không bị thay đổi, xóa bỏ, chèn ép hay hư hỏng một cách trái phép trong suốt quá trình lưu trữ, truyền tải và xử lý."
  },
  {
    id: "c1_q12",
    question: "Chọn câu đúng khi nói về nguy cơ và rủi ro đối với hệ thống thông tin:",
    options: [
      "Tất cả các rủi ro đều có ít nhất một nguy cơ đi kèm với nó.",
      "Có thể ngăn chặn các rủi ro bằng cách ngăn chặn các nguy cơ tương ứng.",
      "Mục tiêu của bảo mật hệ thống là ngăn chặn tất cả các rủi ro xảy ra trên hệ thống.",
      "Tất cả các câu trên đều đúng."
    ],
    correctAnswer: "D",
    explanation: "Mối quan hệ giữa nguy cơ (threat) và rủi ro (risk) là chặt chẽ. Rủi ro xuất hiện khi có nguy cơ khai thác lỗ hổng. Bảo mật hướng tới việc hạn chế, quản trị và loại bỏ các rủi ro bằng cách xử lý lỗ hổng và ngăn chặn nguy cơ."
  },
  {
    id: "c1_q13",
    question: "Nhận định nào sau đây là SAI về bảo mật dữ liệu?",
    options: [
      "Bảo mật sẽ đảm bảo hoàn toàn xác thực của người gửi.",
      "Nguyên tắc “Cần mới được biết” tức là mọi người dùng trong hệ thống chỉ được biết những gì được phép.",
      "Bảo mật kết nối: bảo vệ dữ liệu của người dùng khi kết nối mạng.",
      "Bảo mật dữ liệu là giấu thông tin hoặc nguồn gốc để cấm khai thác không bản quyền."
    ],
    correctAnswer: "A",
    explanation: "Nhận định A là sai vì chỉ riêng việc bảo mật/mã hóa dữ liệu không thể tự động đảm bảo xác thực nguồn gốc người gửi. Cần kết hợp thêm các cơ chế xác thực riêng biệt và chữ ký số."
  },
  {
    id: "c1_q14",
    question: "Chọn câu sai khi nói về nguy cơ đối với sự an toàn của hệ thống thông tin:",
    options: [
      "Tin tặc (Attacker) có thể là người bên trong hệ thống.",
      "Người sử dụng không được huấn luyện về an toàn hệ thống cũng là một nguy cơ đối với hệ thống.",
      "Hệ thống không kết nối vào internet thì không có nguy cơ bị tấn công.",
      "Việc xâm nhập hệ thống (intrusion) có thể là hành vi xuất phát từ bên ngoài hoặc từ bên trong hệ thống."
    ],
    correctAnswer: "C",
    explanation: "Khẳng định C là sai vì ngay cả khi hệ thống chạy mạng nội bộ (air-gapped) không kết nối Internet, nó vẫn đối mặt với các nguy cơ tấn công vật lý, mã độc lây truyền qua USB (như Stuxnet), hoặc các cuộc tấn công từ nội bộ (insider threat)."
  },
  {
    id: "c1_q15",
    question: "Mã hóa là:",
    options: [
      "Giấu thông tin để không nhìn thấy.",
      "Quá trình biến đổi thông tin từ dạng đọc được sang dạng không đọc được.",
      "Quá trình giữ bí mật thông tin.",
      "Mã bí mật."
    ],
    correctAnswer: "B",
    explanation: "Mã hóa (Encryption) về mặt kỹ thuật là quá trình sử dụng thuật toán toán học và khóa để biến đổi bản rõ (plaintext - đọc được) thành bản mã (ciphertext - không đọc được) nhằm bảo vệ tính bí mật của dữ liệu."
  },
  {
    id: "c1_q16",
    question: "Các cơ chế đảm bảo tính toàn vẹn của thông tin là:",
    options: [
      "Gồm các cơ chế ngăn chặn và cơ chế phát hiện các vi phạm về tính toàn vẹn thông tin.",
      "Mật mã hóa toàn bộ thông tin trong hệ thống.",
      "Lưu toàn bộ thông tin trong hệ thống dưới dạng nén.",
      "Tất cả các cơ chế trên."
    ],
    correctAnswer: "A",
    explanation: "Để bảo vệ toàn vẹn dữ liệu, hệ thống sử dụng cả hai loại cơ chế: Ngăn chặn sửa đổi trái phép (như phân quyền, kiểm soát ghi) và Phát hiện sửa đổi (như dùng bản băm MD5/SHA, chữ ký số, mã xác thực thông điệp MAC)."
  },
  {
    id: "c1_q17",
    question: "Nguy cơ nào sau đây có thể ảnh hưởng đến tính khả dụng của hệ thống thông tin?",
    options: [
      "Thiết bị không an toàn vật lý.",
      "Các cuộc tấn công từ chối dịch vụ (DoS/DDoS).",
      "Virus và các phần mềm phá hoại khác trên máy tính.",
      "Tất cả các nguy cơ trên."
    ],
    correctAnswer: "D",
    explanation: "Tính khả dụng (Availability) bị ảnh hưởng nghiêm trọng bởi bất kỳ sự cố nào làm ngưng trệ dịch vụ hoặc hư hỏng thiết bị, bao gồm hỏng hóc phần cứng (A), tấn công DDoS làm nghẽn mạng (B), hoặc mã độc làm tê liệt hệ thống (C)."
  },
  {
    id: "c1_q18",
    question: "Hành vi nào ảnh hưởng trực tiếp đến tính toàn vẹn của hệ thống thông tin?",
    options: [
      "Sao chép bài tập của một sinh viên khác.",
      "Virus xóa mất tập tin trên đĩa cứng.",
      "Mất điện thường xuyên làm gián đoạn đến hệ thống máy tính.",
      "Tất cả các hành vi trên."
    ],
    correctAnswer: "B",
    explanation: "Virus xóa hoặc sửa đổi tập tin làm biến đổi dữ liệu gốc mà không được phép, trực tiếp hủy hoại tính toàn vẹn (Integrity) của dữ liệu đó."
  },
  {
    id: "c1_q19",
    question: "Thế nào là tính khả dụng của hệ thống thông tin?",
    options: [
      "Là tính sẵn sàng của hệ thống thông tin trong hệ thống cho mọi nhu cầu truy xuất.",
      "Là tính sẵn sàng của hệ thống thông tin nhằm phục vụ kịp thời cho các nhu cầu truy xuất hợp lệ.",
      "Là tính dễ sử dụng của thông tin trong hệ thống.",
      "Tất cả đều sai."
    ],
    correctAnswer: "B",
    explanation: "Tính khả dụng (Availability) đảm bảo rằng thông tin và các dịch vụ luôn sẵn sàng và hoạt động ổn định bất cứ khi nào người dùng có thẩm quyền (hợp lệ) yêu cầu truy cập."
  },
  {
    id: "c1_q20",
    question: "Thế nào là nguy cơ đối với hệ thống thông tin?",
    options: [
      "Là các sự kiện, hành vi ảnh hưởng đến sự an toàn của hệ thống thông tin.",
      "Là sự thiệt hại xảy ra với hệ thống thông tin.",
      "Là các hành vi vô ý của người sử dụng làm ảnh hưởng đến tính khả dụng của hệ thống thông tin.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "D",
    explanation: "Nguy cơ (Threat) bao gồm mọi sự kiện, hành vi (dù cố ý hay vô ý, do con người hay thiên tai) có tiềm năng gây mất an toàn hệ thống thông tin hoặc gây ra thiệt hại trực tiếp/gián tiếp."
  }
];

const CHAPTER_2_DB = [
  {
    id: "513929681",
    question: "Mã hóa là:",
    options: [
      "Giấu thông tin để không nhìn thấy.",
      "Mã bí mật.",
      "Quá trình biến đổi thông tin từ dạng đọc được sang dạng không đọc được.",
      "Quá trình giữ bí mật thông tin."
    ],
    correctAnswer: "C",
    explanation: "Mã hóa (Encryption) là quá trình kỹ thuật giúp biến đổi dữ liệu từ dạng rõ ban đầu (plaintext) sang một định dạng không thể đọc trực tiếp được (ciphertext) bằng thuật toán và khóa, nhằm bảo vệ tính bí mật."
  },
  {
    id: "513929704",
    question: "Chữ ký điện tử là:",
    options: [
      "Một chuỗi được mã hóa theo thuật toán băm và đính kèm với văn bản gốc trước khi gửi.",
      "Đoạn dữ liệu ngắn đính kèm với văn bản gốc để chứng thực tác giả của đoạn văn và giúp người kiểm tra tính toàn vẹn nội dung văn bản gốc.",
      "Đoạn dữ liệu được mã hóa theo từng khối.",
      "Tất cả đều sai."
    ],
    correctAnswer: "D",
    explanation: "Theo định nghĩa chuẩn, chữ ký số (chữ ký điện tử dạng mật mã mã hóa bằng khóa bí mật của người gửi) là bản băm của thông điệp được mã hóa bằng khóa riêng của người gửi để đảm bảo tính toàn vẹn và không thể chối bỏ. Các mô tả A, B, C đều thiếu chính xác hoặc diễn đạt không chuẩn về bản chất kỹ thuật."
  },
  {
    id: "513929695",
    question: "Một trong hai cách tiếp cận tấn công mật mã đối xứng:",
    options: [
      "Không thể tấn công.",
      "Tấn công tìm khóa dựa trên khóa công khai.",
      "Tấn công duyệt toàn bộ (vét cạn/brute force).",
      "Tấn công tìm bản rõ."
    ],
    correctAnswer: "C",
    explanation: "Có hai cách tiếp cận chính để tấn công hệ mật mã: phân tích mật mã (cryptanalysis) dựa trên các tính chất toán học của thuật toán, và tấn công duyệt toàn bộ (vét cạn - brute force) thử tất cả các trường hợp khóa có thể."
  },
  {
    id: "513929690",
    question: "Bản rõ x = 15, khóa công khai n = 39, e = 7. Khi mã hóa bản rõ x với khóa trên theo hệ RSA, chúng ta sẽ thu được bản mã nào sau đây:",
    options: [
      "24",
      "32.",
      "65",
      "14"
    ],
    correctAnswer: "A",
    explanation: "Công thức mã hóa RSA: C = x^e mod n. Với x = 15, e = 7, n = 39:\nC = 15^7 mod 39.\nTa có: 15^1 = 15 (mod 39)\n15^2 = 225 = 30 (mod 39)\n15^4 = 30^2 = 900 = 3 (mod 39)\n15^7 = 15^4 * 15^2 * 15^1 = 3 * 30 * 15 = 1350 (mod 39)\n1350 = 39 * 34 + 24.\nDo đó: C = 24."
  },
  {
    id: "513929702",
    question: "Nguyên tắc đảm bảo an toàn cho mật khẩu với người sử dụng:",
    options: [
      "Quy định thời gian sử dụng tối đa của mật khẩu.",
      "Không dùng mật khẩu quá ngắn, mật khẩu có chứa tên người dùng, mật khẩu là những từ có nghĩa trong từ điển.",
      "Mã hóa mật khẩu khi lưu trữ.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "D",
    explanation: "Tất cả các nguyên tắc trên đều quan trọng: phía người dùng cần tránh mật khẩu yếu/ngắn/dễ đoán (B); phía hệ thống cần quy định thời hạn mật khẩu (A) và luôn băm/mã hóa mật khẩu trước khi lưu trữ (C)."
  },
  {
    id: "513929683",
    question: "Phương thức tấn công nào sau đây không dựa trên bản chất của giao thức TCP/IP:",
    options: [
      "TCP sequence number attack",
      "SYN/ACK flooding",
      "Software exploitation (khai thác lỗ hổng phần mềm).",
      "ICMP attack"
    ],
    correctAnswer: "C",
    explanation: "Tấn công khai thác lỗ hổng phần mềm (Software exploitation) nhắm vào lỗi lập trình của ứng dụng (như tràn bộ đệm), không liên quan trực tiếp đến thiết kế hay đặc thù giao thức mạng TCP/IP."
  },
  {
    id: "513929694",
    question: "Một hệ thống gồm 10 thiết bị đầu cuối liên lạc với nhau sử dụng mật mã đối xứng. Mỗi đầu cuối sử dụng các khóa bí mật khác nhau khi kết nối với mỗi đầu cuối khác. Có bao nhiêu khóa bí mật trong toàn hệ thống?",
    options: [
      "10 khóa",
      "45 khóa",
      "20 khóa",
      "90 khóa"
    ],
    correctAnswer: "B",
    explanation: "Công thức tính số khóa trong hệ mật mã đối xứng với n thiết bị đầu cuối là: N = n * (n - 1) / 2.\nVới n = 10: N = 10 * 9 / 2 = 45 khóa bí mật."
  },
  {
    id: "513929691",
    question: "Chọn câu đúng về độ an toàn của DES:",
    options: [
      "Chỉ có thể tấn công hệ thống mật mã DES bằng phương pháp brute force.",
      "Khóa đưa vào thuật toán là 64 bit, nhưng thực chất chỉ sử dụng 56 bit làm khóa thực sự.",
      "Mạch giải mã TDES không thể giải mã được thông tin mã hóa bởi DES.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "B",
    explanation: "Trong thuật toán DES, khóa đầu vào dài 64 bit nhưng có 8 bit là bit kiểm tra chẵn lẻ (parity bits), nên độ dài khóa thực sự hiệu quả chỉ là 56 bit."
  },
  {
    id: "513929709",
    question: "Phương thức nào sau đây mô tả tốt nhất về một chữ ký điện tử?",
    options: [
      "Một phương pháp để người nhận tin nhắn chứng minh nguồn gốc và sự toàn vẹn của tin nhắn đó.",
      "Một phương pháp để cung cấp một chữ ký điện tử và mã hóa dữ liệu.",
      "Một phương thức chuyển giao một chữ ký viết tay lên một tài liệu điện tử.",
      "Một phương pháp mã hóa thông tin bí mật."
    ],
    correctAnswer: "A",
    explanation: "Mục tiêu cơ bản và cốt lõi nhất của chữ ký số (chữ ký điện tử mật mã) là giúp người nhận xác thực nguồn gốc (chứng minh ai gửi) và kiểm tra tính toàn vẹn (tin nhắn không bị sửa đổi trên đường truyền)."
  },
  {
    id: "513929712",
    question: "S-box trong DES có chức năng:",
    options: [
      "Giải mã",
      "Mã hóa khóa",
      "Hoán vị",
      "Thay thế phi tuyến"
    ],
    correctAnswer: "D",
    explanation: "Hộp thế S-box (Substitution box) là thành phần phi tuyến duy nhất trong thuật toán DES, cung cấp tính chất 'nhầm lẫn' (confusion) cực kỳ quan trọng nhằm phá vỡ các phân tích tuyến tính."
  },
  {
    id: "513929716",
    question: "HMAC là:",
    options: [
      "Hash có khóa (Keyed-Hash Message Authentication Code).",
      "Giải mã",
      "Hash không khóa",
      "Mã hóa"
    ],
    correctAnswer: "A",
    explanation: "HMAC (Keyed-Hash Message Authentication Code) là một cơ chế xác thực thông điệp sử dụng hàm băm kết hợp với một khóa bí mật dùng chung."
  },
  {
    id: "513929700",
    question: "Trong hệ RSA cho e = 23, p = 5, q = 7. Cho bản rõ M = 4, khi đó bản mã C được tính là:",
    options: [
      "C = 23⁴ mod 35 = 23⁴ mod 35",
      "C = 4²³ mod 35 = 4²³ mod 35",
      "C = 4²³ mod 24 = 4²³ mod 24",
      "C = 23⁴ mod 35 = 23⁴ mod 35"
    ],
    correctAnswer: "B",
    explanation: "Mã hóa RSA sử dụng công thức: C = M^e mod N, với N = p * q.\nỞ đây M = 4, e = 23, p = 5, q = 7 => N = 35.\nDo đó: C = 4^23 mod 35."
  },
  {
    id: "513929693",
    question: "Các thuật toán nào sau đây là thuật toán mã hóa đối xứng:",
    options: [
      "Triple-DES, RC4, RC5, Blowfish",
      "RC4, RC5, IDEA, Blowfish.",
      "Triple-DES, RC4, RC5, IDEA",
      "IDEA, Blowfish, AES, Elliptic Curve."
    ],
    correctAnswer: "C",
    explanation: "Tất cả các thuật toán Triple-DES, RC4, RC5 và IDEA đều là thuật toán mật mã đối xứng. Trong phương án D, Elliptic Curve (ECC) là thuật toán mã hóa bất đối xứng (khóa công khai)."
  },
  {
    id: "513929699",
    question: "Trong hệ mã hóa khóa công khai RSA, biết p = 5, q = 7 thì giá trị hàm số Euler (phi-N) là:",
    options: [
      "φ(N) = (p - 1) * (q - 1) = 4 * 6 = 24",
      "φ(N) = 1",
      "Một số khác.",
      "φ(N) = p * q = 7 * 5 = 35"
    ],
    correctAnswer: "A",
    explanation: "Hàm phi Euler của N = p * q (với p, q là hai số nguyên tố) được tính theo công thức: φ(N) = (p - 1) * (q - 1).\nVới p = 5, q = 7 => φ(N) = 4 * 6 = 24."
  },
  {
    id: "513929696",
    question: "Khóa riêng (trong hệ mật mã bất đối xứng) có đặc điểm:",
    options: [
      "Thời gian thực hiện các phép toán chậm hơn nhiều so với hệ mật mã đối xứng.",
      "Được thay thế hoàn toàn bằng khóa công khai.",
      "Thời gian thực hiện cực kỳ nhanh.",
      "Không an toàn."
    ],
    correctAnswer: "A",
    explanation: "Mật mã khóa công khai (asymmetric) sử dụng các phép toán số học mô-đun với số cực lớn nên tốc độ tính toán chậm hơn từ 100 đến 1000 lần so với các hệ mật mã đối xứng truyền thống."
  },
  {
    id: "513929687",
    question: "Cho đoạn mã sau dùng mật mã Caesar: “GCUA VQ DTGCM”. Bản rõ giải mã được là:",
    options: [
      "Không có bản rõ phù hợp.",
      "“GO TO CINEMA”.",
      "“EASY TO BREAK”.",
      "“DZRX SN AQDZJ”."
    ],
    correctAnswer: "C",
    explanation: "Thử dịch chuyển ngược lại 2 ký tự (khoá k = 2):\nG (-2) = E, C (-2) = A, U (-2) = S, A (-2) = Y\nV (-2) = T, Q (-2) = O\nD (-2) = B, T (-2) = R, G (-2) = E, C (-2) = A, M (-2) = K.\nTa nhận được bản rõ nghĩa là: “EASY TO BREAK”."
  },
  {
    id: "513929680",
    question: "Hành vi nào sau đây ảnh hưởng trực tiếp đến tính bí mật (Confidentiality) của hệ thống:",
    options: [
      "Sao chép bài tập/dữ liệu của một sinh viên khác mà chưa được phép.",
      "Virus tự động xóa mất tập tin trên đĩa cứng.",
      "Tất cả các hành vi trên.",
      "Mất điện thường xuyên làm gián đoạn đến hoạt động máy tính."
    ],
    correctAnswer: "A",
    explanation: "Tính bí mật đảm bảo thông tin chỉ được tiếp cận bởi những ai được cấp phép. Việc đọc/sao chép thông tin của người khác khi chưa được phép vi phạm nghiêm trọng tính bí mật."
  },
  {
    id: "513929705",
    question: "Nếu chúng ta muốn ký số vào một tài liệu rồi gửi đi, khóa nào phải được sử dụng để tạo chữ ký?",
    options: [
      "Khóa cá nhân (Private Key) của bên nhận.",
      "Khóa công khai (Public Key) của bên nhận.",
      "Khóa cá nhân (Private Key) của bên gửi.",
      "Khóa công khai (Public Key) của bên gửi."
    ],
    correctAnswer: "C",
    explanation: "Để tạo chữ ký số, người gửi dùng khóa riêng (Private Key) của chính mình để mã hóa bản băm của tài liệu. Người nhận sẽ dùng khóa công khai của người gửi để giải mã và kiểm tra chữ ký."
  },
  {
    id: "513929679",
    question: "Thế nào là tính khả dụng (Availability) của hệ thống thông tin?",
    options: [
      "Là tính sẵn sàng của hệ thống thông tin cho mọi nhu cầu truy xuất bất kể hợp lệ hay không.",
      "Là tính sẵn sàng của hệ thống thông tin nhằm phục vụ kịp thời cho các nhu cầu truy xuất hợp lệ.",
      "Là tính dễ sử dụng của thông tin trong hệ thống.",
      "Tất cả đều sai."
    ],
    correctAnswer: "B",
    explanation: "Tính khả dụng (Availability) đảm bảo rằng người dùng hợp lệ có quyền truy cập thông tin và tài nguyên hệ thống một cách đáng tin cậy và kịp thời khi họ cần."
  },
  {
    id: "513929710",
    question: "Phát biểu nào sau đây là SAI về hàm băm (Hash Function)?",
    options: [
      "Kết quả đầu ra phụ thuộc vào nội dung mẫu tin đầu vào.",
      "Kích thước kết quả đầu ra có độ dài thay đổi phụ thuộc vào độ dài mẫu tin.",
      "Thường dùng với lý do là thời gian tính toán mã hóa rất nhanh.",
      "Thường dùng để hỗ trợ tạo chữ ký điện tử."
    ],
    correctAnswer: "C",
    explanation: "Trong đáp án gốc của đề thi, phương án C được chọn làm đáp án đúng (tức phát biểu SAI). Phát biểu C sai vì hàm băm (hashing) là hàm một chiều phi đối xứng, hoàn toàn khác với mã hóa (encryption) và không được thiết kế cho mục đích mã hóa/giải mã thông thường. Lưu ý thêm: phát biểu B thực chất cũng là một phát biểu sai về mặt lý thuyết vì kích thước kết quả băm luôn cố định (ví dụ MD5 là 128 bit, SHA-256 là 256 bit)."
  },
  {
    id: "513929689",
    question: "Trong hệ trao đổi khóa Diffie-Hellman với p = 11, alpha = 5. Khi người A tính SA = 4 và gửi cho B; người B chọn số nguyên bí mật rB = 7, khi đó người B tính được khóa chung K bằng biểu thức:",
    options: [
      "K = 4⁷ mod 5",
      "K = 5⁷ mod 11",
      "K = 4⁷ mod 11",
      "K = 7⁴ mod 5"
    ],
    correctAnswer: "C",
    explanation: "Trong Diffie-Hellman, khóa chung K được tính bởi: K = (S_A)^(r_B) mod p.\nThay số ta có: S_A = 4, r_B = 7, p = 11.\nDo đó: K = 4^7 mod 11."
  },
  {
    id: "513929678",
    question: "Hành vi nào ảnh hưởng trực tiếp đến tính toàn vẹn (Integrity) của hệ thống thông tin?",
    options: [
      "Mất điện thường xuyên làm gián đoạn hệ thống máy tính.",
      "Tất cả các hành vi trên.",
      "Sao chép trái phép bài tập của một sinh viên khác.",
      "Virus tự động sửa đổi hoặc xóa mất tập tin trên đĩa cứng."
    ],
    correctAnswer: "D",
    explanation: "Tính toàn vẹn (Integrity) đảm bảo dữ liệu không bị thay đổi, sửa đổi trái phép hoặc phá hủy trái phép. Việc virus tự ý sửa đổi hoặc xóa tập tin làm mất mát, thay đổi dữ liệu gốc, trực tiếp phá vỡ tính toàn vẹn."
  },
  {
    id: "513929714",
    question: "Chế độ hoạt động OFB (Output Feedback) của mã khối thuộc loại:",
    options: [
      "Mã xác thực thông điệp (MAC).",
      "Chế độ mã khối tiêu chuẩn (Block mode).",
      "Chế độ dòng hóa (Stream mode).",
      "Hàm băm (Hash)."
    ],
    correctAnswer: "C",
    explanation: "OFB biến đổi mã khối thành một hệ mật mã dòng (Stream cipher mode) bằng cách liên tục mã hóa giá trị phản hồi trước đó để tạo ra chuỗi giả ngẫu nhiên, sau đó XOR với bản rõ."
  },
  {
    id: "513929711",
    question: "Các giao thức xác thực thông dụng trong hệ thống thông tin gồm:",
    options: [
      "Kerberos",
      "CHAP (Challenge Handshake Authentication Protocol).",
      "RSA",
      "Tất cả đều sai."
    ],
    correctAnswer: "C",
    explanation: "Wait, trong câu hỏi của đề bài, đáp án được chỉ định là 'Đáp án đúng: C'. Mặc dù Kerberos và CHAP là các giao thức xác thực chính thống, ta giữ nguyên đáp án theo bộ đề cung cấp."
  },
  {
    id: "513929685",
    question: "Yêu cầu để đảm bảo sử dụng mã hóa đối xứng an toàn là:",
    options: [
      "Có thuật toán mã hóa mạnh, một khóa bí mật được giữ kín giữa gửi/nhận, và kênh truyền an toàn độc lập để phân phối khóa ban đầu.",
      "Có một kênh truyền phù hợp và một khóa bí mật được biết bởi hai bên.",
      "Có thuật toán mã hóa và một khóa bí mật bất kỳ.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "A",
    explanation: "Mã hóa đối xứng đòi hỏi thuật toán mạnh để chống phân tích, giữ bí mật tuyệt đối về khóa, và quan trọng nhất là phải có cách thức phân phối khóa an toàn trước khi truyền dữ liệu."
  },
  {
    id: "513929703",
    question: "Tìm khẳng định đúng trong các câu sau về hàm băm:",
    options: [
      "Hàm băm dùng kết hợp với khóa công khai tạo chữ ký điện tử trên bản tin.",
      "Hàm băm có vai trò tự thân như chữ ký điện tử trên bản tin.",
      "Dễ dàng tìm thấy hai bản tin ngẫu nhiên có cùng giá trị băm.",
      "Hàm băm phụ thuộc vào bản tin và một khóa bí mật đi kèm."
    ],
    correctAnswer: "B",
    explanation: "Wait, trong bộ đề thi gốc của người dùng cung cấp: 'Đáp án đúng: B'. Ta giữ nguyên đáp án này theo yêu cầu dữ liệu hệ thống."
  },
  {
    id: "513929682",
    question: "Trong mật mã Hill, dữ liệu đầu vào được xử lý theo dạng nào?",
    options: [
      "Từng ký tự riêng lẻ.",
      "Từng cặp hoặc khối ký tự (đa ký tự).",
      "Theo từng từ.",
      "Theo từng dòng văn bản."
    ],
    correctAnswer: "B",
    explanation: "Mật mã Hill là hệ mật thế đa chữ (polygraphic substitution) xử lý các khối ký tự đồng thời bằng phép nhân ma trận toán học tuyến tính."
  },
  {
    id: "513929707",
    question: "Tập tin nào sau đây có khả năng ẩn chứa virus/mã độc cao nhất?",
    options: [
      "bigpic.jpeg",
      "note.txt",
      "picture.gif.exe",
      "database.dat"
    ],
    correctAnswer: "C",
    explanation: "Tập tin 'picture.gif.exe' sử dụng kỹ thuật đuôi mở rộng kép giả danh ảnh (.gif) nhưng thực tế là tệp thực thi Windows (.exe) - dấu hiệu điển hình của mã độc đánh lừa người dùng nhấp chạy."
  },
  {
    id: "513929698",
    question: "Trong hệ RSA cho e = 23, phi-N = 160. Số nghịch đảo d của e mod phi-N là:",
    options: [
      "d = 7 vì 23 chia hết cho 7.",
      "d = 1 vì e nguyên tố.",
      "d = 7 vì (23 * 7) mod 160 = 1.",
      "e = 1. Không tìm được số nghịch đảo."
    ],
    correctAnswer: "C",
    explanation: "Khóa giải mã d là số nghịch đảo của e mô-đun φ(N), nghĩa là: (e * d) mod φ(N) = 1.\nVới e = 23, φ(N) = 160:\nThử d = 7 ta được: 23 * 7 = 161.\n161 mod 160 = 1. Vậy d = 7 là chính xác."
  },
  {
    id: "513929715",
    question: "Chế độ mã khối liên kết CBC (Cipher Block Chaining) có nhược điểm gì?",
    options: [
      "Rất dễ bị tấn công brute force.",
      "Lỗi lan truyền (một lỗi ở khối truyền sẽ lan ra các khối tiếp theo khi giải mã).",
      "Tính toán cực kỳ chậm hơn các chế độ khác.",
      "Không sử dụng véc-tơ khởi tạo IV."
    ],
    correctAnswer: "B",
    explanation: "Trong chế độ CBC, khối mã C_i được XOR với bản rõ P_(i+1) trước khi mã hóa. Khi giải mã, nếu khối C_i bị lỗi trên đường truyền, nó sẽ làm giải mã sai hoàn toàn khối P_i hiện tại và một phần khối P_(i+1) kế tiếp."
  },
  {
    id: "513929686",
    question: "Mật mã Vigenere thuộc loại:",
    options: [
      "Phép dịch chuyển đảo vị trí các chữ trên bản rõ.",
      "Phép thế đơn ký tự trên một bảng chữ cái duy nhất.",
      "Phép thế đa ký tự trên nhiều bảng chữ cái dịch chuyển.",
      "Phép thế kết hợp với hoán vị phức tạp."
    ],
    correctAnswer: "C",
    explanation: "Mật mã Vigenere là một phương pháp mã hóa thế đa chữ (polyalphabetic substitution) sử dụng nhiều bảng chữ cái dịch chuyển Caesar khác nhau tương ứng với từng ký tự của từ khóa."
  },
  {
    id: "513929677",
    question: "Thế nào là tính toàn vẹn (Integrity) của hệ thống thông tin?",
    options: [
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi theo thời gian.",
      "Là đặc tính của hệ thống trong đó thông tin không bị thay đổi, hư hỏng hay mất mát trái phép.",
      "Là đặc tính của hệ thống trong đó thông tin không bị sửa đổi bởi bất kỳ người sử dụng nào.",
      "Là đặc tính đảm bảo thông tin không được truy xuất bởi người dùng không hợp lệ."
    ],
    correctAnswer: "B",
    explanation: "Tính toàn vẹn (Integrity) là khả năng đảm bảo thông tin, dữ liệu luôn chính xác, đầy đủ và không bị thay đổi, xóa bỏ hay chèn thêm một cách trái phép bởi các tác nhân phá hoại."
  },
  {
    id: "513929697",
    question: "Mật mã Caesar (với khóa dịch chuyển k = 3) của từ khóa 'party' là:",
    options: [
      "sduwb",
      "tduwb",
      "teuwb",
      "Tất cả đều sai."
    ],
    correctAnswer: "A",
    explanation: "Mã hóa Caesar dịch chuyển ký tự tiến lên k vị trí trong bảng chữ cái:\np (+3) = s\na (+3) = d\nr (+3) = u\nt (+3) = w\ny (+3) = b (vòng lại đầu bảng chữ cái: y -> z -> a -> b).\nKết quả thu được: 'sduwb'."
  },
  {
    id: "513929692",
    question: "Chọn câu đúng khi nói về chuẩn mã hóa tiên tiến AES:",
    options: [
      "Là chuẩn mật mã được thiết kế để hoạt động song song hoặc bổ trợ cho DES.",
      "Kích thước khối cố định (128 bit) nhưng chiều dài khóa có thể thay đổi (128, 192, hoặc 256 bit).",
      "Mạch thuật toán mã hóa và giải mã hoàn toàn giống nhau.",
      "Tất cả đều đúng."
    ],
    correctAnswer: "B",
    explanation: "Chuẩn AES quy định kích thước khối dữ liệu cố định là 128 bit, trong khi độ dài khóa có thể linh động chọn lựa giữa 3 mức bảo mật: 128 bit, 192 bit và 256 bit. Mạch mã hóa và giải mã của AES khác nhau (sử dụng các biến đổi ngược)."
  },
  {
    id: "513929706",
    question: "Mật khẩu nào sau đây được coi là an toàn và khó bẻ khóa nhất đối với hacker?",
    options: [
      "LaT3r",
      "!$aLtNb83",
      "password83",
      "reception"
    ],
    correctAnswer: "B",
    explanation: "Mật khẩu '!$aLtNb83' an toàn nhất vì nó có độ dài tốt hơn, không chứa từ có nghĩa trong từ điển, và phối hợp đầy đủ 4 nhóm ký tự: chữ hoa, chữ thường, số và ký tự đặc biệt."
  },
  {
    id: "513929688",
    question: "Cần phải làm gì để bảo vệ dữ liệu nhạy cảm trên một máy tính xách tay tối ưu nhất phòng khi bị lấy cắp vật lý?",
    options: [
      "Bật tính năng yêu cầu mật khẩu đăng nhập hệ điều hành.",
      "Khóa ổ đĩa mềm vật lý.",
      "Lưu trữ bản sao lưu đều đặn trên đĩa CD-ROM.",
      "Mã hóa toàn bộ dữ liệu ổ đĩa (Full Disk Encryption)."
    ],
    correctAnswer: "D",
    explanation: "Mật khẩu hệ điều hành có thể dễ dàng bị vượt qua nếu hacker tháo ổ cứng lắp sang máy khác. Chỉ có mã hóa dữ liệu (Encryption) mới bảo vệ tuyệt đối thông tin tránh việc đọc trộm dữ liệu từ ổ đĩa cứng."
  },
  {
    id: "513929684",
    question: "Các tài khoản nội bộ báo cáo hệ thống của người dùng bị lây nhiễm mã độc nhiều lần, cùng một chủng loại. Thủ phạm có khả năng cao nhất là:",
    options: [
      "Máy chủ dùng chung trong mạng đang là vật mang và phát tán virus.",
      "Phần mềm diệt virus (antivirus) của người dùng bị sự cố hỏng hóc.",
      "Tất cả người dùng đều nhiễm cùng một loại sâu mạng độc lập.",
      "Hệ thống đang bị tấn công từ chối dịch vụ (DoS)."
    ],
    correctAnswer: "A",
    explanation: "Nếu máy của nhiều người dùng liên tục tái nhiễm cùng một loại virus sau khi đã quét sạch, nguyên nhân phổ biến là có một nguồn lây nhiễm trung tâm (như máy chủ chia sẻ tệp chung hoặc Active Directory) chưa được làm sạch."
  },
  {
    id: "513929708",
    question: "Các loại độ dài khóa mật mã nào sau đây dễ bị bẻ khóa (crack) nhất?",
    options: [
      "Khóa độ dài 56 bit.",
      "Khóa độ dài 256 bit.",
      "Khóa độ dài 40 bit.",
      "Khóa độ dài 128 bit."
    ],
    correctAnswer: "C",
    explanation: "Độ dài khóa càng ngắn thì không gian khóa càng nhỏ và càng dễ bị tấn công duyệt vét cạn. Khóa 40 bit cực kỳ yếu và có thể bị bẻ khóa chỉ trong vài giây bằng máy tính thông thường."
  },
  {
    id: "513929701",
    question: "Trong hệ RSA cho khóa d = 7, p = 5, q = 11. Cho bản mã C = 5, khi đó bản rõ gốc M được tính là:",
    options: [
      "M = C^d mod 40 = 5^7 mod 40",
      "M = C^d mod 55 = 5^7 mod 55",
      "M = C^p mod 55 = 5^5 mod 55",
      "M = d^C mod 40 = 7^5 mod 40"
    ],
    correctAnswer: "B",
    explanation: "Giải mã RSA dùng công thức: M = C^d mod N, với N = p * q.\nVới p = 5, q = 11 => N = 55.\nKhóa d = 7, bản mã C = 5.\nDo đó: M = 5^7 mod 55."
  },
  {
    id: "513929713",
    question: "Tấn công duyệt toàn bộ (Brute force attack) là:",
    options: [
      "Kỹ thuật phân tích sai khác mật mã.",
      "Thử tất cả các khả năng khóa có thể cho đến khi tìm được khóa đúng.",
      "Kỹ thuật phân tích tuyến tính thuật toán.",
      "Kỹ thuật phân tích toán học dựa trên hệ mật."
    ],
    correctAnswer: "B",
    explanation: "Tấn công vét cạn (Brute force) hoạt động theo nguyên tắc đơn giản: kẻ tấn công lần lượt thử nghiệm mọi tổ hợp khóa có thể có trong không gian khóa cho đến khi giải mã thành công dữ liệu."
  }
];

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
  chapter: 1,             // Active study chapter (1 or 2)
  totalQuestionLimit: 20, 
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
  const chapterSelectContainer = document.getElementById('chapter-select');
  if (chapterSelectContainer) {
    chapterSelectContainer.addEventListener('click', (e) => {
      const clickedBtn = e.target.closest('.segmented-btn');
      if (!clickedBtn) return;
      
      chapterSelectContainer.querySelectorAll('.segmented-btn').forEach(btn => btn.classList.remove('active'));
      clickedBtn.classList.add('active');
      gameState.chapter = parseInt(clickedBtn.dataset.value, 10);
      
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
}

function updateWelcomeText() {
  const subtitle = document.querySelector('.hero-section .subtitle');
  const mainTitle = document.querySelector('.hero-section .main-title');
  if (!mainTitle || !subtitle) return;
  
  if (gameState.chapter === 1) {
    mainTitle.innerHTML = 'CHƯƠNG 1: TỔNG QUAN AN TOÀN THÔNG TIN';
    subtitle.innerText = 'Kiểm tra và nâng cao kiến thức cơ bản về an toàn thông tin với 20 câu hỏi trắc nghiệm thực tế.';
  } else {
    mainTitle.innerHTML = 'CHƯƠNG 2: MẬT MÃ HỌC & GIAO THỨC BẢO MẬT';
    subtitle.innerText = 'Kiểm tra và nâng cao kiến thức chuyên sâu về mật mã học với 40 câu hỏi trắc nghiệm thực tế.';
  }
}

function updateQuestionCountOptions() {
  const countSelectContainer = document.getElementById('question-count-select');
  if (!countSelectContainer) return;
  
  countSelectContainer.innerHTML = '';
  
  if (gameState.chapter === 1) {
    countSelectContainer.innerHTML = `
      <button class="segmented-btn" data-value="10">10 Câu</button>
      <button class="segmented-btn active" data-value="20">20 Câu (Tất cả)</button>
    `;
    gameState.totalQuestionLimit = 20;
  } else {
    countSelectContainer.innerHTML = `
      <button class="segmented-btn" data-value="10">10 Câu</button>
      <button class="segmented-btn" data-value="20">20 Câu</button>
      <button class="segmented-btn active" data-value="40">40 Câu (Tất cả)</button>
    `;
    gameState.totalQuestionLimit = 40;
  }
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
  const selectedDb = gameState.chapter === 1 ? [...CHAPTER_1_DB] : [...CHAPTER_2_DB];
  
  if (gameState.shuffleOrder === 'shuffle') {
    // Shuffling utility: Fisher-Yates shuffle
    for (let i = selectedDb.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selectedDb[i], selectedDb[j]] = [selectedDb[j], selectedDb[i]];
    }
  }

  // 2. Select the configured pool size
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
