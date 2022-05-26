import {useContext} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/userContext';
import CONFIG from '../../utils/host';

const login = async (credentials) => {
  const response = await fetch(`${CONFIG.url}/api/user/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return response.json();
};

const Login = () => {
  const { ChangeTokenState } = useContext(UserContext);
  const navigate = useNavigate()
	const send = async (e)=>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const user = await login(data);
      if(user.error==='data incorrect'){
        alert('Datos incorrectos')
      }else{
      ChangeTokenState(user.token, user.name, user.type, user.id);
      navigate('/');}
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
           Ingresa tu correo electrónico o login
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
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="E-mail"
              variant="standard"
              name="mail"
            /> 
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="Contraseña"
              variant="standard"
              name="password"
              type="password"
            /> 
          </Grid>
          <Grid item xs={12}>
            <Button sx={{width: '50%', m: 4}} variant="contained" type='submit'>Login</Button>
          </Grid>
					<Grid item xs={12} sx={{textAlign: 'left'}}>
            ¿No tienes registro? <Link to='/register'>Regístrate</Link>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
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

export default Login;