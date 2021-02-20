export const BASE_URL = 'https://lab-api-bq.herokuapp.com';
const token = localStorage.getItem("token");

export const TOKEN = (body) => {
    return {
        url: BASE_URL + '/auth',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export const CREATE_USER = (body) => {
    return {
        url: BASE_URL + '/users',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
} 

export const USER = () => {
    return {
        url: BASE_URL + '/products',
        options: {
            method: 'GET',
            headers: {
                'Authorization': `${token}`,
            },
        },
    };
}

