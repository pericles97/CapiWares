import styled, { css } from 'styled-components';


export const Content = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;

`;

export const Form = styled.div`
  padding-top: 100px;
  display: flex; 
  flex-direction: column;

  .MuiFormControl-root {
    margin: 0px 150px 15px 150px;
    
  }
`;
export const MyTable = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;



export const ID = styled.div`
  padding-top: 5px;
  text-align: right;
  padding-right: 150px;
`;

export const NomeDoutor = styled.div`
  padding-top: 25px;
  text-align: left;
  padding-left: 150px;
  font-size: 30px;
  font-weight: bold;
`;

export const CampoBusca = styled.div`
  text-align: center;
  padding-top: 15px;
  padding-bottom: 50px;
  display: flex; 
  flex-direction: row;
  justify-content: center;


`;

export const BtnVoltar = styled.div`
  text-align: left;
  padding-top: 15px;
  padding-left: 0px;

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
  font-size: 40px;
  font-weight: bold;

`;

