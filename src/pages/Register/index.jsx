import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import CONFIG from '../../utils/host';
import {useNavigate} from 'react-router-dom'

const register = async (credentials) => {
  const response = await fetch(`${CONFIG.url}/api/user/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return response.json();
};

const Register = () => {
  const navigate = useNavigate()
  const send = async (e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const user = await register(data);
      console.log(user)
      navigate('/login');
    } catch {
      console.log('no logeo');
    }
  }

  
	return (
		<Box style={{minHeight: 'calc(100vh - 262px)', padding: 30}}>
      <Grid container>
        <Grid item xs={7}>
			<Typography
            variant="h4"
            sx={{ color: '#ea6825', fontWeight: '600', textAlign: 'left' }}
          >
           Crea tu cuenta
      </Typography>
			<Divider sx={{height: '0px',
    border: 'none',
    borderTop: '2px solid black'}}/>
        <Grid
        container
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '90%' }
        }}
        noValidate
        autoComplete="off"
        variant="standard"
        onSubmit={send}
        >
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Apellidos y nombres completos"
              variant="standard"
              name="fullName"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="DNI"
              variant="standard"
              name="dni"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="E-mail"
              variant="standard"
              name="mail"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Confimación E-mail"
              variant="standard"
              name="confirmMail"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Login/Usuario"
              variant="standard"
              name="user"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Contraseña"
              variant="standard"
              name="password"
              type="password"
            /> 
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
              <InputLabel>Departamento</InputLabel>
              <Select
                label="Departamento"
                name='departamento'
                defaultValue = ""
              >
              <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
              <InputLabel>Provincia</InputLabel>
              <Select
                label="Provincia"
                name='provincia'
                defaultValue = ""
              >
              <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
              <InputLabel>Distrito</InputLabel>
              <Select
                label="Distrito"
                name='distrito'
                defaultValue = ""
              >
              <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Dirección"
              variant="standard"
              name="direccion"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Número de domicilio, lote o manzana"
              variant="standard"
              name="domicilio"
            /> 
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Dirección/Complemento"
              variant="standard"
              name="complement"
            /> 
          </Grid>
          <Grid item xs={6} sx={{textAlign: 'left'}}>
            Al hacer clic en <em>Completar registro</em>, usted acepta automáticamente Aviso de privacidad y nuestros términos de uso
          </Grid>
          <Grid item xs={6}>
            <Button sx={{width: '100%', mt: 2}} variant="contained" type='submit'>Enviar</Button>
          </Grid>
          </Grid>
        </Grid>
        <Grid xs={5}>
          <CardMedia
          component="img"
          image={'https://picsum.photos/200/300'}
          sx={{height: '75vh', m:2}}
          />
        </Grid>
      </Grid>
		</Box>
	);
};

export default Register;
