import { useState } from "react";
import { useForm } from "react-hook-form";

function Send() {
  const button =
    "text-[16px] sm:text-[18px] font-normal text-white bg-blue500 border-[2px] border-white py-[12px] px-[24px] rounded-[16px] inline-block mt-[16px] hover:bg-white hover:text-blue500 hover:border-[2px] hover:border-blue500";
  const label = "text-[12px] font-normal text-gray901 font-roboto py-[3px]";
  const input =
    "border-[1px] border-gray300 px-[16px] py-[12px] rounded-r-[8px] rounded-bl-[8px] focus:outline-none allInputs";
  const div = "flex flex-col";
  const error = "text-red text-[12px] font-normal font-roboto mt-[5px]";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailStatus, setEmailStatus] = useState("");

  const onSubmit = async (date) => {
    const emailData = {
      from: "karolina.anna.jesionek@gmail.com",
      to: "karolina-jesionek@wp.pl",
      subject: "Nowa konsultacja",
      html: `
      <p>Imię i nazwisko: ${date.name}</p>
      <p>E-mail: ${date.email}</p>
      <p>Telefon: ${date.phone}</p>
      <br />
      <p>Treść wiadomości: ${date.message}</p>
    `,
    };

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setEmailStatus("Email sent successfully!");
      } else {
        setEmailStatus("Failed to send email.");
      }
    } catch {
      setEmailStatus("Error occurred while sending email.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="w-full xxl:w-[523px] mt-[100px] xxl:mt-0">
      <p className="text-[18px] sm:text-[28px] text-blue600 font-medium font-roboto">
        Szybki kontakt
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        onKeyPress={handleKeyPress}
        className="flex flex-col gap-[24px]"
      >
        {/* name */}
        <div className={`${div}`}>
          <label htmlFor="name" className={`${label}`}>
            Imię i nazwisko
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
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Wpisz swój adres e-mail"
            {...register("email", {
              required: "Wpisz swój adres e-mail.",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Wpisz poprawny adres e-mail.",
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
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Wpisz swój numer telefonu"
            {...register("phone", {
              required: "Wpisz swój numer telefonu.",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "Numer telefonu musi mieć 9 cyfr.",
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
            Treść wiadomości
          </label>
          <textarea
            id="message"
            placeholder="Wpisz treść wiadomości"
            {...register("message", {
              required: "Wpisz treść wiadomości.",
            })}
            rows="4"
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
            className="my-[6px] mx-[20px]"
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
          <button type="submit" className={`${button}`}>
            Wyślij wiadomość
          </button>
          {emailStatus && <p>{emailStatus}</p>}
        </div>
      </form>
    </div>
  );
}

export default Send;
