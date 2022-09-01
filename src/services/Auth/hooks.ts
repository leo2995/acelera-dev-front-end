import { useQuery, UseQueryResult } from "@tanstack/react-query";


import {  fetchUserLogin } from "./service";
import { AuthResponseDto } from "./dtos/authResponse.dto";


export function useUserLogin(email: string, password:string):UseQueryResult<AuthResponseDto>{
    const queryKey = ['userLogin']
    return useQuery(queryKey, () => fetchUserLogin({email, password}),{
        keepPreviousData: true,
    } );
}
