import SearchBar from "./SearchBar"
import "./NavBar.css"

const NavBar = () => {

return (
    <div name="ContainerNav" key="ContainerNav" class="ContainerNav">

    <a href="/" className="LinkLogo"><img src="https://tinypic.host/images/2023/04/26/Logo-removebg-preview.png" alt="LogoFoodLand" className="LogoFoodLand"/></a>

        <SearchBar/>

    <div name="ButtonsNav" key="ButtonsNav" class="ButtonsNav">
        <button name="buttonWidget" key="ButtonWidget" class="ButtonNav"><img src="https://tinypic.host/images/2023/04/26/Widget.png" alt="iconsWidget" class="iconsNav1"/></button>
        <button name="buttonLogin" key="ButtonLogin" class="ButtonNav"><img src="https://tinypic.host/images/2023/04/26/People.png" alt="iconsLogin" class="iconsNav2"/></button>
    </div>

    </div>
)

}

export default  NavBar