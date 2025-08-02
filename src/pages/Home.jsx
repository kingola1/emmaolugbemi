import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Homemain from "../components/Homemain";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";

const Home = () => {
  return (
    <section className="flex flex-col w-full h-full bg-[#131313]">
      <PageTitle title="Emmanuel Olugbemi | Home" />
      <Header />

      <div className="flex w-full">
        <Sidebar />

        <Homemain />
      </div>
    </section>
  );
};

export default Home;
