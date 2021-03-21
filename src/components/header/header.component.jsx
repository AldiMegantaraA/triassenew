import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/img-brand-logo@2x.png';
import { MobileIcon } from './headerElements'

// import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ toggle }) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <img className="logo" src={Logo} alt=""/>
        </Link>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <div className='options'>
            <Link className='option' to='/shop'>
                Paket Test Darah
            </Link>
            <Link className='option' to='/shop'>
                Laboratorium
            </Link>
            <Link className='option' to='/shop'>
                Artikel
            </Link>
            <Link className='masuk' to='/shop'>
                Masuk
            </Link>
            <Link className='daftar' to='/shop'>
                Daftar
            </Link>
            {/* {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            } */}
        </div>
    </div>
)

export default Header;