import api from "../api";
//import { RefreshTokenResponse } from "./dtos/refreshTokenResponse.dto";
import { AuthResponseDto } from "./dtos/authResponse.dto";

export interface LoginProps{
    email:string,
    password:string
}

export const TOKEN_KEY = "@menteSa-Token";

export async function fetchUserLogin({email, password}:LoginProps): Promise<AuthResponseDto>{
    const url = 'auth/login'
    const payload = { email, password}
    const { data, status } = await api.post(url, payload);

    if(status === 200){
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token.accessToken))
    }
    return data
}

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

// export const login = (token:any) => {
//   localStorage.setItem(TOKEN_KEY, token);
// };

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


// export async function fetchRefreshToken(email: string, refreshToken:string): Promise<RefreshTokenResponse>{

//     const url = 'auth/refresh-token'

//     const params = { email, refreshToken}
//     const { data, status } = await api.post(url, params);

//     if( status ===200){
//         const newCredential = JSON.parse(localStorage.getItem("userLogin")|| "{}");
//         newCredential.token.accessToken = data.accessToken
//         newCredential.token.refreshToken = data.refreshToken
//         newCredential.token.expiresIn = data.expiresIn
//         localStorage.setItem(TOKEN_KEY, JSON.stringify(newCredential))
//     }

//     return data
// }

