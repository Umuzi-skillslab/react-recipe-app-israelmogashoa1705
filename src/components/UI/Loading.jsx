import PropTypes from 'prop-types';

const Loading = ({
  message = 'Loading recipes...',
}) => {
  const spinnerStyle = {
    width: '42px',
    height: '42px',
    margin: '0 auto 16px',
    border: '4px solid #fef3c7',
    borderTopColor: '#d97706',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  };

  return (
    <div className="loading" role="status">
      <div
        className="spinner"
        style={spinnerStyle}
        aria-hidden="true"
      />

      <p>{message}</p>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
