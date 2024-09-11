


const ScopeOfAid = () => {
  return (
    <div className="wrapper px-[20px] xs:px-[50px] xl:px-[100px] xxl:px-[160.5px]">
      <div className=" flex flex-col md:flex-row md:justify-between">
        <p className="text-[26px] ss:text-[44px] font-medium font-roboto text-blue700">
          Zakres pomocy i wsparcia
        </p>
        <a
          href="/services"
          className="flex text-[16px] font-normal font-roboto text-blue500 underline items-end"
        >
          zobacz wszystkie &gt;
        </a>
      </div>

      <div className="flex flex-col lg:flex-row pt-[60px] pb-[72px] text-gray900 text-[14px] ss:text-[18px] font-normal font-roboto gap-[18px] lg:gap-[61px]">
        <ul className="list-disc pl-5 grid gap-[18px]">
          <li>Zaburzenia nastroju (depresja)</li>
          <li>Zaburzenia lękowe</li>
          <li>Kryzysy w związku lub małżeństwie</li>
          <li>Kryzys emocjonalny</li>
          <li>Stres oraz napięcia emocjonalne</li>
          <li>Trudności w relacjach</li>
        </ul>
        <ul className="list-disc pl-5 grid gap-[18px]">
          <li>
            Trudności w macierzyństwie <br /> (w tym: przygotowanie się do
            macierzyństwa, depresja poporodowa)
          </li>
          <li>Trudności w podejmowaniu decyzji</li>
          <li>Trudności w stawianiu granic (brak asertywności)</li>
          <li>Poczucie zagubienia</li>
          <li>Niskie poczucie własnej wartości</li>
        </ul>
      </div>

      <a
        href="/enroll"
        className="text-[14px] ss:text-[18px] font-roboto text-white font-normal bg-blue500 py-[12px] px-[24px] rounded-[16px]"
      >
        Umów konsultacje
      </a>
    </div>
  );
};

export default ScopeOfAid;
