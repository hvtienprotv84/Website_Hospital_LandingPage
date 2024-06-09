import Button from '@/Components/UI/Button';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';

const Home = () => {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
          <h1 className="lg:text-7xl text-4xl font-bold">
          Sức khỏe của bạn là sự ưu tiên hàng đầu của chúng tôi
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10 max-w-[400px]">
            Hãy chia sẻ về sức khỏe của bạn với Bác sĩ để được chăm sóc tốt nhất
          </p>
          <Button>Đặt Lịch Ngay</Button>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;
