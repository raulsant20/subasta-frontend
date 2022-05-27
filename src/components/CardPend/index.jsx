/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardPend = ({data}) => {
	return (
		<Grid item xs={12} sm={6} md={4} >
			<Card sx={{ maxWidth: 200, m: 'auto', mb: 4, borderRadius: '20px'}}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={data.foto}
						alt="green iguana"
					/>
					<CardContent sx={{bgcolor: '#c4c4c4'}}>
						<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600'}}>
							{data.nombre}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
							Ascendente
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
							Precio inicial: S/ {data.inicial}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
							{data.fecha.replace('T',' ')}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions sx={{justifyContent: 'flex-end', bgcolor: '#c4c4c4'}}>
					<Button size="small">
						<DeleteOutlineOutlinedIcon sx={{ textAlign: 'rigth'}}/>
					</Button>
				</CardActions>
			</Card>
		</Grid>
  );
};

export default CardPend;