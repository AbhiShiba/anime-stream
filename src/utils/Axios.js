import axios from 'axios';

async function Axios(URL) {

    try {
        const res = await axios.get(URL);
        return res;
    } catch (error) {
        return true;
    }
     
}

export {Axios};