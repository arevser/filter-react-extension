import {connect} from "react-redux";
import {onClickSelect, onClearAllBrands, onChangePriceInputs} from "./actions";


export const ClearAllBrands = connect(state => ({
    showBrandList: state.brandlist
}), {
    onClearAllBrands: () => onClearAllBrands()
});

export const ShowBrandList = connect(state => ({
    showBrandList: state.brandlist
}), {
    onClickSelect: (id) => onClickSelect(id)
});

export const ShowPrice = connect(state => ({
    showBrandList: state.brandlist
}), {
    onChangePriceInputs: (items) => onChangePriceInputs(items)
});