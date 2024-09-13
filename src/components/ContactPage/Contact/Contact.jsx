import Header from "../Header/Header";
import Send from "./Send";

const Contact = () => {
  const text =
    "text-[18px] sm:text-[20px] text-gray800 font-normal font-roboto";
  const text2 =
    "text-[12px] sm:text-[14px] text-gray600 font-light font-roboto";

  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="mt-[130px] xs:mt-[200px] md:mt-[250px] mb-[100px] relative z-10">
        <div className="wrapper px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px] flex flex-col xxl:flex-row">
          <div className="w-full xxl:w-[50%]">
            <p className={`${text}`}>Martyna Borawska</p>
            <div className="mt-[12px] sm:mt-[32px]">
              <p className={`${text2}`}>Telefon</p>
              <p className={`${text}`}>+48 000 000 000</p>
            </div>
            <div className="mt-[12px] sm:mt-[32px]">
              <p className={`${text2}`}>Adres e-mail</p>
              <p className={`${text}`}>kontakt@psychologzpasja.pl</p>
            </div>
            <p className={`${text} mt-[24px] sm:mt-[48px]`}>
              Jeśli nie odbieram, proszę o wiadomość e-mail lub SMS.{" "}
              <br className="hidden xxl:block" /> Oddzwonię najszybciej jak to
              możliwe.
            </p>
          </div>

          <Send />
        </div>
      </div>
    </div>
  );
};

export default Contact;
