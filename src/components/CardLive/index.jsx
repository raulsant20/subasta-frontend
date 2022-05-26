import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import {  CardActionArea } from '@mui/material';

const CardLive = () => {
	return (
		<Box sx={{display: 'flex'}}>
		<Card sx={{ maxWidth: 350, m: 'auto', borderRadius: '20px', bgcolor: '#c4c4c4' }}>
				<CardActionArea sx={{display: 'flex', justifyContent: 'space-around'}}>
					<CardMedia
						component="img"
						image="https://picsum.photos/140"
						alt="green iguana"
						sx={{ height:'120px', width:'120px', m: 2}}
					/>
					<CardContent sx={{bgcolor: '#c4c4c4'}}>
						<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', mb: 4}}>
							Nombre del producto
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left', fontSize: '25px', mb: 4}}>
							S/ 30.00
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
							Ascendente
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			</Box>
	);
};

export default CardLive;