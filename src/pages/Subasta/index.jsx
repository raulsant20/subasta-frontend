import Box from '@mui/material/Box'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SubastaCustom from '../../components/SubastaCustom'
import CONFIG from '../../utils/host'



const Subasta = () => {
	const [data, setData] = useState()
	const {id} = useParams()

	const gett = ()=>{
		const url = `${CONFIG.url}/api/subasta/get/:${id}`
		fetch(url)
		.then(res => res.json())
		.then(res => setData(res))
		.catch(e=>console.log(e))
	}

	useEffect(()=>{
		gett()
	},[])

	return (
		<Box>
			<SubastaCustom id={id} data={data} setData={setData}/>
		</Box>
	);
}

export default Subasta;