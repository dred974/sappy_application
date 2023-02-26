import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Tableau_de_bord = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <div className='tableau'>
                <h1>Tableau de bord</h1>
            </div>
        </div>
    );
};

export default Tableau_de_bord;