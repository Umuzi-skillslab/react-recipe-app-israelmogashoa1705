import PropTypes from 'prop-types';


// Provides a reusable component for displaying cooking tutorial videos.
const VideoPlayer = ({
    videoUrl,
    title = 'Cooking Tutorial',
}) => {
    // Display the video title and an HTML5 video player with playback controls.
    return (
        <section className="media-card">
            <h2>{title}</h2>

            <video
                className="media-video"
                controls
                width="100%"
            >
                {/* Use the supplied video URL as the source for the player. */}
                <source src={videoUrl} type="video/mp4" />

                {/* Fallback message for browsers that do not support HTML5 video. */}
                Your browser does not support HTML5 video.
            </video>
        </section>
    );
};
