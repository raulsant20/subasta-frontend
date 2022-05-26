import Grid from '@mui/material/Grid'
import CardPend from '../CardPend'

const Pend = () => {
	return (
		<Grid container sx={{bgcolor: '#b2afaf', p: 6}}>
			<CardPend/>
			<CardPend/>
			<CardPend/>
			<CardPend/>
			<CardPend/>
			<CardPend/>
			<CardPend/>
		</Grid>
	);
};

export default Pend;