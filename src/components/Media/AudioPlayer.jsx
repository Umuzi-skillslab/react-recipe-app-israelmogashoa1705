import { useState } from 'react';
import PropTypes from 'prop-types';


const AudioPlayer = ({
  audioUrl,
  title = 'Cooking Tips',
}) => {
  // Track the current audio playback state for the interface.
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="media-card">
      <h2>{title}</h2>

      <audio
        controls
        className="media-audio"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src={audioUrl}
          type="audio/mpeg"
        />

        Your browser does not support HTML5 audio.
      </audio>

      <p className="media-status">
        {isPlaying
          ? '▶ Audio playing'
          : '⏸ Audio paused'}
      </p>
    </section>
  );
};

AudioPlayer.propTypes = {
  audioUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default AudioPlayer;
