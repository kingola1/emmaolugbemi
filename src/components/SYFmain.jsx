import Hero from "/syf_hero.jpg";
import Logo from "/SFlogo.jpg";
import SYF from "/syf.jpg";
import Tote from "/totebag.png";
import BlueTote from "/bluetote.jpg";
import DarkTote from "/darktote.jpg";
import ID from "/syf_id.jpg";
import Group from "/syf_group.jpg";
import Team from "/syfteam.jpg";
import Viano from "/V_iano.png";
import DreamerGirl from "/Gdgirl.jpg";
import DailyTrust from "/dailyTrust.png";
import LMUN from "/LMUN.jpg";
import Footer from "./Footer";
// import Layout from "./Layout";
import Scroll from "./Scroll";
import { Link } from "react-router-dom";

const SYFmain = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full lg:px-20 lg:justify-start justify-center px-10 mt-26 mb-10">
      <Scroll />
      <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
        <div className="flex flex-col font-glancyr">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            The Special Foundation
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Branding & UI/UX Designs
          </p>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            The Special Youth Leadership Foundation
            <span className="px-2 text-[#FB6E02]">|</span> 2025
          </p>
        </div>

        <div>
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            Project Contributors
          </h1>
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
          The Special Youth Leadership Foundation is a non profit organisation
          that focuses on social impact within Africa with a focus on equipping
          talented youth with the economical means to grow leadership skills by
          way of scholarships, mentorships, and skill acquisition at summer
          camps.
          <br /> <br />
          This project involved the redesign of The Special Youth Leadership
          Foundation’s logo and website for a more modern and professional look
          and feel.
        </p>
      </div>

      <div className="w-full h-auto mb-10">
        <img
          src={Logo}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex w-full space-x-10 h-auto mb-10">
        <div className="w-[70%] h-full">
          <img src={SYF} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[30%] h-auto">
          <img src={ID} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 w-full h-auto gap-10 mb-10">
        <img src={Tote} alt="" className="w-full h-auto object-cover" />
        <img src={BlueTote} alt="" className="w-full h-auto object-cover" />
        <img src={DarkTote} alt="" className="w-full h-auto object-cover" />
      </div>

      <div className="w-full h-auto space-y-10 mb-20">
        <img
          src={Group}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />

        <img
          src={Team}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <section className="flex flex-col w-full mb-20">
        <h1 className="text-[20px] md:text-[26px] lg:text-[32px]font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
          Other Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-10">
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

          <Link
            to="/lmun"
            className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
          >
            <img src={LMUN} alt="brand logo" className="w-full h-full" />
          </Link>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default SYFmain;
