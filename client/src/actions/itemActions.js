import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';

export const getItems = () => dispatch=> {
dispatch(ItemsLoading());
axios
.get(`/api/postsapi`)
.then(res=>dispatch({
    type: GET_ITEMS,
    payload: res.data
}))
};

// export const addItem = item => {
//     return {
//         type: ADD_ITEMS,
//         payload: item
//     };
// };
export const addItem = item => dispatch=> {
    axios
    .post('/api/postsapi', item)
    .then(res=> dispatch({
        type: ADD_ITEMS,
        payload: res.data
    }))
    };

    export const deleteItem = id => dispatch=> {
        axios
        .delete(`/api/postsapi/${id}`)
        .then(res=>dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
        };
// export const deleteItem = id => {
//     return {
//         type: DELETE_ITEM,
//         payload: id
//     };
// };



export const ItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
