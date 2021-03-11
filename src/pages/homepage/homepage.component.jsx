import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import SearchForm from '../../components/search-form/search-form.component';
import Filter from '../../components/filter/filter.component';

const HomePage = () => (
    <div className="homepage">
        <hr/>
        <Jumbotron />
        <SearchForm />
        <Filter />
        <Directory />
    </div>
)

export default HomePage;