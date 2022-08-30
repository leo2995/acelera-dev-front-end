import axios from "axios";
import { getToken } from "./Auth/service";

// import { fetchRefreshToken } from "./Auth/service";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})


api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  });


// api.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async function (error) {
//       const access_token = JSON.parse(localStorage.getItem("userLogin")|| "{}");
     
//       if (error.response.status === 401 && access_token) {
//         const response = await fetchRefreshToken(access_token.user.email, access_token.token.refreshToken);
//         return response;
//       }
//       return Promise.reject(error);
//     }
//   );




export default api