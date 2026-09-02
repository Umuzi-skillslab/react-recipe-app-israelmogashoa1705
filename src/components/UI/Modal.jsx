import PropTypes from 'prop-types';

const Modal = ({
  children,
  title = 'Recipe Information',
  onClose,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
