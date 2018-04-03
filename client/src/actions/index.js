import axios from 'axios';

//const ROOT_URL = "http://dinowarranty.herokuapp.com/api";
const ROOT_URL = "http://localhost:3001";
const API_KEY = "?key=0xbeef";

export const CREATE_WARRANTY = "create_warranty";

export function createWarranty(values) {
    const request = axios.post(`${ROOT_URL}/warranties${API_KEY}`, values);

    return {
        type: CREATE_WARRANTY,
        payload: request
    }
}