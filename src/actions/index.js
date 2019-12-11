import * as cst from './constansts';
import {createAction} from '../helpers/actions';

export const onClickSelect = createAction(cst.SELECT_BRAND);
export const onClearAllBrands = createAction(cst.CLEAR_ALL_BRAND);
export const onChangePriceInputs = createAction(cst.CHANGE_PRICE_BRAND);
export const onSendRequestData = createAction(cst.SEND_REQUEST_DATA_BRAND);

