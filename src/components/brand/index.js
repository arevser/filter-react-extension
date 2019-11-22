import React from 'react';
import {BrandList} from '../../components/brandlist';
import {ShowBrandList} from "../../connector";

const ShowBrandListConnected = ShowBrandList(BrandList);

export let Brand = () => {
    return (
        <div className="Brand-wrapper">
            <div className="Title-block">Brand:</div>
            <div className="Brand-block">
                <ShowBrandListConnected/>
            </div>
        </div>
    );
};
