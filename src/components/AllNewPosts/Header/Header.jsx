import Navbar from "../../Navbar/Navbar";
import Ellipse23 from "../../../assets/Ellipse2.3.png";
import Ellipse41 from "../../../assets/Ellipse4.1.png";
import Ellipse32 from "../../../assets/Ellipse3.2.png";
import Ellipse4 from "../../../assets/Ellipse4.png";
import Ellipse3 from "../../../assets/Ellipse3.png";
import { news } from "../Posts/index.js";

const Header = () => {
  return (
    <div className="relative pt-[60px] sm:pt-[140px]">
      <Navbar />
      {/* mobile  */}
      <img
        src={Ellipse4}
        alt=""
        className="absolute top-0 left-0 z-0 block xll:hidden h-[360px] xs:h-[500px] sm:h-[700px] md:h-[900px] w-auto max-w-none"
      />

      <img
        src={Ellipse3}
        alt=""
        className="absolute top-[120px] xs:top-[200px] sm:top-[300px] md:top-[500px] right-[-30px] z-0 block xll:hidden h-[500px] xs:h-[600px] sm:h-[700px] md:h-[900px]"
      />
      {/* desktop  */}
      <img
        src={Ellipse23}
        alt=""
        className="absolute top-0 left-0 z-0 hidden xxl:block"
      />
      <img
        src={Ellipse41}
        alt=""
        className="absolute top-0 right-0 z-0 hidden xll:block"
      />
      <img
        src={Ellipse32}
        alt=""
        className="absolute top-0 left-[250px] z-0 hidden xxxl:block"
      />
      <div className="wrapper">
        <div className="px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] xl:pr-0 w-full absolute z-0">
          {news.slice(0, 1).map((item) => (
            <h1
              key={item.id}
              className="text-[28px] xs:text-[40px] md:text-[56px] tracking-[-.02em] font-semibold font-roboto text-blue600 mt-[50px]"
            >
              {item.title}
            </h1>
          ))}
          <p className="text-[12px] sm:text-[14px] text-gray500 font-normal font-roboto mt-[16px]">28.11.2023</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
