import PropTypes from 'prop-types';

const VideoPlayer = ({
  videoUrl,
  title = 'Recipe Tutorial',
}) => {
  return (
    <section className="media-card">
      <h2>{title}</h2>

      <video
        className="media-video"
        controls
        preload="metadata"
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />

        Your browser does not support HTML5 video.
      </video>
    </section>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default VideoPlayer;

