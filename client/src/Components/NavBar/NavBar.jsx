import SearchBar from "./SearchBar"

//IMPORT IMAGES
import logo from "../../Imgs/LogosSVG/logo-no-background.png"

//IMPORT ESTILOS
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
 const logoSvg = logo
return (
    <div name="ContainerNav" key="ContainerNav" className="ContainerNav">
            {/* -------------------Logo FootLand --------------*/}
        <Link to="/" className="LinkLogo"><img src={logoSvg} alt="LogoFoodLand" className="LogoFoodLand"/></Link>

        <SearchBar/>
        <Link to="/create" className="linkNavbar">Create Product</Link>

            {/* -----------Cart & Login Icons on Nav--------------*/}
        <div id="header" className="headerNavList">
            
                <ul className="nav">
                        {/* -----------Cart list--------------*/}
                    <li ><img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="iconsWidget" className="iconsNav1"/>
                            <ul className="ulNav">
                                <li><Link to="/MyCart"><span><p>My cart:</p></span></Link></li>
                                <li><Link to="/"><span><p>Products</p></span></Link></li>
                                <li><Link to="/MyCart"><span><p> My cart</p></span></Link></li>
                            </ul>
                    </li>
                        {/* -----------Login list --------------*/}
                    <li ><img src="https://tinypic.host/images/2023/04/27/People-removebg-preview.png" alt="iconsLogin" className="iconsNav2"/>
                            <ul className="ulNav">
                                <li><Link to="/"><span><p>My Profile</p></span></Link></li>
                                <li><Link to="/"><span><p>My Orders</p></span></Link></li>
                                <li><Link to="/"><span><p>Log out</p></span></Link></li>
                            </ul>
                    </li>

                </ul>
            </div>

    </div>

)};
export default  NavBar