import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import Cities from '../../Store/Cities';

const Switch2 = (observer(() => {
  return (
    <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'space-evenly' }}>
      
      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {Cities.citiesList[0].name} <br />
      </Box>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {Cities.citiesList[1].name} <br />
      </Box>

    </Box>
  );
}))
export default Switch2;