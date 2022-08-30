import api from "../api";

import { UserResponseDto } from "./dtos/UserResponse.dto";
import {Characters} from "../../services/dtos/character.dto"

export async function fetchUserList(): Promise<UserResponseDto[]> {
    const url = 'v1/users';
    const { data } = await api.get(url);
    return data;
  }

  export async function fetchUserById(id: string): Promise<UserResponseDto> {
    const url = `v1/users/${id}`;
    const { data } = await api.get(url);
    return data;
  }


  export async function fetchCharacterList(): Promise<Characters> {
    const url = `/character`;
    debugger
    const { data } = await api.get(url);
    console.log(data, "chegou no data")
    return data;
  }