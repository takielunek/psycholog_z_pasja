import Header from "../Header/Header";
import { news } from "../../AllNewPosts/Posts/index.js";

const News = () => {
  const box =
    "w-full md:w-[50%] xxll:w-[33%] xxxxl:w-[25%] flex flex-col items-center py-[24px]";
  const title =
    "text-[16px] sm:text-[20px] font-medium font-roboto text-gray900 mt-[12px] sm:mt-[20px]";
  const text =
    "text-[14px] sm:text-[16px] font-light font-roboto text-gray900 mt-[12px] sm:mt-[20px]";
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
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[27px] w-[27px] text-gray900 hover:text-blue700"
                    >
                      <path d="M4 7.5C4 6.94772 4.44772 6.5 5 6.5H6C6.55228 6.5 7 6.94772 7 7.5C7 8.05228 6.55228 8.5 6 8.5H5C4.44772 8.5 4 8.05228 4 7.5ZM9 7.5C9 6.94772 9.44772 6.5 10 6.5H19C19.5523 6.5 20 6.94772 20 7.5C20 8.05228 19.5523 8.5 19 8.5H10C9.44772 8.5 9 8.05228 9 7.5ZM4 12.5C4 11.9477 4.44772 11.5 5 11.5H6C6.55228 11.5 7 11.9477 7 12.5C7 13.0523 6.55228 13.5 6 13.5H5C4.44772 13.5 4 13.0523 4 12.5ZM9 12.5C9 11.9477 9.44772 11.5 10 11.5H19C19.5523 11.5 20 11.9477 20 12.5C20 13.0523 19.5523 13.5 19 13.5H10C9.44772 13.5 9 13.0523 9 12.5ZM4 17.5C4 16.9477 4.44772 16.5 5 16.5H6C6.55228 16.5 7 16.9477 7 17.5C7 18.0523 6.55228 18.5 6 18.5H5C4.44772 18.5 4 18.0523 4 17.5ZM9 17.5C9 16.9477 9.44772 16.5 10 16.5H19C19.5523 16.5 20 16.9477 20 17.5C20 18.0523 19.5523 18.5 19 18.5H10C9.44772 18.5 9 18.0523 9 17.5Z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[24px] w-[24px] text-gray900 hover:text-blue700"
                    >
                      <path d="M3 5.5C3 4.39543 3.89543 3.5 5 3.5H9C10.1046 3.5 11 4.39543 11 5.5V9.5C11 10.6046 10.1046 11.5 9 11.5H5C3.89543 11.5 3 10.6046 3 9.5V5.5ZM9 5.5H5V9.5H9V5.5ZM13 5.5C13 4.39543 13.8954 3.5 15 3.5H19C20.1046 3.5 21 4.39543 21 5.5V9.5C21 10.6046 20.1046 11.5 19 11.5H15C13.8954 11.5 13 10.6046 13 9.5V5.5ZM19 5.5H15V9.5H19V5.5ZM3 15.5C3 14.3954 3.89543 13.5 5 13.5H9C10.1046 13.5 11 14.3954 11 15.5V19.5C11 20.6046 10.1046 21.5 9 21.5H5C3.89543 21.5 3 20.6046 3 19.5V15.5ZM9 15.5H5V19.5H9V15.5ZM13 15.5C13 14.3954 13.8954 13.5 15 13.5H19C20.1046 13.5 21 14.3954 21 15.5V19.5C21 20.6046 20.1046 21.5 19 21.5H15C13.8954 21.5 13 20.6046 13 19.5V15.5ZM19 15.5H15V19.5H19V15.5Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-[20px]">
            {news.map((news) => (
              <div key={news.id} className={`${box}`}>
                <img src={news.img} alt="" className={`${img}`} />
                <div className="w-[304px] sm:w-[388px]">
                  <p className={`${title}`}>{news.title}</p>
                  <p className={`${text}`}>{news.text}</p>
                  <div className="mt-[16px] sm:mt-[32px]">
                    <a href={news.link} className={`${button}`}>
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
