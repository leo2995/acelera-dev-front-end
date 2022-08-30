import { useQuery, UseQueryResult } from  '@tanstack/react-query';


import { UserResponseDto } from './dtos/UserResponse.dto';
import { fetchUserList, fetchUserById, fetchCharacterList } from './service';
import { Characters } from "src/services/dtos/character.dto";


export function useUserList(): UseQueryResult<UserResponseDto[]> {
    const queryKey = ['userList'];
    return useQuery(queryKey, () => fetchUserList(), {
      keepPreviousData: true,
    });
  }


  export function useUserById(id: string): UseQueryResult<UserResponseDto> {
    const queryKey = ['userById'];
    return useQuery(queryKey, () => fetchUserById(id), {
      keepPreviousData: true,
    });
  }


  export function useCharacterList(): UseQueryResult<Characters> {
    const queryKey = ['getCharacterList'];
    return useQuery(queryKey, () => fetchCharacterList(), {
      keepPreviousData: true,
    });
  }