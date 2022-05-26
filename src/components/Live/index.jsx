import CardLive from '../CardLive'
import Box from '@mui/material/Box'

const Live = () => {
	return (
		<Box sx={{display: 'flex', justifyContent: 'space-around', p: 4, bgcolor: '#b2afaf'}}>
			<CardLive />
			<CardLive />
			<CardLive />
		</Box>
	);
};

export default Live;