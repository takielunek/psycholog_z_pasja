import Header from "../Header/Header";

const Regulations = () => {
  return (
    <div>
      <div className="z-0">
        <Header />
      </div>
      <div className="mt-[250px] mb-[100px] relative z-10">
        <div className="wrapper px-[20px] xs:px-[50px] xl:px-[100px] xxl:pl-[160.5px]">
          <ol className="text-[18px] font-normal font-roboto text-blue600 flex flex-col gap-[24px]">
            <li>Regulamin Konsultacji Psychologicznych</li>
          </ol>
          <h3 className="text-[28px] text-blue600 font-roboto font-medium mt-[100px]">
            Regulamin Usług Psychologicznych
          </h3>
          <ol className="text-[16px] font-normal font-roboto text-gray900 w-[68%] mt-[24px]">
            <li>
              Konsultacje psychologiczne odbywają się w atmosferze poszanowania
              prywatności Pacjenta. Psycholog zachowuje w tajemnicy informacje
              związane z Pacjentem i przebiegiem jego terapii.{" "}
            </li>
            <li>
              Psycholog zobowiązuje się do przestrzegania Kodeksu
              Etyczno-Zawodowego Psychologa Polskiego Towarzystwa
              Psychologicznego.
            </li>
            <li>
              Psycholog nie ponosi odpowiedzialności w jaki sposób i w jakim
              zakresie Pacjent zastosuje nową wiedzę i/lub umiejętności.
            </li>
            <li>
              W celu ustalenia terminu konsultacji należy skontaktować się z
              Psychologiem poprzez wysłanie wiadomości e-mail:&nbsp;
              <span className="text-blue500 underline">
                kontakt@psychologzpasja.pl
              </span>
              Termin konsultacji jest potwierdzany po dokonaniu płatności.
            </li>
            <li>
              Można odwołać lub przełożyć konsultacje do 24h przed terminem. Po
              upływie tego czasu kwota za konsultacje nie jest zwracana.
            </li>
            <li>
              Pacjent nie płaci za konsultacje przełożone przez Psychologa.
            </li>
            <li>
              W przypadku konsultacji online niezbędne jest wystarczająco dobre
              łącze internetowe tak, aby nie było przerw podczas konsultacji.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
