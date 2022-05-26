import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Modalidades() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={
        <ListSubheader component="h1" sx={{bgcolor: 'blue', color: 'white', mt: 0, position: 'static'}}>
          Modalidades
        </ListSubheader>
      }
    >
		<ListItemButton>
			<ListItemText primary={'Ascendente'} />
			<span>10</span>
		</ListItemButton>
		<ListItemButton>
			<ListItemText primary={'Descendente'} />
			<span>8</span>
		</ListItemButton>
		<ListItemButton>
			<ListItemText primary={'Precio único'} />
			<span>12</span>
		</ListItemButton>
    </List>
  );
}