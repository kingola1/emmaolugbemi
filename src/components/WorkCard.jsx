import { Link } from "react-router-dom";

const WorkCard = ({
  logo,
  title,
  text,
  description,
  link,
  label,
  width,
  height,
  bg,
  className,
}) => {
  return (
    <section className="flex lg:flex-row flex-col w-full h-full">
      <div
        className={`${bg} flex lg:w-[300px] lg:h-[277px] w-full md-h-[277px] h-[400px] justify-center items-center border border-red-500`}
      >
        <img
          src={logo}
          alt="brand logo"
          className={`${width} ${height} ${className}`}
        />
      </div>

      {/* <div
        className={`${bg} lg:w-[360px] w-full h-full justify-center border border-red-500`}
      >
        <img
          src={logo}
          alt="brand logo"
          className={`${width} ${height} ${className} h-full`}
        />
      </div> */}
      <div className="flex w-full gap-10 text-[#fff] bg-[#252525] items-center">
        <div className="flex flex-col gap-3 lg:pl-10 lg:px-0 md:px-10 px-5 lg:py-0 py-5">
          <h3 className="font-500 md:text-[30px] ">{title}</h3>
          <p className="font-200 md:text-[16px]">{text}</p>
          <p className="font-300 md:text-[20px]">{description}</p>

          <div className="flex text-[#FB6E02] mt-4">
            <Link to={link}>{label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkCard;

// flex lg:flex-row flex-col lg:h-[277px] items-center h-full w-full
