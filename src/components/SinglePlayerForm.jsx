import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSinglePlayer, deletePlayer } from '../API';

export default function SinglePlayer() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPlayers() {
            try {
                const data = await fetchSinglePlayer(id);
                setPlayer(data.data.player);
            } catch (error) {
                console.error("Error fetching player:", error);
            }
        }
        getPlayers();
    }, [id]);

    const handleDelete = async (playerId) => {
        try {
            await deletePlayer(playerId);
            alert(`Player with ID ${playerId} deleted.`);
            navigator('/');
        } catch (error) {
            console.error("Error deleting player", error);
        }
    };

    return (
        player ? (
            <div>
                <h2>{player.name}</h2>
                <p>Breed: {player.breed}</p>
                <p>Team: {player.team ? player.team.name : "No Team Assigined"}</p>
                <button onClick={() => handleDelete(player.id)}>Delete Player</button>
            </div>
        ) : <p>Loading...</p>
    );
}