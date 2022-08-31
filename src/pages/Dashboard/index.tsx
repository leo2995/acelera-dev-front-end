import React, { useEffect, useState } from "react";

import { isAuthenticated } from "src/services/Auth/service";
import { UserResponseDto } from "src/services/Patient/dtos/UserResponse.dto";
import { useUserList } from "src/services/Patient/hooks";

const TsPage:React.FC = () => {

    const {data} = useUserList();

    const [users, setUsers] = useState<UserResponseDto[] | undefined >()

    useEffect(()=>{
            setUsers(data)
    },[data])
    
    return (
        <div>
            {isAuthenticated()?
                <h1>autenticado</h1> :
                <h2>não Autenticado</h2>
            }

            {
                users ?
                <h1>lista ok</h1> :
                <h2>lista não carregou</h2>
            } 
        </div>
    )

}

export default TsPage