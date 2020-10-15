import React from 'react';
import Header from '../../Header/Header';
import Article from '../../Article/Article';
import ParticlesBackground from "../../ParticlesBackground/ParticlesBackground"


function Home(){
    return (<div className="home-container">
            <Header />
            <Article />
            <ParticlesBackground />
    </div>);
}

export default Home;