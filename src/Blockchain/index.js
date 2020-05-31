import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Content, CampoBusca, Title, BtnVoltar, MyTable } from './styles'

import { useParams} from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('632263', '32cb202d-53ed-430a-aeae-a610fd04f03c', '1.250.048 bytes'),
  createData('632262', 'b7236d68-830f-4bb1-b706-f4505f2e4dde', '1.274.254 bytes'),
  createData('632261', '7f09a1bc-b195-442c-a73e-744a3ad1f23c', '1.029.411 bytes'),
  createData('632260', '1c88fca0-e513-4ff7-a045-56efb4db0f60', '1.010.398 bytes'),
  createData('632259', '6f3d916d-1a17-4ec1-9138-7c4835092974', '1.238.158 bytes'),
  createData('632258', '87fb556d-2ae8-43c5-b8fd-1599e4ee9243', '1.039.594 bytes'),
  createData('632257', '25e99759-cc4e-4a0a-a197-79e79e34ee07', '1.015.301 bytes'),
  createData('632256', '3f025ed8-1881-4d2c-8aa8-db0fc04449ab', '1,074,062 bytes'),
  createData('632255', '77e7610e-e76c-492c-b83e-b97d57b5306a', '1,006,114 bytes'),
  createData('632254', '442ce38b-5dff-458a-bbab-ba3ba506341f', '1,230,812 bytes'),
  createData('632253', '69feaacf-3c40-47fe-9b3b-1f7b29bcec24', '1,010,781 bytes'),
];

const useStyles = makeStyles((theme) =>({
  table: {
    minWidth: 700,
  },
  searchField: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export default function Blockchain({ hashUser }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  let url = useParams();


  

  function handleSearch(e){
    setSearch(e.target.value);
  }


  return (
    <>
    <Content>
      <Title>Blockchain</Title>

      <CampoBusca>
        <form className={classes.searchField} noValidate autoComplete="off">
          <TextField onBlur={handleSearch} id="outlined-basic" label="Buscar Prontuário pelo Token" variant="outlined" />
        </form>
      </CampoBusca>

      <MyTable>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Altura</StyledTableCell>
                <StyledTableCell align="left">Rash</StyledTableCell>
                <StyledTableCell align="left">Tamanho</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                  <StyledTableCell align="left"><Link to={"/detalhes"} >{row.calories}</Link></StyledTableCell>
                  <StyledTableCell align="left">{row.fat}</StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <a href="#">{row.calories}</a> */}
            </TableBody>
          </Table>
        </TableContainer>
      </MyTable>
      
    </Content>



    </>
  );

}
