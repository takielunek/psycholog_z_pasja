import PropTypes from "prop-types";

const Input = ({
  title,
  type,
  placeholder,
  valueName,
  validation,
  register,
  errorMessage,
  errors,
}) => {
  Input.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    validation: PropTypes.object.isRequired,
    valueName: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    errors: PropTypes.object.isRequired,
  };

  const label = "text-[12px] font-normal text-gray901 font-roboto py-[3px]";
  const input =
    "border-[1px] border-gray300 px-[16px] py-[12px] rounded-r-[8px] rounded-bl-[8px] focus:outline-none allInputs";
  const div = "flex flex-col";
  const error = "text-red text-[12px] font-normal font-roboto mt-[5px]";

  return (
    <div className={`${div}`}>
      <label htmlFor={valueName} className={`${label}`}>
        {title}
      </label>
      <input
        id={valueName}
        type={type}
        placeholder={placeholder}
        {...register(valueName, { ...validation, required: true })}
        className={`${input}`}
      />
      {errors && Object.hasOwn(errors, valueName) && (
        <p className={`${error} ml-[15px]`}>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
