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