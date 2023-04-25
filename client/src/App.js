import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home} from "./Views/Home"

function App() {
  return (
    <div className="App">

      <Routes>
        {/* -----------------Routes generals -----------------*/}
      <Route exact path="/" element={<Home/>} name="Home" key="Home"></Route>
      <Route path ="/login" element={""} name="Login" key="Login"></Route>
      <Route path ="/register" element={""} name="Register" key="Register"></Route>
        {/* -----------------Routes Users -----------------*/}
      <Route path ="/detail/:id" element={""} name="DetailProducts" key="DetailProducts"></Route>
      <Route path ="/profile" element={""} name="ProfileUser" key="ProfileUser"></Route>
      <Route path ="/ordersUs" element={""} name="OrdersUser" key="OrdersUser"></Route>        
      <Route path ="/widget" element={""} name="Widget" key="Widget"></Route>
      {/* -----------------Routes Admins -----------------*/}
      <Route path ="/products" element={""} name="products" key="products"></Route>
      <Route path ="/OrdersAdm" element={""} name="OrdersAdm" key="OrdersAdm"></Route>
      <Route path ="/create" element={""} name="create" key="create"></Route>
      <Route path ="/edit" element={""} name="edit" key="edit"></Route>
      <Route path ="/detailOrder/:i" element={""} name="detailOrder" key="detailOrder"></Route>
      </Routes>
    </div>
  );
}

export default App;