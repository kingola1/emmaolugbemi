import Footer from "./Footer";
import Scroll from "./Scroll";
import Projects from "./OtherProjects";
import BCHIcon from "/BCH_icon.jpg";
import BCHLogo from "/BCH.logo.jpg";
import Cap1 from "/Cap1.png";
import Cap2 from "/Cap2.png";
import Cap3 from "/Cap3.png";
import Hero from "/Hero_image.jpg";
import Social from "/Social_media.jpg";
import Shirt from "/Shirts.jpg";
import Layout from "./Layout";

const BCHMain = () => {
  return (
    <Layout>
      <section className="flex flex-col bg-[#131313] w-full lg:px-20 lg:justify-start justify-center px-10 mb-10">
        <Scroll />
        <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-5 ">
          <div className="flex flex-col font-glancyr">
            <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
              Bloom Creative Hub
            </h1>
            <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
              Branding & Flyer Designs
            </p>
            <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
              Bloom Digital Media
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
            <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
              Joshua Ocheje
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
            Bloom Creative Hub is the design arm of Bloom, responsible for
            delivering digital and print design, UI/UX designs, motion graphics,
            and 3D renders for Bloom and its clients. This brand identity
            project aimed to create a bold, unified visual system that reflects
            the hub’s core message: where creativity meets execution. <br />{" "}
            <br />
            The logo, a stylized 'b' combined with a pen nib, symbolizes both
            creative thinking and precision. A vibrant gradient palette and
            clean typefaces bring energy and clarity to the brand.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col w-full gap-10 h-auto lg:h-[400px] mb-10">
          <div className="lg:w-[70%] w-full h-full">
            <img
              src={BCHLogo}
              alt=""
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>
          <div className="lg:w-[30%] w-full h-auto">
            <img
              src={BCHIcon}
              alt=""
              className="w-full lg:h-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full h-auto mb-20">
          <img src={Social} alt="" className="w-full h-auto object-cover" />
        </div>

        <div className="flex lg:flex-row flex-col w-full lg:h-[598px] h-auto gap-10 mb-10">
          <div className="flex flex-col lg:w-[20%] w-full h-auto lg:h-[598px] space-y-5">
            <a href="">
              <img
                src={Cap3}
                alt="image of a red branded cap"
                className="w-full h-[199px] lg:object-cover object-fit"
              />
            </a>
            <img
              src={Cap2}
              alt="image of a white branded cap"
              className="w-full h-[199px] object-cover"
            />
            <img
              src={Cap1}
              alt="image of a black branded cap"
              className="w-full h-[199px] lg:object-cover object-fit"
            />
          </div>

          <div className="lg:w-[80%] w-full h-auto lg:h-full">
            <img
              src={Shirt}
              alt="An image of branded shirts"
              className="w-full h-auto lg:h-[598px] object-cover"
            />
          </div>
        </div>

        <Projects />
        <Footer />
      </section>
    </Layout>
  );
};

export default BCHMain;
