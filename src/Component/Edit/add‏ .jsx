import { addCity, deleteCity, getCities } from "../../Store/server";

export default async function Add(name) {
    if (name == "") {
        alert("לא נבחרה עיר להוספה");
    }
    else {
        const res = addCity(name)
        alert(res);
        getCities()
    }
}




