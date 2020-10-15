import React from 'react';
import './Footer.css';

function Footer(){
    return (<footer className='footer'>
        <div className='footer__container'>
            <h1 className='footer__logo'>ITFest</h1>
            <ul className='footer__info'>
                <li><i class="footer-icon fas fa-map-marker-alt"></i>Timișoara</li>
                <li><i class="footer-icon fas fa-phone"></i>0256 592 181</li>
                <li><i class="footer-icon far fa-envelope"></i>itfest@osut.ro</li>
            </ul>
            <ul className='footer__info'>
                <li><i class="footer-icon fab fa-facebook"></i><a href="https://www.facebook.com/ITFestTimisoara">Check us on Facebook</a></li>
                <li><i class="footer-icon fab fa-instagram"></i><a href="https://www.instagram.com/itfest.timisoara/">Oh... and we're also on Instagram</a></li>
            </ul>
            <p className='footer__copyright'>Copyright © 2020 ITFest</p>
        </div>
    </footer>);
}

export default Footer;