import Bloom from "../assets/1st.svg";
import Adguys from "../assets/2nd.svg";
import Dailytrust from "../assets/3rd.svg";
import Poe from "../assets/4th.svg";
import Terra from "../assets/5th.svg";
import Prestone from "../assets/6th.svg";
import BackgroundCard from "./BackgroundCard";
import Footer from "../components/Footer";


const BackgroundMain = () => {
  const backgroundData = [
    {
      logo: Bloom,
      brand: "Bloom Digital Media Limited",
      title: "Head of Design",
      text: "2022 - Date",
      description:
        "At Bloom Digital Media, I led and managed a multidisciplinary design team comprising 4 graphic designers, 1 motion designer, and 1 UI/UX designer. I oversaw the creation of engaging digital and print materials for both the organisation and clients such as Smart Spaces, SharePadi, INEC, and Doors Inc. My work included developing brand identities, UI/UX designs, advertising campaigns, and internal communication assets. I also redesigned the company’s website, compiled the employee handbook, contributed to recruitment efforts, and facilitated team brainstorming sessions and trainings. Additionally, I maintained brand consistency through comprehensive guidelines and played a key role in enhancing the organisation’s creative output across all platforms.",
    },
    {
      logo: Adguys,
      brand: "The AD Guys",
      title: "Graphic Designer",
      text: "2023 - Date",
      description:
        "At the AD Guys, I created responsive digital designs for the organisation's platforms and clients, including engaging text-based video animations. I also designed high-quality print materials for branded merchandise such as ID cards, jotters, shirts, caps, mugs, and pens, ensuring consistency and visual appeal across all touchpoints.",
    },
    {
      logo: Dailytrust,
      brand: "Freelance Graphic Designer",
      title: "Freelance Graphic Designer",
      text: "2024",
      description:
        "At Daily Trust Newspaper, I designed informative and engaging digital flyers, infographics, and YouTube thumbnails for the organisation’s social media platforms. I also created responsive designs suitable for both print and digital use, ensuring clear communication and visual consistency across all channels.",
    },
    {
      logo: Poe,
      brand: "POE International",
      title: "Graphic Designer",
      text: "2023 -2024",
      description:
        "At POE International, I designed exceptional digital content for clients like Epic Stageworks and Ariel Pharmacy, and produced high-quality print materials including banners, book covers, layouts, and business cards. I also developed logos, brand identities, and brand guidelines for various brands, and contributed to the recruitment process by participating in interviews for prospective hires.",
    },
    {
      logo: Terra,
      brand: "Terra Learning (formerly Sidehustle Nigeria)",
      title: "Creative Associate",
      text: "2022-2023",
      description:
        "At Terra Learning (formerly Sidehustle NIgeria), I designed visually engaging social media and print materials such as banners, flyers, notebooks, mugs, and ID cards. I collaborated with the marketing team on campaigns that led to over 90,000 registrations for Side Hustle Internship Cohort 6.0 and 51,000 for the first clan of Cohort 7.0. I developed and maintained a design system that cut design time by 20%, created video animations and edited testimonials for promotions, and designed ad banners, email headers, certificates, and merit badges to enhance intern engagement and communication.",
    },
    {
      logo: Prestone,
      brand: "Prestone Concepts Realty Limited",
      title: "Graphics Executive",
      text: "2021 - 2022",
      description:
        "At Prestone Concepts Realty Limited, I designed visually appealing digital content and managed the company’s social media handles to enhance online presence. I also spearheaded an offline marketing campaign, which included the design and production of a billboard aimed at boosting sales and brand visibility.",
    },
  ];
  return (
    <section className="flex flex-col h-full w-full justify-start lg:px-14 px-10 mb-10">
      <div className="flex flex-col items-center justify-center lg:gap-14 gap-12 bg-[#131313]  w-full h-full lg:mt-25 mt-28 mb-20">
      {backgroundData.map((item, index) => (
        <BackgroundCard
          key={index}
          logo={item.logo}
          brand={item.brand}
          title={item.title}
          text={item.text}
          description={item.description}
        />
      ))}
      </div>

      <Footer />
    </section>
  );
};

export default BackgroundMain;
