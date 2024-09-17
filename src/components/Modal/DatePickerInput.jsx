import PropTypes from "prop-types";

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

  return (
    <div className={`${div}`}>
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
