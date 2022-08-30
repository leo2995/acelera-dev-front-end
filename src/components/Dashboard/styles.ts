import styled, { css } from 'styled-components';


interface ContainerProps {
    background: string;
}

export const Container = styled.div<ContainerProps>`

display: flex;
align-items: center;
justify-content: center;

${({ background }) => {
    return css`
      background-color: ${background};
    `;
  }}


`


