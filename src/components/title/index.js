import React from 'react';
import {ClearAll} from '../../components/clearall';
import {ClearAllBrands} from "../../connector";

const ClearAllBrandsConnected = ClearAllBrands(ClearAll);

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
