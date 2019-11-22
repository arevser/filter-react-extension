import React from 'react';

export const priceList = (state, payload) => {

    const result = {...state, ...payload};

    console.log('result', result);

    return result;

};