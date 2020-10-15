import React, {useState} from 'react';
import menuItems from '../../data/MenuItems';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    const [menuClicked, setMenuClicked] = useState(false);
    const logoURI = 'https://firebasestorage.googleapis.com/v0/b/mytestproject-d6bc5.appspot.com/o/logos_cne.png?alt=media&token=d4216087-e665-4760-9516-dd67b3c195b2&fbclid=IwAR2hOVzcPkiSknD3gV799A0YOXFGFZaaMLZSt6FNV-PiOKjFPsnbeRrRvig';

    function handleClick(){
        setMenuClicked(!menuClicked);
    }

    return (<nav class='navbar'>
            <Link to='/'><img src={logoURI} className='navbar__logo'></img></Link>
            <ul className={menuClicked ? 'navbar__menu--active' : 'navbar__menu'}>
                {menuItems.map((item) => {
                    return <Link className='navbar__menu__link' to={item.route} style={{textDecoration: 'none', color: '#fff'}}><li>{item.name}</li></Link>
                })}
            </ul>

            <i className={menuClicked ? "menu-icon fas fa-times" : "menu-icon fas fa-bars"} onClick={handleClick}></i> 
    </nav>);
}

export default Navbar;