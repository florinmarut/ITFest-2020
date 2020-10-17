import React from 'react';
import ProfileCard from '../../Cards/ProfileCard';
import './team.css';
import teamList from '../../../data/teamList';
import ParticlesBackground from "../../ParticlesBackground/ParticlesBackground"

function Team(){
    return (
    <div className="container"> 
    <div className='team__container'>
     {teamList.map((item) => {
         return <ProfileCard img={item.img} name={item.name} title={item.title} phone={item.phone} mail={item.mail} fb={item.fb}/>
     })}
     {/* <ParticlesBackground /> */}
    </div>
    <hr></hr>
    <h2 className="text">Proiect marca:</h2>
    <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/logo_osut.png?alt=media&token=ddc349bf-a8f7-42c8-81c0-b24342d234a2"/>
    <p className="text">Organizaţia Studenţilor din Universitatea de Vest din Timişoara (OSUT) este
        o organizaţie sindical-studenţească constituită la nivelul Universităţii de Vest din Timişoara,
        înﬁinţată în 27 martie 1990, cu o experienţă de peste 30 de ani, fapt ce o face cea mai reprezentativă
        organizaţie a universităţii şi, totodată, un punct de reper pentru toate ligile studenţeşti din ţară.
    </p>
    <h2 className="text">Proiect finanțat de: </h2>
    <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/cjt.png?alt=media&token=2f0441f1-81f3-413a-bcb7-063c193a85d6"/>
    </div>);
}

export default Team;