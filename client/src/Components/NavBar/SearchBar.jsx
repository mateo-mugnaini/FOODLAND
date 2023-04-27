//IMPORT STYLE:
import "./SearchBar.css"
//IMPORT LIBRERYS:
import { useState } from "react";
import { useDispatch } from "react-redux";
//IMPORT ACTION:
import { getProduct } from "../../redux/actions";

const SearchBar = () =>{

const [text,setText] = useState("");
const dispatch = useDispatch();

const inputHandler = (e) => {
    e.preventDefault();
    setText(e.target.value);
};

const onClickHandler = () => {
    dispatch(getProduct(text));
}

    return (
        <div name="ContainerSearch" class="ContainerSearch">
            <input type='search' value={text} onChange={inputHandler} class="Search" placeholder="Search products ..."></input>
            <button onClick={() => onClickHandler(text)} class="butonSearch"><img src="https://tinypic.host/images/2023/04/27/lupa2.png" alt="iconLupa" class="Lup"/>
            </button> 
        </div>
    )
}

export default SearchBar