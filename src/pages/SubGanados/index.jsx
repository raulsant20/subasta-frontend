import {Box} from '@mui/material'
import Typography from '@mui/material/Typography';
import Ganados from '../../components/Ganados'

const SubGanados = () => {
	return (
    <Box>
          <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              Destacados del dia
        </Typography>
          <Ganados />

    </Box>
	);
};

export default SubGanados;