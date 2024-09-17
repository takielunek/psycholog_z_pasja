import { useState } from "react";
import Header from "../Header/Header";
import martyna2 from "../../../assets/martyna2.png";
// import SwiperComponent from "./SwiperComponent";
import { aboutTexts } from "./index.js";
import Modal from "../../Modal/Modal";

const About = () => {
  const button =
    "text-[16px] sm:text-[18px] font-normal text-white border-[2px] border-white bg-blue500 py-[12px] px-[24px] rounded-[16px] inline-block hover:bg-white hover:text-blue500 hover:border-[2px] hover:border-blue500";
  const text =
    "text-[20px] sm:text-[25px] xs:text-[32px] font-medium font-roboto text-blue500";
  const text1 =
    "text-[14px] sm:text-[20px] font-normal font-roboto text-gray900 mt-[24px]";
  const text2 = "text-[20px] xss:text-[24px] font-medium font-roboto";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <div className="z-0">
        <Header />
      </div>
      
      <div className="mt-[130px] xs:mt-[200px] md:mt-[250px] mb-[100px] relative z-10">
        <div className="wrapper px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] flex flex-col xll:flex-row gap-[40px] sm:gap-[80px]">
          <div className="flex justify-start w-[52%] xll:w-[32%]">
            <img
              src={martyna2}
              alt="Martyna Borawska"
              className="min-h-[234px] max-h-[818px] object-contain"
            />
          </div>

          <div className="w-full xll:w-[47%]">
            <h3 className={`${text}`}>mgr Martyna Borawska</h3>
            <p className={`${text1}`}>
              {aboutTexts.paragraph1} &nbsp;
              <a href="" className="text-blue700 underline">
                ( co to oznacza dla Ciebie jako klienta? )
              </a>
              . {aboutTexts.paragraph2}
            </p>
            <button
              className={`${button} mt-[40px] mb-[60px]`}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Umów konsultację
            </button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)} />

            <h3 className={`${text}`}>Edukacja i doświadczenie</h3>
            <p className={`${text1}`}>
              {aboutTexts.paragraph3} <br /> {aboutTexts.paragraph31}
            </p>
            <p className={`${text1}`}> {aboutTexts.paragraph4}</p>
            <div className="hidden xxxl:block">
              <div className="flex xxxl:flex-row xxxl:gap-[40px] xxxl:items-center mt-[60px]">
                <p className={`${text2} text-gray700`}>
                  Zapraszam do współpracy:
                </p>
                <a
                  href="mailto:kontakt@psychologzpasja.pl"
                  className={`${text2} text-blue500`}
                >
                  kontakt@psychologzpasja.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <SwiperComponent /> */}
    </div>
  );
};

export default About;
