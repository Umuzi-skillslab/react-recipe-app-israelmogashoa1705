import PropTypes from 'prop-types';



// Provides a reusable component for displaying cooking tutorial videos.
const VideoPlayer = ({
    videoUrl,
    title = 'Cooking Tutorial',
}) => {
    // Track whether the video has been started by the user.
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    }

    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <section className="media-card">
            <h2>{title}</h2>

            <video
                className="media-video"
                controls
                width="100%"
                onPlay={handlePlay}
                onPause={handlePause}
                 onEnded={() => setIsPlaying(false)}
            >
                {/* Use the supplied video URL as the source for the player. */}
                <source
                    src={videoUrl}
                    type="video/mp4"
                />

                {/* Fallback message for browsers that do not support HTML5 video. */}
                Your browser does not support HTML5 video.
            </video>

            <p
               className="media-status"
               style={{ color: isPlaying ? '#166534' : '#78716c' }}
            >
              {isPlaying
                ? '▶ Video playing'
                : '⏸ Video paused'}
            </p>
        </section>
    );
};

// Validate the video URL and optional title passed to the component.
VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
};

// Make the reusable video player available to other components.
export default VideoPlayer;
