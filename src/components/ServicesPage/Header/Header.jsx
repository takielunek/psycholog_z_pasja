import Navbar from "../../Navbar/Navbar";
import Ellipse4 from "../../../assets/Ellipse4.png";
import Ellipse31 from "../../../assets/Ellipse3.1.png";
import Ellipse22 from "../../../assets/Ellipse2.2.png";
import Ellipse41 from "../../../assets/Ellipse4.1.png";
import Ellipse3 from "../../../assets/Ellipse3.png";

const Header = () => {
  return (
    <div className="relative pt-[60px] sm:pt-[140px]">
      <Navbar />
      {/* mobile  */}
      <img
        src={Ellipse41}
        alt=""
        className="absolute top-0 right-0 z-0 block xll:hidden h-[360px] xs:h-[500px] sm:h-[700px] md:h-[900px] w-auto max-w-none"
      />

      <img
        src={Ellipse3}
        alt=""
        className="absolute top-[120px] xs:top-[200px] sm:top-[300px] md:top-[500px] left-[-30px] rotate-[180deg] z-0 block xll:hidden h-[500px] xs:h-[600px] sm:h-[700px] md:h-[900px]"
      />
      {/* desktop  */}
      <img
        src={Ellipse4}
        alt=""
        className="absolute top-0 left-0 z-0 hidden xll:block"
      />
      <img
        src={Ellipse31}
        alt=""
        className="absolute top-0 right-0 z-0 hidden xll:block"
      />
      <img
        src={Ellipse22}
        alt=""
        className="absolute top-[5px] right-0 z-0 hidden xxxl:block"
      />
      <div className="wrapper">
        <div className=" px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] xl:pr-0 w-full xl:w-[50%] absolute z-0">
          <h1 className="text-[28px] xs:text-[60px] md:text-[80px] font-semibold font-roboto text-blue600 mt-[50px]">
            Usługi
          </h1>
          <p className="text-[14px] sm:text-[18px] font-normal font-roboto text-gray700 mt-[20px]">
            Przed umówieniem się na konsultacje proszę o zapoznanie się z{" "}
            <a href="/regulations" className="text-blue500">
              regulaminem
            </a>
            .
          </p>
          <p className="text-[12px] sm:text-[16px] font-normal font-roboto text-gray500 mt-[10px]">
            Każda sesja trwa 50 minut chyba, że zostanie to ustalone inaczej. W
            przypadku spotkań online użycie kamery internetowej nie jest
            obowiązkowe jednak jest zalecane szczególnie, gdy są wskazania do
            dłuższej terapii i regularnych spotkań.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
