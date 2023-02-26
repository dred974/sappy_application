import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <div className='rect'></div>
            <div className='home'>
                <h1>Bienvenue <p></p>  sur <p></p> SAPPY'S APPLICATIONS</h1>
            </div>
        </div>
    );
};

export default Home;