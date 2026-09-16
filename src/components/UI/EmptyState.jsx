import PropTypes from 'prop-types';

const EmptyState = ({
  title = 'Nothing here yet',
  message = 'There is no content to display.',
}) => {
  return (
    <section className="empty-state">
      <div className="empty-state-icon">🍽️</div>

      <h2>{title}</h2>

      <p>{message}</p>
    </section>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

export default EmptyState;