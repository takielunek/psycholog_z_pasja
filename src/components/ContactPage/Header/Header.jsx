import Navbar from "../../Navbar/Navbar";
import Ellipse24 from "../../../assets/Ellipse2.4.png";
import Ellipse41 from "../../../assets/Ellipse4.1.png";
import Ellipse33 from "../../../assets/Ellipse3.3.png";

const Header = () => {
  return (
    <div className="wrapper relative pt-[140px]">
      <Navbar />
      <img src={Ellipse24} alt="" className="absolute top-0 left-0 z-0" />
      <img src={Ellipse41} alt="" className="absolute top-0 right-0 z-0" />
      <img src={Ellipse33} alt="" className="absolute top-[240px] left-0 z-0" />
      <div className="wrapper">
        <div className="px-[20px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] xl:pr-0 w-full xl:w-[50%] absolute z-0">
          <h1 className="text-[32px] xs:text-[60px] md:text-[80px] font-semibold font-roboto text-blue600 mt-[50px]">
            Kontakt
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
