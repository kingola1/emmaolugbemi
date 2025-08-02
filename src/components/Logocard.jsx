const Logocard = ({ logo, width, height }) => {
  return (
    <div className="bg-[#fff]  rounded-2xl py-2 px-5 w-auto h-[147px] flex items-center justify-center">
      <img src={logo} alt="brand logo" className={`${(width, height)}`} />
    </div>
  );
};

export default Logocard;
