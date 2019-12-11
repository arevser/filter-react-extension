import React from 'react';
import {PriceRange} from '../../components/pricerange';
import {showPrice} from "../../connector";

const ShowPriceConnected = showPrice(PriceRange);


export let Price = () => {
    return (
        <div className="Price">
            <div className="Title-block">Price range:</div>
            <div className="Price-slider">
                <ShowPriceConnected/>
            </div>
        </div>
    );
}