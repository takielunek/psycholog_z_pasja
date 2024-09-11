import Header from "../Header/Header";
import martyna2 from "../../../assets/martyna2.png";
import SwiperComponent from "./SwiperComponent";

const About = () => {
  const button =
    "text-[18px] font-normal text-white bg-blue500 py-[12px] px-[24px] rounded-[16px] inline-block";
      const text =
        "text-[25px] xs:text-[32px] font-medium font-roboto text-blue500";
  const text1 = "text-[20px] font-normal font-roboto text-gray900 mt-[24px]";
  const text2 = "text-[24px] font-medium font-roboto text-gray700";

  return (
    <div className="overflow-x-hidden">
      <div className="z-0">
        <Header />
      </div>

      <div className="mt-[150px] xs:mt-[220px] mb-[100px] relative z-10">
        <div className="wrapper px-[20px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] flex flex-col xll:flex-row gap-[80px]">
          <img
            src={martyna2}
            alt="Pani Martyna Borawska"
            className="w-auto max-h-[818px] object-contain mx-[40px]"
          />
          <div className="w-full xll:w-[47%]">
            <h3 className={`${text}`}>mgr Martyna Borawska</h3>
            <p className={`${text1}`}>
              Jestem psychologiem i psychoterapeutą poznawczo-behawioralnym (w
              szkoleniu). Prowadzę terapie i konsultacje psychologiczne w
              gabinecie lub online. W swojej pracy stawiam na ciągły rozwój i na
              najwyższą jakość świadczonych przeze mnie usług. Regularnie
              uczestniczę w szkoleniach i doskonalę swój warsztat pracy. Pracuję
              pod stałą superwizją (
              <span className="text-blue700 underline">
                co to oznacza dla Ciebie jako klienta?
              </span>
              ). Swoją pracę wykonuję z pasją i pełnym zaangażowaniem. Dokładam
              wszelkich starań by pomóc Pacjentom zmierzyć się z trudnościami z
              jakimi do mnie przychodzą w atmosferze pełnej szacunku, dyskrecji,
              skupienia, bez oceniania.
            </p>
            <a href="/enroll" className={`${button} mt-[40px] mb-[60px]`}>
              Umów konsultację
            </a>
            <h3 className={`${text}`}>Edukacja i doświadczenie</h3>
            <p className={`${text1}`}>
              Ukończyłam jednolite studia magisterskie na kierunku psychologia w
              2011 roku na Katolickim Uniwersytecie Lubelskim Jana Pawła II.
              Dodatkowo w ramach studiów realizowałam specjalizację, dzięki
              której zgodnie z rozporządzeniem MENiS z dn. 7.09.2004r. uzyskałam
              przygotowanie pedagogiczne niezbędne do pracy w placówkach
              edukacyjnych i oświatowych. Obecnie na Akademii Motywacji i
              Edukacji w Warszawie realizuję program 4- letniej szkoły
              psychoterapii obejmujący terapię poznawczo-behawioralną TPB,
              założenia dialogu motywującego DM oraz terapię zorientowaną na
              schematy i terapię trzeciej fali. Aktualnie współpracuję ze
              Stowarzyszeniem Inicjatyw Społecznych na Rzecz Osób
              Niepełnosprawnych i Szpitalem Ogólnym w Grajewie. <br />{" "}
              Doświadczenie zdobywałam między innymi w poradni
              psychologiczno-pedagogicznej, w przedszkolu i szkole podstawowej,
              w szpitalu psychiatrycznym, w Wojskowym Instytucie Medycyny
              Lotniczej oraz w Centrum Psychoterapii i Rozwoju SWPS (obecnie:
              Klinika Terapii Poznawczo-Behawioralnej Uniwersytetu SWPS).
              Ukończyłam również studia podyplomowe z zakresu psychologii
              transportu w Szkole Wyższej Psychologii Społecznej w Warszawie.
            </p>
            <p className={`${text1}`}>
              Posiadam bogate doświadczenie nie tylko w zakresie pomocy
              psychologicznej, ale również w szeroko pojętej psychologii
              biznesu. W 2013 roku ukończyłam studia podyplomowe na kierunku
              Zarządzanie Zasobami Ludzkimi na Uniwersytecie Warszawskim. W
              swoim dotychczasowym życiu zawodowym prowadziłam wiele szkoleń z
              zakresu miękkich kompetencji psychospołecznych. Posiadam
              wieloletnie doświadczenie w realizowaniu projektów rekrutacyjnych
              dla największych firm w Polsce i na świecie, takich jak: Samsung,
              Microsoft, Reckitt, AXA, PKO BP, Reiffeisen Bank, Nordea i wiele
              więcej. Swoim zasięgiem pokrywałam wszystkie kraje europejskie,
              Republikę Południowej Afryki oraz Zjednoczone Emiraty Arabskie.
              Jest mi bliski temat międzyludzkich różnic kulturowych i ich
              ogromnego znaczenia w powodzeniu biznesu.
            </p>
            <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] items-start sm:items-center mt-[60px]">
              <p className={`${text2}`}>Zapraszam do współpracy</p>
              <a href="/contact" className={`${button}`}>
                Napisz do mnie
              </a>
            </div>
          </div>
        </div>
      </div>

      <SwiperComponent />
    </div>
  );
};

export default About;
