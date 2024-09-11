
const News = () => {
  return (
    <div className="wrapper px-[20px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
      <div className="flex flex-col md:flex-row md:justify-between mt-[150px] mb-[50px]">
        <p className="text-[26px] ss:text-[44px] font-medium font-roboto text-blue700">
          Aktualności
        </p>
        <a
          href="/news"
          className="flex text-[16px] font-normal font-roboto text-blue500 underline items-end"
        >
          zobacz wszystkie &gt;
        </a>
      </div>
      {/* POSTS  */}
      <p className="text-red font-bold">TUTAJ POSTY DO DODANIA</p>
    </div>
  );
}

export default News