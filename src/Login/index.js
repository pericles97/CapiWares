import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import homePhoto from '../images/logo.jpg';
import { Logo, Content, TextFirst, InputHash, ButtonStyle,TokenArea } from './styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));
  const teste = "teste"
  const Login = () => {
  const classes = useStyles();
  const [login, setLogin] = useState("");

  function GuidGenerator() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }

  function gerarGuid() {
    var guid = GuidGenerator();
    setLogin(guid);
    // alert(guid);
  }

  function handleSearchField(e){
    setLogin(e.target.value);

  }

  function handleSubmit(e){
    if(login === "" || login === undefined){

    }
  }
  
  return (
    
    <>
    <Logo>
      <img src={homePhoto} alt="Foto de Capa" />
    </Logo>

    <Content>
      <TextFirst>Entre com o seu Token</TextFirst>
      <InputHash>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField value={login} onChange={handleSearchField} id="outlined-basic" label="Entre com o Token" variant="outlined" />
        </form>
      </InputHash>
      <ButtonStyle>
        {/* <Button size="medium" variant="contained" color="primary">
          Primary
        </Button> */}
        {/* <Link to={{ pathname: '/prontuario', query: { login: login } }} ></Link> */}

        <Link to={"/blockchain"} >
            <Button renderAs="button" size="medium" variant="outlined" color="primary">
              Rede Blockchain
            </Button>
        </Link>	&nbsp;
        {login !== "" ? (
          <Link to={"/prontuario/" + login} >
            <Button onClick={handleSubmit} hashUser={login} renderAs="button" size="medium" variant="contained" color="primary">
              Entrar
            </Button>
          </Link>
        ) : (
          <Button onClick={handleSubmit} hashUser={login} renderAs="button" size="medium" variant="contained" color="primary">
              Entrar
          </Button>
        )}


      </ButtonStyle>

      <TokenArea>
        <b>Não tenho um Token &nbsp;<p id="generateToken" onClick={gerarGuid}>Criar Agora</p> </b>
      </TokenArea>

      {/* <Button onClick={gerarGuid} teste={teste} renderAs="button" size="medium" variant="contained" color="primary">
            Entrar
      </Button> */}
      
    </Content>
    
    </>
  );
};

export default Login;
