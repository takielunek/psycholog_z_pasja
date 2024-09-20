import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import DropdownInput from "./DropdownInput";
import DatePickerInput from "./DatePickerInput";
import PropTypes from "prop-types";
import { modal } from "./index.js";

const Modal = ({ open, onClose }) => {
  Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

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
    watch,
    reset,
    clearErrors,
    setValue,
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
      <p>Rodzaj konsultacji: ${date.consultation}</p>
      <p>Preferowana data konsultacji: ${date.date}</p>
      <p>Przedział czasowy: ${date.time}</p>
      <br />
      <p>Treść wiadomości: <br /> ${date.message}</p>
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
        setEmailStatus(
          <span className="text-blue500">Wiadomość została wysłana!</span>
        );
      } else {
        setEmailStatus(
          <span className="text-red">Nie udało się wysłać wiadomości.</span>
        );
      }
    } catch {
      setEmailStatus(
        <span className="text-red">
          Wystąpił błąd podczas wysyłania wiadomości e-mail.
        </span>
      );
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!open) return null;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  const allFormData = watch();
  console.log(allFormData);

  return (
    <div className="absolute top-0 right-0 left-0 z-50 pt-[0px]">
      <div className="wrapper px-[10px] xxs:px-[15px] ss:px-[50px] sm:px-[89px] bg-white w-full sm:w-[701px]">
        <div className="flex justify-end cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="my-[20px] sm:mt-[29px] text-gray900 hover:text-blue600"
            onClick={handleClose}
          >
            <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" />
          </svg>
        </div>
        <p className="text-[28px] text-blue600 font-medium font-roboto mb-[24px]">
          Umów konsultację
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          onKeyPress={handleKeyPress}
          className="flex flex-col gap-[24px]"
        >
          {modal.map((modal) => (
            <Input
              key={modal.id}
              title={modal.title}
              placeholder={modal.placeholder}
              type={modal.type}
              validation={modal.validation}
              valueName={modal.valueName}
              errorMessage={modal.errorMessage}
              register={register}
              errors={errors}
            />
          ))}

          <DropdownInput register={register} errors={errors} />
          <DatePickerInput
            register={register}
            errors={errors}
            clearErrors={clearErrors}
            setValue={setValue}
          />

          {/* time picker  */}

          <div className="flex flex-col gap-[24px]">
            <p className="text-[16px] text-blue600 font-roboto font-normal">
              Przedział czasowy, w którym ma sie odbyć konsultacja
            </p>
            <div className="flex flex-row gap-[100px]">
              <div className="custom-radio flex gap-[8px]">
                <input
                  type="radio"
                  {...register("time", {
                    required: "Wybierz przedział czasowy",
                  })}
                  value="8:00-14:00"
                  id="8:00-14:00"
                />
                <p
                  className="text-[14px] text-gray700 font-roboto font-normal"
                  htmlFor="8:00-14:00"
                >
                  8:00-14:00
                </p>
              </div>
              <div className="custom-radio flex gap-[8px]">
                <input
                  type="radio"
                  {...register("time", {
                    required: "Wybierz przedział czasowy",
                  })}
                  value="15:00-19:00"
                  id="15:00-19:00"
                />
                <p
                  className="text-[14px] text-gray700 font-roboto font-normal"
                  htmlFor="15:00-19:00"
                >
                  15:00-19:00
                </p>
              </div>
            </div>
            {errors.time && (
              <p className={`${error} ml-[15px]`}>{errors.time.message}</p>
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
              style={
                errors.message && errors
                  ? {
                      border: "1px solid red",
                    }
                  : {}
              }
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
              value="Zgoda"
              {...register("terms", {
                required: "Zaakceptuj....",
              })}
              className="my-[6px] mx-[5px]"
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
          <div className="mb-[50px] sm:mb-[73px]">
            <button type="submit" className={`${button}`}>
              Wyślij wiadomość
            </button>
            {emailStatus && (
              <p className=" text-[16px] sm:text-[18px] font-normal mt-[30px]">
                {emailStatus}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
