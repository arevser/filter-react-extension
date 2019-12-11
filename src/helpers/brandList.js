import React from 'react';

let flag = true;

export const brandList = (state, payload) => {

    let marks;

    if (!flag) {
        marks = {...state.marks};
    } else {

        marks = {};
    }

    flag = false;

    const data = state.data.map((el) => {
        if (el.id === payload) {
            marks[el.price] = el.price;
            return {...el, select: !el.select}
        }
        return el
    });

    const result = {...state, data, marks};

    return result;

};