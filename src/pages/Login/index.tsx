import React, { useEffect } from 'react'
import { isAuthenticated } from 'src/services/Auth/service';
import { useNavigate } from 'react-router-dom';
import { Container, ContainerLogin,LoginTitle } from 'src/pages/Login/styles';
import FormLogin from 'src/components/Login/FormLogin';

const Login:React.FC = () =>{

   const navigate = useNavigate()
   
   useEffect(() =>{
        if(isAuthenticated()){
            navigate("/dashboard")
        }
   }, [navigate])

    return(
        <Container>
            <ContainerLogin>
                <LoginTitle>Mente Sã</LoginTitle>
                <FormLogin/>
            </ContainerLogin>
        </Container>
    )
}

export default Login;