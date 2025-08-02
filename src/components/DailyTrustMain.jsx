import DTHero from "/dailytrusthero.jpg";
import Info from "/infograph.jpg";
import Grid1 from "/dt1.jpg";
import Grid2 from "/dt2.jpg";
import Grid3 from "/dt3.jpg";
import Grid4 from "/dt4.jpg";
import Grid5 from "/dt5.jpg";
import Grid6 from "/dt6.jpg";
import Grid7 from "/dt7.jpg";
import Grid8 from "/dt8.jpg";
import Grid9 from "/dt9.jpg";
import Grid10 from "/dt10.jpg";
import Grid11 from "/dt11.jpg";
import Grid12 from "/dt12.jpg";
import Edo from "/Edo.jpg";
import YtThumb1 from "/yt1.jpg";
import YtThumb2 from "/yt2.jpg";
import YtThumb3 from "/yt3.jpg";
import YtThumb4 from "/yt4.jpg";
import YtThumb5 from "/yt5.jpg";
import YtThumb6 from "/yt6.jpg";
import YtThumb7 from "/yt7.jpg";
import YtThumb8 from "/yt8.jpg";
import YtThumb9 from "/yt9.jpg";
import YtThumb10 from "/yt10.jpg";
import YtThumb11 from "/yt11.jpg";
import YtThumb12 from "/yt12.jpg";
import Others1 from "/od1.jpg";
import Others2 from "/od2.jpg";
import Others3 from "/od3.jpg";
import Others4 from "/od4.jpg";
import Others5 from "/od5.jpg";
import Others6 from "/od6.jpg";
import Others7 from "/od7.jpg";
import Others8 from "/od8.jpg";

import LMUN from "/LMUN.jpg";
import Designed from "/d2dream.jpg";
import Rites from "/last_rites.jpg";
import Bloom from "/BCH.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const DailyTrustMain = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full lg:px-20 lg:justify-start justify-center px-10 mt-28 mb-20">
      <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
        <div className="flex flex-col font-glancyr">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            Daily Trust
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight">
            Design and Infographics
          </p>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight">
            Media Trust
            <span className="px-2 text-[#FB6E02]">|</span> 2024
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
          src={DTHero}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="font-glancyr text-[#fff] mb-[20px]">
        <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium mb-4">
          Project Summary
        </h1>

        <p className="lg:text-[17px] md:text-[15px] text-[14px] font-light">
          Daily Trust is the English language news paper arm of Media Trust
          which is a privately held newspaper publishing company that publishes
          the English-language Daily Trust, Weekly Trust, Sunday Trust and the
          Hausa-language Aminiya newspapers, as well as a new pan-African
          magazine, Kilimanjaro. It is one of the leading media companies in
          Nigeria.
          <br /> <br /> The project involved designing infographics, and
          informative flyers for social media as well as thumbnail designs for
          YouTube.
        </p>
      </div>
      D
      <div className="flex flex-col w-full h-auto mb-20">
        <h3 className="text-[#fff] font-glancyr lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
          Infographics
        </h3>

        <img
          src={Info}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full h-auto gap-10 mt-10">
          <img src={Grid1} alt="" className="w-full h-auto object-cover" />
          <img src={Grid2} alt="" className="w-full h-auto object-cover" />
          <img src={Grid3} alt="" className="w-full h-auto object-cover" />
          <img src={Grid4} alt="" className="w-full h-auto object-cover" />
          <img src={Grid5} alt="" className="w-full h-auto object-cover" />
          <img src={Grid6} alt="" className="w-full h-auto object-cover" />
          <img src={Grid7} alt="" className="w-full h-auto object-cover" />
          <img src={Grid8} alt="" className="w-full h-auto object-cover" />
          <img src={Grid9} alt="" className="w-full h-auto object-cover" />
          <img src={Grid10} alt="" className="w-full h-auto object-cover" />
          <img src={Grid11} alt="" className="w-full h-auto object-cover" />
          <img src={Grid12} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
      <div className="flex flex-col w-full h-auto mb-20">
        <h3 className="text-[#fff] font-glancyr lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
          Edo State Election Coverage
        </h3>

        <img
          src={Edo}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col w-full h-auto mb-20">
        <h3 className="text-[#fff] font-glancyr lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
          YouTube Thumbnails
        </h3>

        <div className="grid md:grid-cols-3 grid-cols-2 w-full h-auto gap-10">
          <img src={YtThumb1} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb2} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb3} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb4} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb5} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb6} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb7} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb8} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb9} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb10} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb11} alt="" className="w-full h-auto object-cover" />
          <img src={YtThumb12} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
      <div className="flex flex-col w-full h-auto mb-20">
        <h3 className="text-[#fff] font-glancyr lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
          Other Designs
        </h3>

        <div className="grid lg:grid-cols-4 grid-cols-2 w-full h-auto gap-10">
          <img src={Others1} alt="" className="w-full h-auto object-cover" />
          <img src={Others2} alt="" className="w-full h-auto object-cover" />
          <img src={Others3} alt="" className="w-full h-auto object-cover" />
          <img src={Others4} alt="" className="w-full h-auto object-cover" />
          <img src={Others5} alt="" className="w-full h-auto object-cover" />
          <img src={Others6} alt="" className="w-full h-auto object-cover" />
          <img src={Others7} alt="" className="w-full h-auto object-cover" />
          <img src={Others8} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
      <div className="flex flex-col w-full h-auto mb-20">
        <h1 className="text-[20px] md:text-[26px] lg:text-[32px] lg:pl-0 pl:10 font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
          Other Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto justify-items-center gap-10">
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
          <Link
            to="/bloomcreativehub"
            className="bg-[#000] md:w-[300px] w-full h-[300px] flex justify-center items-center"
          >
            <img src={Bloom} alt="brand logo" className="w-[188px] h-[50px]" />
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default DailyTrustMain;
