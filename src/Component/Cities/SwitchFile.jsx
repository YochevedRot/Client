import { observer } from "mobx-react";

import CityMap from "./CityMap";
import Cities from "../../Store/Cities";
import Switch1 from "./Switch1";
import Switch3 from "./Switch3";
import Switch2 from "./Switch2";
import Switch4 from "./Switch4";

const Switch = (observer(() => {

    switch (Cities.citiesList.length) {
        case 0:
            return <><h3>אין ערים להצגה</h3></>;
        case 1:
            return <Switch1/>;
        case 2:
            return <Switch2/>;
        case 3:
            return <Switch3/>;
        case 4:
            return <Switch4/>;
        case 5:
            return <CityMap />
        default:
            return <CityMap />;
    }
}))

export default Switch;
