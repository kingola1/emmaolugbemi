import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SYFmain from "../components/SYFmain";
import PageTitle from "../components/PageTitle";

const SpecialYF = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full">
      <PageTitle title="Emmanuel Olugbemi | Special Youth Foundation" />
      <Header />

      <div className="flex w-full">
        <Sidebar />
        <SYFmain />
      </div>
    </section>
  );
};

export default SpecialYF;
