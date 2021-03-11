import React from 'react';
import MenuItem from '../menu-items/menu-item.component';
import './directory.styles.scss';
import hospital from '../../assets/hospital.png'

class Directory extends React.Component {
    constructor () {
        super ();

        this.state = {
            section: [
                {
                  title: 'Parahita Buncit',
                  alamat: 'Jl. Warung Buncit Raya 150 Jakarta Selatan',
                  imageUrl: {hospital},
                  id: 1,
                  linkUrl: 'shop/parahita buncit',
                  promo: 'Hemat 20%',
                  hargaAwal: 'Rp 370.500',
                  hargaAkhir: 'Rp 250.578'
                },
                {
                  title: 'Parahita Buncit',
                  alamat: 'Jl. Warung Buncit Raya 150 Jakarta Selatan',
                  imageUrl: {hospital},
                  id: 2,
                  linkUrl: 'shop/parahita buncit',
                  promo: 'Hemat 20%',
                  hargaAwal: 'Rp 370.500',
                  hargaAkhir: 'Rp 250.578'
                },
                {
                  title: 'Parahita Buncit',
                  alamat: 'Jl. Warung Buncit Raya 150 Jakarta Selatan',
                  imageUrl: {hospital},
                  id: 3,
                  linkUrl: 'shop/parahita buncit',
                  promo: 'Hemat 20%',
                  hargaAwal: 'Rp 370.500',
                  hargaAkhir: 'Rp 250.578'
                },
                {
                  title: 'Parahita Buncit',
                  alamat: 'Jl. Warung Buncit Raya 150 Jakarta Selatan',
                  imageUrl: {hospital},
                  id: 4,
                  linkUrl: 'shop/parahita buncit',
                  promo: 'Hemat 20%',
                  hargaAwal: 'Rp 370.500',
                  hargaAkhir: 'Rp 250.578'
                }
                
              ]
        }
    }

    render () {
        return (
            <div className="directory-menu">
                {
                    this.state.section.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;