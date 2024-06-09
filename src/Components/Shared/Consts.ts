import neurology from '@/assets/Images/Icons/Neurology.png';
import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
import dentistry from '@/assets/Images/Icons/Dentistry.png';
import radiology from '@/assets/Images/Icons/Radiology.png';
import urology from '@/assets/Images/Icons/Urology.png';
import medicine from '@/assets/Images/Icons/Medicine.png';
import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

import Banner1 from '@/assets/Images/Banner1.png';
import Banner2 from '@/assets/Images/Banner2.png';

// import doc1 from '@/assets/Images/Doctors/doc1.png';
// import doc2 from '@/assets/Images/Doctors/doc2.png';
// import doc3 from '@/assets/Images/Doctors/doc3.png';
// import doc4 from '@/assets/Images/Doctors/doc4.png';

// import user1 from '@/assets/Images/users/user1.jpg';
// import user2 from '@/assets/Images/users/user2.jpg';
// import user3 from '@/assets/Images/users/user3.jpg';

import logo from '@/assets/Images/logo.png';

export const links = ['Home', 'Doctors', 'Services', 'Reviews'];

export const descNums = [
  {
    num: '500+',
    text: 'Bác Sĩ Chuyên Môn',
  },
  {
    num: '20k+',
    text: 'Bệnh Nhân Hạnh Phúc',
  },
  {
    num: '24/7',
    text: 'Dịch Vụ Cấp Cứu',
  },
  {
    num: '100+',
    text: 'Phòng Mổ',
  },
  {
    num: '850+',
    text: 'Phòng Bệnh',
  },
];

export const ServicesData = [
  {
    img: neurology,
    title: 'Neurology',
    id: 'neurology',
    heading: 'Khoa Thần Kinh',
    texts: [
      'Tư vấn thần kinh của chuyên gia',
      'Chăm sóc não và thần kinh toàn diện',
      'Dịch vụ hình ảnh thần kinh nâng cao',
      'Điều trị bệnh động kinh và co giật',
      'Đánh giá trí nhớ và nhận thức',
      'Chuyên môn thần kinh nhi khoa',
      'Quản lý rối loạn vận động',
    ],
  },
  {
    img: cardiology,
    title: 'Cardiology',
    id: 'cardiology',
    heading: 'Khoa Tim Mạch',
    texts: [
      'Điện tâm đồ (ECG)',
      'Siêu âm tim',
      'Tiếng vang Doppler màu',
      'Tiếng vang căng thẳng Dobutamine (DSE)',
      'Tiếng vang xuyên thực quản (TEE)',
      'Kiểm tra khả năng chịu đựng khi tập thể dục (ETT/TMT)',
      'Máy theo dõi Holter',
      'Máy theo dõi huyết áp lưu động 24 giờ',
      'Kiểm tra độ nghiêng/Kiểm tra bàn nghiêng',
    ],
  },
  {
    img: orthopedics,
    title: 'Orthopedics',
    id: 'orthopedics',
    heading: 'Khoa Chỉnh Hình',
    texts: [
      'Phẫu thuật chỉnh hình và thay khớp',
      'Chấn thương thể thao và chăm sóc chấn thương',
      'Vật lý trị liệu và phục hồi chức năng',
      'Giải pháp chữa đau lưng và cột sống',
      'Viêm khớp và điều trị rối loạn khớp',
      'Tư vấn chỉnh hình',
      'Kế hoạch chăm sóc chỉnh hình tùy chỉnh',
    ],
  },
  {
    img: surgery,
    title: 'Surgery',
    id: 'surgery',
    heading: 'Khoa Phẫu Thuật',
    texts: [
      'Phẫu thuật xâm lấn tối thiểu và nội soi',
      'Phẫu thuật tiêu hóa và nội soi',
      'Phẫu thuật tạo hình và tái tạo',
      'Cắt bỏ khối u và ung thư',
      'Chăm sóc và phục hồi sau phẫu thuật',
      'Tư vấn phẫu thuật',
      'Can thiệp phẫu thuật khẩn cấp',
    ],
  },
  {
    img: dentistry,
    title: 'Dentistry',
    id: 'dentistry',
    heading: 'Khoa Nha Khoa',
    texts: [
      'Khám và vệ sinh răng miệng định kỳ',
      'Nha khoa thẩm mỹ và tẩy trắng răng',
      'Phẫu thuật và nhổ răng miệng',
      'Cấy ghép và phục hồi răng',
      'Nha khoa trẻ em và gia đình',
      'Điều trị bệnh nướu răng',
      'Các lựa chọn chỉnh nha và niềng răng',
    ],
  },
  {
    img: radiology,
    title: 'Radiology',
    id: 'radiology',
    heading: 'Khoa X Quang',
    texts: [
      'Dịch vụ chẩn đoán hình ảnh nâng cao',
      'Chụp nhũ ảnh và sàng lọc sức khỏe ngực',
      'Thủ tục X quang can thiệp',
      'Nội soi ảo và quét cơ thể',
      'Tư vấn X quang',
      'Kết quả hình ảnh nhanh và chính xác',
      'Công nghệ X quang tiên tiến',
    ],
  },
  {
    img: urology,
    title: 'Urology',
    id: 'urology',
    heading: 'Khoa Tiết Niệu',
    texts: [
      'Đánh giá đường tiết niệu và thận',
      'Phẫu thuật tiết niệu và lấy sỏi',
      "Sức khỏe tiết niệu nam giới và phụ nữ",
      'Chăm sóc tuyến tiền liệt và bàng quang',
      'Điều trị không tự chủ và sàn chậu',
      'Tư vấn tiết niệu',
      'Giải pháp tiết niệu toàn diện',
    ],
  },
  {
    img: medicine,
    title: 'Medicine',
    id: 'medicine',
    heading: 'Khoa Y',
    texts: [
      'Chăm sóc ban đầu và nội khoa',
      'Quản lý và phòng ngừa bệnh mãn tính',
      'Tiêm chủng và kiểm tra sức khỏe',
      'Y học toàn diện và tích hợp',
      'Y học lão khoa và nhi khoa',
      'Giáo dục sức khỏe và huấn luyện lối sống',
      'Kế hoạch điều trị y tế cá nhân',
    ],
  },
  {
    img: seeMoreImage,
    title: 'See More',
    id: 'seemore',
    heading: 'Khám phá dịch vụ của chúng tôi',
    texts: [
      'Khám phá các lựa chọn chăm sóc sức khỏe bổ sung',
      'Dịch vụ y tế chuyên biệt đáp ứng mọi nhu cầu',
      'Khám phá thế giới giải pháp y tế',
      'Tìm sự chăm sóc phù hợp cho bạn',
      'Dịch vụ chăm sóc sức khỏe toàn diện',
      'Nhiều hơn những gì được thấy',
      'Chăm sóc sức khỏe ngoài mong đợi',
    ],
  },
];

