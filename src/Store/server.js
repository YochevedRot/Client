import axios from 'axios';
import Cities from './Cities';


export async function getCities() {
    try {
      const cities = await axios.get('https://localhost:7203/api/City');
      console.log(cities.data)
      Cities.setCities(cities.data)
    } catch (error) {
    }
  }

export async function getMatchCities(name)
{
  try {
    const city = await axios.get(`https://localhost:7203/api/City/${name}`);
    Cities.setCities(city.data)
    console.log("by name")
    console.log(city.data);
  } catch (error) {
    
  }
}

export async function up(name)
{
  try {
    const city = await axios.get(`https://localhost:7203/api/City/${name}`);
    Cities.setCitiesUp(city.data)
    console.log("by name")
    console.log(city.data);
  } catch (error) {
    
  }
}

export async function down(name)
{
  try {
    const city = await axios.get(`https://localhost:7203/api/City/${name}`);
    Cities.setCitiesDown(city.data)
    console.log("by name")
    console.log(city.data);
  } catch (error) {
    
  }
}

export async function deleteCity(name)
{
  try {
    await axios.delete(`https://localhost:7203/api/City/${name}`);
    console.log("delete name")
  } catch (error) {
    
  }
}

export async function addCity(name)
{
  try {
    const city = await axios.post(`https://localhost:7203/api/City/${name}`);
    console.log(city.data);
  } catch (error) {
    
  }
}


export async function updateCity(name, newN)
{
  try {
    const city = await axios.put(`https://localhost:7203/api/City/${name}`,{newN});
    console.log(city.data);
  } catch (error) {
    
  }
}