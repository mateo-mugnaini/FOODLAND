import SearchBar from "./SearchBar"
import "./NavBar.css"

const NavBar = () => {

return (
    <div name="ContainerNav" key="ContainerNav" class="ContainerNav">

    <a to="/"><img src="https://tinypic.host/images/2023/04/26/Logo-removebg-preview.png" alt="LogoFoodLand" className="LogoFoodLand"/></a>

        <SearchBar/>

    <div name="ButtonsNav" key="ButtonsNav" class="ButtonsNav">
        <button name="buttonWidget" key="ButtonWidget" class="ButtonNav"><img src="https://tinypic.host/images/2023/04/26/widget.png" alt="iconsWidget" class="iconsNav"/></button>
        <button name="buttonLogin" key="ButtonLogin" class="ButtonNav"><img src="https://www.flaticon.es/icono-gratis/usuario_3856336?term=persona&page=1&position=3&origin=search&related_id=3856336" alt="iconsLogin" classname="iconsNav"/></button>
    </div>

    </div>
)

}

export default  NavBar