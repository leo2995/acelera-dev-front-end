import React from "react";
//import { ITsComponentsProps } from "src/Interfaces/ITsComponenstProps";

import { Characters } from "src/services/dtos/character.dto";

import {Container} from './styles'

const TsComponent:React.FC<Characters> = ({results})=>{

    return (
        <Container background="#fefefe">
            <ul>
                { results.map((i, index)=> <li key={index}>{i.name}</li>  )}
            </ul>
            
        </Container>
    )
}


export default TsComponent