import axios from 'axios';
import * as actions from './actions';

let url = "https://client-jobs.xyz/api/v1/online-auto/order";



//fetching the orders
export const fetchOrders  = () => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/get`)

    .then(res => dispatch(actions.setOrders(res.data.message)))

    .catch(console.log);
}