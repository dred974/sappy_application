import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Cahier_de_transmissions = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <div className='rect2'></div>
            <div className='rect3'></div>
            <div className='rect4'></div>
            <div className='cahier'>
                <h1>Cahier de transmission</h1>
                <p>Curabitur interdum at metus at auctor. Suspendisse suscipit tincidunt mauris.</p>
                <a href='#'>BÉNÉFICIARES ACTIFS</a>
            </div>
            <div className='Jean'>
                <img src='./image 1.png'></img>
                <h1>Jean-Hugues L.</h1>
                <p>76 ans, Sainte-Suzanne</p>
                <a>2 rapports d'humeur</a>
            </div>
            <div className='rectb1'></div>
            <div className='t1'>
                <a href='#'>Réaliser le rapport d'humeur</a>
            </div>
            <div className='Micheline'>
                <img src='./image 2.png'></img>
                <h1>Micheline P.</h1>
                <p>86 ans, Sainte-Denis</p>
                <a>8 rapports d'humeur</a>
            </div>
            <div className='rectb2'></div>
            <div className='t2'>
                <a href='#'>Réaliser le rapport d'humeur</a>
            </div>
            <div className='Henry'>
                <img src='./image 3.png'></img>
                <h1>Henry F.</h1>
                <p>90 ans, Le Tampon</p>
                <a>12 rapports d'humeur</a>
            </div>
            <div className='rectb3'></div>
            <div className='t3'>
                <a href='#'>Réaliser le rapport d'humeur</a>
            </div>
        </div>
    );
};

export default Cahier_de_transmissions;