import React from 'react';

export const clearBrandList = (state) => {

    const data = state.data.map((el) => {
        if (el.select) {
            return {...el, select: false}
        }
        return el
    });

    const marksArray = state.data.map((el) => {
        if (el.price) {
            return el.price;
        }
    });

    const marks = {};

    marksArray.forEach(function (item) {
        marks[item] = item;
    });

    const result = {...state, data, marks};

    return result;

};