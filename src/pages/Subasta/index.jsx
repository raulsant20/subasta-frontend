import Box from '@mui/material/Box'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SubastaCustom from '../../components/SubastaCustom'
import CONFIG from '../../utils/host'



const Subasta = () => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState()
	const {id} = useParams()

	const gett = ()=>{
		const url = `${CONFIG.url}/api/subasta/get/${id}`
		fetch(url)
		.then(res => res.json())
		.then(res => {
			setData(res)
			setLoading(false)
		})
		.catch(e=>console.log(e))
	}

	useEffect(()=>{
		setLoading(true)
		gett()
	},[])

	return (
		<Box>
			{loading? <h1>Cargando</h1>:<SubastaCustom id={id} data={data} setData={setData}/>}
		</Box>
	);
}

export default Subasta;