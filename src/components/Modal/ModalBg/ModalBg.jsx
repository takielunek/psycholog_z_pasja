import PropTypes from "prop-types";

const ModalBg = ({ open }) => {
  ModalBg.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  if (!open) return null;

  return (
    <div
      className="bg-[rgba(213,220,226,0.8)] fixed top-0 bottom-0 left-0 right-0 z-20"
    ></div>
  );
};

export default ModalBg;
