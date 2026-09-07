import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import VideoPlayer from '../components/Media/VideoPlayer';
import AudioPlayer from '../components/Media/AudioPlayer';



const RecipeDetailPage = () => {
  return (
    <main>
      <h1>Recipe Details</h1>
      <p>Recipe information will appear here.</p>
    </main>
  );
};

export default RecipeDetailPage;
