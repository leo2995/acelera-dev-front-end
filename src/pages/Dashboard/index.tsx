import React from "react";

import { isAuthenticated } from "src/services/Auth/service";

const TsPage:React.FC = () => {

    
    return (
        <div>
            {
                isAuthenticated() ?
                <h1>Está autenticado</h1> :
                <h2>Não está Autenticado</h2>
            } 
        </div>
    )

}

export default TsPage