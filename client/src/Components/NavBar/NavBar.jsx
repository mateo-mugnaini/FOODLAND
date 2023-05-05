import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../redux/actions/userActions";
// import { signout } from '../../actions/userActions';

//IMPORT IMAGES
import logo from "../../Imgs/LogosSVG/logo-no-background.png";

//IMPORT ESTILOS
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  console.log(userInfo);
  const logoSvg = logo;
  return (
    <div name="ContainerNav" key="ContainerNav" className="ContainerNav">
      {/* -------------------Logo FootLand --------------*/}
      <Link to="/" className="LinkLogo">
        <img src={logoSvg} alt="LogoFoodLand" className="LogoFoodLand" />
      </Link>
      <SearchBar />
      {/* -----------Cart & Login Icons on Nav--------------*/}
      <div id="header" className="headerNavList">
        <ul className="nav">
          {/* -----------Cart list--------------*/}
          <li>
            <img
              src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png"
              alt="iconsWidget"
              className="iconsNav1"
            />
            <ul className="ulNav">
              <li>
                <Link to="/MyCart">
                  <span>
                    <p>My cart:</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>
                    <p>Products</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/MyCart">
                  <span>
                    <p> My cart</p>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          {/* -----------Login list --------------*/}
          <li>
            <img
              src="https://tinypic.host/images/2023/04/27/People-removebg-preview.png"
              alt="iconsLogin"
              className="iconsNav2"
            />
            {userInfo &&<span className="userName">{userInfo.name}</span>  }
            
            <ul className="ulNav">
              {userInfo ? (
                userInfo.isAdmin ? (
                  <div>
                    <li>
                      <Link to="/products">
                        <span>
                          <p>Stock</p>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/create">
                        <span>
                          <p>Create Product</p>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile">
                        <span>
                          <p>My Profile</p>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <span>
                        <p onClick={() => dispatch(signout())}>Log out</p>
                      </span>
                    </li>
                  </div>
                ) : (
                  <div>
                    <li>
                      <Link to="/profile">
                        <span>
                          <p>My Profile</p>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link tp="/MyCart">
                        <span>
                          <p>Shop history</p>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <span>
                        <p onClick={() => dispatch(signout())}>Log out</p>
                      </span>
                    </li>
                  </div>
                )
              ) : (
                <li>
                  <Link to="/login">
                    <span>
                      <p>Log In</p>
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
