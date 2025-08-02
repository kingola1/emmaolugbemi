import GDG from "/gdghero.jpg";
import Book from "/bookcover.jpg";
import Ebook from "/ebook.jpg";
import Page1 from "/page1.jpg";
import Page2 from "/page2.jpg";
import DailyTrust from "/dailyTrust.png";
import LMUN from "/LMUN.jpg";
import Designed from "/d2dream.jpg";
import Rites from "/last_rites.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const GodsDreamergirlMain = () => {
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
      <div className="w-full h-auto mb-14">
        <img
          src={GDG}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="font-glancyr text-[#fff] mb-[20px]">
        <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium mb-4">
          Project Summary
        </h1>

        <p className="lg:text-[17px] md:text-[15px] text-[14px] font-light">
          To God’s Dreamer Girl is a e-book compilation of love letters from
          close friends and acquaintances to a celebrant.
          <br /> <br /> The client required, a dreamy cover that speaks more of
          the title of the book. With the inner pages being as minimalist as
          possible to give emphasis to the letters.
        </p>
      </div>

      <div className="flex flex-col w-full space-y-10 h-auto mb-20">
        <img
          src={Book}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />

        <img
          src={Page1}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />

        <img
          src={Page2}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />

        <img
          src={Ebook}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col w-full h-auto mb-20">
        <h1 className="text-[20px] md:text-[26px] lg:text-[32px] lg:pl-0 pl:10 font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
          Other Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto justify-items-center gap-10">
          <Link
            to="/dailytrust"
            className="bg-[#fff] md:w-[300px] w-full h-[300px] flex justify-center items-center"
          >
            <img
              src={DailyTrust}
              alt="brand logo"
              className="w-[200px] h-auto"
            />
          </Link>
          <div className="md:w-[300px] w-full md:h-[277px] h-auto">
            <Link to="/lmun">
              <img
                src={LMUN}
                alt="brand logo"
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>

          <div className="md:w-[300px] w-full md:h-[277px] h-auto">
            <Link to="/designedtodream">
              <img
                src={Designed}
                alt="brand logo"
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>

          <div className="md:w-[300px] w-full md:h-[277px] h-auto">
            <Link to="/">
              <img
                src={Rites}
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

export default GodsDreamergirlMain;
