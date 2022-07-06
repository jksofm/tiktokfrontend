import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
 
  });

export const method = async(path,options={})=>{
     const response  = await request(path,options);
     return response.data
}


  export default request;