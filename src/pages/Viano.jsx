import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VianoMain from "../components/VianoMain";
import PageTitle from "../components/PageTitle";

const Viano = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | Viano" />
      <Header />

      <div className="flex w-full">
        <VianoMain />
      </div>
    </section>
  );
};

export default Viano;
