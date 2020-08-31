import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bd47f.firebaseio.com/'
});

export default instance;