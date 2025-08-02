import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BCHMain from "../components/BCHMain";
import PageTitle from "../components/PageTitle";

const BloomCreativeHub = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full">
      <PageTitle title="Emmanuel Olugbemi | Bloom Creative Hub" />
      <Header />

      <div className="flex w-full">
        <Sidebar />
        <BCHMain />
      </div>
    </section>
  );
};

export default BloomCreativeHub;
