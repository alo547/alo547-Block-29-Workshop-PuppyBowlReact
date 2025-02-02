import { useState, useEffect } from 'react';
import { fetchPlayers } from '../API';
import { useNavigate } from 'react-router-dom';
import NewPlayerForm from './NewPlayerForm';
import NavBar from './NavBar';
// import SinglePlayerButton from '.SinglePlayerButton';

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function getPlayers() {
            const data = await fetchPlayers();
            setPlayers(data.data.players);
            setFilteredPlayers(data.data.players);
        }
        getPlayers();
    }, []);

    const handleSearch = (term) => {
        const filtered = players.filter(player =>
            player.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredPlayers(filtered);
    };

    return (
        <div>
            <NavBar onSearch={handleSearch} />
            <NewPlayerForm />
            <h1>Puppy Bowl</h1>
            <h2>All Players</h2>
            {filteredPlayers.map((player) => (
                <div key={player.id}>
                    <h3>{player.name}</h3>
                    <button onClick={() => navigate(`/players/${player.id}`)}>
                        Description
                    </button>
                </div>
            ))}
        </div>
    );
}
export default AllPlayers;