import React from "react"
import { observer } from "mobx-react"
import { Box } from "@mui/material"
import HomeUp from "./HomeUp"
import Switch from "../Cities/SwitchFile"
import ButtonEdit from "../Edit/ButtonEdit"

const UserHome = (observer(() => {

  return (
    <>
      <HomeUp />
      <Box sx={{
        backgroundImage: "url('/src/img/3.jpg')", backgroundColor: '#FEF9B4',
        width: '100%', height: '100vh', top: '100px', position: 'fixed', right: '0'
      }}>
        <br /> <br /> <br /> <br />
        <h2>רשימת ערים</h2>
        <br />
        {<Switch/>}
        <br /> <br />
        {<ButtonEdit/>}
      </Box>
    </>
  )
}))

export default UserHome