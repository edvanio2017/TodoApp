import {Button,Grid,TextField} from '@mui/material';
import {useState} from 'react'
import Preload from '../../components/preload.js'

export default function UiTodoCadastrarForm({OnCadastrarCall}) {

  const [texto,setTexto] = useState("");
  const [PreloadActive,setPreloadActive] = useState(false);

  async function OnCadastrarClick(){
    if(texto.trim()==""){return 0;}
    //habilitar processamnto com tel preta
    setPreloadActive(true);
    //chamar funcao de cadastrar passada por props no controller
  	if(await OnCadastrarCall(texto)){
      //se retornar positivo limpar campo do texto
  		setTexto('');
      setPreloadActive(false);
  	}
  }

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item  xs={12} md={12} sm={12}>
          <h1>Novo item</h1>
        </Grid>
        <Grid item  xs={12} md={6} sm={6}>
          <TextField className={'full-width'} value={texto} label="Texto" variant="outlined" onChange={e => setTexto(e.target.value) } />
        </Grid>
        <Grid item  xs={12} md={6} sm={6}>
          <Button  size="large" className={'full-width btn-H55'} disableElevation  variant="contained" onClick={OnCadastrarClick} color="primary" >Adicionar</Button>
        </Grid>          
      </Grid>

      <Preload activo={PreloadActive}/>
    </div>
  )
}
