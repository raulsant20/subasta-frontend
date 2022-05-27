/* eslint-disable react/prop-types */
import Grid from '@mui/material/Grid'
import CardFin from '../CardFin'

const Fin = ({data}) => {
	return (
		<Grid container sx={{bgcolor: '#b2afaf', p: 6}}>
			{
				data.map((item, i)=><CardFin key={i} data={item}/>)
			}
		</Grid>
	);
};

export default Fin;