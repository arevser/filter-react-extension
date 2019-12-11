import React, {Fragment} from 'react';

const Item = (arr) => {
    return (
        arr.data.find(item => item.select) ? "enable" : 'disable'
    )
};

export const ClearAll = (props) => {
    return (
        <Fragment>
            <button
                className={Item(props)}
                onClick={props.onClearAllBrands}
                type="submit">
                Clear All
            </button>
        </Fragment>
    );
};