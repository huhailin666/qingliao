import axios from 'axios'

const devOrigin = "http://localhost:8080";

const Request = {
    get: async (url: string, query?: any) => {
        let queryStr = "";
        if(query){
            queryStr = Object.entries(query).length ? `?${new URLSearchParams(query)}` : '';

        }
        
        

        const res = await axios.get(devOrigin + url+queryStr);
        return res?.data?.data;
    },
    post: async (url: string, params?: any) => {
        const res = await axios.post(devOrigin + url, params);
        return res?.data?.data;
    }
}
export default Request;