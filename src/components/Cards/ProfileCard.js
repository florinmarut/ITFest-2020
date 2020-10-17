import React from 'react';
import './ProfileCard.css';

const ProfileCard = (props) => {
    return (<div className='profile__container'>
        <a href={props.fb}>
        <img className='profile__image' src={props.img ? props.img : 'https://picsum.photos/200/300'} alt='profile'/>
        <h2 className='profile__name'>{props.name ? props.name : 'Name'}</h2>
        <h3 className='profile__title'>{props.title ? props.title : 'Title'}</h3>
        <h4 className='profile__mail'>{props.mail ? props.mail : 'Email'}</h4>
        <h4 className='profile__phone'>{props.phone ? props.phone : 'Telefon'}</h4>
        </a>
    </div>);
}

export default ProfileCard;