const RefCard = ({ name, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-start font-glancyr text-[#fff]">
      <h2 className="lg:text-[24px] text-[20px] md:text-[22px] font-semibold">
        {name}
      </h2>
      <h3 className="lg:text-[26px] text-[22px] md:text-[24px] font-semibold mb-3">
        {title}
      </h3>
      <p className="lg:text-[17px] text-[14px] md:text-[15px] font-extralight">
        {description}
      </p>
    </div>
  );
};

export default RefCard;