export const Banner1Data = {
  heading: 'Chúng tôi luôn ở đây để đảm bảo điều trị y tế tốt nhất',
  texts: [
    'Dễ dàng đặt lịch hẹn',
    'Các bác sĩ chuyên khoa hàng đầu',
    'Dịch vụ 24/7',
    'Giảm giá cho tất cả các phương pháp điều trị y tế',
    'Đăng ký nhanh chóng và dễ dàng',
  ],
  img: Banner1,
};

export const DoctorsData = {
  heading: 'Gặp gỡ các chuyên gia của chúng tôi',
  doctors: [
    {
      img: 'https://demobvdaihoc.umc.edu.vn/web-api/uploads/z3888150927967_db707bc87537b23d55be6a13b5635c3b_Da_sua_beb4dc6732.png',
      name: 'GS TS BS. Trương Quang Bình',
      job: 'Nguyên Phó Giám đốc Bệnh viện',
    },
    {
      img: 'https://demobvdaihoc.umc.edu.vn/web-api/uploads/DSC_00482_Da_sua_f4a2b91971.png',
      name: 'PGS TS BS. Lê Thái Vân Thanh',
      job: 'Trưởng Khoa Da liễu - Thẩm mỹ da',
    },
    {
      img: 'https://demobvdaihoc.umc.edu.vn/web-api/uploads/z3853376980116_662a2e93350cec8951e147488f7c5dc4_Da_sua_5b45064734.png',
      name: 'PGS TS BS. Bùi Hữu Hoàng',
      job: 'Trưởng Khoa Tiêu hoá',
    },
    {
      img: 'https://demobvdaihoc.umc.edu.vn/web-api/uploads/DSC_00437_Da_sua_954c591812.png',
      name: 'BS CKII. Vương Thế Bích Thanh',
      job: 'Bác sĩ Khoa Da Liễu',
    },
  ],
  heading2: 'Chúng ta là ai?',
  desc: 'Trang web dịch vụ bệnh viện hợp tác là một nền tảng kỹ thuật số tập hợp các chuyên gia chăm sóc sức khỏe, bệnh nhân và quản trị viên để hợp lý hóa và tăng cường cung cấp các dịch vụ chăm sóc sức khỏe. Nền tảng sáng tạo này cho phép liên lạc và phối hợp liền mạch giữa các nhóm chăm sóc sức khỏe, cho phép họ cung cấp dịch vụ chăm sóc hiệu quả và cá nhân hóa hơn cho bệnh nhân.',
  img: Banner2,
};

export const FeedbackData = {
  heading: 'Phản hồi của bệnh nhân',
  feedbacks: [
    {
      img: 'https://media.baoquangninh.vn/dataimages/202006/original/images1398180_viet2.jpg',
      name: 'Nguyễn Quang Duy',
      job: 'Doanh nhân',
      desc: 'Trải nghiệm của tôi với bệnh viện này thật tuyệt vời. Tôi đặc biệt giới thiệu dịch vụ của họ cho bất kỳ ai có nhu cầu chăm sóc sức khỏe. họ thực sự ưu tiên chăm sóc bệnh nhân!',
    },
    {
      img: 'https://cdn-i.vtcnews.vn/files/f2/2015/06/13/hinh-anh-dat-nuoc-con-nguoi-viet-nam-tren-bao-my-12.jpg',
      name: 'Lê Minh Bảy',
      job: 'Nông dân',
      desc: 'Các chuyên gia chăm sóc sức khỏe đều là những người giỏi nhất. họ có kiến ​​thức, chu đáo và dành thời gian trả lời tất cả các câu hỏi của tôi cũng như giải quyết các mối quan tâm của tôi',
    },
    {
      img: 'https://trithucvn.net/wp-content/uploads/2018/05/noi-lai-nam-bo.jpg',
      name: 'Lê Thị Kiều Diễm',
      job: 'Kinh doanh',
      desc: "Một điều nổi bật đối với tôi là tính hiệu quả của dịch vụ, tôi không phải đợi lâu cho cuộc hẹn và toàn bộ quá trình diễn ra suôn sẻ",
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['123, Đ. Điện Biên Phủ', 'Phường 01, Quận 05, TP.HCM'],
  phone: '+84 (093) 999 9999',
  // departments: [
  //   'Cardiology',
  //   'Dentistry',
  //   'Neurology',
  //   'Orthopedics',
  //   'Surgery',
  //   'More',
  // ],
  departments: [
    'Nhi',
    'Phụ Sản',
    'Nha Khoa',
    'Da Liễu',
    'Dược',
    'Y Học Cổ Truyền',
  ],
  links: links,
};
