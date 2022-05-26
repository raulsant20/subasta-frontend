import { Box, Typography, Button } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
	return (
		<Box>
			<Box sx={{display: 'flex', justifyContent: 'space-between', bgcolor: '#dfe4f8'}}>
				<Box sx={{p: 'auto', pl: 6}}>
					<Typography
								variant="h6"
								component="div"
								sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						SUBASTAS
					</Typography>
				</Box>
				
				<Box sx={{pr: 6}}>
					<Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600'}}>
						Nuestras redes
					</Typography>
					<Box>
						<Button size="small">
							<FacebookOutlinedIcon/>
						</Button>
						<Button size="small">
							<FacebookOutlinedIcon/>
						</Button>
						<Button size="small">
							<FacebookOutlinedIcon/>
						</Button>
					</Box>
				</Box>
			</Box>
			<Box sx={{display: 'flex', justifyContent: 'space-between',mr:6}}>
				<Box sx={{width: 'fit-content', textAlign: 'left'}}>
					<ul>
						<li>¿Quienes somos?</li>
						<li>¿Cómo comprar?</li>
						<li>Quiero vender</li>
						<li>Login</li>
						<li>Registrarse</li>
					</ul>
				</Box>
				<Box sx={{width: 'fit-content', textAlign: 'left'}}>
					<ul>
						<li>Canales de atención</li>
						<li>Ayuda</li>
					</ul>
				</Box>
				<Box sx={{width: 'fit-content', textAlign: 'left'}}>
					<ul>
						<li>Todos los eventos</li>
						<li>Todas las categorías</li>
					</ul>
				</Box>
				<Box sx={{width: 'fit-content', textAlign: 'left'}}>
					<ul>
						<li>Política de privacidad</li>
						<li>Política de cookies</li>
						<li>Política de seguridad</li>
						<li>Canal de ética</li>
					</ul>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;