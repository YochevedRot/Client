import './App.css'
import { getCities } from './Store/server'
import UserHome from "./Component/User/UserHome"

function App() {

  getCities();
  return (
    <>
    <UserHome/>
    </>
  )
}

export default App
