import axios from 'axios';

export default class ApiClient {
    constructor() {
        if (process.env.REACT_APP_PROFILE === 'dev') {
            this.API = "http://127.0.0.1:8080";
        } else {
            this.API = window.API_URL
        }

        console.log("API URL ===> " + this.API)
    }

    login(email, password) {
        let body = {
            email: email,
            password: password
        };
        return this.execRequest('post', "/jwt", body);
    }

    validateToken(token) {
        return this.execRequest('get', `/jwt/${token}`);
    }

    signup(email, password, firstName, lastName) {
        let body = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        return this.execRequest('post', "/user", body);
    }

    getUser(email, authToken) {
        return this.execRequest('get', `/user/${email}`, null, authToken);
    }

    getUsers(authToken) {
        return this.execRequest('get', `/user`, null, authToken);
    }

    deleteUser(email, authToken) {
        console.log(authToken);
        return this.execRequest('delete', `/user/${email}`, null, authToken);
    }

    updateUser(email, firstName, lastName, authToken) {
        let body = {
            firstName: firstName,
            lastName: lastName,
        };
        return this.execRequest('put', `/user/${email}`, body, authToken);
    }

    execRequest(method, uri, data = null, authToken = null) {

        return axios({
            method: method,
            url: this.API + uri,
            headers: {
                'X-UAPI-AUTH': authToken
            },
            data: data
        }).then((resData) => {
            return Promise.resolve([null, resData]);
        }).catch((error) => {
            return Promise.resolve([error])
        });

    }

}