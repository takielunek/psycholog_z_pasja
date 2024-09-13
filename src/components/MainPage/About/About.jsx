import Ellipse5 from "../../../assets/Ellipse5.png";
import martyna from "../../../assets/martyna.png";
import martyna3 from "../../../assets/martyna3.png";

const About = () => {

  const button =
    "text-[16px] sm:text-[18px] font-normal text-blue500 font-roboto bg-white hover:bg-blue700 hover:text-white hover:border-[2px] px-[24px] py-[12px] rounded-[16px]";

  return (
    <div className="wrapper z-10 pt-[180px] sm:pt-[300px] xl:pt-[200px] pb-[100px] sm:pb-[200px] px-[0px] xs:px-[50px] lg:px-[100px] xxl:px-[160.5px]">
      <div className="relative grid xl:justify-items-end px-[15px] xxs:px-[20px] xs:px-[40px] sm:px-[60px] md:px-[120px] rounded-[32px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue700 via-blue700 to-blue500 rounded-[32px] opacity-85 z-10"></div>

        <div className="relative z-20 pb-[30px] xss:pb-[63px] flex flex-col xl:w-[45%] xxl:w-[55%] pt-[180px] sm:pt-[280px] xl:pt-[63px]">
          <p className="text-[20px] sm:text-[44px] font-medium text-white font-roboto">
            O mnie
          </p>
          <p className="text-[14px] sm:text-[20px] font-normal text-white font-roboto pt-[40px] pb-[50px] xss:py-[40px]">
            mgr Martyna Borawska <br /> Jestem psychologiem i psychoterapeutą
            poznawczo-behawioralnym (w szkoleniu). Prowadzę terapie i
            konsultacje psychologiczne w gabinecie lub online. W swojej pracy
            stawiam na ciągły rozwój i na najwyższą jakość świadczonych przeze
            mnie usług. Regularnie uczestniczę w szkoleniach i doskonalę swój
            warsztat pracy. Pracuję pod stałą superwizją (co to oznacza dla
            Ciebie jako klienta?). Swoją pracę wykonuję z pasją i pełnym
            zaangażowaniem. Dokładam wszelkich starań by pomóc Pacjentom
            zmierzyć się z trudnościami z jakimi do mnie przychodzą w atmosferze
            pełnej szacunku, dyskrecji, skupienia, bez oceniania.
          </p>
          <div>
            <a
              href="/about"
              className={`${button}`}
            >
              Czytaj więcej
            </a>
          </div>
        </div>

        {/* phone  */}
        <div className="overflow-hidden w-full">
          <img
            src={Ellipse5}
            alt="elipse"
            className="absolute z-0 h-[510px] sm:h-[780px] w-auto max-w-none top-[-268px] sm:top-[-425px] left-[50%] translate-x-[-50%] rotate-[270deg] block xl:hidden"
          />
        </div>

        <img
          src={martyna3}
          alt="Pani Martyna Borawska"
          className="absolute h-[330px] sm:h-[500px] top-[-155px] sm:top-[-250px] left-[50%] translate-x-[-50%] z-10 block xl:hidden"
        />
        {/* desktop  */}
        <img
          src={Ellipse5}
          alt="elipse"
          className="absolute z-0 bottom-[-330px] left-[-330px] rotate-180 hidden xl:block"
        />
        <img
          src={martyna}
          alt="Pani Martyna Borawska"
          className="absolute h-[630px] bottom-0 xl:left-[70px] z-10 hidden xl:block"
        />
      </div>
    </div>
  );
};

export default About;
