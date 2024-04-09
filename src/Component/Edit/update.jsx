import { getCities, updateCity } from "../../Store/server";

export default async function Update(name, newName) {
    if (name == "" || newName =="") {
        alert("הנתונים שנשלחו לא תקינים");
    }
    else {
        const res = updateCity(name, newName)
        alert(res);
        getCities()
    }
}




