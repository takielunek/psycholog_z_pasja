import { useState } from "react";
import whiteLogo from "../../assets/whiteLogo.svg";
import whiteLogo2 from "../../assets/whiteLogo2.svg";

const Navbar = () => {
  const desktopLink =
    "text-white hover:text-blue100 text-[18px] font-normal font-roboto hidden sm:block linkStyle";
  const mobileLink =
    "text-white hover:text-blue100 text-[18px] font-normal font-roboto";
  const icon =
    "h-[32px] min-w-[32px] sm:h-[42px] sm:w-[42px] block sm:hidden mr-[10px] cursor-pointer text-white hover:text-blue100";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-blue600">
      <div className="relative z-10 wrapper flex justify-between py-[13px] xl:py-[9px] px-[20px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
        <a href="/">
          <img
            className="h-[122px] hidden sm:block "
            src={whiteLogo}
            alt="Logo"
          />
          <img
            className="h-[46px] block sm:hidden"
            src={whiteLogo2}
            alt="Logo"
          />
        </a>
        <div className="flex items-center justify-between w-[50%] sm:w-[70%] md:w-[60%] lg:w-[60%] xl:w-[45%]">
          <div className="flex justify-between w-[85%] lg:w-[80%]">
            <a className={`${desktopLink}`} href="/">
              Home
            </a>
            <a className={`${desktopLink}`} href="/news">
              Aktualności
            </a>
            <a className={`${desktopLink}`} href="/services">
              Usługi
            </a>
            <a className={`${desktopLink}`} href="/about">
              O mnie
            </a>
            <a className={`${desktopLink}`} href="/contact">
              Kontakt
            </a>
          </div>

          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={`${icon}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className={`${icon}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <path d="M5.33331 9.33333C5.33331 8.59695 5.93027 8 6.66665 8H25.3333C26.0697 8 26.6666 8.59695 26.6666 9.33333C26.6666 10.0697 26.0697 10.6667 25.3333 10.6667H6.66665C5.93027 10.6667 5.33331 10.0697 5.33331 9.33333ZM5.33331 16C5.33331 15.2636 5.93027 14.6667 6.66665 14.6667H25.3333C26.0697 14.6667 26.6666 15.2636 26.6666 16C26.6666 16.7364 26.0697 17.3333 25.3333 17.3333H6.66665C5.93027 17.3333 5.33331 16.7364 5.33331 16ZM5.33331 22.6667C5.33331 21.9303 5.93027 21.3333 6.66665 21.3333H25.3333C26.0697 21.3333 26.6666 21.9303 26.6666 22.6667C26.6666 23.403 26.0697 24 25.3333 24H6.66665C5.93027 24 5.33331 23.403 5.33331 22.6667Z" />
            </svg>
          )}

          <a
            href="https://www.facebook.com/psychologzpasja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[24px] min-w-[24px] sm:h-[34px] sm:w-[34px] text-white hover:text-blue100"
            >
              <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" />
            </svg>
          </a>
        </div>
      </div>

      {/* mobile menu  */}

      <div
        className={` ${
          isMenuOpen ? "block" : "hidden"
        } absolute bg-blue600 left-0 right-0 top-[72px] h-[100vh] block sm:hidden`}
      >
        <div className="flex flex-col justify-start ml-[33px] gap-[32px] pt-[70px]">
          <a className={`${mobileLink}`} href="/">
            Home
          </a>
          <a className={`${mobileLink}`} href="/news">
            Aktualności
          </a>
          <a className={`${mobileLink}`} href="/services">
            Usługi
          </a>
          <a className={`${mobileLink}`} href="/about">
            O mnie
          </a>
          <a className={`${mobileLink}`} href="/contact">
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
