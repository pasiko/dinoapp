import axios from 'axios';

var ROOT_URL = '/warranties'

//const ROOT_URL = "http://dinowarranty.herokuapp.com/api";
if (process.env.NODE_ENV == 'development') {
    ROOT_URL = "http://localhost:3001/warranties";
}

const API_KEY = "?key=0xbeef";

export const CREATE_WARRANTY = "create_warranty";

export function createWarranty(values) {
    const request = axios.post(`${ROOT_URL}${API_KEY}`, values);

    return {
        type: CREATE_WARRANTY,
        payload: request
    }
}