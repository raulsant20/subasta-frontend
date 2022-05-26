/* eslint-disable react/prop-types */
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'

const SubItem = ({nombre, descripcion, url}) => {
	return (
		<Grid item xs={6}>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '28px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m:4}}>
					<Box>
								{nombre}
					</Box>
      </Typography>
			<Box sx={{mb: 6}}>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '16px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center', m: 4}}>
					{descripcion}
					</Typography>
					<CardMedia
						component="img"
						sx={{width: '50%', m: 'auto'}}
						image={url}
						alt="green iguana"
					/>
      
			</Box>

		</Grid>
	);
};

export default SubItem;