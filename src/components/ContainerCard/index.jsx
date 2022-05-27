import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CustomCard from '../CustomCard'
import CONFIG from '../../utils/host'

const ContainerCard = () => {
	const [subastas, setSubastas] = useState([])

	const get = () => {
		fetch(`${CONFIG.url}/api/subasta/getall`)
		.then(res=> res.json())
		.then(res=>{
			const sub = res.filter((item)=>new Date()-new Date(item?.fecha)<3600000)
			setSubastas(sub)
		})
	}

	useEffect(()=>{
		get()
	},[])

	return (
		<Grid container sx={{bgcolor: '#b2afaf', p: 6}}>
			{subastas.length===0
			?
				<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '25px', fontWeight: '600', textAlign: 'left', m: 2}}>
					No hay subastas
				</Typography>
				:
				subastas.map((item, i) => <CustomCard key={i} item={item}/>)
			}
		</Grid>
	);
};

export default ContainerCard;