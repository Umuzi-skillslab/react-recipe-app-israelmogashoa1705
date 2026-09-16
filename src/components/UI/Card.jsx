import PropTypes from 'prop-types';

const Card = ({ children, title, className = '' }) => {
  return (
    <section className={`card ${className}`}>
      {title && <h3>{title}</h3>}

      <div className="card-content">
        {children}
      </div>
    </section>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
