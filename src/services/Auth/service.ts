import api from "../api";
import { RefreshTokenResponse } from "./dtos/refreshTokenResponse.dto";
import { AuthResponseDto } from "./dtos/authResponse.dto";

export interface LoginProps{
    email:string,
    password:string
}

export const TOKEN_KEY = "@menteSa-Token";
export const REFRESH_TOKEN = "@menteSa-RefreshTokem";
export const USER_EMAIL = "@menteSa-UserEmail";

export async function fetchUserLogin({email, password}:LoginProps): Promise<AuthResponseDto>{
    const url = 'auth/login'
    const payload = { email, password}
    const { data, status } = await api.post(url, payload);

    if(status === 200){
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token.accessToken))
        localStorage.setItem(REFRESH_TOKEN, JSON.stringify(data.token.refreshToken))
        localStorage.setItem(USER_EMAIL, JSON.stringify(data.user.email))
    }
    return data
}

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const getUserEmail = () => localStorage.getItem(USER_EMAIL);

// export const login = (token:any) => {
//   localStorage.setItem(TOKEN_KEY, token);
// };

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


export async function fetchRefreshToken(email: string, refreshToken:string): Promise<RefreshTokenResponse>{

    const url = 'auth/refresh-token'

    const payload = { email, refreshToken}

    const { data, status } = await api.post(url, payload);

    if( status === 200){
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data.accessToken))
        localStorage.setItem(REFRESH_TOKEN, JSON.stringify(data.refreshToken))
    }
    return data
}

