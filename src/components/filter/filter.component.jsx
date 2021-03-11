import React from 'react';
import './filter.styles.scss';
import img from '../../assets/img-doctor.svg'

const Filter = () => (
    <div className='filter'>
        <h3>Filter hasil pencarian</h3>
        <div className='filterHarga'>
            <p>Harga</p>
            <label htmlFor="terendah">
            <input type="checkbox" id='terendah'/>Terendah - tertinggi</label>
            <label htmlFor="tertinggi">
            <input type="checkbox" id='tertinggi'/>Tertinggi - terendah</label>
        </div>
        <div className='filterJenis'>
            <p>Jenis layanan</p>
            <label htmlFor="home">
            <input type="checkbox" id='home'/>Home service</label>
            <label htmlFor="datang">
            <input type="checkbox" id='datang'/>Datang ke lab</label>
        </div>
    </div>
)

export default Filter;