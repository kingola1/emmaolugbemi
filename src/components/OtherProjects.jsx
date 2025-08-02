import Act from "/ACTcon.jpg";
import Special from "/Special_yf.jpg";
import Viano from "/V_iano.png";
import DreamerGirl from "/Gdgirl.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const OtherProjects = () => {
  return (
    <div className="flex flex-col w-full h-auto">
      <h1 className="text-[20px] md:text-[26px] lg:text-[32px] lg:pl-0 pl:10 font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
        Other Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto justify-items-center gap-10 mb-20">
        <div className="md:w-[300px] w-full md:h-[300px] h-auto">
          <Link to="/actcon">
            <img
              src={Act}
              alt="brand logo"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="md:w-[300px] w-full md:h-[277px] h-auto">
          <Link to="/specialyf">
            <img
              src={Special}
              alt="brand logo"
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>

        <div className="bg-[#000] md:w-[300px] w-full h-[300px] flex justify-center items-center">
          <Link to="/viano">
            {" "}
            <img src={Viano} alt="brand logo" className="w-[188px] h-[177px]" />
          </Link>
        </div>

        <div className="md:w-[300px] w-full md:h-[300px] h-auto">
          <Link to="/godsdreamergirl">
            <img
              src={DreamerGirl}
              alt="brand logo"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
