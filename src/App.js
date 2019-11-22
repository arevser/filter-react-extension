import React from 'react';
import './styles/App.css';
import './styles/Filter.css';
import './styles/Title.css';
import './styles/Brands.css';
import './styles/Price.css';
import {Title} from './components/title';
import {Brand} from './components/brand';
import {Price} from './components/price';


export let App = () => {
    return (
        <div className="App">
            <div className="Filter">
                <Title/>
                <Brand/>
                <Price/>
            </div>
        </div>
    );
}

export default App;
