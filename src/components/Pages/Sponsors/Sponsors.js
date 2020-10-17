import React from 'react';
import Image from '../../Image/Image';
import partners from '../../../data/partners';
import ParticlesBackground from "../../ParticlesBackground/ParticlesBackground";
import './Sponsors.css'

function Sponsors(){
    return (<div className="sponsors-container">
       {partners.map((item) => {
           return <a href={item.link}><Image className="sponsor-image" url={item.imageUrl}/></a>
       })}
       {/* <ParticlesBackground /> */}
    </div>);
}

export default Sponsors;