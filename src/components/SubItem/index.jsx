import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'

const SubItem = () => {
	return (
		<Grid item xs={6}>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
					<Box>
								Nombre del producto
					</Box>
      </Typography>
			<Box sx={{mb: 6}}>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '16px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m: 4}}>
					
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
					</Typography>
					<CardMedia
						component="img"
						sx={{width: '50%', m: 'auto'}}
						image="https://picsum.photos/200"
						alt="green iguana"
					/>
      
			</Box>

		</Grid>
	);
};

export default SubItem;