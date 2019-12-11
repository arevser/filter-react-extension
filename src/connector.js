import {connect} from "react-redux";
import {onClickSelect, onClearAllBrands, onChangePriceInputs, onSendRequestData} from "./actions";
import { createSelector } from 'reselect'
import {
    data,
    minPrice,
    maxPrice,
    minPriceConst,
    maxPriceConst,
    marks
} from './selectors/';


const brandSelector = createSelector(
    [data, minPrice, maxPrice, minPriceConst, maxPriceConst, marks],
    (data, minPrice, maxPrice, minPriceConst, maxPriceConst, marks) => ({
        data,
        minPrice,
        maxPrice,
        minPriceConst,
        maxPriceConst,
        marks
    })
);

export const clearAllBrands = connect(brandSelector, {
    onClearAllBrands
});

export const showBrandList = connect(brandSelector, {
    onClickSelect
});

export const showPrice = connect(brandSelector, {
    onChangePriceInputs
});

export const sendRequestDataConnect = connect(brandSelector, {
    onSendRequestData
});
