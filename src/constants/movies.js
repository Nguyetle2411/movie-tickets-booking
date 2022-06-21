const movies = [
  {
    movieId: 1,
    tenPhim: 'Doctor Strange',
    biDanh: 'doctor-strange',
    trailer: 'https://www.youtube.com/watch?v=3xccmeAsy8g',
    hinhAnh: 'assets/images/doctor-strange.jpeg',
    moTa: 'Lỡ tay làm phép khiến đa vũ trụ nảy sinh vấn đề ở Spider-Man: No Way Home, Doctor Strange “trả nghiệp” thế nào trong Doctor Strange In The Multiverse Of Madness? Có thể nói, chưa bao giờ Stephen Strange phải đối mặt với nhiều mối nguy như hiện tại. “Scarlet Witch” Wanda Maximoff tẩy não cả thị trấn (WandaVision), Loki và Sylvie quậy tung Cơ quan quản lí phương sai thời gian (Loki) và đỉnh điểm là điều ước thay đổi quá nhiều lần của Spider-Man Peter Parker khiến mọi thứ vô cùng hỗn loạn. Xem thêm tại: https://www.galaxycine.vn/dat-ve/doctor-strange-in-the-multiverse-of-madness',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 2,
    tenPhim: 'FAST & FEEL LOVE',
    biDanh: 'fast-feel-love',
    trailer: 'https://www.youtube.com/watch?v=YfOF23mOUVY',
    hinhAnh: 'assets/images/fast-feel-love.jpeg',
    moTa: 'Một nhà vô địch thế giới bộ môn xếp ly tốc độ ngoài việc thi đấu thì chẳng thèm trang bị thêm bất cứ kỹ năng sống nào khác. Đến khi anh chia tay bạn gái, anh mới bắt đầu thay đổi bản thân. Phim mới Tăng Tốc...Về Phía Em, ra mắt tại các rạp chiếu phim từ 29.04.2022',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 3,
    tenPhim: 'THOR: LOVE AND THUNDER',
    biDanh: 'thor-love-and-thunder',
    trailer: 'https://www.youtube.com/watch?v=tgB1wUcmbbw',
    hinhAnh: 'assets/images/thor-love-and-thunder.jpeg',
    moTa: 'Sau khi kết thúc Avengers: Endgame, chàng Thần Sấm tạm biệt bạn bè và vùng New Asgard để theo chân đội Vệ binh dải Ngân Hà phiêu lưu khắp vũ trụ. Phim mới Thor: Tình Yêu Và Sấm Sét ra mắt tại các rạp chiếu phim từ 08.07.2022.',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 4,
    tenPhim: 'AVATAR: THE WAY OF WATER',
    biDanh: 'avatar-the-way-of-water',
    trailer: 'https://www.youtube.com/watch?v=NZrX_ES93JA',
    hinhAnh: 'assets/images/avatar-the-way-of-water.jpeg',
    moTa: 'Những trích đoạn đầu tiên hé lộ diễn biến cuộc chiến tiếp theo giữa loài người và bộ tộc người Na’vi của hành tinh Pandora, vốn bắt đầu từ phần một. Hành tinh Pandora rực rỡ ở ngay phân cảnh đầu tiên. Tiếp đến, công chúa Neytiri (Zoe Saldana thủ vai) xuất hiện với đôi mắt tràn đầy cảm xúc dưới ánh nắng trong veo. Người xem được đi sâu vào khám phá hành tinh Pandora với nhiều cảnh quan đáng kinh ngạc, trong đó có dưới lòng đại dương sâu thẳm với những loài sinh vật kỳ bí, đúng như tên gọi của phần hai – The Way Of Water',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 5,
    tenPhim: 'MINIONS: THE RISE OF GRU',
    biDanh: 'minions-the-rise-of-gru',
    trailer: 'https://www.youtube.com/watch?v=6DxjJzmYsXo',
    hinhAnh: 'assets/images/minions-the-rise-of-gru.jpeg',
    moTa: 'Minions - Những Quả Chuối Vàng biết đi sẽ trở lại trong câu chuyện chưa kể về tuổi thơ của Gru - cậu bé mười hai tuổi mơ được trở thành ác nhân xuất sắc nhất thế giới.',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 6,
    tenPhim: 'LIGHTYEAR',
    biDanh: 'lightyear',
    trailer: 'https://www.youtube.com/watch?v=BwZs3H_UN3k',
    hinhAnh: 'assets/images/lightyear.jpeg',
    moTa: 'Bộ phim kể về chuyến hành trình hành động kết hợp khoa học viễn tưởng nhằm giới thiệu câu chuyện về nguồn gốc của nhân vật Buzz Lightyear — người anh hùng đã truyền cảm hứng sáng tạo ra Toy Story. “Lightyear” sẽ theo chân Cảnh Sát Vũ Trụ huyền thoại trong cuộc hành trình bước ra ngoài không gian cùng với một nhóm chiến binh đầy tham vọng và người bạn đồng hành là chú mèo máy Sox.',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 7,
    tenPhim: 'THANH SÓI - CÚC DẠI TRONG ĐÊM',
    biDanh: 'thanh-soi-cuc-dai-trong-dem',
    trailer: 'https://www.youtube.com/watch?v=3pHqFIIKl1g',
    hinhAnh: 'assets/images/thanh-soi-cuc-dai-trong-dem.jpeg',
    moTa: 'Lấy bối cảnh Sài Gòn 1998, phim là tiền truyện của Hai Phượng kể về hành trình “hắc hóa” của nữ giang hồ Thanh Sói. Phim mới Thanh Sói - Cúc Dại Trong Đêm ra mắt tại các rạp chiếu phim từ 22.04.2022.',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 8,
    tenPhim: 'CHUYẾN PHIÊU LƯU CỦA PIL',
    biDanh: 'chuyen-phieu-luu-cua-pil',
    trailer: 'https://www.youtube.com/watch?v=yeGjaYJPM44',
    hinhAnh: 'assets/images/chuyen-phieu-luu-cua-pil.jpeg',
    moTa: 'Ngày xửa ngày xưa, có một cô bé mồ côi phải trở thành nàng công chúa bất đắc dĩ không giống ai. Một ngày nọ, hoàng tử bị một tên quan độc ác đầu độc và khiến Pil cùng những người bạn phải đứng lên bảo vệ mình và cả vương quốc.',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 9,
    tenPhim: 'Maika - Cô Bé Đến Từ Hành Tinh Khác',
    biDanh: 'maika---co-be-den-tu-hanh-tinh-khac',
    trailer: 'https://www.youtube.com/watch?v=mOH-VKJBsh8',
    hinhAnh: 'assets/images/maika-–-co-be-den-tu-hanh-tinh-khac.jpeg',
    moTa: 'Maika - Cô Bé Đến Từ Hành Tinh Khác là câu chuyện về Hùng, một cậu bé có trái tim tan vỡ. Người mẹ cậu nhất mực yêu thương đã qua đời vì bạo bệnh. Hùng sống cùng ba trong một chung cư sắp giải tỏa. Sự cô đơn vì mất mẹ khiến Hùng luôn lủi thủi đơn độc cho đến khi cậu gặp được Maika.\r\n\r\nMaika từ hành tinh khác đến trái đất để tìm kiếm người bạn của mình. Cô bé đã giúp Hùng hàn gắn trái tim mình. Rồi từ đó, cậu tìm thấy đúng những niềm vui mà ở độ tuổi của cậu bé nên có. Bộ phim Maika – Cô bé đến từ hành tinh khác mang đến cảm xúc chân thật về gia đình; những mất mát nhưng cũng chứa đựng niềm vui thuần khiết; sự lạc quan; yêu đời. Phim cho thấy dù có thế nào, cuộc đời này vẫn đáng sống biết bao!',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 10,
    tenPhim: 'Doraemon: Nobita Và Cuộc Chiến Vũ Trụ Tí Hon 2021',
    biDanh: 'doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021',
    trailer: 'https://www.youtube.com/watch?v=XsWx71aokYE',
    hinhAnh:
      'assets/images/doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021.jpeg',
    moTa: 'Doraemon: Nobita no Little Wars 2021 bắt đầu khi Nobita tình cờ nhìn thấy một người ngoài hành tinh tí hon có tên là Papi. Papi đến từ hành tinh Pirika nhằm trốn thoát khỏi quân đội PCIA độc ác. Người tí hon rời khỏi nơi mình sinh sống để tới trái đất và đã gặp gỡ Nobita, Doraemon và những người bạn thân như Shizuka, Takeshi, Suneo. Mọi người bất ngờ trước kích thước nhỏ bé của Papi nhưng nhờ đèn pin thu nhỏ mà tất cả dần trở nên thân thiết.\r\n\r\nTuy nhiên cuối cùng thì quân đội PCIA cũng xuất hiện ở trái đất và khiến mọi người bị cuốn vào trận chiến mới. Cuối cùng Papi chiến đấu cùng những người bạn trái đất để bảo vệ hành tinh Pirika. Suốt hành trình này cũng là những khoảnh khắc các nhân vật bộc lộ cảm xúc chân thật của mình một cách trung thực, cảm động về tình bạn và lòng dũng cảm.',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  },
  {
    movieId: 11,
    tenPhim: 'John Wick: Chapter 4',
    biDanh: 'john-wick-chapter-4',
    trailer: 'https://www.youtube.com/watch?v=56pvThSsoSE',
    hinhAnh: 'assets/images/john-wick-chapter-4.jpeg',
    moTa: 'Phần phim mới Chapter 4 sẽ tiếp tục mang đến cho khán giả những pha hành động gay cấn của John Wick, một trong những sát thủ xuất sắc nhất thế giới. Khán giả sẽ cùng John Wick vén màn những bí mật từ chính tổ chức đã đào tạo anh. Trong hành trình này, John Wick sẽ phải đối đầu với vô số kẻ thù hiểm ác.',
    ngayKhoiChieu: '2022-01-01T00:00:00',
    danhGia: 10
  }
]

export default movies
