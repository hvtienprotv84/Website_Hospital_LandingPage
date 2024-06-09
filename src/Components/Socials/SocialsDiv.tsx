import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';
import {
  FaXTwitter,
} from 'react-icons/fa6';
import {
  TiSocialYoutube,
}  
from "react-icons/ti";

const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/hvtienprotv84">
        <BsGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/vinhtien.huynh.77/">
        <BsFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/hvt.neit/">
        <BsInstagram />
      </a>
      <a target="_blank" href="">
        <FaXTwitter />
      </a>
      <a target="_blank" href="">
        <TiSocialYoutube />
      </a>
      <a target="_blank" href="https://zalo.me/0931103224">
        <div>
          <img className='w-[24px] h-[24px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png' alt=''/>
        </div>
      </a>
    </div>
  );
};

export default SocialsDiv;
