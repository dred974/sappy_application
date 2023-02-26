import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='rect1'></div>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/Tableau_de_bord" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Tableau de bord</li>
                </NavLink>
                <NavLink to="/Planning" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Planning</li>
                </NavLink>
                <NavLink to="/Missions" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Missions</li>
                </NavLink>
                <NavLink to="/Cahier_de_transmissions" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Cahier de transmissions</li>
                </NavLink>
                <NavLink to="/Contrats" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Contrats</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;