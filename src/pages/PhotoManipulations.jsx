import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Photomain from "../components/Photomain";
import PageTitle from "../components/PageTitle";

const PhotoManipulations = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | Photomanipulations" />
      <Header />

      <Photomain />
    </section>
  );
};

export default PhotoManipulations;
