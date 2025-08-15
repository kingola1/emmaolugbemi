import Hero from "/photohero.jpg";
import Axe from "/Axeman.jpg";
import Rite from "/lstrites.jpg";
import Foot from "/foot.jpg";
import One from "/swift.png";
import Two from "/2wo.jpg";
import Three from "/3ree.jpg";
import Four from "/4our.jpg";
import Five from "/5ive.jpg";
import Six from "/6ix.jpg";
import G1 from "/1st.jpg";
import Bloom from "/BCH.png";
import ACT from "/ACTcon.jpg";
import Special from "/Special_yf.jpg";
import Viano from "/V_iano.png";
import Scroll from "./Scroll";
import Footer from "./Footer";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Photomain = () => {
  return (
    <Layout>
      <section className="flex flex-col bg-[#131313] w-full md:px-20 lg:justify-start justify-center px-10">
        <Scroll />
        <div className="flex md:flex-row flex-col lg:gap-32 md:gap-10 gap-5 text-[#fff] mb-[20px] ">
          <div className="flex flex-col font-glancyr">
            <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium lg:mb-4 mb-2">
              Photomanipulations, Posters/
              <br />
              Flyers, & Other Designs
            </h1>

            <p className="lg:text-[16px] md:text-[15px] text-[14px] font-extralight italic">
              Multiple Clients
              <span className="px-2 text-[#FB6E02]">|</span> Ongoing
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
            src={Hero}
            alt="Brand logo"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="font-glancyr text-[#fff] mb-10">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] font-medium mb-4">
            Project Summary
          </h1>

          <p className="lg:text-[17px] md:text-[15px] text-[14px] font-light">
            A compilation of my best photomanipulations, posters/flyers, & other
            designs.
          </p>
        </div>

        <div className="flex flex-col w-full h-auto">
          <img
            src={Axe}
            alt="A man with an axe and other images"
            className="w-full h-auto mb-5"
          />
          <img
            src={Rite}
            alt="A netflix movie flier"
            className="w-full h-auto mb-5"
          />
          <img
            src={Foot}
            alt="A man with an axe and other images"
            className="w-full h-auto mb-5"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-auto gap-5 mb-20">
          <img src={One} alt="image" />
          <img src={Two} alt="image" />
          <img src={Three} alt="image" />
          <img src={Four} alt="image" />
          <img src={Five} alt="image" />
          <img src={Six} alt="image" />
        </div>

        <div className="flex flex-col mb-20">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] text-[#fff] font-glancyr font-medium mb-5">
            Social Media Flyers
          </h1>
          <div className="grid lg:grid-cols-6 md:grid-col-4 grid-cols-3 gap-5">
            <img src="/f1.png" alt="Social media flyer" />
            <img src="/f2.png" alt="Social media flyer" />
            <img src="/f3.png" alt="Social media flyer" />
            <img src="/f4.png" alt="Social media flyer" />
            <img src="/f5.png" alt="Social media flyer" />
            <img src="/f6.png" alt="Social media flyer" />
            <img src="/f7.png" alt="Social media flyer" />
            <img src="/f8.png" alt="Social media flyer" />
            <img src="/f9.png" alt="Social media flyer" />
            <img src="/f10.png" alt="Social media flyer" />
            <img src="/f11.png" alt="Social media flyer" />
            <img src="/f12.png" alt="Social media flyer" />
            <img src="/f13.png" alt="Social media flyer" />
            <img src="/f14.png" alt="Social media flyer" />
            <img src="/f15.png" alt="Social media flyer" />
            <img src="/f16.png" alt="Social media flyer" />
            <img src="/f17.png" alt="Social media flyer" />
            <img src="/f18.png" alt="Social media flyer" />
            <img src="/f19.png" alt="Social media flyer" />
            <img src="/f20.png" alt="Social media flyer" />
            <img src="/f21.png" alt="Social media flyer" />
            <img src="/f22.png" alt="Social media flyer" />
            <img src="/f23.png" alt="Social media flyer" />
            <img src="/f24.png" alt="Social media flyer" />
            <img src="/f25.png" alt="Social media flyer" />
            <img src="/f26.png" alt="Social media flyer" />
            <img src="/f27.png" alt="Social media flyer" />
            <img src="/f27.png" alt="Social media flyer" />
            <img src="/f29.png" alt="Social media flyer" />
            <img src="/f30.png" alt="Social media flyer" />
            <img src="/f31.png" alt="Social media flyer" />
            <img src="/f32.png" alt="Social media flyer" />
            <img src="/f33.png" alt="Social media flyer" />
            <img src="/f34.png" alt="Social media flyer" />
            <img src="/f35.png" alt="Social media flyer" />
            <img src="/f36.png" alt="Social media flyer" />
            <img src="/f37.png" alt="Social media flyer" />
            <img src="/f38.png" alt="Social media flyer" />
            <img src="/f39.png" alt="Social media flyer" />
            <img src="/f40.png" alt="Social media flyer" />
            <img src="/f41.png" alt="Social media flyer" />
            <img src="/f42.png" alt="Social media flyer" />
            <img src="/f43.png" alt="Social media flyer" />
            <img src="/f44.png" alt="Social media flyer" />
            <img src="/f45.png" alt="Social media flyer" />
            <img src="/f46.png" alt="Social media flyer" />
            <img src="/f47.png" alt="Social media flyer" />
            <img src="/f48.png" alt="Social media flyer" />
            <img src="/f49.png" alt="Social media flyer" />
            <img src="/f50.png" alt="Social media flyer" />
            <img src="/f51.png" alt="Social media flyer" />
            <img src="/f52.png" alt="Social media flyer" />
            <img src="/f53.png" alt="Social media flyer" />
            <img src="/f54.png" alt="Social media flyer" />
            <img src="/f55.png" alt="Social media flyer" />
            <img src="/f56.png" alt="Social media flyer" />
            <img src="/f57.png" alt="Social media flyer" />
            <img src="/f58.png" alt="Social media flyer" />
            <img src="/f59.png" alt="Social media flyer" />
            <img src="/f60.png" alt="Social media flyer" />
            <img src="/f61.png" alt="Social media flyer" />
            <img src="/f62.png" alt="Social media flyer" />
            <img src="/f63.png" alt="Social media flyer" />
            <img src="/f64.png" alt="Social media flyer" />
            <img src="/f65.png" alt="Social media flyer" />
            <img src="/f66.png" alt="Social media flyer" />
            <img src="/f67.png" alt="Social media flyer" />
            <img src="/f68.png" alt="Social media flyer" />
            <img src="/f69.png" alt="Social media flyer" />
            <img src="/f70.png" alt="Social media flyer" />
            <img src="/f71.png" alt="Social media flyer" />
            <img src="/f72.png" alt="Social media flyer" />
            <img src="/f73.png" alt="Social media flyer" />
            <img src="/f74.png" alt="Social media flyer" />
            <img src="/f75.png" alt="Social media flyer" />
            <img src="/f76.png" alt="Social media flyer" />
            <img src="/f77.png" alt="Social media flyer" />
            <img src="/f78.png" alt="Social media flyer" />
            <img src="/f79.png" alt="Social media flyer" />
            <img src="/f80.png" alt="Social media flyer" />
            <img src="/f81.png" alt="Social media flyer" />
            <img src="/f82.png" alt="Social media flyer" />
            <img src="/f83.png" alt="Social media flyer" />
            <img src="/f84.png" alt="Social media flyer" />
            <img src="/f85.png" alt="Social media flyer" />
            <img src="/f86.png" alt="Social media flyer" />
            <img src="/f87.png" alt="Social media flyer" />
            <img src="/f88.png" alt="Social media flyer" />
            <img src="/f89.png" alt="Social media flyer" />
            <img src="/f90.png" alt="Social media flyer" />
            <img src="/f91.png" alt="Social media flyer" />
            <img src="/f92.png" alt="Social media flyer" />
            <img src="/f93.png" alt="Social media flyer" />
            <img src="/f94.png" alt="Social media flyer" />
            <img src="/f95.png" alt="Social media flyer" />
            <img src="/f96.png" alt="Social media flyer" />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="lg:text-[32px] text-[20px] md:text-[26px] text-[#fff] font-glancyr font-medium mb-5">
            Other Designs
          </h1>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
            <img
              src="/d1.jpg"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d2.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d3.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex lg:flex-row flex-col w-full gap-10 h-auto lg:h-[400px] mb-10">
            <div className="lg:w-[70%] w-full h-full">
              <img
                src="/Roll.jpg"
                alt=""
                className="w-full h-auto lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-[30%] w-full h-auto">
              <img
                src="/roll30.jpg "
                alt=""
                className="w-full lg:h-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
            <img
              src="/d4.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d5.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d6.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d7.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d8.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d9.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d10.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d11.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d12.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d13.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d14.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d15.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
          </div>

          <img src="/big.jpg" alt="" className="mb-5" />

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
            <img src="/d16.png" alt="brand flyer" />
            <img src="/certi.png" alt="brand flyer" />
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
            <img
              src="/d17.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d18.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d19.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d20.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d21.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d22.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d23.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d24.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
            <img
              src="/d25.png"
              alt="brand flyer"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex lg:flex-row flex-col w-full gap-10 h-auto lg:h-[400px] mb-20">
            <div className="lg:w-[60%] w-full h-full">
              <img
                src="/Signage.jpg"
                alt=""
                className="w-full h-auto lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-[40%] w-full h-auto">
              <img
                src="/cd.jpg "
                alt=""
                className="w-full lg:h-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <section className="flex flex-col w-full mb-20">
          <h1 className="text-[20px] md:text-[26px] lg:text-[32px]font-medium mb-5 md:mb-8 font-glancyr text-[#fff]">
            Other Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-auto gap-10">
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
          </div>
        </section>
        <Footer />
      </section>
    </Layout>
  );
};

export default Photomain;
