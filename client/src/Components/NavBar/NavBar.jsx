import SearchBar from "./SearchBar"

//IMPORT IMAGES
import logo from "../../Imgs/LogosSVG/logo-color.png"

//IMPORT ESTILOS
import "./NavBar.css"

const NavBar = () => {
 const logoSvg = logo
return (
    <div name="ContainerNav" key="ContainerNav" class="ContainerNav">
            {/* -------------------Logo FootLand --------------*/}
        <a href="/" className="LinkLogo"><img src={logoSvg} alt="LogoFoodLand" className="LogoFoodLand"/></a>

        <SearchBar/>

            {/* -----------Cart & Login Icons on Nav--------------*/}
        <div id="header" class="headerNavList">
            
                <ul class="nav">
                        {/* -----------Cart list--------------*/}
                    <li ><img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="iconsWidget" class="iconsNav1"/>
                            <ul class="ulNav">
                                <li><a href="/">My cart:</a></li>
                                <li><a href="/"><span>Products</span></a></li>
                                <li><a href="/"><span> My cart</span></a></li>
                            </ul>
                    </li>
                        {/* -----------Login list --------------*/}
                    <li ><img src="https://tinypic.host/images/2023/04/27/People-removebg-preview.png" alt="iconsLogin" class="iconsNav2"/>
                            <ul class="ulNav">
                                <li><a href="/"><span>My Profile</span></a></li>
                                <li><a href="/"><span>My Orders</span></a></li>
                                <li><a href="/"><span>Log out</span></a></li>
                            </ul>
                    </li>

                </ul>
            </div>

    </div>

)};
export default  NavBar