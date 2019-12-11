import React, {Fragment} from 'react';

const Item = ({item, onClickSelect}) => {

    return (
        <button
            className={item.select ? 'enable' : 'disable'}
            onClick={() => {
                onClickSelect(item.id)
            }}>{item.title}
        </button>
    );
};

export const BrandList = (props) => {

    return (
        <Fragment>
            {props.data.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onClickSelect={props.onClickSelect}/>
            ))}
        </Fragment>
    );
};