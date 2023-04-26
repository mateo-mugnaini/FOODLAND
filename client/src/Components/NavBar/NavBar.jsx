import SearchBar from "./SearchBar"

//IMPORT IMAGES
import logo from "../../Imgs/LogosSVG/logo-color.png"

//IMPORT ESTILOS
import "./NavBar.css"
const NavBar = () => {

    const logoSvg = logo
return (
    <div name="ContainerNav" key="ContainerNav" class="ContainerNav">

    <a href="/" className="LinkLogo"><img src={logoSvg} alt="LogoFoodLand" className="LogoFoodLand"/></a>

        <SearchBar/>

    <div name="ButtonsNav" key="ButtonsNav" class="ButtonsNav">
        <button name="buttonWidget" key="ButtonWidget" class="ButtonNav"><img src="https://tinypic.host/images/2023/04/26/Widget.png" alt="iconsWidget" class="iconsNav1"/></button>
        <button name="buttonLogin" key="ButtonLogin" class="ButtonNav"><img src="https://tinypic.host/images/2023/04/26/People.png" alt="iconsLogin" class="iconsNav2"/></button>
    </div>

    </div>
)

}

export default  NavBar