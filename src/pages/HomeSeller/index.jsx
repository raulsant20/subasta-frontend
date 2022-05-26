import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Pend from '../../components/Pend'
import Fin from '../../components/Fin'

const HomeSeller = () => {
	return (
		<Box>
			 <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              Subastas pendientes
        </Typography>
          <Pend />
          <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              Finalizados
        </Typography>
          <Fin />
		</Box>
	); 
};

export default HomeSeller;