import axios from 'axios';


const instance = axios.create({
    baseURL:'https://auth-6c8e5.firebaseio.com'
    
});



export default instance;
