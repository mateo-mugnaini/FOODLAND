//IMPORT STYLE:
import "./SearchBar.css"
//IMPORT LIBRERYS:
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//IMPORT ACTION:
import { getAllProducts , resultSearch} from "../../redux/actions";

const SearchBar = () => { 

    const dispatch = useDispatch(); 
    const [search, setSearch] = useState({
        name:"", });

    const products = useSelector((state) => state.products);
    const aux = products.products;

    // Traigo los productos 
    useEffect(() => { dispatch(getAllProducts()); 
    }, [dispatch]);
    
    
    const filteredProducts = aux?.filter((product) => product.name.includes(search.name) );
    
//    console.log(filteredProducts, "after");

    const inputHandler = (e) => { 
        e.preventDefault(e);
        setSearch({ name: e.target.value }); 
    };
    
    const onClickHandler = () => { 
        dispatch(resultSearch(filteredProducts)) 
    };

    return (
        <div name="ContainerSearch" className="ContainerSearch">
            <input type='text' value={search.name} onChange={inputHandler} className="Search" placeholder="Search products ..."></input>
            <button onClick={() => onClickHandler(search.name)} className="butonSearch"><img src="https://tinypic.host/images/2023/04/27/lupa2.png" alt="iconLupa" className="Lup"/>
            </button> 
        </div>
    )
}

export default SearchBar