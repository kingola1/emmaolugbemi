import LogoCard from "./Logocard";
import Bloom from "/bloom.png";
import AdGuys from "/ad_guys.png";
import DailyTrust from "/daily_trust.png";
import Special from "/special.png";
import LagosModel from "/lagos_model.png";
import Terra from "/terra.png";
import Man from "/man.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Homemain = () => {
  const Logos = [
    { src: Bloom, width: "w-[100px]", height: "h-[50px]" },
    { src: DailyTrust, width: "w-[100px]", height: "h-[50px]" },
    { src: Special, width: "w-[180px]", height: "h-[100px]" },
    { src: AdGuys, width: "w-[126px]", height: "h-[80px]" },
    { src: LagosModel, width: "w-[181px]", height: "h-[80px]" },
    { src: Terra, width: "w-[183px]", height: "h-[80px]" },
  ];

  const coffeeLink = () => {
    window.open("https://buymeacoffee.com/kiitanoluh", "_blank");
  };
  return (
    <section className="flex flex-col bg-[#131313] lg:px-20 px-10 pt-5 w-full h-full mt-20 mb-10">
      <p className="text-[#fff] lg:text-[26px] text-[20px] md:text-[24px] font-medium lg:mb-4 pr-0 md:pr-10 lg:pr-60 mb-10">
        Hey there! I’m Emmanuel,
        <span className="font-medium">
          a Creative Designer who loves helping Founders, Start-ups, and Brands
        </span>{" "}
        turn their ideas
        <span className="font-medium"> into designs that work.</span>
      </p>

      <h3 className="text-[#fff] lg:text-[26px] text-[20px] md:text-[24px] font-light mb-10">
        I’ve had the privilege of working with these great brands.
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {Logos.map((logo, index) => (
          <LogoCard
            key={index}
            logo={logo.src}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-[20px] h-auto mb-20">
        <div className="flex flex-col gap-10 lg:w-[50%] h-auto">
          <p className="text-[#fff] lg:text-[17px] text-[14px] md:text-[15px] font-normal lg:mb-4 mb-2">
            Here’s more about me. <br /> <br />I am a multidisciplinary Graphic
            Designer with over four years of experience crafting visual
            solutions across branding, UI/UX, motion graphics, digital and print
            design. <br /> <br />
            With a foundation in Mechanical Engineering and a sharp eye for
            detail, I blend creative intuition with strategic thinking to create
            designs that are visually compelling and purposeful. I’ve led design
            teams, developed brand identities, built design systems, and
            collaborated with cross-functional teams to deliver high-performing
            assets for start-ups, agencies, and organizations across various
            industries. <br /> <br />
            I’m skilled in tools like Adobe Creative Suite, Figma, and Blender,
            and my work spans from digital campaigns to product UI, motion
            design, and corporate communications. <br /> <br /> On a personal
            level, I love playing football, watching anime, and reading mangas,
            manwhas, and webtoons.
          </p>

          <div className="flex gap-10 lg:mt-20 mt-5 mb-5 lg:mb-0">
            <Link
              to="/background"
              className="bg-[#FB6E02] text-white font-bold text-[14px] lg:px-10 px-5 py-2 rounded-lg"
            >
              My Career So Far
            </Link>
            <button
              onClick={coffeeLink}
              className="bg-[#131313] border border-[#FB6E02] text-white font-bold text-[14px] lg:px-10 px-5 py-2 rounded-lg"
            >
              Buy me A Cup of Tea
            </button>
          </div>
        </div>

        <div className="flex lg:w-[50%] w-full h-auto lg:h-[660px]">
          <img
            src={Man}
            alt="Designer's portrait"
            className="w-full h-auto object-fill"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};
export default Homemain;
