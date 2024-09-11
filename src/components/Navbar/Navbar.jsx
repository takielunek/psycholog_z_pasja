import whiteLogo from "../../assets/whiteLogo.png";
import facebook from "../../assets/whiteFacebook.png";

const Navbar = () => {
  const link =
    "text-white hover:text-blue100 text-[18px] font-normal font-roboto hidden xl:block linkStyle";

  return (
    <div className="absolute top-0 left-0 right-0 z-10 bg-blue600">
      <div className=" wrapper flex justify-between py-[9px] px-[20px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
        <a href="/">
          <img className="h-[122px]" src={whiteLogo} alt="Logo" />
        </a>
        <div className="flex items-center justify-between w-[50%]">
          <div className="flex justify-between w-[80%]">
            <a className={`${link}`} href="/">
              Home
            </a>
            <a className={`${link}`} href="/news">
              Aktualności
            </a>
            <a className={`${link}`} href="/services">
              Usługi
            </a>
            <a className={`${link}`} href="/about">
              O mnie
            </a>
            <a className={`${link}`} href="/contact">
              Kontakt
            </a>
          </div>
          <a href="">
            <img className="h-[35px]" src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
