import axios from "axios";
console.log(process.env.REACT_APP_BASE_URL);
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
 
  });

export const method = async(path,options={})=>{
     const response  = await httpRequest(path,options);
     return response.data
}


  export default httpRequest;