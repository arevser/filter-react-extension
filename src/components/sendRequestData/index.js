import React from 'react';

export const SendRequestData = (props) => {
    return (
        <button
            onClick={props.onSendRequestData}
            type="submit">
            <span>Apply filters</span>
        </button>
    );
};