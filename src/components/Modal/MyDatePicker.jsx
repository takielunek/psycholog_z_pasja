import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import PropTypes from "prop-types";
import { pl } from "react-day-picker/locale";

const MyDatePicker = ({ onClose, onDateSelect }) => {
  MyDatePicker.propTypes = {
    onClose: PropTypes.func.isRequired,
    onDateSelect: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  const button =
    "text-[18px] text-gray800 font-normal font-roboto hover:text-blue500";

  const [selected, setSelected] = useState();

  const handleOkClick = () => {
    if (selected) {
      onDateSelect(selected);
    }
    onClose();
  };

  return (
    <div className="bg-white border border-gray300 p-4 rounded-[8px]">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        locale={pl}
        hideNavigation
        captionLayout="dropdown"
        classNames={{
          today: `text-blue500`,
          selected: `bg-blue500 border-blue500 text-white rounded-[50%]`,
          chevron: `fill-blue500`,
        }}
      />
      <div className="flex flex-row justify-end gap-[24px]">
        <button className={`${button}`} onClick={onClose}>
          Anuluj
        </button>
        <button className={`${button}`} onClick={handleOkClick}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default MyDatePicker;
