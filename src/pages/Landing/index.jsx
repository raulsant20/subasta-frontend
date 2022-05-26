import Carrusel from '../../components/Carrusel'
import {Box, Grid} from '@mui/material'
import Categorias from '../../components/Categorias'
import Modalidades from '../../components/Modalidades'
import ContainerCard from '../../components/ContainerCard'
import Typography from '@mui/material/Typography';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://res.cloudinary.com/dj3hlonqp/image/upload/v1653509854/diywfw8by725rh6bcmfy.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://res.cloudinary.com/dj3hlonqp/image/upload/v1653510168/c4mdpdaic6imwyplfee5.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://res.cloudinary.com/dj3hlonqp/image/upload/v1653509854/x6tbg0z0mvs49g01znwq.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://res.cloudinary.com/dj3hlonqp/image/upload/v1653509854/yytmpflwkeohnajaoqor.jpg',
  },
];

const Landing = () => {
	return (
    <Box>
      <Box sx={{bgcolor: 'pink'}}>
        <Carrusel steps={images.length} images={images}/>
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <Modalidades />
          <Categorias/>
        </Grid>
        <Grid item xs={10}>
          <Typography gutterBottom variant="h1" component="div" sx={{fontSize: '15px', fontWeight: '600', textAlign: 'left', m: 2}}>
              Destacados del dia
        </Typography>
          <ContainerCard />
        </Grid>
      </Grid>
    </Box>
	);
};

export default Landing;