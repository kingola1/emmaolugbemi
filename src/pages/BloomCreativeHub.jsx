import BCHMain from "../components/BCHMain";
import PageTitle from "../components/PageTitle";

const BloomCreativeHub = () => {
  return (
    <section className="flex flex-col bg-[#131313] w-full h-full font-glancyr">
      <PageTitle title="Emmanuel Olugbemi | Bloom Creative Hub" />

      <div className="flex w-full">
        <BCHMain />
      </div>
    </section>
  );
};

export default BloomCreativeHub;
