import axios from 'axios';
import * as actions from './actions';

let url = "https://client-jobs.xyz/api/v1/online-auto/general";


//fetching data
export const fetchGenerals = () => async dispatch => {
    dispatch(actions.setLoading());

    await axios.get(`${url}/fetch`)

    .then(res => dispatch(actions.setData(res.data.message)))

    .catch(console.log);
}