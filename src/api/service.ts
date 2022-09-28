import axios from 'axios';

let base_api_url : any = ""

if(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ){
    base_api_url = process.env.REACT_APP_API_URL
}else {
    base_api_url = process.env.REACT_APP_HOST_URL
}

let defaultHeaderOptions = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const service = axios.create({
  baseURL: base_api_url,
  headers: defaultHeaderOptions,
});


service.interceptors.request.use(config => {
  return config;
}, error => {
  console.log('Api Request Error - ', error);
  return Promise.reject(error);
});

export default service