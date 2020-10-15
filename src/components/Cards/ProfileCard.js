import React from 'react';
import './ProfileCard.css';

const ProfileCard = (props) => {
    return (<div className='profile__container'>
    <img className='profile__image' src={props.img ? props.img : 'https://picsum.photos/200/300'} alt='profile'/>
    <h2 className='profile__name'>{props.name ? props.name : 'Name'}</h2>
    <h3 className='profile__title'>{props.title ? props.title : 'Title'}</h3>
    </div>);
}

export default ProfileCard;