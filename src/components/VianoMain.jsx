import Viano from "/vianohero.jpg";
import Front from "/v2.jpg";
import Side from "/v1.jpg";
import Mac from "/mac.jpg";
import Book from "/book.jpg";
import Phone from "/phone.jpg";
import Pouch from "/pouch.jpg";
import DreamerGirl from "/Gdgirl.jpg";
import DailyTrust from "/dailyTrust.png";
import LMUN from "/LMUN.jpg";
import Designed from "/d2dream.jpg";
import Footer from "./Footer";
import Layout from "./Layout";
import Scroll from "./Scroll";
import { Link } from "react-router-dom";

const VianoMain = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full lg:px-20 lg:justify-start justify-center mt-26 mb-10 px-10">
      <Scroll />
      <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
        <div className="flex flex-col font-glancyr">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            Viano
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Branding
          </p>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Viano
            <span className="px-2 text-[#FB6E02]">|</span> 2024
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
          src={Viano}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="font-glancyr text-[#fff] mb-[20px]">
        <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium mb-4">
          Project Summary
        </h1>

        <p className="lg:text-[17px] md:text-[15px] text-[14px] font-light">
          Viano is an automobile group of companies with a goal to create an
          all-in-one automotive luxury experience.
          <br /> <br /> Viano aims to deliver a seamless, all-in-one automobile
          luxury experience, integrating scent, security, style, and smart
          connectivity into one intuitive mobile hub.
          <br /> <br /> Designed with precision and customer insight, Viano
          enhances every drive with thoughtful innovation, offering elevated
          comfort, control, and class in one unified system.
        </p>
      </div>

      <div className="flex lg:flex-row flex-col w-full gap-10 lg:h-[400px] h-auto mb-10">
        <img src={Front} alt="" className="w-full h-full object-cover" />

        <img src={Side} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full h-auto mb-10">
        <img
          src="/bx.png"
          alt="Brand Box"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full h-auto mb-10">
        <img
          src={Book}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex w-full space-x-10 h-[400px] mb-20">
        <div className="w-[70%] h-full">
          <img src={Mac} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[30%] h-auto">
          <img src={Phone} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-full h-auto mb-20">
        <img
          src={Pouch}
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

          <Link
            to="/designedtodream"
            className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
          >
            <img src={Designed} alt="brand logo" className="w-full h-full" />
          </Link>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default VianoMain;
