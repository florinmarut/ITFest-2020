import React from 'react';
import './Footer.css';

function Footer(){
    const logoURI = 'https://abc.osut.ro/img/logouri%202020/12-01.png?fbclid=IwAR05zlb_tFLtxO5ONaSywkCnliJUZekjwp9NjXr5x0CWzwMoNlRsycreSNY';
    return (<footer className='footer'>
        <div className='footer__container'>
        <div className='footer__container--logo'>
            <img src={logoURI} alt='OSUT' className='footer__logo'></img>
            <p className='footer__'>Finanțat de CJ Timiș</p>
        </div>
        <div className='footer__separator'></div>
            <ul className='footer__info'>
                <li><i class="footer-icon fas fa-map-marker-alt"></i>bd. Vasile Pârvan nr. 4, etaj 2, cam. 247</li>
                <li><i class="footer-icon fas fa-phone"></i>(+40) 256 592 181 </li>
                <li><i class="footer-icon far fa-envelope"></i>office@osut.ro</li>
            </ul>
            <div className='footer__separator'></div>
            <ul className='footer__info--social'>
                <li><a href='https://www.facebook.com/ITFestTimisoara'><i class="footer-icon fab fa-facebook fa-3x"></i></a></li>
                <li><a href='https://www.instagram.com/itfest.timisoara/'><i class="footer-icon fab fa-instagram fa-3x"></i></a></li>
            </ul>
            <p className='footer__copyright'>Copyright © 2020 ITFest</p>
        </div>
    </footer>);
}

export default Footer;