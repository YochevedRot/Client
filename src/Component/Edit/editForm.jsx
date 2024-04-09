import { Button, TextField } from "@mui/material"
import React, { useState } from 'react';
import { observer } from "mobx-react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Cities from "../../Store/Cities";
import Add from "./add‏ ";
import Delete from "./delete";

const NewForm = (observer(({ setIsClicked }) => {

  const [cityName, setCityName] = useState("");
  const [newName, setnewName] = useState("");

  const names = Cities.citiesList;
  const addCity = () => { Add(newName) }
  const deleteCity = () => { Delete(cityName) }
  const handleClose = () => { setIsClicked(false); };



  return (<>
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel color="warning">שם השרות</InputLabel>
            <Select
              value={cityName} label="שם השרות" color="warning"
              onChange={(event) => setCityName(event.target.value)}>
              {names.map((name) => (<MenuItem key={name} value={name.name}> {name.name} </MenuItem>))}
            </Select>
          </FormControl>

          <TextField
            id="outlined-basic" variant="filled" type="text" color="warning" label="שם מעודכן"
            value={newName} onChange={(e) => setnewName(e.target.value)} /> <br /><br />
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="warning" onClick={() => addCity()}> הוסף </Button>
          <Button variant="contained" color="warning" onClick={() => deleteCity()}> מחק </Button>
          <Button variant="contained" color="warning" onClick={() => addCity()}> ערוך </Button>
          </Box>
         

        </DialogTitle>


        <DialogActions> <Button onClick={handleClose} sx={{ color: 'orange' }}>סגור</Button> </DialogActions>
      </Dialog>
    </React.Fragment>
  </>)
}))
export default NewForm