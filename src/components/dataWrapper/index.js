import React from 'react';
import {SendRequestData} from '../sendRequestData';
import {sendRequestDataConnect} from "../../connector";

const ShowSendRequestData = sendRequestDataConnect(SendRequestData);

export let DataWrapper = () => {
    return (
        <div className='Send-wrapper'>
                <ShowSendRequestData/>
        </div>
    );
};
