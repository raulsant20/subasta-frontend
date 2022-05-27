import { useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Pend from '../../components/Pend'
import Fin from '../../components/Fin'
import CONFIG from '../../utils/host'


const HomeSeller = () => {
  const [pend, setPend] = useState([])
  const [fin, setFin] = useState([])

  const get = () =>{
    fetch(`${CONFIG.url}/api/subasta/sellerget`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      const f = res.filter((item)=>new Date()-new Date(item?.fecha)>3600000)
      const p = res.filter((item)=>new Date()-new Date(item?.fecha)<=3600000)
      setPend(p)
      setFin(f)
    })
  }

  useEffect(()=>{
    get()
  },[])

	return (
		<Box>
			 <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              Subastas pendientes
        </Typography>
          {
            pend.length ===0?<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
            No hay subastas pendientes
            </Typography>
            :
            <Pend data={pend}/>
          }
          <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              Finalizados
        </Typography>
        {
            pend.length ===0?<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
            No hay subastas Finalizadas
            </Typography>
            :
            <Fin data={fin}/>
          }
          
		</Box>
	); 
};

export default HomeSeller;