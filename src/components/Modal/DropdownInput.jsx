import { useState } from "react";
import PropTypes from "prop-types";
import { IoChevronDown } from "react-icons/io5";

const DropdownInput = ({ register, errors }) => {
    DropdownInput.propTypes = {
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
      <label htmlFor="consultation" className={`${label}`}>
        Rodzaj konsultacji
      </label>

      <select
        onClick={() => setIsOpen(!isOpen)}
        id="consultation"
        {...register("consultation", {
          required: "Wybierz rodzaj konsultacji.",
        })}
        className={`${input}`}
        style={
          errors.consultation && (errors)
            ? {
                border: "1px solid red",
              }
            : {}
        }
        defaultValue=""
        required
      >
        {errors.consultation && (
          <p className={`${error} ml-[15px]`}>{errors.consultation.message}</p>
        )}
        <option value="" disabled>
          Wybierz rodzaj konsultacji
        </option>
        <option value="Konsultacja psychologiczna">
          Konsultacja psychologiczna
        </option>
        <option value="Konsultacja psychologiczna z dojazdem do pacjenta">
          Konsultacja psychologiczna z dojazdem do pacjenta
        </option>
        <option value="Terapia psychologiczna">Terapia psychologiczna</option>
        <option value="Szkolenie / Warsztat rozwojowy">
          Szkolenie / Warsztat rozwojowy
        </option>
      </select>

      <div className="absolute bottom-[20%] right-[15px] flex items-center ">
        <IoChevronDown className={`${isOpen ? "rotate-180" : "rotate-0"} `} />
      </div>
    </div>
  );
};

export default DropdownInput;
