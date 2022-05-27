import {useState} from 'react'
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

const sending = async (data) => {
  const response = await fetch(`${CONFIG.url}/api/subasta/crear`, {
    method: 'POST',
    body: JSON.stringify(data),
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
			'Content-Type': 'application/json',
		},
  });
  return response.json();
};

const Create = () => {
	const [img, setImg] = useState();
  const navigate = useNavigate()

	const funcChangeImg = (e) => {
    const imageFile = e.target.files[0];
    setImg(imageFile);
  };

  const sendData = async (img, data)=>{
    try {
      const user = await sending({...data, foto: img});
      console.log(user)
      navigate('/');
    } catch {
      console.log('no logeo');
    }
  }

  const send = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
			const data = Object.fromEntries(new FormData(e.target))
      sendData(reader.result, data);
    };
  };


  
	return (
		<Box style={{minHeight: 'calc(100vh - 262px)', padding: 30}}>
      <Grid container>
        <Grid item xs={7}>
			<Typography
            variant="h4"
            sx={{ color: '#ea6825', fontWeight: '600', textAlign: 'left' }}
          >
           Crear subasta
      </Typography>
			<Divider sx={{height: '0px',
    border: 'none',
    borderTop: '2px solid black'}}/>
        <Grid
        container
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '95%' }
        }}
        noValidate
        autoComplete="off"
        variant="standard"
        onSubmit={send}
        >
          <Grid item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
              <InputLabel>Categoría</InputLabel>
              <Select
                label="Categoria"
                name='categoria'
                defaultValue = ""
              >
              <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
              <InputLabel>Subcategoria</InputLabel>
              <Select
                label="Subcategoria"
                name='subcategoria'
                defaultValue = ""
              >
              <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="Nombre del producto"
              variant="standard"
              name="nombre"
							sx={{ m: 1, minWidth: '90%' }}
            /> 
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="Descripción"
              variant="standard"
              name="descripcion"
            /> 
          </Grid>
          <Grid item xs={12}>
						<TextField
							id="datetime-local"
							label="Fecha de inicio"
							type="datetime-local"
							defaultValue="2022-05-25T10:30"
							variant="standard"
							name="fecha"
							InputLabelProps={{
								shrink: true,
							}}
						/>
          </Grid>
          <Grid item xs={6}>
						<FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
								<InputLabel>Modalidad</InputLabel>
								<Select
									label="Modalidad"
									name='modalidad'
									defaultValue = ""
								>
								<MenuItem value={10}>Ten</MenuItem>
								</Select>
							</FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-helperText"
              label="Precio inicial"
              variant="standard"
              name="inicial"
            /> 
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="Agregar fotos"
              variant="standard"
              name="foto"
							type="file"
							onChange={funcChangeImg}
            /> 
          </Grid>
          <Grid item xs={12}>
            <Button sx={{width: '100%', mt: 2}} variant="contained" type='submit'>Crear</Button>
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

export default Create;