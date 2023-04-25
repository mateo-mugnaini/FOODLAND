
const NavBar = () => {

return (
    <div name="ContainerNav" key="ContainerNav">

        <img src="Logo" alt="LogoFoodLand" className="LogoFoodLand"/>

        <SearchBar/>

    <div name="ButtonsNav" key="ButtonsNav">
        <button name="buttonWidget" key="ButtonWidget"><img src="https://www.flaticon.es/icono-gratis/carrito-de-compras_5381441?term=carrito&page=1&position=34&origin=search&related_id=5381441" alt="iconsWidget" classname="iconsNav"/></button>
        <button name="buttonLogin" key="ButtonLogin"><img src="https://www.flaticon.es/icono-gratis/usuario_3856336?term=persona&page=1&position=3&origin=search&related_id=3856336" alt="iconsLogin" classname="iconsNav"/></button>
    </div>

    </div>
)

}