import Header from "../Header/Header";
import {regulationsTexts} from "./index.js"

const Regulations = () => {

const title =
  "text-[18px] sm:text-[28px] text-blue600 font-roboto font-medium";

  return (
    <div>
      <div className="z-0">
        <Header />
      </div>

      <div className="mt-[120px] xs:mt-[200px] md:mt-[250px] mb-[100px] relative z-10">
        <div className="wrapper px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px]">
          <ol className="text-[18px] font-normal font-roboto text-blue600 flex flex-col gap-[16px] sm:gap-[24px]">
            <li>{regulationsTexts.list1}</li>
            <li>{regulationsTexts.list2}</li>
          </ol>
          <div className="grid gap-[40px]">
            <div>
              <h3 className={`${title} mt-[60px] sm:mt-[100px]`}>
                {regulationsTexts.title1}
              </h3>
              <ol className="text-[14px] sm:text-[16px] font-normal font-roboto text-gray900 w-full sm:w-[68%] mt-[24px]">
                <li>{regulationsTexts.paragraph1}</li>
                <li>{regulationsTexts.paragraph2}</li>
                <li>{regulationsTexts.paragraph3}</li>
                <li>
                  {regulationsTexts.paragraph4}&nbsp;
                  <span className="text-blue500 underline">
                    kontakt@psychologzpasja.pl
                  </span>
                  &nbsp; {regulationsTexts.paragraph41}
                </li>
                <li>{regulationsTexts.paragraph5}</li>
                <li>{regulationsTexts.paragraph6}</li>
                <li>{regulationsTexts.paragraph7}</li>
                <li>{regulationsTexts.paragraph8}</li>
                <li>{regulationsTexts.paragraph9}</li>
                <li>
                  {regulationsTexts.paragraph10}&nbsp;
                  <span className="text-blue500 underline">
                    kontakt@psychologzpasja.pl
                  </span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className={`${title}`}>{regulationsTexts.title2}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
