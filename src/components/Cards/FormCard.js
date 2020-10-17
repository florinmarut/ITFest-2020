import React from 'react';
import './FormCard.css';
import Button from '../Button/Button';
import DateContact from '../../data/DateContact';

const Card = (props) => {
    return ( < div className = 'card__container' >
        <div>
            <h3>OSUT</h3>
            <h3>itfest@osut.ro</h3>
            <h3>0256 592 181</h3>
            <br/>
            <h3>Coordonator</h3>
            <h3>Darian-Florian VODĂ</h3>
            <h3>0764 621 390</h3>
        </div>
        <a href="https://m.me/ITFestTimisoara">
            <Button text="Trimite-ne un mesaj"/>
        </a>
        </div>);
}

export default Card;