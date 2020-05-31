import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Content, CampoBusca, Title, BtnVoltar, MyContent, Label, Description } from './styles'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function Detalhes({ hashUser }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  

  return (
    <>
    <Content>
      <Title>Histórico de Registros</Title>

      <MyContent>
      <div className={classes.root}>
      <ExpansionPanel expanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
        <Typography className={classes.heading}>21/01/2020</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Label>Indice</Label>
            <Description>0</Description>
            <Label>Endereço</Label>
            <Description>c5ff8d4a-a2e8-43bb-8991-fbf7ed729108</Description>
            <Label>Anamnese</Label>
            <Description>Paciente chegou reclamando de dor.</Description>
            <Label>Informacoes Medicas</Label>
            <Description>Aspirina 500mg 3x ao dia</Description>
            <Label>Evolucao</Label>
            <Description>Tomou aspirina, e melhorou.</Description>
            <Label>Exame</Label>
            <Description>Tomografia do Cranio. Resultado: bom.</Description>
            <Label>Cirurgia</Label>
            <Description>Dreno devido a pneumotorax espontaneo.</Description>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography className={classes.heading}>06/10/2019</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Label>Indice</Label>
            <Description>1</Description>
            <Label>Endereço</Label>
            <Description>e4aff4ac-8019-27de-1999-0ff0eb3421</Description>
            <Label>Anamnese</Label>
            <Description>Entrada no ambulatorio com febre de 39 graus. </Description>
            <Label>Evolucao</Label>
            <Description>Paciente com vomitos e diarreia</Description>
            <Label>Exame</Label>
            <Description>Exame de ECG: Normal.</Description>
            <Label>Informacoes Medicas</Label>
            <Description>Prescricao de soro e omeprazol</Description>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography className={classes.heading}>07/05/2019</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Label>Indice</Label>
            <Description>2</Description>
            <Label>Endereço</Label>
            <Description>c5ff8d4a-a2e8-43bb-8991-fbf7ed729108</Description>
            <Label>Anamnese</Label>
            <Description>Paciente veio fazer exame admissional.</Description>
            <Label>Evolucao</Label>
            <Description>Paciente veio fazer exame de checkup. Pressao normal. Melhoras.</Description>
            <Label>Exame</Label>
            <Description>Ecocardio: alteracao em V1.</Description>
            <Label>Informacoes Medicas</Label>
            <Description>Alergia a medicacoes com acido acetilsalicilico</Description>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* <ExpansionPanel disabled>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel> */}
    </div>
    </MyContent>   
    </Content>



    </>
  );

}
