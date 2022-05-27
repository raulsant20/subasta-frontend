/* eslint-disable react/prop-types */
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { io } from 'socket.io-client';
import CONFIG from '../../utils/host';
import { useEffect, useState } from 'react';

const DataSub = ({id, data, setData, setWin}) => {
	const [socket, setSocket] = useState()
	const [precio, setPrecio] = useState(data?.inicial)
	const [unido, setUnido] = useState(false)
	const [name, setName] = useState('Nadie')

	useEffect(()=>{
		if(localStorage.getItem('type')==='user'){
			setSocket(io(CONFIG.url))
		}
		return ()=>socket?.disconnect(true);
	},[])

	const unir = ()=>{
		console.log('mandando socket')
		socket?.emit('newSubasta', id)
		setUnido(true)
	}

	useEffect(() => {
    socket?.on('add', (name) => {
			console.log('aumentando de otro')
			console.log(data)
			console.log(setData)
			setName(name)
			setPrecio((precio)=>(parseInt(precio) + 5).toString())
			setWin(false)
    });
		return ()=>socket?.disconnect(true);
  }, [socket]);

	const aumentar = () => {
		const newPrecio = (parseInt(precio) + 5).toString()
		setName(localStorage.getItem('name'))
		setPrecio(newPrecio)
		setData({...data, inicial: newPrecio})
		setWin(true)
		socket?.emit('addSubasta',{idsubasta: id, name: localStorage.getItem('name')})
	}

	return (
		<Grid item xs={6} sx={{display: 'flex',flexDirection:'column', justifyContent: 'space-between'}}>
			{!unido && new Date(data?.fecha) < new Date() && <Button variant="contained" onClick={unir}>Unirse a la subasta</Button>}
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
				Precio actual
      </Typography>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
				S/ {precio}
      </Typography>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
				Poseedor actual: {name}
      </Typography>
			{
				unido && new Date(data?.fecha) < new Date() ? <Box>
				<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
					Aumentar
				</Typography>
				<Button variant="contained" onClick={aumentar} sx={{ width: '80%', height: '80px',my: 2, display: 'block', fontSize: '40px' }}>
					+ S/. 5.00
				</Button>
			</Box>
			:
			<Button variant="contained" onClick={aumentar} sx={{ width: '80%', height: '80px',my: 2, display: 'block', fontSize: '40px' }}>
					ÚNETE PARA PUJAR
				</Button>
			}
		</Grid>
	);
};

export default DataSub;