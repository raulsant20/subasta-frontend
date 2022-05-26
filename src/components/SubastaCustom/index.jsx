/* eslint-disable react/prop-types */
import {useState} from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SubItem from '../../components/SubItem'
import DataSub from '../../components/DataSub'
import Tiempo from '../../components/Tiempo'

const SubastaCustom = ({id, data, setData}) => {

	const [win, setWin] = useState(false)

	return (
		<Box>
			<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', display: 'flex', alignItems: 'center'}}>
					<Box>
								Modalidad: Ascendente
					</Box>
      </Typography>
			<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2, display: 'flex'}}>
              <Box sx={{m: 'auto', pr: 2}}>
							 Tiempo restante:
							</Box>
							<Box>
								 <Tiempo tiempo={100000} win={true} id={id} inicial={data?.inicial}/>
							</Box>
      </Typography>
			</Box>
			<Grid container>
				<SubItem nombre={data?.nombre} descripcion={data?.descripcion} url={data?.foto}/>
				<DataSub id={id} data={data} setData={setData} win={win} setWin={setWin}/>
			</Grid >
		</Box>
	);
};

export default SubastaCustom;