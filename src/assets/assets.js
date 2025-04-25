import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import doc16 from './doc16.png'
import doc17 from './doc17.png'
import Dermatologist from './Dermatologist.svg.jpg'
import Gastroenterologist from './Gastroenterologist.svg.png'
import General_physician from './General_physician.svg.jpg'
import Gynecologist from './Gynecologist.svg.jpg'
import Neurologist from './Neurologist.svg.jpg'
import Pediatricians from './Pediatricians.svg.jpg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Răng hàm mặt',
        image: General_physician
    },
    {
        speciality: 'Sản khoa',
        image: Gynecologist
    },
    {
        speciality: 'Chẩn đoán hình ảnh',
        image: Dermatologist
    },
    {
        speciality: 'Ung bướu',
        image: Pediatricians
    },
    {
        speciality: 'Xét nghiệm',
        image: Neurologist
    },
    {
        speciality: 'Tim mạch',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'BSCKII. Nguyễn Quang Minh',
        image: doc1,
        speciality: 'Tim mạch',
        degree: 'Chuyên khoa Nội',
        experience: '07 năm',
        about: '2006 - 2012: Học Bác sĩ Đa khoa, Đại học Y Hà Nội; 2013: Học Siêu âm Doppler tim, Bệnh viện Bạch Mai; 2013 - 2015: Học Chuyên khoa I Nội - Tim mạch, Bệnh viện Bạch Mai và Trường Đại học Y Hà Nội.',
        fees: 300000,
        address: {
            line1: 'Trưởng khoa Khám bệnh',
            line2: 'Bệnh viện Đa khoa MEDLATEC.'
        }
    },
    {
        _id: 'doc2',
        name: 'PGS.TS Phạm Thị Hồng Thi',
        image: doc2,
        speciality: 'Tim mạch',
        degree: 'Phó giáo sư',
        experience: '40 năm',
        about: 'Vai trò của điện tâm đồ trong dự đoán vị trí tắc động mạch vành ở các bệnh nhân nhồi máu cơ tim trước vách cấp chỉ có tổn thương ở động mạch vách liên thất trước, Tạp chí Y học Việt Nam, tập 381, số 2, năm 2011.Nghiên cứu dự báo nguy cơ mắc bệnh động mạch vành trong 10 năm tới dựa theo thang điểm Framingham cho một số đối tượng do Viện Y học lao động quản lý, Tạp chí Y học Việt Nam, tập 381, số 2, năm 2011.',
        fees: 250000,
        address: {
            line1: 'Viện Tim mạch',
            line2: 'Bệnh viện Bạch Mai'
        }
    },
    {
        _id: 'doc3',
        name: 'BSCKI. Bùi Thị Cẩm Bình',
        image: doc3,
        speciality: 'Tim mạch',
        degree: 'Chuyên khoa Nội',
        experience: '30 năm',
        about: 'Chuyên khoa I Lão khoa, Đại học Y Dược TP HCM (12/2007 - 9/2009). Nội Tim mạch, Bệnh viện Nhân Dân Gia Định (2005 - 2007). Bác sĩ Đa khoa Nội nhi, Đại học y Hà Nội (1982 - 1988)',
        fees: 300000,
        address: {
            line1: 'Giám đốc chuyên môn',
            line2: 'Phòng khám Đa khoa MEDLATEC Gò Vấp'
        }
    },
    {
        _id: 'doc4',
        name: 'PGS.TS Đoàn Hữu Nghị',
        image: doc4,
        speciality: 'Ung bướu',
        degree: 'Phó giáo sư',
        experience: '40 năm',
        about: 'Phó giáo sư đã có nhiều công trình nghiên cứu khoa học được công bố trong và ngoài nước về Phẫu thuật và Ung thư. Công bố 61 công trình Nghiên cứu khoa học về Phẫu thuật và Ung thư. Thành viên đề tài nghiên cứu Dịch tễ học, chẩn đoán, điều trị phòng chống một số bệnh Ung thư ở Việt Nam (vú, gan, dạ dày, phổi, máu) do Nhà nước quản lý.',
        fees: 240000,
        address: {
            line1: 'Bệnh viện E',
            line2: 'Bệnh viện K'
        }
    },
    {
        _id: 'doc5',
        name: 'PGS.TS Lê Chính Đại',
        image: doc5,
        speciality: 'Ung bướu',
        degree: 'Phó giáo sư',
        experience: '41 năm',
        about: 'Tác giả và đồng tác giả 41 bài báo nghiên cứu đăng trên tạp chí nghiên cứu trong nước. Tác giả biên soạn 4 giáo trình ung thư. Tham gia 2 đề tài cấp nhà nước và 2 đề tài cấp bộ.',
        fees: 250000,
        address: {
            line1: 'Bệnh viện Bạch Mai',
            line2: 'Bệnh viện K Trung ương'
        }
    },
    {
        _id: 'doc6',
        name: 'PGS.TS Đặng Thị Minh Nguyệt',
        image: doc6,
        speciality: 'Sản khoa',
        degree: 'Phó giáo sư',
        experience: '40 năm',
        about: 'Hơn 100 bài báo/ công trình khoa học đã công bố. Hướng dẫn thành công khoá luận Tốt nghiệp nhiều Bác sỹ đa khoa và học viên Sau đại học.',
        fees: 350000,
        address: {
            line1: 'Trường Đại học Y Hà Nội',
            line2: 'Bệnh viện Phụ sản Trung Ương'
        }
    },
    {
        _id: 'doc7',
        name: 'ThS.BS Nguyễn Thị Hiền',
        image: doc7,
        speciality: 'Sản khoa',
        degree: 'Thạc sĩ',
        experience: '15 năm',
        about: 'Chứng chỉ bơm IUI. Chứng chỉ siêu âm sản phụ khoa cơ bản và nâng cao. Chứng chỉ soi đốt cổ tử cung',
        fees: 150000,
        address: {
            line1: 'Đại học Y Hà Nội',
            line2: 'Bệnh viện Phụ sản Trung ương.'
        }
    },
    {
        _id: 'doc8',
        name: 'ThS.BS Trần Phương Bình',
        image: doc8,
        speciality: 'Răng hàm mặt',
        degree: 'Giám đốc chuyên môn Meddental',
        experience: '15 năm',
        about: 'Tốt nghiệp chương trình đào tạo Veneer nâng cao của GS.BS. Juergen Wahlmann - Chủ tịch Hội Nha khoa Thẩm mỹ Đức. Tốt nghệp chương trình đào tạo về thẩm mỹ - Veneer của GS. Stefan Koubi Đại Học Marseille.',
        fees: 160000,
        address: {
            line1: 'Đại học y Hà nội',
            line2: 'Đại Học Marseille.'
        }
    },
    {
        _id: 'doc9',
        name: 'TS.BS Nguyễn Lê Hùng',
        image: doc9,
        speciality: 'Răng hàm mặt',
        degree: 'Tiến sĩ',
        experience: '15 năm',
        about: '2002-2008: Học bác sỹ RHM tại trường Đại học Y Hà Nội. 2013: Tốt nghiệp Thạc sỹ RHM tại Viện Đào tạo RHM trường Đại học Y Hà Nội. 2017-2019: Tốt nghiệp RHM Tiến sỹ tại Viện Đào tạo RHM trường Đại học Y Hà Nội.',
        fees: 230000,
        address: {
            line1: 'Đại học Okayama Nhật Bản',
            line2: 'Đại học Bordeaux Pháp'
        }
    },
    {
        _id: 'doc10',
        name: 'BS Ngô Thị Thu Hà',
        image: doc10,
        speciality: 'Răng hàm mặt',
        degree: 'Bác sĩ',
        experience: '5 năm',
        about: '2010 - 2016: Đại học Y Hà Nội. 03/2017 - 03/2018: Giảng viên khoa Phục hình răng Trường Cao đẳng Y dược Pasteur Hà Nội. 03/2018 - 03/2019: Viện Công nghệ Nha khoa Thẩm mỹ Athena.',
        fees: 240000,
        address: {
            line1: 'Bệnh viện Đa khoa MEDLATEC.',
            line2: 'Đại học Y Hà Nội'
        }
    },
    {
        _id: 'doc11',
        name: 'PGS.TS.BSCC Nguyễn Quốc Dũng',
        image: doc11,
        speciality: 'Chẩn đoán hình ảnh',
        degree: 'Phó giáo sư',
        experience: ' 40 năm',
        about: 'Tham gia Đào tạo Sau Đại học: Hướng dẫn luận văn Nội trú, Cao học, BSCKII, luận án Tiến sĩ của trường Đại học Y Hà Nội, Học viện Quân y, Viện Nghiên cứu Y Dược Lâm sàng 108 (6 Nội trú, 12 Cao học, 11 BSCKII, 5 nghiên cứu sinh). 156 bài viết và báo cáo khoa học, phần lớn đã đăng trong các tạp chí có uy tín, các kỷ yếu, các tài liệu đào tạo và sách giảng dạy.',
        fees: 25000,
        address: {
            line1: 'MEDLATEC GROUP',
            line2: 'Trung tâm Chẩn đoán hình ảnh MEDLATEC'
        }
    },
    {
        _id: 'doc12',
        name: 'PGS Nguyễn Đình Tuấn',
        image: doc12,
        speciality: 'Chẩn đoán hình ảnh',
        degree: 'Phó giáo sư',
        experience: '57 năm',
        about: 'Nghiên cứu sinh cấp 2, tiến hành nghiên cứu chụp mạch và điều trị điện quang can thiệp, học chụp cắt lớp vi tính và bảo vệ luận án Tiến sỹ khoa học tại Viện hàn lâm Y học Dresden (Cộng hoà dân chủ Đức). Danh hiệu “Thầy thuốc Ưu tú” do Chủ tịch nước CHXHCN Việt Nam Trần Đức Lương phong tặng.',
        fees: 250000,
        address: {
            line1: 'Khoa Chẩn đoán hình ảnh, Bệnh viện Việt Đức',
            line2: 'Đại học Y Hà Nội'
        }
    },
    {
        _id: 'doc13',
        name: 'PGS.TS Thái Khắc Châu',
        image: doc13,
        speciality: 'Chẩn đoán hình ảnh',
        degree: 'Phó giáo sư',
        experience: '56 năm',
        about: 'Xây dựng thiết đồ cắt ngang lồng ngực ứng dụng trong giảng dạy và chẩn đoán hình ảnh. Đề tài cấp Cơ sở, 2000. Thái Khắc Châu (Tham gia). Nghiên cứu đối chiếu lâm sàng và hình ảnh X quang 9 trường hợp u tuyến ức kích thước lớn tạo đám mờ ở trung thất trên phim chụp X quang quy ước. Thái Khắc Châu. Công trình nghiên cứu Y học quân sự - Học viện Quân y, 3-1993.',
        fees: 350000,
        address: {
            line1: 'Đại học Quân y',
            line2: 'Bệnh viện 103.'
        }
    },
    {
        _id: 'doc14',
        name: 'Đại tá.PGS.TS Đỗ Đức Cường',
        image: doc14,
        speciality: 'Chẩn đoán hình ảnh',
        degree: 'Phó giáo sư',
        experience: '40 năm',
        about: 'Nghiên cứu vai trò của CT320 dãy trong chẩn đoán cơn đau thắt ngực ổn định”, Đề tài nghiên cứu khoa học cấp cơ sở đã nghiệm thu năm 2014. Các bài giảng trong giáo trình giảng dạy sau đại học của Bộ môn Chẩn đoán hình ảnh, Bộ môn hô hấp, Viện Nghiên cứu Y Dược lâm sàng 108.Nhận xét bước đầu đặc điểm cộng hưởng từ phổ trong một số loại u não“, Tạp chí Y dược lâm sàng 108, tập 11, số đặc biệt, tr.138-143, năm 2016.',
        fees: 260000,
        address: {
            line1: 'Học viện Quân Y.',
            line2: 'Bệnh viện Trung ương Quân đội 108.'
        }
    },
    {
        _id: 'doc15',
        name: 'GS.AHLĐ.BSCC Nguyễn Anh Trí',
        image: doc15,
        speciality: 'Xét nghiệm',
        degree: 'Giáo sư',
        experience: '40 năm',
        about: 'Giải thưởng Hồ Chí Minh cho cụm công trình "Nghiên cứu ứng dụng khoa học công nghệ nhằm đảm bảo an toàn truyền máu, phục vụ cho cấp cứu và đảm bảo đủ máu dự trữ cho điều trị" của giáo sư Nguyễn Anh Trí và 4 đồng tác giả là phó giáo sư, tiến sĩ Bùi Thị Mai An, tiến sĩ Ngô Mạnh Quân, bác sĩ chuyên khoa 2 Phạm Tuấn Dương, phó giáo sư, tiến sĩ Bạch Khánh Hòa. Giải Nhất "Nhân tài Đất Việt 2016" trong lĩnh vực y học cho công trình xây dựng ngân hàng tế bào gốc dây rốn cộng đồng lần đầu tiên ở Việt Nam của giáo sư Nguyễn Anh Trí và nhóm nghiên cứu 13 người ở Viện Huyết học - Truyền máu Trung ương.',
        fees: 230000,
        address: {
            line1: 'Bệnh viên Hữu nghị',
            line2: 'Bệnh viên Bạch Mai.'
        }
    },
    {
        _id: 'doc16',
        name: 'PGS.TS Nguyễn Thái Sơn',
        image: doc16,
        speciality: 'Xét nghiệm',
        degree: 'Phó giáo sư',
        experience: '40 năm',
        about: 'Tác giả của công trình nghiên cứu “Sáng kiến cải tiến kỹ thuật: Chế tạo mô hình đặt kháng sinh đồ phát hiện vi khuẩn kháng thuốc phổ rộng” được ứng dụng chẩn đoán thường quy tại Bộ môn khoa Vi sinh, Bệnh viện Quân y 103 từ 2011 - nay.Tác giả của công trình nghiên cứu “Phát hiện vi khuẩn Enterobacteriaceae sinh enzym carbapenemase bằng kỹ thuật ức chế kháng sinh carbapenem cải tiến” được ứng dụng chẩn đoán thường quy tại Bộ môn khoa Vi sinh, Bệnh viện Quân y 103 từ 2017 - nay.',
        fees: 330000,
        address: {
            line1: 'Học viện Quân Y.',
            line2: 'Bệnh viện Quân y 103.'
        }
    },
    {
        _id: 'doc17',
        name: 'PGS.TS.BS Vũ Quang Huy',
        image: doc17,
        speciality: 'Xét nghiệm',
        degree: 'Phó giáo sư',
        experience: '40 năm',
        about: 'Giám đốc Trung tâm kiểm chuẩn chất lượng xét nghiệm y học - Bộ Y tế, trực thuộc Đại học Y dược Thành phố Hồ Chí Minh (Quản lý Chất lượng Xét nghiệm các Cơ sở Y tế Phía Nam từ Đà Nẵng trở vào). Chủ nhiệm Câu lạc bộ Hội các Trường Kỹ thuật Xét nghiệm Y học Việt nam, thuộc Hiệp hội các trường Đại học Cao đẳng Việt nam. Nguyên Thư ký Hội Hóa sinh Lâm sàng Việt nam; Đại diện Việt nam trong Hội Hóa sinh lâm sàng và Xét nghiệm Y khoa Quốc tế (Former Secretary, Vietnam Association Clinical Biochemistry (VACB); Vietnam representative to the IFCC).',
        fees: 230000,
        address: {
            line1: 'Bệnh viên Hữu nghị',
            line2: 'Bệnh viên Bạch Mai.'
        }
    },
]