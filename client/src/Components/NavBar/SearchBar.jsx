//IMPORT STYLE:
import "./SearchBar.css";
//IMPORT LIBRERYS:
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//IMPORT ACTION:
import { resultSearch } from "../../redux/actions";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const inputHandler = (e) => {
    e.preventDefault(e);
    setSearch(e.target.value);
  };

  const onClickHandler = () => {
    dispatch(resultSearch(search));
    setTimeout(() => {
      navigate("/productSearch");
    }, 1500);
  };

  return (
    <div name="ContainerSearch" className="ContainerSearch">
      <input
        type="text"
        value={search.name}
        onChange={inputHandler}
        className="Search"
        placeholder="Search products ..."
      ></input>
      <button onClick={onClickHandler} className="butonSearch">
        <img
          src="https://tinypic.host/images/2023/04/27/lupa2.png"
          alt="iconLupa"
          className="Lup"
        />
      </button>
    </div>
  );
};
export default SearchBar;
