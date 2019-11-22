import React from 'react';

export const clearBrandList = (state, payload) => {

    // console.log(state, payload);

    const data = state.data.map((el) => {
        if (!payload && el.select) {
            return {...el, select: false}
        }
        return el
    });

    const result = {...state, data};

    return result;

};