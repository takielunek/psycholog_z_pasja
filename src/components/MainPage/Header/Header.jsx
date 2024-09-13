import Navbar from "../../Navbar/Navbar";
import Ellipse4 from "../../../assets/Ellipse4.png";
import Ellipse2 from "../../../assets/Ellipse2.png";
import Ellipse3 from "../../../assets/Ellipse3.png";
import leftHand from "../../../assets/leftHand.png";
import rightHand from "../../../assets/rightHand.png";

const Header = () => {
  const quote =
    "text-[24px] xss:text-[30px] sm:text-[48px] font-normal font-greatVibes leading-[28.8px] xss:leading-[34px] sm:leading-[57.6px]";
  const author = "text-[12px] sm:text-[16px] font-normal font-roboto mt-[16px]";
  const quoteDiv =
    "absolute top-[220px] xxs:top-[250px] xss:top-[300px] xs:top-[330px] ss:top-[400px] sm:top-[600px] md:top-[600px] xl:top-[650px] xll:top-[730px] xxl:top-[850px] xxxl:top-[350px] z-0 w-full text-center text-gray700 px-[10px] xxs:px-[15px] xs:px-[50px]";
const textDiv =
  "absolute top-[450px] xxs:top-[520px] xss:top-[610px] xs:top-[680px] ss:top-[800px] sm:top-[1200px] md:top-[1150px] xl:top-[1200px] xll:top-[1350px] xxl:top-[1550px] xxxl:top-[740px] z-0 w-full text-center text-[14px] sm:text-[24px] font-normal tracking-[-3%] font-roboto text-gray900 px-[10px] xs:px-[50px]";
  
  return (
    <div className="relative pt-[720px] xxs:pt-[780px] xss:pt-[860px] xs:pt-[920px] ss:pt-[1000px] sm:pt-[1580px] md:pt-[1500px] xll:pt-[1700px] xxl:pt-[1850px] xxxl:pt-[1000px]">
      <Navbar />

      <img src={Ellipse4} alt="" className="absolute top-0 left-0 z-0 " />
      <img
        src={Ellipse2}
        alt=""
        className="absolute top-0 right-0 z-0 hidden xxl:block"
      />
      <img
        src={Ellipse3}
        alt=""
        className="absolute top-[220px] xss:top-[270px] xl:top-[300px] right-[-30px] xl:right-0 z-0"
      />
      <img
        src={leftHand}
        alt=""
        className="absolute top-[70px] sm:top-[120px] md:top-[100px] left-0 z-0 w-[55%] xxxl:w-[35%]"
      />
      <img
        src={rightHand}
        alt=""
        className="absolute top-[330px] xxs:top-[360px] xss:top-[430px] xs:top-[450px] ss:top-[510px] sm:top-[750px] md:top-[720px] xll:top-[820px] xxl:top-[950px] xxxl:top-[300px] right-0 z-0 w-[55%] xxxl:w-[40%]"
      />

      <div className={`${quoteDiv} block sm:hidden`}>
        <p className={`${quote}`}>
          Warunkiem przemiany jest wytrwałość. <br /> Każda trwała przemiana
          wymaga <br />
          czasu i wysiłku.
        </p>
        <p className={`${author}`}>Albert Camus</p>
      </div>

      <div className={`${quoteDiv} hidden sm:block`}>
        <p className={`${quote}`}>
          Nigdy nie jest za późno, by stać się tym,{" "}
          <br className="hidden md:block" /> kim chcemy być.
        </p>
        <p className={`${author}`}>George Eliot</p>
      </div>

      <p className={`${textDiv}`}>
        Witaj na stronie
        <span className="text-blue600"> Psycholog z Pasją.</span> Znajdziesz tu
        ciekawe i inspirujące treści dotyczące zdrowia{" "}
        <br className="hidden xxl:block" /> psychicznego oraz informacje o
        wydarzeniach przeze mnie organizowanych. Zapraszam Cię do pracy nad{" "}
        <br className="hidden xxl:block" /> sobą, do refleksji, czego tak
        naprawdę chcesz od życia, a przede wszystkim zapraszam Cię do pracy nad{" "}
        <br className="hidden xxl:block" /> zmianą, której pragniesz w swoim
        życiu. Pracuj ze mną stacjonarnie lub online z każdego miejsca na ziemi.
      </p>
    </div>
  );
};

export default Header;
