import SearchBar from "./SearchBar"

//IMPORT IMAGES
import logo from "../../Imgs/LogosSVG/logo-color.png"

//IMPORT ESTILOS
import "./NavBar.css"

const NavBar = () => {
 const logoSvg = logo
return (
    <div name="ContainerNav" key="ContainerNav" className="ContainerNav">
            {/* -------------------Logo FootLand --------------*/}
        <a href="/" className="LinkLogo"><img src={logoSvg} alt="LogoFoodLand" className="LogoFoodLand"/></a>

        <SearchBar/>
        <a href="/create" className="linkNavbar">Create Product</a>

            {/* -----------Cart & Login Icons on Nav--------------*/}
        <div id="header" className="headerNavList">
            
                <ul className="nav">
                        {/* -----------Cart list--------------*/}
                    <li ><img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="iconsWidget" className="iconsNav1"/>
                            <ul className="ulNav">
                                <li><a href="/">My cart:</a></li>
                                <li><a href="/"><span>Products</span></a></li>
                                <li><a href="/"><span> My cart</span></a></li>
                            </ul>
                    </li>
                        {/* -----------Login list --------------*/}
                    <li ><img src="https://tinypic.host/images/2023/04/27/People-removebg-preview.png" alt="iconsLogin" className="iconsNav2"/>
                            <ul className="ulNav">
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