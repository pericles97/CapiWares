import styled, { css } from 'styled-components';


export const Content = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;

`;

export const MyContent = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;

export const BtnVoltar = styled.div`
  text-align: left;
  padding-top: 15px;
  padding-left: 0px;

`;

export const Label = styled.div`
  text-align: left;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.div`
  text-align: left;
  padding-left: 5px;
`;



export const Btn = styled.div`
  padding-top: 15px;
  padding-left: 10px;

`;

export const BtnFinish = styled.div`
  text-align: right;
  padding-right: 150px;
  display: flex; 
  flex-direction: row;

  a:-webkit-any-link {
    text-decoration: none;
  }

  #voltar{
    margin-left: 150px;
    margin-right: 20px;
  }
  #finish{
    text-align: right;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding-top: 25px;
  padding-bottom: 70px;
  font-size: 40px;
  font-weight: bold;

`;

