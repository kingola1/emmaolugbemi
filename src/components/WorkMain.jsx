import WorkCard from "./WorkCard";
import Footer from "../components/Footer";
import Layout from "./Layout";
import Scroll from "../components/Scroll";
import Act from "/ACTcon.jpg";
import Desire from "/d2dream.jpg";
import DailyTrust from "/new_dt.png";
import DreamGirl from "/Gdgirl.jpg";
import LagosModel from "/LMUN.jpg";
import Special from "/Special_yf.jpg";
import Rites from "/last_rites.jpg";
import Viano from "/V_iano.png";
import Bloom from "/new_bhc.png";

const WorkMain = () => {
  const Brands = [
    {
      logo: Bloom,
      title: "Bloom Creative Hub",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          Bloom Digital Media <span className="text-[#FB6E02]">|</span> 2025
          <span className="text-[#FB6E02]">|</span> Branding & Flyer Designs
        </p>
      ),
      description:
        "Bloom Creative Hub is the design arm of Bloom Digital Media Ltd. A full scale marketing and advertising agency.",

      link: "/bloomcreativehub",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      bg: "bg-[#000000]",
      className: "flex items-center px-5 w-full h-full",
    },

    {
      logo: Act,
      title: "ACT Con Jos 2025",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          ACT+ <span className="text-[#FB6E02]">|</span> 2025{" "}
          <span className="text-[#FB6E02]">|</span> Branding & Designs
        </p>
      ),
      description:
        "Africa Creative Tourism Conference (ACT Con) Jos 2025 is a conference to create a platform for tourism through creatives.",

      link: "/actcon",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      className: "Object-fit",
    },

    {
      logo: Special,
      title: "The Special Foundation",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          The Special Youth Leadership Foundation{" "}
          <span className="text-[#FB6E02]">|</span> 2024{" "}
          <span className="text-[#FB6E02]">|</span> Branding & UI/UX Designs
        </p>
      ),
      description:
        "The Special Foundation is a social impact organisation that focuses on raising young African leaders through education.",
      link: "/specialyf",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      className: "object-fit",
    },

    {
      logo: Viano,
      title: "Viano",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          Viano <span className="text-[#FB6E02]">|</span> 2024{" "}
          <span className="text-[#FB6E02]">|</span> Branding
        </p>
      ),
      description:
        "Viano is an automobile group of companies with a goal to create an all-in-one automotive luxury experience.",
      link: "/viano",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      bg: "bg-[#000000]",
    },

    {
      logo: DreamGirl,
      title: "To God's Dreamer Girl",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          Reuel <span className="text-[#FB6E02]">|</span> 2024{" "}
          <span className="text-[#FB6E02]">|</span> Book Design
        </p>
      ),
      description:
        "To God’s Dreamer Girl is a book that contains a number of love letters to a celebrant.",
      link: "/godsdreamergirl",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      className: "object-fit",
    },

    {
      logo: DailyTrust,
      title: "Daily Trust",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          Media Trust <span className="text-[#FB6E02]">|</span> 2024{" "}
          <span className="text-[#FB6E02]">|</span> Design and Infographics
        </p>
      ),
      description:
        "Daily Trust is the English language news paper arm of Media Trust",
      link: "/dailytrust",
      label: "View Project",
      bg: "bg-[#fff]",
      width: "w-full",
      height: "h-full",
    },

    {
      logo: LagosModel,
      title: "LMUN 22/23",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          Lagos Model United Nations <span className="text-[#FB6E02]">|</span>{" "}
          2023 <span className="text-[#FB6E02]">|</span> Designs
        </p>
      ),
      description:
        "The Lagos Model united Nations is a conference that simulates the United Nations, allowing students to serve as delegates of various Nations.",
      link: "/lmun",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      bg: "bg-[#fff]",
      className: "object-fit",
    },

    {
      logo: Desire,
      title: "Designed to Dream",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          Mary Adegunloye <span className="text-[#FB6E02]">|</span> 2023{" "}
          <span className="text-[#FB6E02]">|</span> Book Design
        </p>
      ),
      description:
        "Designed to Dream is a book that serves as an invitation to the journey into God's heart and receive wisdom.",
      link: "/designedtodream",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      className: "object-fit md:object-none",
    },

    {
      logo: Rites,
      title: "Photomanipulations, Posters, & Flyers",
      text: (
        <p className="flex md:gap-6 gap-3 italic">
          Multiple Clients
          <span className="text-[#FB6E02]">|</span> Ongoing
        </p>
      ),
      description:
        "A compilation of my best photomanipulations, posters & flyers",
      link: "/photomanipulations",
      label: "View Project",
      width: "w-full",
      height: "h-full",
      className: "object-fit md:object-cover",
    },
  ];
  return (
    <Layout>
      <Scroll />

      <section className="bg-[#131313] lg:pr-20 lg:px-0 px-10 mb-20 font-glancyr">
        <div className="grid grid-cols-1 gap-5">
          {Brands.map((item, index) => (
            <WorkCard
              key={index}
              logo={item.logo}
              title={item.title}
              text={item.text}
              description={item.description}
              link={item.link}
              label={item.label}
              width={item.width}
              height={item.height}
              bg={item.bg}
            />
          ))}
        </div>
      </section>
      <div className="mb-10">
        <Footer />
      </div>
    </Layout>
  );
};

export default WorkMain;
