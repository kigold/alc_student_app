import { Action } from 'redux';
import { actionType } from '../action-types';
import { store } from '../redux/store';

const baseUrl = 'http://localhost:3001';
const url = baseUrl+'/api/resource';

const createRefreshResourceRequestAction = () => ({
    type: actionType.REFRESH_RESOURCE_REQUEST,
    resource: []
});

const createRefreshResourceDoneAction = (resource) => ({
    type: actionType.REFRESH_RESOURCE_DONE,
    resource
});

export const refreshResource = () => {
    store.dispatch(createRefreshResourceRequestAction());
    fetch(url)
        .then(res => res.json())
        .then(resource => {
            store.dispatch(createRefreshResourceDoneAction(resource.data))
        })
        .catch(err => {
            console.error(err);
        });
    }
