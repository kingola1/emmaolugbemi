const BackgroundCard = ({ logo, brand, title, text, description }) => {
  return (
    <div className="flex flex-col justify-center items-start text-[#fff]">
      <div className="bg-[#fff] rounded-full justify-center flex p-4 lg:mb-6 mb-4 font-glancyr w-auto h-auto">
        <img
          src={logo}
          alt="brand logo"
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        />
      </div>
      <h3 className="lg:text-[20px] text-[14px] md:text-[17px] font-semibold">
        {brand}
      </h3>
      <h1 className="lg:text-[30px] text-[22px] md:text-[24px] font-semibold">
        {title}
      </h1>
      <p className="lg:text-[17px] text-[14px] md:text-[15px] font-extralight mb-3 italic">
        {text}
      </p>
      <p className="lg:text-[20px] text-[14px] md:text-[17px] font-light">
        {description}
      </p>
    </div>
  );
};

export default BackgroundCard;
