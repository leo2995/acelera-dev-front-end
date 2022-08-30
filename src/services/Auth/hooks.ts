import { useQuery, UseQueryResult } from "@tanstack/react-query";


import {  fetchUserLogin } from "./service";
import { AuthResponseDto } from "./dtos/authResponse.dto";
import { RefreshTokenResponse } from "./dtos/refreshTokenResponse.dto";


export function useUserLogin(email: string, password:string):UseQueryResult<AuthResponseDto>{
    debugger;
    const queryKey = ['userLogin']

    return useQuery(queryKey, () => fetchUserLogin({email, password}),{
        keepPreviousData: true,
    } );
}


// export function useUserRefreshToken(email: string, refreshToken:string):UseQueryResult<RefreshTokenResponse>{
//     const queryKey = ['userRefreshtoken']

//     return useQuery(queryKey, () => fetchRefreshToken(email, refreshToken),{
//         keepPreviousData: true,
//     } );
// }
