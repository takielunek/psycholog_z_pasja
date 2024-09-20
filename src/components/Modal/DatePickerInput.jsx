import PropTypes from "prop-types";
import { useState } from "react";
import MyDatePicker from "./MyDatePicker";

const DatePickerInput = ({ register, errors }) => {
  DatePickerInput.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };

  const label = "text-[12px] font-normal text-gray901 font-roboto py-[3px]";
  const input =
    "border-[1px] border-gray300 px-[16px] py-[12px] rounded-r-[8px] rounded-bl-[8px] focus:outline-none allInputs";
  const div = "flex flex-col";
  const error = "text-red text-[12px] font-normal font-roboto mt-[5px]";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${div} relative`}>
      <label htmlFor="date" className={`${label}`}>
        Preferowana data konsultacji
      </label>

      <input
        id="date"
        placeholder=" Wybierz datę"
        {...register("date", { required: "Wybierz datę konsultacji" })}
        className={`${input}`}
        style={
          errors.date && errors
            ? {
                border: "1px solid red",
              }
            : {}
        }
      />
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[15px] w-[15px] text-green hover:text-blue600 cursor-pointer absolute right-[15px] top-[50%] translate-y-[-50%]"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <path d="M5.5 0.666672C5.96024 0.666672 6.33333 1.03977 6.33333 1.50001V2.33334H9.66667V1.50001C9.66667 1.03977 10.0398 0.666672 10.5 0.666672C10.9602 0.666672 11.3333 1.03977 11.3333 1.50001V2.33334H13.8333C14.7538 2.33334 15.5 3.07953 15.5 4.00001V14.8333C15.5 15.7538 14.7538 16.5 13.8333 16.5H2.16667C1.24619 16.5 0.5 15.7538 0.5 14.8333V4.00001C0.5 3.07953 1.24619 2.33334 2.16667 2.33334H4.66667V1.50001C4.66667 1.03977 5.03976 0.666672 5.5 0.666672ZM4.66667 4.00001H2.16667V6.5H13.8333V4.00001H11.3333V4.83334C11.3333 5.29358 10.9602 5.66667 10.5 5.66667C10.0398 5.66667 9.66667 5.29358 9.66667 4.83334V4.00001H6.33333V4.83334C6.33333 5.29358 5.96024 5.66667 5.5 5.66667C5.03976 5.66667 4.66667 5.29358 4.66667 4.83334V4.00001ZM13.8333 8.16667H2.16667V14.8333H13.8333V8.16667Z" />
      </svg>

      {isOpen && (
        <div className="absolute z-10 top-[77px]">
          <MyDatePicker onClose={() => setIsOpen(false)} />
        </div>
      )}

      <p className="text-[12px] font-roboto font-normal text-gray901 mt-[10px]">
        DD-MM-RRRR
      </p>

      {errors.date && (
        <p className={`${error} ml-[15px]`}>{errors.date.message}</p>
      )}
    </div>
  );
};

export default DatePickerInput;
