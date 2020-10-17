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
    <a href="https://osut.ro/">
    <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/proiect_marca_osut.png?alt=media&token=39920042-3f66-4a6e-8b93-6da4b9bd91cb"/>
    </a>
    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Organizaţia Studenţilor din Universitatea de Vest din Timişoara (OSUT) este
        o organizaţie sindical-studenţească constituită la nivelul Universităţii de Vest din Timişoara,
        înﬁinţată în 27 martie 1990, cu o experienţă de peste 30 de ani, fapt ce o face cea mai reprezentativă
        organizaţie a universităţii şi, totodată, un punct de reper pentru toate ligile studenţeşti din ţară.
    </p>
    <a href="http://www.cjtimis.ro/">
    <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/proiet_finantat_de_cjt.png?alt=media&token=7f840bb5-42fd-4a72-a5f5-50c23b06e5b7"/>
    </a>
    </div>);
}

export default Team;