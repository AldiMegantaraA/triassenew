import React, {useState} from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import SearchForm from '../../components/search-form/search-form.component';
import Filter from '../../components/filter/filter.component';
import Sidebar from '../../components/sidebar/index'
import Header from '../../components/header/header.component';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)

        const toggle = () => {
            setIsOpen(!isOpen)
        }

    return (
        <div className="homepage">
            <hr/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <Jumbotron />
            <SearchForm />
            <Filter />
            <Directory />
        </div>
    )
}

export default HomePage;