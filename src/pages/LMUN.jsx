import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import LMUNMain from "../components/LMUNMain";
import PageTitle from "../components/PageTitle";

const LMUN = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | Lagos Model United Nations" />

      <div className="flex w-full">
        <LMUNMain />
      </div>
    </section>
  );
};

export default LMUN;
