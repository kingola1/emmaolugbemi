import Banner from "/Banner1.jpg";
import Banner2 from "/banner2.jpg";
import Banner3 from "/rollup.jpg";
import LMUN from "/LUMN.jpg";
import Five from "/5days.jpg";
import Four from "/4days.jpg";
import Three from "/3days.jpg";
import Two from "/2days.jpg";
import One from "/1days.jpg";
import Shirts from "/shirtslmun.jpg";
import Guide from "/guide.jpg";
import Walk from "/Walk.jpg";
import Judges from "/Judges.jpg";
import Less from "/50percent.jpg";
import Reg from "/Reg.jpg";
import Date from "/dates.jpg";
import Closed from "/closed.jpg";
import Roadmap from "/roadmap.jpg";
import Road from "/road.jpg";
import Phone from "/scnd.jpg";
import Designed from "/d2dream.jpg";
import Rites from "/last_rites.jpg";
import Bloom from "/BCH.png";
import ACT from "/ACTcon.jpg";

import Footer from "./Footer";
import Layout from "./Layout";
import Scroll from "./Scroll";
import { Link } from "react-router-dom";

const LMUNMain = () => {
  return (
    <Layout>
      <section className="flex flex-col bg-[#131313] w-full lg:px-20 lg:justify-start justify-center px-10 mb-10">
        <Scroll />
        <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
          <div className="flex flex-col font-glancyr">
            <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
              LMUN 22/23
            </h1>
            <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
              Design
            </p>
            <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
              Lagos Model United Nations
              <span className="px-2 text-[#FB6E02]">|</span> 2023
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
        <div className="w-full h-auto mb-20">
          <img
            src={LMUN}
            alt="Brand logo"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="font-glancyr text-[#fff] mb-[20px]">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium mb-4">
            Project Summary
          </h1>

          <p className="lg:text-[17px] md:text-[15px] text-[14px] font-light">
            The Lagos Model United Nations is a conference that simulates the
            United Nations, allowing students to serve as delegates of various
            nations with a mission to empower students to become confident
            speakers, critical thinkers, and effective diplomats.
            <br /> <br /> The project involved designing digital and print
            material for use before, during and after the conference.
          </p>
        </div>

        <div className="w-full h-auto mb-10">
          <img
            src={Phone}
            alt="Brand logo"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex lg:flex-row flex-col gap-5 w-full h-auto mb-10">
          <div className="lg:w-[50%] w-full h-auto ">
            <img src={Five} alt="" className="w-full h-auto object-cover" />
          </div>
          <div className="grid grid-cols-2 lg:w-[50%] w-full gap-5 h-auto">
            <img src={Four} alt="" className="w-full h-auto object-cover" />
            <img src={Three} alt="" className="w-full h-auto object-cover" />
            <img src={Two} alt="" className="w-full h-auto object-cover" />
            <img src={One} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="flex flex-col w-full h-auto mb-10">
          <img
            src={Banner}
            alt="Brand logo"
            className="w-full h-auto object-cover"
          />

          <div className="flex lg:flex-row flex-col gap-10 w-full h-auto mt-10 mb-10">
            <div className="grid grid-cols-2 lg:w-[50%] w-full gap-5 h-auto">
              <img src={Judges} alt="" className="w-full h-auto object-cover" />
              <img src={Walk} alt="" className="w-full h-auto object-cover" />
              <img src={Date} alt="" className="w-full h-auto object-cover" />
              <img src={Reg} alt="" className="w-full h-auto object-cover" />
              <img src={Less} alt="" className="w-full h-auto object-cover" />
              <img src={Closed} alt="" className="w-full h-auto object-cover" />
            </div>

            <div className="lg:w-[50%] w-full h-auto">
              <img
                src={Banner3}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <img
            src={Banner2}
            alt="Brand logo"
            className="w-full h-auto object-cover"
          />

          <div className="flex lg:flex-row flex-col gap-10 w-full h-auto mt-10 mb-5">
            <div className="lg:w-[50%] w-full h-auto ">
              <img src={Road} alt="" className="w-full h-auto object-cover" />
            </div>
            <div className="lg:w-[50%] w-full h-auto">
              <img
                src={Roadmap}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-10 w-full h-auto mt-5 mb-10">
            <div className="lg:w-[50%] w-full h-auto ">
              <img
                src="/brochure7.png"
                alt="Brochure Mockup"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-[50%] w-full h-auto">
              <img
                src="/magzine.png"
                alt="Magazine Mockup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <img
            src={Guide}
            alt="Brand logo"
            className="w-full h-auto object-cover mb-10"
          />

          <img
            src={Shirts}
            alt="Brand logo"
            className="w-full h-auto object-cover mb-10"
          />
        </div>

        <section className="flex flex-col w-full mb-20">
          <h1 className="text-[20px] md:text-[26px] lg:text-[32px]font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
            Other Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-10">
            <Link
              to="/designedtodream"
              className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
            >
              <img src={Designed} alt="brand logo" className="w-full h-full" />
            </Link>

            <Link
              to="/photomanipulations"
              className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
            >
              <img src={Rites} alt="brand logo" className="w-full h-full" />
            </Link>

            <Link
              to="/bloomcreativehub"
              className="bg-[#000] flex justify-center items-center md:w-auto lg:h-auto md:h-[277px] w-full h-[500px]"
            >
              <img
                src={Bloom}
                alt="brand logo"
                className="md:w-[188px] w-auto h-[70px]"
              />
            </Link>

            <Link
              to="/actcon"
              className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
            >
              <img src={ACT} alt="brand logo" className="w-full h-full" />
            </Link>
          </div>
        </section>

        <Footer />
      </section>
    </Layout>
  );
};

export default LMUNMain;
