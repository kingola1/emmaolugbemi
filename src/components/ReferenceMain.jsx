import Layout from "./Layout";
import RefCard from "./RefCard";
import Footer from "./Footer";
import Scroll from "./Scroll";

const ReferenceMain = () => {
  const RefDeets = [
    {
      name: "Tseyi Agharaye",
      title: "Director, Bloom Digital Media Ltd.",
      description: (
        <>
          {" "}
          “I am pleased and honored to recommend Emmanuel, i have known Emmanuel
          and worked with him for over 4 years now. He is a top professional
          with the willingness to get things done. He also has the zeal of
          wanting to improve, get knowledge and be the top of his craft. <br />{" "}
          <br />
          Emmanuel has a high level of emotional intelligence and has grown into
          becoming a team leader. Emmanuel is an amazing talent.”
        </>
      ),
    },
    {
      name: "Treasure Okure",
      title: "Associate Content Strategist, Piggyvest",
      description: (
        <>
          {" "}
          “While handling the Lagos Model United Nations in 2022, 2023 and 2024,
          I needed a graphic designer with a keen eye for detailsand a passion
          for the job to help me develop designs for our delegates. Emmanuel was
          my go-to person. He was always on time, always delivered what I asked
          for, and made it so easy for me to patronize his services in
          subsequent years. I especially appreciated how he was able to grasp
          the subject matter of a concept as complex as MUNs and create designs
          that easily communicated the ideas we were trying to share with the
          world. I found his work exceptional, and would gladly recommend him
          anytime, any day for people looking to work with great, empathetic
          designers!”
        </>
      ),
    },
    {
      name: "Joseph Etim",
      title: "Founder, Young People Connect Africa",
      description: (
        <>
          {" "}
          “Emmanuel is such a creative genius with his ability to deliver
          excellent and attention to details. Humble and always ready to go all
          the way to deliver top notch services.”
        </>
      ),
    },
    {
      name: "Tomi Popoola",
      title: "Program & Iteration Manager, Genuine Parts Company",
      description: (
        <>
          {" "}
          “I enjoyed working with Emmanuel as Head of Design at Bloom Digital
          Media, and I cannot recommend him enough. We collaborated on two key
          projects: the UI redesign of the website for The Special Foundation
          and the branding and website UI design for the Surround Snaps. <br />{" "}
          <br />
          From the outset, Emmanuel impressed me with his exceptional design
          skills, keen eye for detail, and innovative approach to
          problem-solving. He possesses a rare ability to translate ideas into
          visually stunning, user-friendly designs that perfectly align with the
          brand's identity and goals. <br /> <br />
          His dedication and organisational prowess stood out. Despite the
          complexity of our projects, Emmanuel kept everything on track with
          clear timelines, regular updates, and a proactive attitude even when
          it came to making adjustments. Communication with him was seamless—he
          always ensured input was valued and incorporated while providing
          professional guidance when needed. <br /> <br />
          The results speak for themselves. Both projects were delivered on time
          and exceeded expectations, leaving me and other stakeholders
          impressed. If you're looking for a skilled, reliable, and creative
          graphic/UI/UX designer who delivers outstanding results while making
          the process enjoyable, Emmanuel is your go-to professional. I look
          forward to the opportunity to work with him again in the future.”
        </>
      ),
    },
    {
      name: "Favour Emeka",
      title: "Digital Marketing Manager, POE Inteernational",
      description: (
        <>
          {" "}
          “I had the pleasure of working with Emmanuel during his time at POE
          International, and I can confidently attest to his exceptional skills
          as a graphics designer. <br /> <br />
          He is a goal-oriented, versatile, and innovative professional who
          consistently delivered high-quality designs on time. <br /> <br />
          What stood out to me was his reliability and commitment to meeting
          deadlines, as well as his beautiful and creative work. I highly
          recommend Emmanuel to any brand looking for a dedicated and driven
          individual who can take their project to the next level. He is a
          valuable asset to any team, and I have no doubt that he will continue
          to excel in his career.”
        </>
      ),
    },
  ];
  return (
    <Layout>
      <Scroll />
      <section className="justify-center lg:space-y-10 space-y-12 bg-[#131313] lg:pr-20 lg:px-0 px-10 w-full h-full font-glancyr mb-10">
        {RefDeets.map((item, index) => (
          <RefCard
            key={index}
            name={item.name}
            title={item.title}
            description={item.description}
          />
        ))}
        <div className="mb-10">
          <Footer />
        </div>
      </section>
    </Layout>
  );
};

export default ReferenceMain;
