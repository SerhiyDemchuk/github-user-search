import * as axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.github.com/',
})

export const serverResponse = {
    searchUsers(name) {
        return instance.get(`search/users?q=${name}&sort=login&per_page=5&type=Users`)
            .then(response => {
                return response.data;
            });
    },
    userInformation(user) {
        return instance.get(`users/${user}`)
            .then(response => {
                return response.data;
            });
    },
    repositoriesInfo(owner) {
        return instance.get(`users/${owner}/repos`)
            .then(response => {
                return response.data;
            });
    }
}