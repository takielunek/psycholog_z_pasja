import Navbar from "../../Navbar/Navbar";


const Header = () => {
  return (
    <div className="relative pt-[140px]">
      <Navbar />

      <div className="wrapper">
        <div className="px-[20px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] xl:pr-0 w-full xl:w-[50%] absolute z-0">
          <h1 className="text-[32px] xs:text-[60px] md:text-[80px] font-semibold font-roboto text-blue600 mt-[50px]">
            Aktualności
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
