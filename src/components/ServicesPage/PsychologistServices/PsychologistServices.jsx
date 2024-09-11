import Header from "../Header/Header";

const PsychologistServices = () => {
  const box =
    "w-full xl:w-[48%] bg-grayBg text-center font-roboto m-[5px] p-[30px] xss:p-[40px] rounded-[16px] relative";
  const title = "text-[24px] xss:text-[32px] font-medium text-blue500";
  const text1 = "text-[18px] font-normal text-gray500 pt-[10px]";
  const text2 =
    "text-[16px] font-normal text-gray800 xxxl:px-[60px] mb-[90px]";
  const price = "text-[24px] font-medium text-blue500";
  const button =
    "text-[18px] font-normal text-white bg-blue500 py-[12px] px-[24px] rounded-[16px]";
    const buttonDiv = "absolute left-0 right-0 flex justify-center bottom-[40px]";

  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="mt-[450px] xss:mt-[400px] sm:mt-[350px] xl:mt-[400px] xxxl:mt-[350px] mb-[100px] relative z-10">
        <div className="wrapper px-[20px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] flex flex-col xl:flex-row xl:flex-wrap">
          <div className={`${box}`}>
            <h2 className={`${title}`}>Konsultacja psychologiczna</h2>
            <p className={`${text1}`}>telefonicznnie lub online</p>
            <p className={`${price} py-[24px]`}>150 zł</p>
            <p className={`${text2}`}>
              Konsultacja psychologiczna jest to spotkanie Psychologa i Pacjenta
              w gabinecie lub online przy użyciu takich narzędzi jak Zoom,
              Google Meets lub Whatsapp. Konsultacje mogą się odbyć również
              telefonicznie.
            </p>
            <div className={`${buttonDiv}`}>
              <a href="/enroll" className={`${button}`}>
                Umów konsultację
              </a>
            </div>
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>
              Konsultacja psychologiczna z dojazdem do pacjenta
            </h2>
            <p className={`${text1} py-[24px]`}>
              <span className={`${price} `}>od 200 zł</span> (zależy od
              odległości)
            </p>
            <p className={`${text2}`}>
              Wychodząc naprzeciw Państwa oczekiwaniom, w wyjątkowych
              przypadkach istnieje możliwość dojazdu do pacjenta. Przed
              rezerwacją takiej usługi proszę o krótką informację z jakiego
              powodu potrzebna jest „wizyta domowa”.
            </p>
            <div className={`${buttonDiv}`}>
              <a href="/enroll" className={`${button}`}>
                Umów konsultację
              </a>
            </div>
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>Terapia psychologiczna</h2>
            <div className="py-[24px]">
              <p className={`${price}`}>
                <span className={`${text1}`}>indywidualna -</span> 180 zł
              </p>
              <p className={`${price}`}>
                <span className={`${text1}`}>pary/rodziny -</span> 200 zł
              </p>
            </div>
            <p className={`${text2}`}>
              Terapia psychologiczna są to zaplanowane, cykliczne spotkania
              podczas których realizowane są cele terapeutyczne ustalone na
              poprzedzających terapię konsultacjach. Terapia może się odbywać w
              formie hybrydowej stacjonarnie i online (Zoom, Google Meets lub
              Whatsapp).
            </p>
            <div className={`${buttonDiv}`}>
              <a href="/enroll" className={`${button}`}>
                Umów konsultację
              </a>
            </div>
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>Szkolenia / Warsztaty rozwojowe</h2>
            <p className={`${text2} pt-[24px]`}>
              Przygotowuję szkolenia pod konkretne problemy klienta. Przykładowe
              tematy szkoleń dla firm to: komunikacja w zespole, rozwiązywanie
              konfliktów, rozwijanie miękkich kompetencji, radzenie sobie ze
              stresem, zarządzanie sobą w czasie, huśtawka nastrojów w okresie
              okołoporodowym, wypalenie rodzicielskie itd. Prowadzę szkolenia i
              warsztaty na terenie Warszawy oraz Grajewa i okolic. Inne
              lokalizacje do uzgodnienia. Zapraszam do kontaktu w celu
              otrzymania oferty:
            </p>
            <div className={`${buttonDiv}`}>
              <a href="/enroll" className={`${button}`}>
                Umów konsultację
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistServices;
