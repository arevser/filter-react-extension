import React, {Fragment} from 'react';
import Slider from "rc-slider";
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const checkInNumber = (element, defaultValue) => {
    if(!isNaN(element)) {
        return element;
    }
    return defaultValue;
};

export const PriceRange = (props) => {

    return (
        <Fragment>
            <div className="Price-filter">
                <span>From</span>
                <input
                    type="number"
                    value={props.minPrice}
                    onChange={(event) => {
                        props.onChangePriceInputs({minPrice: checkInNumber(parseInt(event.target.value), props.minPrice)})
                    }}/>
                <span>To</span>
                <input
                    type="number"
                    value={props.maxPrice}
                    onChange={(event) => {
                        props.onChangePriceInputs({maxPrice: checkInNumber(parseInt(event.target.value), props.maxPrice)})
                    }}/>
            </div>
            <Range
                min={props.minPriceConst}
                max={props.maxPriceConst}
                defaultValue={[props.minPrice, props.maxPrice]}
                tipFormatter={value => `${value}$`}
                onAfterChange={newRange => {
                    props.onChangePriceInputs({minPrice: newRange[0], maxPrice: newRange[1]})
                }}
                marks={props.marks}
                step={null}
            />
            <Tooltip
                prefixCls="rc-slider-tooltip"
                placement="top">
                <Handle/>
            </Tooltip>
        </Fragment>
    );
};