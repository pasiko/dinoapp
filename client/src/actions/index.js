import axios from 'axios';

var ROOT_URL = '/warranties'

if (process.env.NODE_ENV === 'development') {
    ROOT_URL = "http://localhost:3001/warranties";
}

const API_KEY = "?key=0xbeef";

export const CREATE_WARRANTY = "create_warranty";

export function createWarranty(values) {
    const formData = new FormData();
    formData.append("receipt", values.receipt);
    formData.append("name", values.name); 
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    };

    const request = axios.post(`${ROOT_URL}${API_KEY}`, formData, config).then(function (response) {
    // const request = axios.post(`${ROOT_URL}${API_KEY}`, formData).then(function (response) {       
            console.log(response);
    });

    return {
        type: CREATE_WARRANTY,
        payload: request
    }
}