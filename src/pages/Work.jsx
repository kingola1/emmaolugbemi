import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Workmain from "../components/WorkMain";
import PageTitle from "../components/PageTitle";
const Work = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full">
      <PageTitle title="Work" />

      <Header />

      <div className="flex w-full">
        <Sidebar />

        <Workmain />
      </div>
    </section>
  );
};

export default Work;
