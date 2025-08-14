import Footer from "./Footer";
// import Layout from "./Layout";
import Scroll from "../components/Scroll";
import Hero from "/actcon_hero.jpg";
import Group from "/group.jpg";
import Tourism from "/tourism.jpg";
import Mef from "/mef.jpg";
import Grid1 from "/g1.jpg";
import Grid2 from "/g2.jpg";
import Grid3 from "/g3.jpg";
import Grid4 from "/g4.jpg";
import Grid5 from "/g5.jpg";
import Grid6 from "/g6.jpg";
import Grid7 from "/g7.jpg";
import Grid8 from "/g8.jpg";
import Grid9 from "/g9.jpg";
import Special from "/Special_yf.jpg";
import Viano from "/V_iano.png";
import DreamerGirl from "/Gdgirl.jpg";
import DailyTrust from "/dailyTrust.png";
import { Link } from "react-router-dom";

const ActConMain = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full lg:px-20 lg:justify-start not-first:justify-center px-10 mt-26 mb-10">
      <Scroll />
      <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
        <div className="flex flex-col font-glancyr">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            ACT Con Jos 2025
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Event Branding & Designs
          </p>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Africa Creative Tourism Plus
            <span className="px-2 text-[#FB6E02]">|</span> 2025
          </p>
        </div>

        <div>
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            Project Contributors
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Kachi Eze
          </p>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Emmanuel Olugbemi
          </p>
        </div>
      </div>
      <div className="w-full h-auto mb-14">
        <img
          src={Hero}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="font-glancyr text-[#fff] mb-[20px]">
        <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium mb-4">
          Project Summary
        </h1>

        <p className="lg:text-[17px] md:text-[15px] text-[14px] font-light">
          ACT Con Jos 2025 was the flagship event of Africa Creative Tourism
          (ACT), held on May 7, 2025, at Crispan Hotel, Jos. With the theme
          “Tourism Destination — Crafting the Art of Partnership”, the
          conference brought together creatives, policymakers, and tourism
          leaders to explore storytelling, innovation, and collaboration in
          African tourism.
          <br /> <br />I worked with Kachi on the branding and graphic design
          for the conference, creating a cohesive visual system that reflected
          ACT’s mission of promoting Africa’s culture through sight, sound, and
          creative expression.
          <br /> <br />
          The design captured the vibrancy of African tourism while aligning
          with ACT’s values of diversity, creativity, and community impact,
          helping create a memorable and immersive experience for attendees.
        </p>
      </div>
      <div className="flex flex-col w-full h-auto space-y-10 mb-10">
        <img
          src={Group}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />

        <img
          src={Tourism}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col w-full h-auto mb-10">
        <img
          src={Mef}
          alt="Brand logo"
          className="w-full h-auto object-cover rounded-[24px] md:rounded-[38px]"
        />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 w-full h-auto gap-10 space-y-5 mb-10">
        <img src={Grid1} alt="" className="w-full h-auto object-cover" />
        <img src={Grid2} alt="" className="w-full h-auto object-cover" />
        <img src={Grid3} alt="" className="w-full h-auto object-cover" />
        <img src={Grid4} alt="" className="w-full h-auto object-cover" />
        <img src={Grid5} alt="" className="w-full h-auto object-cover" />
        <img src={Grid6} alt="" className="w-full h-auto object-cover" />
        <img src={Grid7} alt="" className="w-full h-auto object-cover" />
        <img src={Grid8} alt="" className="w-full h-auto object-cover" />
        <img src={Grid9} alt="" className="w-full h-auto object-cover" />
      </div>

      <section className="flex flex-col w-full mb-20">
        <h1 className="text-[20px] md:text-[26px] lg:text-[32px]font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
          Other Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-10">
          <Link
            to="/SpecialYF"
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
            to="/godsdreamergirl"
            className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
          >
            <img src={DreamerGirl} alt="brand logo" className="w-full h-full" />
          </Link>

          <Link
            to="/dailytrust"
            className="bg-[#fff] flex justify-center items-center md:w-auto lg:h-auto md:h-[277px] w-full h-[500px]"
          >
            <img
              src={DailyTrust}
              alt="brand logo"
              className="md:w-[200px] w-auto h-[50px]"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default ActConMain;
