import Parse from 'parse';

Parse.initialize('<Your Parse Key>', '<Your Parse Secret>');

/* action types & creators */

export const REQUEST_NIM = 'REQUEST_NIM';
export function requestNim(name) {
    return {
        type: REQUEST_NIM,
        name
    };
}

export const RECEIVE_NIM = 'RECEIVE_NIM';
export function receiveNim(name, json) {
    return {
        type: RECEIVE_NIM,
        name,
        nims: json
    };
}

export const REQUEST_LOAD_MORE = 'REQUEST_LOAD_MORE';
export function requestLoadMore(name) {
    return {
        type: REQUEST_LOAD_MORE,
        name
    }
}

export const RECEIVE_LOAD_MORE = 'RECEIVE_LOAD_MORE';
export function receiveLoadMore(name, page, json) {
    return {
        type: RECEIVE_LOAD_MORE,
        name,
        page,
        nims: json
    };
}

/* thunk action creators */

export function searchNim(name) {
    return function (dispatch) {
        dispatch(requestNim(name));
        let query = {
            query: name,
            page: 1,
        };
        Parse.Cloud.run('search', query, {
            success: (response) => {
                dispatch(receiveNim(name, response.results.data));
            },
            error: (error) => {
                console.log(error);
            }
        });
    };
}

export function loadMore(name) {
    return function (dispatch, getState) {
        dispatch(requestLoadMore(name));
        let page = getState().nims.currentPage + 1;
        let query = {
            query: name,
            page
        };
        Parse.Cloud.run('search', query, {
            success: (response) => {
                console.log('response', response);
                dispatch(receiveLoadMore(name, page, response.results.data));
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
}