
import React from "react";
import CategoryContainer from "../../Components/Cards/categoryContainer"
import "./Home.css"
import Carrousel from "../../Components/Carrousel/Carrousel";

const Home = () => {

    return(
        <div class="ContainerHome">
            <Carrousel/>
           
            <CategoryContainer/>
    
        </div>
    )
}

export default Home 