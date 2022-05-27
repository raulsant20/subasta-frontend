/* eslint-disable react/prop-types */
import Grid from '@mui/material/Grid'
import CardPend from '../CardPend'

const Pend = ({data}) => {

	return (
		<Grid container sx={{bgcolor: '#b2afaf', p: 6}}>
			{
				data.map((item, i)=> <CardPend key={i} data={item} />)
			}

		</Grid>
	);
};

export default Pend;