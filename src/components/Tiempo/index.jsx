/* eslint-disable react/prop-types */
import Button from '@mui/material/Button'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import CONFIG	from '../../utils/host'

const Tiempo = ({tiempo, id, win, inicial}) => {
	const [time, setTime] = useState(tiempo)
	const navigate = useNavigate()
	useEffect(()=>{
		const interval = setInterval(()=>{
			if(time<=0){
				if(win){
					fetch(`${CONFIG.url}/api/subasta/ganar`,{
						method: 'POST',
						body: JSON.stringify({inicial, idsubasta: id}),
						headers: {
							Authorization: `Bearer ${localStorage.getItem('token')}`,
							'Content-Type': 'application/json',
						},
					}).then(res => res.json()).then(res=>console.log(res)).catch(e=>console.log(e))
				}
				clearInterval(interval)
				navigate('/')
			}else{
				setTime((time)=>time-1)
			}	
		},1000)
		return ()=>clearInterval(interval)
	},[time])
	return (
		<Button variant="contained">{Math.floor(time/60)<10?`0${Math.floor(time/60)}`:Math.floor(time/60)}:{time%60<10?`0${time%60}`:time%60}</Button>
	);
};

export default Tiempo;