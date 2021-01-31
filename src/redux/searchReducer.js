import { serverResponse } from '../api/api';

const GET_USERS_DATA = 'GET_USERS_DATA';
const GET_REPOSITORIES_DATA = 'GET_REPOSITORIES_DATA';

let initialState = {
    users: [],
    repositories: [],
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_DATA:
            return {
                ...state,
                users: action.items,
            };
        case GET_REPOSITORIES_DATA:
            return {
                ...state,
                repositories: action.items
            };
        default:
            return state;
    }
}

const getUsersData = (items) => ({ type: GET_USERS_DATA, items });
const getRepositoriesData = (items) => ({ type: GET_REPOSITORIES_DATA, items });

export const loadData = (name) => async (dispatch) => {
    let response = await serverResponse.searchUsers(name);
    let usersArr = [];
    let repsArr = [];
    for (let i = 0; i < response.items.length; i++) {
        let usersList = await serverResponse.userInformation(response.items[i].login);
        usersArr.push(usersList);
        dispatch(getUsersData(usersArr));
        let repsList = await serverResponse.repositoriesInfo(response.items[i].login);
        repsArr.push(repsList);
        dispatch(getRepositoriesData(repsArr));
    }
}