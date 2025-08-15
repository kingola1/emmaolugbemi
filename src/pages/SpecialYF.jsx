import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SYFmain from "../components/SYFmain";
import PageTitle from "../components/PageTitle";

const SpecialYF = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | Special Youth Foundation" />

      <SYFmain />
    </section>
  );
};

export default SpecialYF;
