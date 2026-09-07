import { useNavigate } from 'react-router-dom';

import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const NotFound = () => {
  const navigate = useNavigate();

    return (
    <main className="page-container">
      <Card>
        <div className="empty-state">
          <div className="empty-state-icon">🔎</div>

          <h1>404 - Page Not Found</h1>

          <p>
            The page you're looking for doesn't exist.
          </p>

          <Button onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default NotFound;