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

    const [filtered, setfiltered] = useState([])

    // Traigo los productos 
    useEffect(() => { dispatch(getAllProducts()); 
    }, [dispatch]);
    
    const products = useSelector((state) => state.products ? state.products : []);
    console.log(products)

    
        const inputHandler = (e) => { 
            e.preventDefault(e);
            setSearch({ name: e.target.value }); 
        };
        
    
    const filteredProducts = products?.filter((product) => product.name.includes(search.name) );
         console.log(filteredProducts);

    const onClickHandler = () => { 
        setfiltered(filteredProducts);
        dispatch(resultSearch(filteredProducts)) 
    };

    return (
        <div name="ContainerSearch" className="ContainerSearch">
            <input type='text' value={search.name} onChange={inputHandler} className="Search" placeholder="Search products ..."></input>
            <button onClick={onClickHandler} className="butonSearch"><img src="https://tinypic.host/images/2023/04/27/lupa2.png" alt="iconLupa" className="Lup"/>
            </button> 
        </div>
    )
}

export default SearchBar