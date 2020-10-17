import React from 'react';
import './EventCard.css';
import Button from '../../components/Button/Button';

const EventCard = (props) => {
    return (<div className='event__container'>
    <div className='event__image__container'>
    <img className='event__image' src={props.img ? props.img : 'https://picsum.photos/200/300'} alt='event'/>
    </div>
    <h1 className='event__title'>{props.title}</h1>
    <p className='event__details'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.description}</p>
    <h3>Deadline înscriere: {props.deadline}</h3>
    <h3>Data: {props.date}</h3>
    <Button text='Înscrie-te'/>
    </div>)
}

export default EventCard;