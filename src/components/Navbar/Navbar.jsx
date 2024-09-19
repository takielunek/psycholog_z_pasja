import { useState } from "react";
import whiteLogo from "../../assets/whiteLogo.svg";
import whiteLogo2 from "../../assets/whiteLogo2.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Navbar = () => {
  const desktopLink =
    "text-white hover:text-blue100 text-[18px] font-normal font-roboto hidden sm:block linkStyle";
  const mobileLink =
    "text-white hover:text-blue100 text-[18px] font-normal font-roboto";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-blue600">
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

          <img
            className="h-[32px] min-w-[32px] sm:h-[42px] sm:w-[42px] block sm:hidden mr-[10px] cursor-pointer"
            src={isMenuOpen ? close : menu}
            alt="hamburger icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

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
