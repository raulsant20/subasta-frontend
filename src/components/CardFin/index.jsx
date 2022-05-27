/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import {  CardActionArea } from '@mui/material';

const CardFin = ({data}) => {
	return (
		<Grid item xs={6} >
		<Card sx={{ maxWidth: 350, m: 'auto',mb: 4, borderRadius: '20px', bgcolor: '#c4c4c4' }}>
				<CardActionArea sx={{display: 'flex', justifyContent: 'space-around'}}>
					<CardMedia
						component="img"
						image="https://picsum.photos/140"
						alt="green iguana"
						sx={{ height:'120px', width:'120px', m: 2}}
					/>
					<CardContent sx={{bgcolor: '#c4c4c4'}}>
						<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600'}}>
							{data.nombre}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left', fontSize: '15px'}}>
							Precio final: S/ {data.inicial}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
							Ascendente
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left', fontSize: '15px'}}>
							Nombre de usuario ganador
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			</Grid>
	);
};

export default CardFin;