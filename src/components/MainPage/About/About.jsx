import Ellipse5 from "../../../assets/Ellipse5.png";
import martyna from "../../../assets/martyna.png";

const About = () => {
  return (
    <div className="wrapper z-10 pt-[200px] pb-[200px] px-[20px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
      <div className="relative flex justify-end px-[30px] xss:px-[60px] md:px-[120px] rounded-[32px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue700 via-blue700 to-blue500 rounded-[32px] opacity-85 z-10"></div>
        <div className="relative z-20 py-[30px] xss:py-[63px] flex flex-col xl:w-[45%] xxl:w-[55%] mb-[300px] xss:mb-[400px] ss:mb-[450px] sm:mb-[630px] xl:mb-0">
          <p className="text-[26px] xss:text-[44px] font-medium text-white font-roboto">
            O mnie
          </p>
          <p className="text-[14px] xss:text-[20px] font-normal text-white font-roboto py-[20px] xss:py-[40px]">
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
              className="text-[14px] xss:text-[18px] font-normal text-blue500 font-roboto bg-white px-[24px] py-[12px] rounded-[16px]"
            >
              Czytaj więcej
            </a>
          </div>
        </div>
        <img
          src={Ellipse5}
          alt="elipse"
          className="absolute z-0 bottom-[-330px] left-[-330px] rotate-180 hidden xl:block"
        />
        <img
          src={martyna}
          alt="Zdjęcie Pani Martyny Borawskiej"
          className="absolute h-[300px] xss:h-[400px] ss:h-[450px] sm:h-[630px] bottom-0 left-[50%] translate-x-[-50%] xl:left-[70px] xl:translate-x-[0%] z-10"
        />
      </div>
    </div>
  );
};

export default About;
