import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';
import Cities from '../../Store/Cities';

const CityMap = (observer(() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Cities.citiesList.length-5;
  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1) };
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) };


  return (
    <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'space-between' }}>
      <Button sx={{ height: '8vh', color: 'orange', left: '10vw' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
        <ArrowBackIos fontSize='large' /> <ArrowBackIos fontSize='large' /></Button>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {Cities.citiesList[activeStep].name} <br />
      </Box>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {Cities.citiesList[activeStep+1].name} <br />
      </Box>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {Cities.citiesList[activeStep+2].name} <br />
      </Box>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {Cities.citiesList[activeStep+3].name} <br />
      </Box>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {Cities.citiesList[activeStep+4].name} <br />
      </Box>

      <Button sx={{ height: '8vh', color: 'orange', right: '10vw' }} onClick={handleNext} disabled={activeStep === maxSteps - 1} >
        <ArrowForwardIosTwoToneIcon fontSize='large' /> <ArrowForwardIosTwoToneIcon fontSize='large' /></Button>
    </Box>
  );
}))
export default CityMap;

