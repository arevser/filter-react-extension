import React from 'react';

export const brandList = (state, payload) => {

    const data = state.data.map((el) => {
        if (el.id === payload) {
            return {...el, select: !el.select}
        }
        return el
    });

    const result = {...state, data};

    return result;

};