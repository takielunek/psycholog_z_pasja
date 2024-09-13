import Header from "../Header/Header";
import {servicesTexts} from "./index.js"

const PsychologistServices = () => {
  const box =
    "w-full xl:w-[48%] bg-grayBg text-center font-roboto my-[12px] sm:m-[5px] p-[30px] xss:p-[40px] rounded-[16px] relative";
  const title =
    "text-[24px] sm:text-[32px] font-medium text-blue500 leading-[28.8px] sm:leading-[38.4px]";
  const text1 = "text-[14px] sm:text-[18px] font-normal text-gray500 pt-[10px]";
  const text2 =
    "text-[14px] sm:text-[16px] font-normal text-gray800 xxxl:px-[60px] mb-[90px]";
  const price = "text-[20px] sm:text-[24px] font-medium text-blue500";
 const button =
   "text-[16px] sm:text-[18px] font-roboto text-white font-normal bg-blue500 hover:bg-grayBg hover:text-blue500 hover:border-[2px] hover:border-blue500 py-[12px] px-[24px] rounded-[16px]";

    const buttonDiv = "absolute left-0 right-0 flex justify-center bottom-[40px]";

  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="mt-[300px] xs:mt-[350px] xl:mt-[400px] xxxl:mt-[350px] mb-[100px] relative z-10">
        <div className="wrapper px-[0px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] flex flex-col xl:flex-row xl:flex-wrap">
          <div className={`${box}`}>
            <h2 className={`${title}`}>{servicesTexts.title1}</h2>
            <p className={`${text1}`}>telefonicznnie lub online</p>
            <p className={`${price} py-[12px] sm:py-[24px]`}>150 zł</p>
            <p className={`${text2}`}>{servicesTexts.paragraph1}</p>
            <div className={`${buttonDiv}`}>
              <a href="/enroll" className={`${button}`}>
                Umów konsultację
              </a>
            </div>
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>{servicesTexts.title2}</h2>
            <p className={`${text1} py-[12px] sm:py-[24px]`}>
              <span className={`${price} `}>od 200 zł</span> (zależy od
              odległości)
            </p>
            <p className={`${text2}`}>{servicesTexts.paragraph2}</p>
            <div className={`${buttonDiv}`}>
              <a href="/enroll" className={`${button}`}>
                Umów konsultację
              </a>
            </div>
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>{servicesTexts.title3}</h2>
            <div className="py-[12px] sm:py-[24px]">
              <p className={`${price}`}>
                <span className={`${text1}`}>indywidualna -</span> 180 zł
              </p>
              <p className={`${price}`}>
                <span className={`${text1}`}>pary/rodziny -</span> 200 zł
              </p>
            </div>
            <p className={`${text2}`}>{servicesTexts.paragraph3}</p>
            <div className={`${buttonDiv}`}>
              <a href="/enroll" className={`${button}`}>
                Umów konsultację
              </a>
            </div>
          </div>

          <div className={`${box}`}>
            <h2 className={`${title}`}>{servicesTexts.title4}</h2>
            <p className={`${text2} pt-[24px]`}>{servicesTexts.paragraph4}</p>
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
