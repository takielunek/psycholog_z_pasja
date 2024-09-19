import Header from "../../Header/Header";
import { post1Texts } from "./index.js";
import news1 from "../../../../assets/news1.png";
import { FaHeart } from "react-icons/fa";

const Post1 = () => {
  const text1 = "text-[16px] font-light font-roboto text-gray900";
  const text2 = "text-[18px] font-medium font-roboto text-gray900";

  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="mt-[150px] xs:mt-[200px] md:mt-[200px] mb-[100px] relative z-10">
        <div className="wrapper relative sm:px-[50px] xl:px-[100px] xxl:pl-[160.5px] flex xxxl:flex-row flex-col-reverse gap-[40px] xxxl:gap-0">
          <div
            className={`${text1} w-full xxxl:w-[40%] grid gap-[40px] px-[10px] xxs:px-[15px] sm:px-0`}
          >
            <ul>
              <li>{post1Texts.list1}</li>
              <li>{post1Texts.list2}</li>
              <li>{post1Texts.list3}</li>
              <li>{post1Texts.list4}</li>
              <li>{post1Texts.list5}</li>
            </ul>
            <p>{post1Texts.paragraph1}</p>
            <p>{post1Texts.paragraph2}</p>
            <p>{post1Texts.paragraph3}</p>
            <div>
              <p className={`${text2}`}>{post1Texts.paragraph4}</p>
              <ul className="list-disc">
                <li>{post1Texts.list6}</li>
                <li>{post1Texts.list7}</li>
                <li>{post1Texts.list8}</li>
              </ul>
            </div>
            <p>{post1Texts.paragraph5}</p>
            <p>{post1Texts.paragraph6}</p>
            <p>
              {post1Texts.paragraph7}
              <FaHeart style={{ color: "red" }} />
            </p>
          </div>
          <div className="xxxl:absolute right-[150px] top-[-150px]">
            <img
              src={news1}
              alt=""
              className="w-[792px] min-h-[234px] object-cover rounded-[16px] sm:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post1;
