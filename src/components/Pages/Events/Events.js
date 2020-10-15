import React from 'react';
import EventCard from '../../Cards/EventCard';
import events from '../../../data/events';
import './events.css';
import ParticlesBackground from "../../ParticlesBackground/ParticlesBackground"

function Events() {
    return (
    <div className="container">
    <h1 className="events__title">WORKSHOPURI ȘI CONFERINȚE</h1>
    <div className='events__container'>
    {events.workshop_events.map((event) => {
        return <EventCard img={event.img} title={event.title} description={event.description}
            date={event.date} hours={event.hours}/>
    })}
    <ParticlesBackground />
    </div>
    <h1 className="events__title">CONCURSURI</h1>
    <div className='events__container'>
    {events.concurs_events.map((event) => {
        return <EventCard img={event.img} title={event.title} description={event.description}
            date={event.date} hours={event.hours}/>
    })}
    </div>
    <h1 className="events__title">LAN PARTY</h1>
    <div className='events__container'>
    {events.lanparty_events.map((event) => {
        return <EventCard img={event.img} title={event.title} description={event.description}
            date={event.date} hours={event.hours}/>
    })}
    </div>
    </div>);
}

export default Events;