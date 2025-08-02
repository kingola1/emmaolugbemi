import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import LMUNMain from "../components/LMUNMain";
import PageTitle from "../components/PageTitle";

const LMUN = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full">
      <PageTitle title="Emmanuel Olugbemi | Lagos Model United Nations" />
      <Header />

      <div className="flex w-full">
        <Sidebar />
        <LMUNMain />
      </div>
    </section>
  );
};

export default LMUN;
