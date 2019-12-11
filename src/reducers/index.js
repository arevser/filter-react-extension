import * as cst from '.././actions/constansts';
import {brandList} from '../helpers/brandList';
import {clearBrandList} from '../helpers/clearBrandList';
import {priceList} from '../helpers/priceList';

const initialState = {

    data: [
        {id: 1, title: 'Sony', select: false, price: 65},
        {id: 2, title: 'Apple', select: false, price: 120},
        {id: 3, title: 'Bose', select: false, price: 55},
        {id: 4, title: 'Dell', select: false, price: 70},
        {id: 5, title: 'LG', select: false, price: 85},
        {id: 6, title: 'Samsung', select: false, price: 80},
        {id: 7, title: 'Huawei', select: false, price: 45},
        {id: 8, title: 'HP', select: false, price: 100}
    ],
    minPrice: 45,
    maxPrice: 120,
    minPriceConst: 45,
    maxPriceConst: 120,
    marks: {
        45: 45,
        55: 55,
        65: 65,
        70: 70,
        80: 80,
        85: 85,
        100: 100,
        120: 120
    }
};

export const brandlist = (state = initialState, action) => {

    const {type, payload} = action;

    switch (type) {
        case cst.SELECT_BRAND:
            return brandList(state, payload);

        case cst.CLEAR_ALL_BRAND:
            return clearBrandList(state, payload);

        case cst.CHANGE_PRICE_BRAND:
            return priceList(state, payload);

        case cst.SEND_REQUEST_DATA_BRAND:
            return state;

        default:
            return state;
    }
};