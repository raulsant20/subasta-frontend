import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ListItem from '../ListItem';

const categorias = [
	{
		title: 'Inmuebles',
		items: ['Todas', 'Casas'],
		icono: <HomeWorkOutlinedIcon />
	},
	{
		title: 'Vehiculos',
		items: ['Todas', 'Comerciales', 'Lotes'],
		icono: <DirectionsCarOutlinedIcon />
	},
	{
		title: 'Tecnologia',
		items: ['Todas', 'Celulares', 'Laptops', 'Consolas', 'TV'],
		icono: <LaptopChromebookOutlinedIcon />
	},
	{
		title: 'Electrohogar',
		items: ['Todas', 'Refrigeradora', 'Lavadoras', 'Cocinas', 'Electrodomésticos'],
		icono: <KitchenOutlinedIcon />
	},
	{
		title: 'Muebles',
		items: ['Todas', 'Escritorios', 'Sofas', 'Mesas', 'Cunas', 'Camas'],
		icono: <ChairOutlinedIcon />
	}
]

export default function Categorias() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={
        <ListSubheader component="h1" sx={{bgcolor: 'blue', color: 'white', position: 'static'}}>
          Categorías
        </ListSubheader>
      }
    >
			{categorias.map((item, i)=><ListItem key={i} title={item.title} items={item.items}>{item.icono}</ListItem>)}
			
    </List>
  );
}