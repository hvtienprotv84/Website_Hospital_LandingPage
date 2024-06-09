type Props = {
  user: {
    name: string;
    img: string;
    job: string;
    desc: string;
  };
  index: number;
};

const Review = ({ user, index }: Props) => {
  return (
    <div
      className={` ${
        index % 2 !== 0 && 'md:mb-16'
      } p-5 max-w-[500px] h-[200px] bg-[#d5f5ff] rounded-3xl shadow-lg`}
    >
      <div className="flex gap-5 items-center">
        <img className="w-16 h-16 rounded-full" src={user.img} alt={user.name} />
        <div>
          <h6 className="font-bold text-lg">{user.name}</h6>
          <p className="text-base opacity-70">{user.job}</p>
        </div>
      </div>
      <p className="opacity-90 text-[15px] mt-[10px]">{user.desc}</p>
    </div>
  );
};

export default Review;
