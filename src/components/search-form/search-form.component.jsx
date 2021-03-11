import React from 'react';

import './search-form.styles.scss';

const SearchForm = () => (
    <form className='group'>
        <label htmlFor="provinsi">Provinsi
            <input type='text' placeholder='DKI Jakarta' className='form-provinsi' name='provinsi' />
        </label>
        <label htmlFor="kota">Kota/Kabupaten
            <input type='text' placeholder='Jakarta Pusat' className='form-kota' name='kota' />
        </label>
        <label htmlFor="paket">Paket & jenis pemeriksaan
            <input type='text' placeholder='Pap Smear' className='form-paket' name='paket' />
        </label>
        <button type='submit'>Cari lab</button>
    </form>
);

export default SearchForm;