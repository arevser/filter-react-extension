import React from 'react';
import {ClearAll} from '../../components/clearall';
import {clearAllBrands} from "../../connector";

const ClearAllBrandsConnected = clearAllBrands(ClearAll);

export let Title = () => {
    return (
        <div className="Title">
            <div className="Title-block">Filters</div>
            <div className="Clear-all">
                <ClearAllBrandsConnected/>
            </div>
        </div>
    );
}
