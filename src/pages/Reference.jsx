import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ReferenceMain from "../components/ReferenceMain";
import PageTitle from "../components/PageTitle";

const Reference = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | Reference" />

      <ReferenceMain />
    </section>
  );
};

export default Reference;
