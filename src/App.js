import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cahier_de_transmissions from './pages/Cahier_de_transmissions';
import Contrats from './pages/Contrats';
import Home from './pages/Home';
import Missions from './pages/Missions';
import Planning from './pages/Planning';
import Tableau_de_bord from './pages/Tableau_de_bord';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Tableau_de_bord" element={<Tableau_de_bord />} />
                <Route path="/Planning" element={<Planning />} />
                <Route path="/Missions" element={<Missions />} />
                <Route path="/Cahier_de_transmissions" element={<Cahier_de_transmissions />} />
                <Route path="/Contrats" element={<Contrats />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
