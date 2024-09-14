import { useState } from "react";
import whiteLogo from "../../assets/whiteLogo.svg";
import whiteLogo2 from "../../assets/whiteLogo2.svg";
import facebook from "../../assets/whiteFacebook.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Navbar = () => {


  const desktopLink =
    "text-white hover:text-blue100 text-[18px] font-normal font-roboto hidden sm:block linkStyle";
  const mobileLink =
    "text-white hover:text-blue100 text-[18px] font-normal font-roboto";

    const [isMenuOpen, setIsMenuOpen] = useState(false)




  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-blue600">
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
            <img
              className="h-[24px] min-w-[24px] sm:h-[34px] sm:w-[34px]"
              src={facebook}
              alt="facebook icon"
            />
          </a>
        </div>
      </div>

      {/* mobile menu  */}

      <div
        className={` ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        } absolute bg-blue600 left-0 right-0 top-[72px] h-[100vh] block sm:hidden`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
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
