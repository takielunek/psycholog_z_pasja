import Navbar from "../../Navbar/Navbar";
import Ellipse4 from "../../../assets/Ellipse4.png";
import Ellipse2 from "../../../assets/Ellipse2.png";
import Ellipse3 from "../../../assets/Ellipse3.png";
import leftHand from "../../../assets/leftHand.png";
import rightHand from "../../../assets/rightHand.png";

const Header = () => {
  return (
    <div className="relative pt-[1000px] xxs:pt-[1090px] xss:pt-[1210px] xs:pt-[1280px] ss:pt-[1650px] sm:pt-[1580px] md:pt-[1400px] xxxl:pt-[1000px]">
      <Navbar />
      <img src={Ellipse4} alt="" className="absolute top-0 left-0 z-0" />
      <img src={Ellipse2} alt="" className="absolute top-0 right-0 z-0" />
      <img src={Ellipse3} alt="" className="absolute top-[300px] right-0 z-0" />
      <img
        src={leftHand}
        alt=""
        className="absolute top-[150px] md:top-[100px] left-0 z-0"
      />
      <img
        src={rightHand}
        alt=""
        className="absolute top-[470px] xxs:top-[550px] xss:top-[680px] xs:top-[700px] md:top-[600px] xxxl:top-[270px] right-0 z-0"
      />
      <div className="absolute top-[390px] xxs:top-[450px] xss:top-[550px] ss:top-[600px] sm:top-[600px] md:top-[550px] xl:top-[550px] xxxl:top-[350px] z-0 w-full text-center text-gray700 px-[20px] xs:px-[50px]">
        <p className="text-[30px] xs:text-[48px] font-normal font-greatVibes leading-[40px] xs:leading-[57.6px] ">
          Nigdy nie jest za późno, by stać się tym,{" "}
          <br className="hidden md:block" /> kim chcemy być.
        </p>
        <p className="text-[12px] xs:text-[16px] font-normal font-roboto mt-[10px] ss:mt-[20px]">
          George Eliot
        </p>
      </div>
      <div className="absolute top-[700px] xxs:top-[800px] xss:top-[980px] xs:top-[1050px] ss:top-[1150px] sm:top-[1200px] md:top-[1100px] xxxl:top-[740px] z-0 w-full text-center text-[14px] ss:text-[24px] font-normal tracking-[-3%] font-roboto text-gray900 px-[20px] xs:px-[50px]">
        <p>
          Witaj na stronie
          <span className="text-blue600">Psycholog z Pasją.</span>
        </p>
        <p>
          Znajdziesz tu ciekawe i inspirujące treści dotyczące zdrowia{" "}
          <br className="hidden xxl:block" /> psychicznego oraz informacje o
          wydarzeniach przeze mnie organizowanych. Zapraszam Cię do pracy nad{" "}
          <br className="hidden xxl:block" /> sobą, do refleksji, czego tak
          naprawdę chcesz od życia, a przede wszystkim zapraszam Cię do pracy
          nad <br className="hidden xxl:block" /> zmianą, której pragniesz w
          swoim życiu. Pracuj ze mną stacjonarnie lub online z każdego miejsca
          na ziemi.
        </p>
      </div>
    </div>
  );
};

export default Header;
