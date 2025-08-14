import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DreamerGirlMain from "../components/GodsDreamergirlMain";
import PageTitle from "../components/PageTitle";

const GodsDreamerGirl = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | God's Dreamer Girl" />
      <Header />

      <DreamerGirlMain />
    </section>
  );
};

export default GodsDreamerGirl;
