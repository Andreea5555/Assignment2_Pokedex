import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokemonPage from './pages/PokemonPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    //this is where we use the React Router 
    //we create the routes for each page that we are going to access
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;