import React from 'react';
import ProfileCard from '../../Cards/ProfileCard';
import './team.css';
import teamList from '../../../data/teamList';
import ParticlesBackground from "../../ParticlesBackground/ParticlesBackground"

function Team(){
    return (
    <div className='team__container'>
     {teamList.map((item) => {
         return <ProfileCard img={item.img} name={item.name} title={item.title} phone={item.phone} mail={item.mail} fb={item.fb}/>
     })}
     {/* <ParticlesBackground /> */}
    </div>);
}

export default Team;