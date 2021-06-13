import React from 'react';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div className="homeContent">
                <div className="content">
                    <h1>Boubacar DIALLO</h1>
                    <p>Je suis déveleppeur web et web mobile</p>
                    <div className="pdf">
                        <a href="./media/cv developpeur.pdf" target="_blank"><span className="tele">Télécharger-CV</span></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;