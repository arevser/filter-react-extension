import { createSelector } from 'reselect'

export const data = createSelector(
    state => state,
    state => state.data
);

export const minPrice = createSelector(
    state => state,
    state => state.minPrice
);

export const maxPrice = createSelector(
    state => state,
    state => state.maxPrice
);

export const minPriceConst = createSelector(
    state => state,
    state => state.minPriceConst
);

export const maxPriceConst = createSelector(
    state => state,
    state => state.maxPriceConst
);

export const marks = createSelector(
    state => state,
    state => state.marks
);