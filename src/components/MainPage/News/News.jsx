import chevron from "../../../assets/chevron.png";
import { news } from "./index.js";

const News = () => {
  return (
    <div className="wrapper px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
      <div className=" flex flex-row justify-between mt-[100px]">
        <p className="text-[20px] sm:text-[44px] font-medium font-roboto text-blue700 tracking-[-.02em]">
          Aktualności
        </p>

        <div className="flex items-center md:hidden">
          <a href="/news">
            <img
              src={chevron}
              alt="chevron icon"
              className="h-[24px] w-[24px] sm:w-[35px] sm:h-[35px]"
            />
          </a>
        </div>
        <div className="hidden md:flex items-end">
          <a
            href="/news"
            className=" text-[16px] font-normal font-roboto text-blue500 underline mb-[10px]"
          >
            zobacz wszystkie &gt;
          </a>
        </div>
      </div>
      {/* POSTS  */}
      <div className="flex flex-wrap mt-[20px]">
        {news.map((news) => (
          <div
            key={news.id}
            className="w-full md:w-[50%] xxxxl:w-[25%] flex flex-col items-center py-[24px]"
          >
            <img
              src={news.img}
              alt=""
              className="w-[304px] h-[160px] sm:w-[388px] sm:h-[220px] rounded-t-[20px]"
            />
            <div className="w-[304px] sm:w-[388px]">
              <p className="text-[16px] sm:text-[20px] font-medium font-roboto text-gray900 mt-[12px] sm:mt-[20px]">
                {news.title}
              </p>
              <p className="text-[14px] sm:text-[16px] font-light font-roboto text-gray900 mt-[12px] sm:mt-[20px]">
                {news.text}
              </p>
              <div className="mt-[16px] sm:mt-[32px]">
                <a
                  href={news.link}
                  className="text-[16px] font-normal font-roboto text-blue500 underline"
                >
                  czytaj więcej &gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
