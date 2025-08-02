import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DesignedToDreamMain from "../components/DesignedToDreamMain";
import PageTitle from "../components/PageTitle";

const DesignedToDream = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full">
      <PageTitle title="Emmanuel Olugbemi | Designed To Dream" />
      <Header />

      <div className="flex w-full">
        <Sidebar />
        <DesignedToDreamMain />
      </div>
    </section>
  );
};

export default DesignedToDream;
