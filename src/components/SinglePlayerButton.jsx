import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function SinglePlayerButton({ playerId }) {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(`/players/$player}`)}>
            Description
        </button>
    );
}

export default SinglePlayerButton;