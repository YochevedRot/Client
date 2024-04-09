import { deleteCity, getCities } from "../../Store/server";

export default async function Delete(name) {
    if (name == "") {
        alert("לא נבחרה עיר למחיקה");
    }
    else {
        const res = deleteCity(name)
        alert(res);
        getCities()
    }
}