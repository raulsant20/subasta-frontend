import React from 'react'
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';

function ListItem({title, items, children}) {

	const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

	return (
	<>
		<ListItemButton onClick={handleClick}>
			<ListItemIcon>
				{children}
			</ListItemIcon>
			<ListItemText primary={title} />
			{open ? <ExpandLess /> : <ExpandMore />}
		</ListItemButton>
		<Collapse in={open} timeout="auto" unmountOnExit>
			<List component="div" disablePadding>
				{items.map((item, i)=>{
					return(
						<ListItemButton key={i} sx={{ pl: 4 }}>
							<ListItemText primary={item} />
						</ListItemButton>
					)
				})}
			</List>
		</Collapse>
	</>
	)
}

ListItem.propTypes = {
	title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
	children: PropTypes.node
}

export default ListItem;