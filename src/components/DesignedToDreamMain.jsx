import DesignedHero from "/designedhero.jpg";
import Rites from "/last_rites.jpg";
import Bloom from "/BCH.png";
import ACT from "/ACTcon.jpg";
import Special from "/Special_yf.jpg";
import Shelf from "/shelf.jpg";
import Hand from "/shelfhnd.jpg";
import Closed from "/d2dclosed.jpg";
import First from "/d2d1st.jpg";
import Second from "/d2d2nd.png";
import Open from "/d2dopen.jpg";
import Left from "/d2dleft.jpg";
import Right from "/d2dright.jpg";
import Book1 from "/openleft.jpg";
import Book2 from "/openright.jpg";
import Footer from "./Footer";
import Scroll from "./Scroll";
import { Link } from "react-router-dom";

const DesignedToDreamMain = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full md:pr-20 lg:justify-start justify-center px-10 mt-24 mb-20">
      <Scroll />
      <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
        <div className="flex flex-col font-glancyr">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
            Designed To Dream
          </h1>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Book Design
          </p>
          <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
            Mary Adegunloye
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
          src={DesignedHero}
          alt="Brand logo"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="font-glancyr text-[#fff] mb-10">
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

      <div className="flex flex-col w-full h-full gap-5 mb-20">
        <img src={First} alt="Book cover" className="w-full h-auto mb-5" />

        <img src={Second} alt="Books" className="w-full h-auto mb-5" />

        <img
          src={Hand}
          alt="A hand holding the designed to dream book"
          className="w-full h-auto mb-5"
        />

        <img
          src={Shelf}
          alt="A hand holding the designed to dream book"
          className="w-full h-auto mb-5"
        />

        <div className="grid md:grid-cols-2 grid-cols-1 w-full h-auto gap-5 mb-5">
          <img src={Left} alt="books" className="w-full h-auto object-cover" />
          <img src={Right} alt="books" className="w-full h-auto object-cover" />
        </div>

        <img
          src={Closed}
          alt="A hand holding the designed to dream book"
          className="w-full h-auto mb-5"
        />
        <img
          src={Open}
          alt="A hand holding the designed to dream book"
          className="w-full h-auto mb-5"
        />

        <div className="grid md:grid-cols-2 grid-cols-1 w-full h-auto gap-5">
          <img src={Book1} alt="books" className="w-full h-auto object-cover" />
          <img src={Book2} alt="books" className="w-full h-auto object-cover" />
        </div>
      </div>

      <section className="flex flex-col w-full mb-20">
        <h1 className="text-[20px] md:text-[26px] lg:text-[32px]font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
          Other Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-10">
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
            <img src={ACT} alt="brand logo" className="w-full h-full mb-5" />
          </Link>

          <Link
            to="/specialyf"
            className="md:w-auto lg:h-auto md:h-[277px] w-full h-auto"
          >
            <img src={Special} alt="brand logo" className="w-full h-full" />
          </Link>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default DesignedToDreamMain;
