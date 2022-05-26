import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button'
import {Link, useNavigate} from 'react-router-dom'
import {UserContext} from '../../context/userContext'
import {useContext} from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const search = (e) =>{
	e.preventDefault();
	console.log('buscando: ',e.target.buscar.value);
}

const pages = [{title: 'Login', url: '/login'}, {title: 'Registrarse', url: '/register'}];

const options =  [{title: 'Quiero vender', url: '/seller-login'}, {title: 'Ayuda', url: '/'}, {title: 'Canales de atención', url: '/'}]

export default function Navbar() {
  const { ClearTokenState } = useContext(UserContext);
  const navigate = useNavigate()

  const logout = () =>{
    ClearTokenState()
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{bgcolor: '#332ff3'}}>
          { !localStorage.getItem('id') && 
            <Box sx={{justifyContent: 'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {options.map((page,i) => (
                <Button
                  key={i}
                  component={Link}
                  to={page.url}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          }
        </Toolbar>
        <Toolbar sx={{bgcolor: '#b8b8b8'}}>
          <Typography
            variant="h6"
            component={Link}
            to='/'
            sx={{ textDecoration: 'none', display: 'block' }}
          >
            SUBASTAS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
						<form onSubmit={search}>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ 'aria-label': 'search', 'name': 'buscar' }}
							/>
						</form>
          </Search>
          { !localStorage.getItem('id')? 
            <Box sx={{justifyContent: 'flex-end', flexGrow: 1, display: 'flex' }}>
              {pages.map((page,i) => (
                <Button
                  key={i}
                  component={Link}
                  to={page.url}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            :
            <Box sx={{justifyContent: 'flex-end', flexGrow: 1, display: 'flex' }}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  onClick={logout}
                >
                  Desconectar
                </Button>
                {
                  localStorage.getItem('type')==='seller' && 
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block', bgcolor: '#d9d9d9' }}
                    component={Link}
                    to='/create'
                  >
                  Agregar productor
                </Button>
                }
            </Box>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}