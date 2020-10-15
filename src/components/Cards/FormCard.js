import React from 'react';
import './FormCard.css';
import Button from '../Button/Button';
import DateContact from '../../data/DateContact';

const Card = (props) => {
    return ( < div className = 'card__container' >
        <form id="contact__form">
        <h1 className = 'card__title' > { props.cardTitle }</h1> 
        <input type = 'text'
        id = 'input__name'
        className = 'input__field'
        name = 'input__name'
        placeholder = 'Nume si Prenume' / >
        <input type = 'email'
        className = 'input__field'
        id = 'input__mail'
        name = 'input__email'
        placeholder = 'E-mail' / >
        <input type = 'tel'
        className = 'input__field'
        id = 'input__tel'
        name = 'input__tel'
        placeholder = 'Telefon' / >
        {/* <input type = 'text'
        className = 'input__field'
        id = 'input__text'
        name = 'input__text'
        placeholder = 'Mesaj' / > */}
        <textarea className="input__field" id="input__text" name="Mesaj" form="contact__form" placeholder="Mesaj..." cols="24"></textarea>
        <input type='checkbox' id='input__checkbox' name='input__checkbox' />
        <label for='input__checkbox '>Sunt de acord cu termenii și condițiile</label>
        <Button text = 'Trimite' / >
        </form> 
        <div className='contact-data__container'>
        {/* {DateContact.map((item) => {
            return (<div> 
            <h3>{item.nume}</h3>
            <h3>{item.email}</h3>
            <h3>{item.telefon}</h3>
            </div>)
        })} */}
        <div>
            <h3>OSUT</h3>
            <h3>itfest@osut.ro</h3>
            <h3>0256 592 181</h3>
            <br/>
            <h3>Coordonator</h3>
            <h3>Darian Voda</h3>
            <h3>Darian-Florian VODĂ</h3>
            <h3>0764 621 390</h3>
        </div>
        </div>
        </div>);
}

export default Card;