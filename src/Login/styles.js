import styled, { css } from 'styled-components';

export const Logo = styled.div`
  display: flex; 
  justify-content: center;

`;

export const Content = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;



`;

export const TokenArea = styled.div`
  display: flex; 
  flex-direction: column;
  text-align: center;

  #generateToken{
    color: blue;
    cursor: grab;
    /* text-align: center; */
  }
`;


export const TextFirst = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 25px;

`;

export const InputHash = styled.div`
  text-align: center;

`;

export const ButtonStyle = styled.div`
  text-align: center;

  a:-webkit-any-link {
    text-decoration: none;
  }

`;
