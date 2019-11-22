import React from 'react';

export const createPriceArray = (state) => {

    // console.log(state);

    let minMaxArray = state.showBrandList.data.map(items => items.price),
        selectArray = state.showBrandList.data.filter(items => {
            if (items.select) {
                return items.price;
            }
        }).map(items => items.price),
        minValueConst = Math.min.apply(null, minMaxArray),
        maxValueConst = Math.max.apply(null, minMaxArray),
        obj = {},
        min = state.showBrandList.minPrice,
        max = state.showBrandList.maxPrice;

    let filterRangeArray = [state.showBrandList.minPrice, state.showBrandList.maxPrice, ...minMaxArray].filter(i => {
        if (i > min-1 && i < max+1) {
            return i;
        }
    });

    let sortArray = [...new Set(filterRangeArray)];


    let createObj = (array) => {

        obj = {
            minValue: state.showBrandList.minPrice,
            maxValue: state.showBrandList.maxPrice,
            minValueConst: minValueConst,
            maxValueConst: maxValueConst,
            marks: {}
        };

        array.forEach(function (item) {
            obj.marks[item] = item;
        });
    };


    if (selectArray.length > 0) {
        createObj(selectArray);
    } else {
        if (minMaxArray.length > sortArray.length){
            createObj(sortArray);
        } else {
            createObj(minMaxArray);
        }
    }

    console.log(selectArray);

    return obj;

};