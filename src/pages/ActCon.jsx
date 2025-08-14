import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ActConMain from "../components/ActConMain";
import PageTitle from "../components/PageTitle";

const ActCon = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | ACT CON" />
      <Header />

      <div className="flex w-full">
        <ActConMain />
      </div>
    </section>
  );
};

export default ActCon;
