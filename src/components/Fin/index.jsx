import Grid from '@mui/material/Grid'
import CardFin from '../CardFin'

const Fin = () => {
	return (
		<Grid container sx={{bgcolor: '#b2afaf', p: 6}}>
			<CardFin/>
			<CardFin/>
			<CardFin/>
			<CardFin/>
			<CardFin/>
			<CardFin/>
			<CardFin/>
		</Grid>
	);
};

export default Fin;