import React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';
import {Box, CardMedia} from '@mui/material'

const styleImage = {
  maxWidth: '100vw',
  opacity: '0',
  transition: '1s',
  '&.loaded': {
    opacity: '1'
  },
  ':hover':{
    cursor: 'pointer'
  }
}

export default function Carrusel({steps, images}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState(images[0]);
  const [loaded, setLoaded] = React.useState(false)

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(()=>{
      const condition = next ? activeStep < images.length - 1 : activeStep > 0;
      const nextIndex = next ? (condition ? activeStep + 1 : 0) : condition ? activeStep - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setActiveStep(nextIndex);
    },500)
  };

  const handleNext = () => {
    selectNewImage(activeStep, images)
  };

  const handleBack = () => {
    selectNewImage(activeStep, images, false)
  };

  const clic = () => {
    console.log('clic')
  }

  React.useEffect(()=>{
    const interval = setInterval(()=>{
      selectNewImage(selectedImage, images)
    },2000)
    return ()=>clearInterval(interval)
  })

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <CardMedia
        component="img"
        image={selectedImage.imgPath}
        alt={selectedImage.label}
        sx={styleImage}
        onLoad={()=>setLoaded(true)}
        className={loaded? 'loaded': ''}
        onClick={clic}
      />
      <MobileStepper
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1, bgcolor: 'transparent', '.MuiMobileStepper-dot': { bgcolor: 'white'},
			'.MuiMobileStepper-dotActive': {bgcolor: 'black'}
		}}
      nextButton={
        <Button size="small" onClick={handleNext}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
      }
    />
    </Box>
  );
}

Carrusel.propTypes = {
	steps: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, imgPath: PropTypes.string}))
}

