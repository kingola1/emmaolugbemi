import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BackgroundMain from "../components/BackgroundMain";
import PageTitle from "../components/PageTitle";

const Background = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full">
      <PageTitle title="Emmanuel Olugbemi | Background" />
      <Header />

      <aside className="flex">
        <Sidebar />

        <BackgroundMain />
      </aside>
    </section>
  );
};

export default Background;
