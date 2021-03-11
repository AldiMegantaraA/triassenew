import React from 'react';
import './berlangganan.styles.scss';
import { Link } from 'react-router-dom';

const Berlangganan = () => (
    <div className='berlangganan'>
        <div className='gridA'>
            <h3>Berlangganan newsletter special promo dan penawaran terbaik
            </h3>
        </div>
        <div className='gridB'>
            <label htmlFor="email">
                <input type="text" name="email" id="email" placeholder='Masukan email Anda'/>
            </label>
            <button type='submit'>Berlangganan</button>
        </div>
    </div>
)

export default Berlangganan;