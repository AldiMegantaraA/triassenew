import React from 'react';
import { Link } from 'react-router-dom';
import './atas-header.styles.scss';

const AtasHeader = () => (
    <div className='atas-header'>
        <div className='logo-container'>

        </div>
        <div className='atas-options'>
            <Link className='atas-option' to='/shop'>
                Senin - Jumat (09-00 - 18.00 WIB)
            </Link>
            <Link className='atas-option' to='/shop'>
                +62811 1122 015
            </Link>
            <Link className='atas-option' to='/shop'>
                cs@triasse.com
            </Link>
        </div>
    </div>
)

export default AtasHeader;