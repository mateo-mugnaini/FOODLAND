//IMPORT IMAGES
import logofoot from "../../Imgs/LogosSVG/logo-color.png"
//IMPORT STYLES:
import "./Footer.css"
//IMPORT REACT:
// import { useState } from "react"
// import { useDispatch } from "react-redux"
// //IMPORT ACTION:
// import {postSuscribe} from "../../redux/actions"

const Footer = () =>{

    const logoPng = logofoot
    //----------------------Armé esto para el form , pero no se si esta bien ------
    // const [suscribe, setSuscribe] = useState({
    //     email:"",
    // });
    // const dispatch = useDispatch();

    // const handleSubmit =() =>{
    //     let form = true;
    //     if(suscribe["email"] === null){ form = false; alert("Please complete the field")}

    //     if(form){
    //         dispatch(postSuscribe(suscribe))
    //         .then(() => alert("Email added"));
    //         } else {
    //         return alert("Please try again");
    //         }
    //     }
        
    return(
        <div name="ContainterFooter" class="ContainterFooter">

            {/* -----------Logo FootLand --------------*/}
            <div name="LogoFooter" class="divLogo">
                <img src={logoPng} alt="LogoFoodLand" className="LogoFooter"/>
            </div>

            {/* -----------Linkedins y Menu--------------*/}

             <div name="Menu" class="MenuFooter">
                <div name="contact" class="contact">
                    <h2>Developed by:</h2>
                    <a href="/" name="linkeding1"  key="Linkeding1" class="linksFooter">Sofia Perone</a>
                    <a href="/" name="linkeding2"  key="Linkeding2" class="linksFooter">Bárbara Espinola</a>
                    <a href="/" name="linkeding3"  key="Linkeding3" class="linksFooter">Mateo Mugnaini</a>
                    <a href="/" name="linkeding4"  key="Linkeding4" class="linksFooter">Carlos Eduardo Palomo Serna</a>
                    <a href="/" name="linkeding5"  key="Linkeding5" class="linksFooter">Gustavo Gomez Villafañe</a>
                    <a href="/" name="linkeding6"  key="Linkeding6" class="linksFooter">Jeffer Camilo Romero</a>
                </div>
                <div name="Menupages" class="menuPages">
                <h2>Menu</h2>
                    <a href="/" name=""  key="" class="linksMenu">Home</a>
                    <a href="/products" name=""  key="" class="linksMenu">Products</a>
                    <a href="/" name=""  key="" class="linksMenu">Contacs us</a>
                    <a href="/about" name=""  key="" class="linksMenu">About</a>
                </div>

            {/* -----------Form to Suscribe --------------*/}
                <div name="RegisterEmail">

                {/* <form onSubmit={handleSubmit}> */}
                    <form > 
                        <h2>Suscribe to Foodland ♥</h2>
                        <p>subscribe and know our offers</p>
                        {/* <input type="email" placeholder="Email" class="SuscribeEmail" value={suscribe.email}></input> */}
                        <input type="email" placeholder="Email" class="SuscribeEmail"></input>
                        <button type="submit" class="SuscribeButton">Enter</button>
                    </form>

                    <h3>Find us on our social networks!</h3>
                    <img name="iconFooterSocial" class="iconFooterSocial" alt="FBIcon" src="https://tinypic.host/images/2023/04/27/facebook.png"/>
                    <img name="iconFooterSocial" class="iconFooterSocial" alt="IGICon" src="https://tinypic.host/images/2023/04/27/instagram.png"/>
                    <img name="iconFooterSocial" class="iconFooterSocial" alt="WAICon" src="https://tinypic.host/images/2023/04/27/whatsapp.png"/>
                    <a href="https://www.soyhenry.com/"><img src="https://tinypic.host/images/2023/04/26/logoOG.png" name="LogoHenry" alt="LogoHenry" class="LogoHenry"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Footer