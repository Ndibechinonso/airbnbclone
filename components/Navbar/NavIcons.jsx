import Design from "../CustomIcons/Design"
import Homes from "../CustomIcons/Homes"
import Islands from "../CustomIcons/Islands"
import Omg from "../CustomIcons/Omg"
import Parks from "../CustomIcons/Parks"
import Pools from "../CustomIcons/Pools"
import Tropical from "../CustomIcons/Tropical"
import Windsmill from "../CustomIcons/Windsmill"
import Chomes from "../CustomIcons/Chomes"
import Caves from "../CustomIcons/Caves"
import Beach from "../CustomIcons/Beach"
import Bed_Breakfast from "../CustomIcons/Bed_Breakfast"
import Artic from "../CustomIcons/Artic"
import Cities from "../CustomIcons/Cities"
import Mansions from "../CustomIcons/Mansions"

const NavItems = ({tab}) =>{
switch(tab) {
    case "Shared homes" : return <Homes />
    case "OMG!" : return <Omg />
    case "Beach" : return <Beach />
    case "Windmills" : return <Windsmill />
    case "National Parks" : return <Parks />
    case "Iconic cities" : return <Cities />
    case "Design" : return <Design />
    case "Mansions" : return <Mansions />
    case "Caves" : return <Caves />
    case "Bed & breakfasts" : return <Bed_Breakfast />
    case "Tropicals" : return <Tropical />
    case "Amazing pools" : return <Pools />
    case "Cycladic homes" : return <Chomes />
    case "Artic" : return <Artic />
    case "Islands" : return <Islands />
default: return <Homes />
}
}

export default NavItems