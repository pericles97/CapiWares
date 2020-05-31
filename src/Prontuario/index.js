import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Form, Content, ID, NomeDoutor, CampoBusca, Btn, BtnFinish, Title, BtnVoltar } from './styles'
import swal from '@sweetalert/with-react';
import './sweetAlertFavorite.css';

import { useParams} from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  fieldStyle: {
    '& > *': {
      margin: theme.spacing(1),
      width: '185ch',
      justifyContent: 'center',
    },
  },
  fieldSearch: {
    '& > *': {
      margin: theme.spacing(1),
      width: '185ch',
      justifyContent: 'center',
    },
  },
  formStyle: {
    '& > *': {
      margin: theme.spacing(1),
      width: '200ch',
      justifyContent: 'center',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));




export default function Prontuario({ hashUser }) {
  const classes = useStyles();
  const [anamnese, setAnamnese] = useState("");
  const [evolucoes, setEvolucoes] = useState("");
  const [exames, setExames] = useState("");
  const [internacoes, setInternacoes] = useState("");
  const [informacoes, setInformacoes] = useState("");
  const [search, setSearch] = useState("");
  let url = useParams();

  const rash = "69feaacf-3c40-47fe-9b3b-1f7b29bcec24";

  function handleAnamnese(e){
    setAnamnese(e.target.value);
  }

  function handleEvolucoes(e){
    setEvolucoes(e.target.value);
  }

  function handleExames(e){
    setExames(e.target.value);
  }

  function handleInternacoes(e){
    setInternacoes(e.target.value);
  }

  function handleInformacoes(e){
    setInformacoes(e.target.value);
  }

  function handleSearch(e){
    setSearch(e.target.value);
  }

  function handleSubmit(e){
    // alert("Foi");
    const template = (`${search} <br/> <p id="seila">Realizada com sucesso!</p>`);
    swal({
      title: 'Consulta do paciente',
      icon: `success`,
      // text:
      //   'Ao fazer seu login, <b>TEXT</b> <br/> você tem uma aba de favoritos salvos mesmo depois de sair do site.',
      content: {
        element: 'p',
        attributes: {
          innerHTML: `${template}`,
        },
      },
      buttons: {
        confirm: 'OK',
        // cancel: 'Continuar assim mesmo',
      },
    }).then(willDelete => {
      if (willDelete) {
      } else if (!willDelete) {
        // handleFavoriteNotLogged();
        swal.close();
      }
    });

  }

  return (
    <>
    <Content>
      <ID>{url.token}</ID>
      
      <NomeDoutor>Bem Vindo Doutor</NomeDoutor>

      <Title>Cadastrar Prontuário</Title>

      <CampoBusca>
   
        <form className={classes.root} noValidate autoComplete="off">
          <TextField onBlur={handleSearch} id="outlined-basic" label="Entre com o Token do paciente" variant="outlined" />
        </form>
      </CampoBusca>

      <Form>
        {/* <form  noValidate autoComplete="off"> */}
          <TextField onChange={handleAnamnese} id="outlined-basic" label="Anamnese" variant="outlined" multiline />
          <TextField onChange={handleEvolucoes} id="outlined-basic" label="Evoluções" variant="outlined" multiline />
          <TextField onChange={handleExames} id="outlined-basic" label="Exames" variant="outlined" multiline />
          <TextField onChange={handleInternacoes} id="outlined-basic" label="Internações e/ou Cirurgias" variant="outlined" multiline />
          <TextField onChange={handleInformacoes} id="outlined-basic" label="Informações" variant="outlined" multiline />
        {/* </form> */}
      </Form>
      <BtnFinish>
        {/* <BtnVoltar> */}
          <Link to={"/"} >
            <Button id="voltar" renderAs="button" size="medium" variant="contained" color="secondary">
              Voltar
            </Button>
          </Link>
        {/* </BtnVoltar>  */}

        {search !== "" ? (
          <Button id="finish" onClick={handleSubmit} renderAs="button" size="medium" variant="contained" color="primary">
            Finalizar Consulta
          </Button>
        ) : (
          <Button id="finish" renderAs="button" size="medium" variant="contained" color="primary">
            Finalizar Consulta
          </Button>
        )}

      </BtnFinish>
      
    </Content>

    </>
  );

}
