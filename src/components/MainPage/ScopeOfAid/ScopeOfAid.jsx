import { useState } from "react";
import chevron from "../../../assets/chevron.png";
import { aidTexts } from "./index.js";
import Modal from "../../Modal/Modal";

const ScopeOfAid = () => {
  const button =
    "text-[16px] sm:text-[18px] font-roboto text-white font-normal bg-blue500 hover:bg-white hover:text-blue500 hover:border-[2px] hover:border-blue500 py-[12px] px-[24px] rounded-[16px]";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
      <div className=" flex flex-row justify-between">
        <p className="text-[20px] sm:text-[44px] font-medium font-roboto text-blue700 tracking-[-.02em]">
          {aidTexts.title}
        </p>

        <div className="flex items-center md:hidden">
          <a href="/services">
            <img
              src={chevron}
              alt="chevron icon"
              className="h-[24px] w-[24px] sm:w-[35px] sm:h-[35px]"
            />
          </a>
        </div>

        <div className="hidden md:flex items-end">
          <a
            href="/services"
            className=" text-[16px] font-normal font-roboto text-blue500 underline mb-[10px]"
          >
            zobacz wszystkie &gt;
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-[24px] pb-[40px] sm:pt-[60px] sm:pb-[72px] text-gray900 text-[14px] sm:text-[18px] font-normal font-roboto gap-[12px] sm:gap-[18px] lg:gap-[61px]">
        <ul className="list-disc pl-5 grid gap-[12px] sm:gap-[18px]">
          <li>{aidTexts.list1}</li>
          <li>{aidTexts.list2}</li>
          <li>{aidTexts.list3}</li>
          <li>{aidTexts.list4}</li>
          <li>{aidTexts.list5}</li>
          <li>{aidTexts.list6}</li>
        </ul>
        <ul className="list-disc pl-5 grid gap-[12px] sm:gap-[18px]">
          <li>
            {aidTexts.list7} <br /> {aidTexts.list71}
          </li>
          <li>{aidTexts.list8}</li>
          <li>{aidTexts.list9}</li>
          <li>{aidTexts.list10}</li>
          <li>{aidTexts.list11}</li>
        </ul>
      </div>

      <button
        className={`${button}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Umów konsultację
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ScopeOfAid;
