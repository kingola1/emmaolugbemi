import Act from "/ACTcon.jpg";
import Special from "/Special_yf.jpg";
import Viano from "/V_iano.png";
import DreamerGirl from "/Gdgirl.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const OtherProjects = () => {
  return (
    <section className="flex flex-col w-full mb-20">
      <h1 className="text-[20px] md:text-[26px] lg:text-[32px]font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
        Other Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-10">
        <Link
          to="/actcon"
          className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
        >
          <img src={Act} alt="brand logo" className="w-full h-full mb-5" />
        </Link>

        <Link
          to="/specialyf"
          className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
        >
          <img src={Special} alt="brand logo" className="w-full h-full" />
        </Link>

        <Link
          to="/viano"
          className="bg-[#000] flex justify-center items-center md:w-auto lg:h-auto md:h-[277px] w-full h-[500px]"
        >
          <img
            src={Viano}
            alt="brand logo"
            className="md:w-[188px] w-auto h-[177px]"
          />
        </Link>

        <Link
          to="/specialyf"
          className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
        >
          <img src={DreamerGirl} alt="brand logo" className="w-full h-full" />
        </Link>
      </div>
    </section>
  );
};

export default OtherProjects;
