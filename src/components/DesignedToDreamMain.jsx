import DesignedHero from "/designedhero.jpg";
import Rites from "/last_rites.jpg";
import Bloom from "/BCH.png";
import ACT from "/ACTcon.jpg";
import Special from "/Special_yf.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const DesignedToDreamMain = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full lg:px-20 lg:justify-start justify-center px-10 mt-28 mb-20">
      <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
        <div className="flex flex-col font-glancyr">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            Designed To Dream
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight">
            Book Design
          </p>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight">
            Mary Adegunloye
            <span className="px-2 text-[#FB6E02]">|</span> 2023
          </p>
        </div>

        <div>
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            Project Contributors
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight">
            Emmanuel Olugbemi
          </p>
        </div>
      </div>
      <div className="w-full h-auto mb-20">
        <img
          src={DesignedHero}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="font-glancyr text-[#fff] mb-[1000px]">
        <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium mb-4">
          Project Summary
        </h1>

        <p className="lg:text-[17px] md:text-[15px] text-[14px] font-light">
          Designed to Dream is a book that serves as an invitation to journey
          into God’s heart and receive the wisdom for birthing ideas,
          innovations, dreams, and desires.
          <br /> <br /> The project involved creating cover and layout designs
          for the book and workbook.
        </p>
      </div>

      <div className="flex flex-col w-full h-auto mb-20">
        <h1 className="text-[20px] md:text-[26px] lg:text-[32px] lg:pl-0 pl:10 font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
          Other Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto justify-items-center gap-10">
          <div className="md:w-[300px] w-full md:h-[277px] h-auto">
            <Link to="/">
              <img
                src={Rites}
                alt="brand logo"
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
          <Link
            to="/bloomcreativehub"
            className="bg-[#000] md:w-[300px] w-full h-[300px] flex justify-center items-center"
          >
            <img src={Bloom} alt="brand logo" className="w-[188px] h-[50px]" />
          </Link>
          <div className="md:w/-[300px] w-full md:h-[277px] h-auto">
            <Link to="/actcon">
              <img
                src={ACT}
                alt="brand logo"
                className="w-full h-auto object-cover"
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
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default DesignedToDreamMain;
