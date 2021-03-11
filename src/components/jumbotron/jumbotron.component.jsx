import React from 'react';
import './jumbotron.styles.scss';
import img from '../../assets/img-doctor.svg'

const Jumbotron = () => (
    <div className='jumbotron'>
        <div className='options'>
            <h1 className='option'>
                Pilih jenis pemeriksaan
            </h1>
            <h3 className='options'>
                Lorem ipsum dolor sit amet, consectetur adipsing elit.
            </h3>
        </div>
        <div className="logo-container" to="/">
                <img className="logo" src={img} alt=""/>
        </div>
    </div>
)

export default Jumbotron;