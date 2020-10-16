import React from 'react';
import './contact.css';
import Card from '../../Cards/FormCard';
import ParticlesBackground from "../../ParticlesBackground/ParticlesBackground"


function Contact() {
    return ( < div className = 'contact__container' >
        <Card cardTitle = 'Scrie-ne un e-mail:' />
        {/* <ParticlesBackground /> */}
        </div>);
    }

export default Contact;