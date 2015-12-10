import { combineReducers } from 'redux';
import { REQUEST_NIM, RECEIVE_NIM, REQUEST_LOAD_MORE, RECEIVE_LOAD_MORE } from './actions';

function nims(state = {
    isFetching: false,
    nims: [],
    currentPage: 1,
}, action = {}) {
    console.log('action', action);
    switch (action.type) {
        case REQUEST_NIM: 
            return Object.assign({}, state, {
                isFetching: true,
                currentPage: 1
            });
        case RECEIVE_NIM: 
            return Object.assign({}, state, {
                isFetching: false,
                nims: action.nims
            })
        case REQUEST_LOAD_MORE:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_LOAD_MORE:
            return Object.assign({}, state, {
                isFetching: false,
                currentPage: action.page,
                nims: [...state.nims, ...action.nims]
            })
        default:
            return state;
    }
};

export default combineReducers({
    nims
});