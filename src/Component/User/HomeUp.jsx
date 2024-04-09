import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { observer } from "mobx-react"
import SearchIcon from '@mui/icons-material/Search';
import { Button, TextField } from "@mui/material"
import { useState } from 'react';
import { Fab } from '@mui/material';
import { getMatchCities, up , down } from '../../Store/server';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Cities from '../../Store/Cities';


const ResponsiveAppBar = (observer(() => {
  const [cityName, setCityName] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    getMatchCities(cityName)
  }

  const upOrder = () =>{
    console.log("up")
    up(cityName)
  }

  const downOrder = () =>{
    console.log("down")
    down(cityName)
    down(cityName)
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'whitesmoke' }}>
      <Container>
        <Toolbar>
          <Box height={80} sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Fab color="warning" aria-label="edit" onClick={handleClick}>
            <SearchIcon/>
          </Fab>
            
            <TextField
            id="outlined-basic" variant="filled" type="text" color="warning" label="שם עיר"
            value={cityName} onChange={(e) => setCityName(e.target.value)} />

            <NorthIcon color='warning' onClick={upOrder}/>
            <SouthIcon color='warning' onClick={downOrder}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}))

export default ResponsiveAppBar;
