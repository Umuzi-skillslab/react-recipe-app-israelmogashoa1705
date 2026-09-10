import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`button button-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;

