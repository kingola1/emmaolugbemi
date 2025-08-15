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
    <section className="flex lg:flex-row flex-col w-full h-full font-glancyr">
      <div
        className={`${bg} flex lg:w-[300px] lg:max-h-[250px] w-full  h-auto justify-center items-center overflow-hidden`}
      >
        <img src={logo} alt="brand logo" className={`${width} ${height}`} />
      </div>

      <div className="flex w-full gap-10 text-[#fff] bg-[#252525] items-center h-auto lg:max-h-[250px] overflow-hidden">
        <div className="flex flex-col gap-3 lg:pl-10 lg:px-0 md:px-10 px-5 lg:py-0 py-4">
          <h3 className="font-500 md:text-[30px] ">{title}</h3>
          <p className="font-200 md:text-[16px] font-extralight">{text}</p>
          <p className="font-300 md:text-[20px] pr-20">{description}</p>

          <div className="flex text-[#FB6E02] mt-4">
            <Link to={link}>{label}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkCard;
