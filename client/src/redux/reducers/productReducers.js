import {
	GET_ALL_CATEGORIES,
	GET_ALL_PRODUCTS,
	HANDLE_SORTS,
	LOADING,
	READY,
	DETAIL_PRODUCT,
	GET_BY_CATEGORY,
	SET_PRODUCT,
	SET_FILTER_STATE,
} from "../constants/productConstants";

const initialState = {
	products: [],
	display: false,
	categories: [],
	AllProducts: [],
	product: {},
	filterState:true
  };
  const productsReducer = (state = initialState, action) => {
	switch (action.type) {
	  case LOADING:
		return {
		  ...state,
		  display: true,
		};
	  case READY:
		return {
		  ...state,
		  display: false,
		};
	  case GET_ALL_PRODUCTS:
		return {
		  ...state,
		  AllProducts: action.payload,
		};
	  case GET_BY_CATEGORY:
		return {
		  ...state,
		  products:action.payload
		}
	  case GET_ALL_CATEGORIES:
		return {
		  ...state,
		  categories: action.payload,
		};
	  case SET_PRODUCT:
		return {
		  ...state,
		  products:action.payload
		}
		case SET_FILTER_STATE:
			return {
			  ...state,
			  filterState:action.payload
			}
	  case DETAIL_PRODUCT:
		return {
		  ...state,
		  product: action.payload,
		};
	  case HANDLE_SORTS:
		const auxToOrder = state.products;
  
		console.log(action.payload);
  
		const toOrder = auxToOrder.map((product) => {
		  const normalizedPrice = parseFloat(
			product.price.toString().replace(".", "")
		  ); // Le quito los puntos a los precios
		  const normalizedName = product.name.replace(/[0-9/]+/g, ""); // Omitir dígitos y caracteres de fracción en el nombre del producto
  
		  return {
			...product,
			price: normalizedPrice,
			name: normalizedName.trim(), // Trimeo el nombre del producto para eliminar cualquier espacio en blanco extra
		  };
		});
  
		if (action.payload === "desc") {
		  const arrOrdenado = toOrder.sort(function (a, b) {
			if (a.name.toLowerCase() > b.name.toLowerCase()) {
			  return -1;
			}
			if (b.name.toLowerCase() > a.name.toLowerCase()) {
			  return 1;
			}
			return 0;
		  });
		  return {
			...state,
			products: arrOrdenado,
		  };
		}
  
		if (action.payload === "asc") {
		  const arrOrdenado = toOrder.sort(function (a, b) {
			if (a.name.toLowerCase() > b.name.toLowerCase()) {
			  return 1;
			}
			if (b.name.toLowerCase() > a.name.toLowerCase()) {
			  return -1;
			}
			return 0;
		  });
		  return {
			...state,
			products: arrOrdenado,
		  };
		}
		if (action.payload === "higher_price") {
		  const arrOrdenado = toOrder.sort((a, b) => b.price - a.price);
		  return {
			...state,
			products: arrOrdenado,
		  };
		} else {
		  const arrOrdenado = toOrder.sort((a, b) => a.price - b.price);
		  return {
			...state,
			products: arrOrdenado,
		  };
		}
	  default:
		return { ...state };
	}
  };
  
  export default productsReducer;