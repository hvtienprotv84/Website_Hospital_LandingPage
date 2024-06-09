import { FooterData } from '../Shared/Consts';
import ContactDiv from './ContactDiv';

const Footer = () => {
  return (
    <div className="bg-[#aed4ff] mt-20 p-10 md:px-16">
      <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap ml-[80px]">
        <div className="font-bold">
          <img className='absolute ml-[-240px]' width={150} height={150} src={FooterData.logo} alt="Logo" />
          {FooterData.addresses.map((address, index) => (
            <p className="my-3" key={index}>
              {address}
            </p>
          ))}
          <p>{FooterData.phone}</p>
        </div>
        <div className="flex gap-10">
          <div>
            {/* <p className="font-bold text-lg">Departments</p> */}
            <p className="font-bold text-lg">Phòng Ban/Khoa</p>
            <ul>
              {FooterData.departments.map((department, index) => (
                <li key={index}>{department}</li>
              ))}
            </ul>
          </div>
          {/* <ul className='ml-[50px]'>
            {FooterData.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul> */}
          <ul className="ml-[50px]">
            {FooterData.links.map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <ContactDiv />
      </div>
    </div>
  );
};

export default Footer;
