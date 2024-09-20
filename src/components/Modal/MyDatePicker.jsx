import { useState } from "react"
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import PropTypes from "prop-types";

const MyDatePicker = ({ onClose }) => {
  MyDatePicker.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

const button = "text-[18px] text-gray800 font-normal font-roboto";

  const [selected, setSelected] = useState();


  return (
    <div className="bg-white border border-gray300 p-4 rounded-[8px]">
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
      <div className="flex flex-row justify-end gap-[24px]">
        <button className={`${button}`} onClick={onClose}>
          Anuluj
        </button>
        <button className={`${button}`}>Ok</button>
      </div>
    </div>
  );
};

export default MyDatePicker



