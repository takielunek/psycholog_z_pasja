import Header from "../Header/Header";
import { news } from "./index.js";
import list from "../../../assets/list.svg";
import grid from "../../../assets/grid.svg";

const News = () => {

  const box = "w-full md:w-[50%] xxl:w-[33%] xxxxl:w-[25%] flex flex-col items-center py-[24px]"
  const title = "text-[16px] sm:text-[20px] font-medium font-roboto text-gray900 mt-[12px] sm:mt-[20px]"
  const text = "text-[14px] sm:text-[16px] font-light font-roboto text-gray900 mt-[12px] sm:mt-[20px]"
  const button = "text-[16px] font-normal font-roboto text-blue500 underline";
  const img = "w-[304px] h-[160px] sm:w-[388px] sm:h-[220px] rounded-t-[20px]";

  
  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="mt-[130px] xs:mt-[200px] md:mt-[200px] mb-[100px] relative z-10">
        <div className="wrapper px-[10px] xxs:px-[15px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px]">
          <div className="flex flex-row justify-between text-roboto text-[18px] font-normal text-gray800">
            <div className="flex flex-row gap-[24px]">
              <button href="" className="text-blue600 underline">
                Wszystkie
              </button>
              <button href="">Szkolenia [10]</button>
              <button href="">Artykuły [10]</button>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-row gap-[16px]">
                <p>Widok</p>
                <div className="flex flex-row gap-[12px]">
                  <button>
                    <img src={list} alt="" className="h-[24px] w-[24px]" />
                  </button>
                  <button>
                    <img src={grid} alt="" className="h-[24px] w-[24px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-[20px]">
            {news.map((news) => (
              <div
                key={news.id}
                className={`${box}`}
              >
                <img
                  src={news.img}
                  alt=""
                  className={`${img}`}
                />
                <div className="w-[304px] sm:w-[388px]">
                  <p className={`${title}`}>
                    {news.title}
                  </p>
                  <p className={`${text}`}>
                    {news.text}
                  </p>
                  <div className="mt-[16px] sm:mt-[32px]">
                    <a
                      href={news.link}
                      className={`${button}`}
                    >
                      czytaj więcej &gt;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
