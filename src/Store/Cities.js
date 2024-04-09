import{makeObservable, observable, action} from "mobx";

class Cities{
    citiesList=[];
    
    constructor()
    {
        makeObservable(this,{
            citiesList:observable.ref,
            setCities:action,
            setCitiesUp:action,
            setCitiesDown:action,
        }) 
    }

    setCities=(c)=>{
        this.citiesList = [...c]
    }

    setCitiesUp=(c)=>{
        this.citiesList = [...c]
        this.citiesList.sort((b, a) => {
            let nameA = a.name.toLowerCase(); 
            let nameB = b.name.toLowerCase(); 
            
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
    }

    setCitiesDown=(c)=>{
        this.citiesList = [...c]
        this.citiesList.sort((a, b) => {
            let nameA = a.name.toLowerCase(); 
            let nameB = b.name.toLowerCase(); 
            
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
    }

}
export default new Cities();
