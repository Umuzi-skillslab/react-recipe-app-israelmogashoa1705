import PropTypes from 'prop-types';

const AudioPlayer = ({
  audioUrl,
  title = 'Cooking Tips',
}) => {
  return (
    <section className="media-card">
      <h2>{title}</h2>

      <audio controls className="media-audio">
        <source src={audioUrl} type="audio/mpeg" />

        Your browser does not support HTML5 audio.
      </audio>
    </section>
  );
};

AudioPlayer.propTypes = {
  audioUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default AudioPlayer;
