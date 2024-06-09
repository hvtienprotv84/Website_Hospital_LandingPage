import SocialsDiv from '../Socials/SocialsDiv';
import Input from '../UI/Input';

const ContactDiv = () => {
  return (
    <div className="max-w-xs ml-[50px]">
      <p className="ml-1 font-bold max-w-[250px]">
        Bạn có điều gì cần trao đổi với các chuyên gia của chúng tôi?
      </p>
      <Input placeholder="Nhập Email ở đây!" />
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
