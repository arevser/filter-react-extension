import React from 'react';

export const priceList = (state, payload) => {

    let minMaxArray = state.data.map(items => items.price);

    let filterRangeArray = [payload.minPrice, payload.maxPrice, ...minMaxArray].filter(i => {

        if (i > state.minPriceConst-1 && i < state.maxPriceConst+1) {
            return i;
        }
    });

    let sortArray = [...new Set(filterRangeArray)];

    const marks = {};

    sortArray.forEach(function (item) {
        marks[item] = item;
    });

    console.log(sortArray, filterRangeArray, payload);

    const result = {...state, ...payload, marks};

    return result;

};