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
	const [name, setName] = useState('Nadie')

	useEffect(()=>{
		if(localStorage.getItem('type')==='user'){
			setSocket(io(CONFIG.url))
			socket.emit('newSubasta', id)
		}
		return socket?.disconnect(true);
	},[])

	useEffect(() => {
    socket?.on('add', (name) => {
			setName(name)
			setData({...data, inicial: data.inicial + 5})
			setWin(false)
    });
  }, [socket]);

	const aumentar = () => {
		setData({...data, inicial: data.inicial + 5})
		setWin(true)
		socket.emit('addSubasta',{idsubasta: id, name: localStorage.getItem('name')})
	}

	return (
		<Grid item xs={6} sx={{display: 'flex',flexDirection:'column', justifyContent: 'space-between'}}>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
				Precio actual
      </Typography>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
				S/. 50.00 {data.inicial}
      </Typography>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
				Poseedor actual: Fernando {name}
      </Typography>
			<Box>
				<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
					Aumentar
				</Typography>
				<Button variant="contained" onClick={aumentar} sx={{ width: '80%', height: '80px',my: 2, display: 'block', fontSize: '40px' }}>
					+ S/. 5.00
				</Button>
			</Box>
		</Grid>
	);
};

export default DataSub;