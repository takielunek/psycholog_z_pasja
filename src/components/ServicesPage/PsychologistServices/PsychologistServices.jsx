import Header from "../Header/Header";

const PsychologistServices = () => {
  const box =
    "w-full xl:w-[48%] bg-grayBg text-center font-roboto m-[5px] p-[40px] rounded-[16px]";
  const title = "text-[32px] font-medium text-blue500";
  const text1 = "text-[18px] font-normal text-gray500 pt-[10px]";
  const text2 = "text-[16px] font-normal text-gray800 xxxl:px-[60px]";
  const price = "text-[24px] font-medium text-blue500 py-[24px]";
  const button =
    "text-[18px] font-normal text-white bg-blue500 py-[12px] px-[24px] rounded-[16px] inline-block mt-[20px]";

  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="mt-[450px] xss:mt-[400px] sm:mt-[350px] xl:mt-[400px] xxxl:mt-[350px] mb-[100px] relative z-10">
        <div className="wrapper px-[20px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] flex flex-col xl:flex-row xl:flex-wrap">
          <div className={`${box}`}>
            <h2 className={`${title}`}>
              Konsultacja psychologiczna indywidualna
            </h2>
            <p className={`${text1}`}>telefonicznnie lub online</p>
            <p className={`${price}`}>150 zł</p>
            <p className={`${text2}`}>
              Konsultacja psychologiczna jest to spotkanie Psychologa i Pacjenta
              w gabinecie lub online przy użyciu takich narzędzi jak Zoom,
              Google Meets lub Skype. Konsultacje mogą się odbyć również
              telefonicznie.
            </p>
            <a href="/enroll" className={`${button}`}>
              Umów konsultację
            </a>
          </div>
          <div className={`${box}`}>
            <h2 className={`${title}`}>
              Konsultacja psychologiczna pary/rodziny
            </h2>
            <p className={`${text1}`}>online</p>
            <p className={`${price}`}>200 zł</p>
            <p className={`${text2}`}>
              Jest to spotkanie Psychologa oraz dwóch lub więcej
              zainteresowanych osób w gabinecie lub online (Zoom, Google Meets
              lub Skype).
            </p>
            <a href="/enroll" className={`${button}`}>
              Umów konsultację
            </a>
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>
              Konsultacja pvsychologiczna z dojazdem do pacjenta
            </h2>
            <p className={`${text1} py-[24px]`}>
              <span className={`${price}`}>od 200 zł</span> cena zależna od
              odległości
            </p>
            <p className={`${text2}`}>
              Wychodząc naprzeciw Państwa oczekiwaniom, w wyjątkowych
              przypadkach istnieje możliwość dojazdu do pacjenta. Przed
              rezerwacją takiej usługi proszę o krótką informację z jakiego
              powodu potrzebna jest „wizyta domowa”.
            </p>
            <a href="/enroll" className={`${button}`}>
              Umów konsultację
            </a>{" "}
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>Terapia psychologiczna</h2>
            <p className={`${text1}`}>telefonicznnie lub online</p>
            <p className={`${price}`}>180 zł</p>
            <p className={`${text2}`}>
              Terapia psychologiczna są to zaplanowane, cykliczne spotkania
              podczas których realizowane są cele terapeutyczne ustalone na
              poprzedzających terapię konsultacjach.
            </p>
            <a href="/enroll" className={`${button}`}>
              Umów konsultację
            </a>{" "}
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>Szkolenia / Warsztaty</h2>
            <p className={`${text2} pt-[24px]`}>
              Przygotowuję szkolenia pod konkretne problemy klienta. Przykładowe
              tematy szkoleń dla firm to: komunikacja w zespole, rozwiązywanie
              konfliktów, rozwijanie miękkich kompetencji, radzenie sobie ze
              stresem itd. Przykładowe tematy warsztatów: zarządzanie sobą w
              czasie, huśtawka nastrojów w okresie okołoporodowym, wypalenie
              rodzicielskie. Prowadzę szkolenia i warsztaty na terenie Warszawy
              oraz Grajewa i okolic. Inne lokalizacje do uzgodnienia. Zapraszam
              do kontaktu w celu otrzymania oferty.
            </p>
            <a href="/enroll" className={`${button}`}>
              Umów konsultację
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistServices;
