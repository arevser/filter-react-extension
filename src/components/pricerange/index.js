import React, {Fragment} from 'react';
import Slider from "rc-slider";
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import {createPriceArray} from '../../helpers/createPriceArray';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

export const PriceRange = (props) => {

    let data = createPriceArray(props);

    return (
        <Fragment>
            <div className="Price-filter">
                <span>From</span>
                <input type="text" value={data.minValue}
                       onChange={(event) => {
                           props.onChangePriceInputs({minPrice: parseInt(event.target.value)})
                       }}/>
                <span>To</span>
                <input type="text" value={data.maxValue}
                       onChange={(event) => {
                           props.onChangePriceInputs({maxPrice: parseInt(event.target.value)})
                       }}/>
            </div>
            <Range min={data.minValueConst} max={data.maxValueConst} defaultValue={[data.minValue, data.maxValue]}
                   tipFormatter={value => `${value}$`}
                   onChange={newRange => {
                       props.onChangePriceInputs({minPrice: newRange[0], maxPrice: newRange[1]})
                   }}
                   marks={data.marks}
                   step={null}
            />
            <Tooltip prefixCls="rc-slider-tooltip" placement="top">
                <Handle/>
            </Tooltip>
        </Fragment>
    );
};