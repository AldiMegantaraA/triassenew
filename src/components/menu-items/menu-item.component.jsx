import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
import hospital from '../../assets/hospital.png'
import starOn from '../../assets/img-start-on.svg'

const MenuItem = ({ title, alamat, size, history, linkUrl, match, promo, hargaAwal, hargaAkhir }) => (
    <div 
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <div className="background-image" style={{
        backgroundImage: `url(${hospital})`
    }}/>
        <div className="content">
            <div className='tombol'>
                <button className="subtittle">DATANG KE LAB</button>
                <button className="subtittles">HOME SERVICE</button>
            </div>
            <div className='detail'>
                <h1 className="tittle">{title}</h1>
                <h3 className="alamat">{alamat}</h3>
            </div>
            <div className='review'>
                <p><img src={starOn} alt=""/>4.8/5</p>
                <ul>
                    <li>Tidak bisa reschedule</li>
                </ul>
                <ul>
                    <li>Tidak bisa refund</li>
                </ul>
            </div>
        </div>
        <div className='harga'>
            <p>{promo}</p>
            <h3>{hargaAwal}</h3>
            <hr className='garis'/>
            <h1>{hargaAkhir}</h1>
        </div>
    </div>
)

export default withRouter(MenuItem);