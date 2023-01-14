import axios from 'axios';
export default axios.create({
    baseURL: "https://rollyaibot-default-rtdb.asia-southeast1.firebasedatabase.app/"
})