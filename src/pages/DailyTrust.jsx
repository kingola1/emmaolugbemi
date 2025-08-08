import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DailyTrustMain from "../components/DailyTrustMain";
import PageTitle from "../components/PageTitle";

const DailyTrust = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | Daily Trust" />
      <Header />

      <div className="flex w-full">
        <Sidebar />
        <DailyTrustMain />
      </div>
    </section>
  );
};

export default DailyTrust;
