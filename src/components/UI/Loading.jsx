const Loading = ({ message = 'Loading recipes...' }) => {
  return (
    <div className="loading">
      <div className="spinner"></div>

      <p>{message}</p>
    </div>
  );
};

export default Loading;
