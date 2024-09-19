import blueLogo from "../../assets/blueLogo.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import grayFacebook from "../../assets/grayFacebook.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const text = "text-[14px] sm:text-[16px] font-roboto text-gray700 font-light";
  const line = "w-[1px] h-[12px] bg-gray400 mx-[24px]";
  const text2 = "text-[12px] font-roboto text-gray400";

  return (
    <div className="wrapper px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
      <hr />
      <div className="my-[24px] flex justify-between">
        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[109px]">
          <div className="hidden lg:block">
            <img src={blueLogo} alt="Logo" className="h-[140px] w-[172px]" />
          </div>

          <div className="flex flex-col lg:flex-row gap-[10px] lg:gap-[24px]">
            <div>
              <p className="text-[18px] sm:text-[20px] font-roboto text-gray900 font-normal mb-[15px]">
                Szybki kontakt
              </p>
              <p className="text-[12px] sm:text-[16px] font-roboto text-gray700 font-light">
                Zapraszam od poniedziałku do piątku{" "}
                <br className="hidden lg:block" /> w godzinach 8:00 - 16:00
              </p>
            </div>

            <div className="flex gap-[8px] lg:mt-[45px]">
              <img src={phone} alt="Phone icon" className="h-[20px] w-[20px]" />
              <a href="tel:000000000" className={`${text}`}>
                000 000 000
              </a>
            </div>

            <div className="flex gap-[8px] lg:mt-[45px]">
              <img src={email} alt="Email icon" className="h-[20px] w-[20px]" />
              <a href="mailto:kontakt@psychologzpasja.pl" className={`${text}`}>
                kontakt@psychologzpasja.pl
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <a
            href="https://www.facebook.com/psychologzpasja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[24px] min-w-[24px] sm:h-[34px] sm:w-[34px] text-gray400"
            >
              <path d="M34 17C34 7.61115 26.3888 0 17 0C7.61115 0 0 7.61115 0 17C0 25.4851 6.21662 32.5181 14.3438 33.7935V21.9141H10.0273V17H14.3438V13.2547C14.3438 8.99406 16.8818 6.64062 20.7649 6.64062C22.6243 6.64062 24.5703 6.97266 24.5703 6.97266V11.1562H22.4267C20.315 11.1562 19.6562 12.4668 19.6562 13.8125V17H24.3711L23.6174 21.9141H19.6562V33.7935C27.7834 32.5181 34 25.4851 34 17Z" />
            </svg>
          </a>
        </div>
      </div>

      <hr className="hidden lg:block" />
      <div className="flex flex-col lg:flex-row lg:justify-between my-[24px]">
        <p className={`${text2}`}>
          Copyright &copy; {currentYear}, <br className="block xss:hidden" />{" "}
          wszelkie prawa zastrzeżone - Psycholog z Pasją.
        </p>

        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-row mt-[16px] lg:mt-0">
            <a href="/cookies" className={`${text2}`}>
              Polityka Cookies
            </a>
            <div className="flex items-center">
              <div className={`${line}`}></div>
            </div>
            <a href="/regulations" className={`${text2}`}>
              Regulamin
            </a>
          </div>

          <div className="flex items-center">
            <div className={`${line} hidden lg:block`}></div>
          </div>
          <p className={`${text2} mt-[16px] lg:mt-0`}>
            Projekt graficzny RRstudio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
