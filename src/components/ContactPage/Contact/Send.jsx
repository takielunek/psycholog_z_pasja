import { useForm } from "react-hook-form";

function Send() {
  const button =
    "text-[18px] font-normal text-white bg-blue500 py-[12px] px-[24px] rounded-[16px] inline-block mt-[16px]";
    const label = "text-[12px] font-normal text-gray901 font-roboto py-[3px]";
    const input =
      "border-[1px] border-gray300 px-[16px] py-[12px] rounded-r-[8px] rounded-bl-[8px] focus:outline-none allInputs";
    const div = "flex flex-col"
    const error = "text-red text-[12px] font-normal font-roboto mt-[5px]";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full xxl:w-[523px] mt-[100px] xxl:mt-0">
      <p className="text-[28px] text-blue600 font-medium font-roboto">
        Szybki kontakt
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[24px]"
      >
        {/* name */}
        <div className={`${div}`}>
          <label htmlFor="name" className={`${label}`}>
            Name
          </label>
          <input
            id="name"
            placeholder="Wpisz imię i nazwisko"
            {...register("name", { required: "Wpisz imię i nazwisko." })}
            className={`${input}`}
          />
          {errors.name && (
            <p className={`${error} ml-[15px]`}>{errors.name.message}</p>
          )}
        </div>
        {/* email */}
        <div className={`${div}`}>
          <label htmlFor="email" className={`${label}`}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Wpisz swój adres e-mail"
            {...register("email", {
              required: "Wpisz swój adres e-mail.",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              },
            })}
            className={`${input}`}
          />
          {errors.email && (
            <p className={`${error} ml-[15px]`}>{errors.email.message}</p>
          )}
        </div>
        {/* phone */}
        <div className={`${div}`}>
          <label htmlFor="phone" className={`${label}`}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Wpisz swój numer telefonu"
            {...register("phone", {
              required: "Wpisz swój numer telefonu.",
              pattern: {
                value: /^[0-9]{9}$/,
              },
            })}
            className={`${input}`}
          />
          {errors.phone && (
            <p className={`${error} ml-[15px]`}>{errors.phone.message}</p>
          )}
        </div>
        {/* message */}
        <div className={`${div}`}>
          <label htmlFor="message" className={`${label}`}>
            Message
          </label>
          <textarea
            id="message"
            placeholder="Wpisz treść wiadomości"
            {...register("message", {
              required: "Wpisz treść wiadomości.",
            })}
            className={`${input}`}
          ></textarea>
          {errors.message && (
            <p className={`${error} ml-[15px]`}>{errors.message.message}</p>
          )}
        </div>
        {/* checkbox */}
        <div className="flex">
          <input
            id="terms"
            type="checkbox"
            {...register("terms", {
              required: "Proszę zaakceptować ....",
            })}
          />
          <div>
            <label
              htmlFor="terms"
              className="text-[14px] text-gray700 font-roboto font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              facilisis diam id sollicitudin pharetra.
            </label>
            {errors.terms && (
              <p className={`${error} ml-0`}>{errors.terms.message}</p>
            )}
          </div>
        </div>
        <div>
          <a href="">
            <button type="submit" className={`${button}`}>
              Wyślij wiadomość
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Send;
