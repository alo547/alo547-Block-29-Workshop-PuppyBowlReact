import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayerform from './components/SinglePlayerForm';
import NewPlayerForm from './components/NewPlayerForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayerform />} />
        <Route path="/new-player" element={<NewPlayerForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;