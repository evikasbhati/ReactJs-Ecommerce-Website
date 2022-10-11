import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import SignUp from "./Components/SignUp/SignUp";
import Cart from "./Pages/Cart"
import Success from "./Pages/Success";
import AdminHome from "./admin/AdminPages/AdminHome/AdminHome";
import UserList from './admin/AdminPages/UserList/UserList';
import User from './admin/AdminPages/User/User';
import AddUser from './admin/AdminPages/AddUser/AddUser';
import ProductList from './admin/AdminPages/ProductList/ProductList';
import EProduct from './admin/AdminPages/Product/EProduct';
import AddProduct from './admin/AdminPages/AddProduct/AddProduct';


import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
    {/* // <HashRouter> */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shop/:catogory" element={ <Shop /> } />
        <Route path="/product/:id" element={ <Product /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/success" element={ <Success /> } />
        <Route path="/login" element={ user ? <Navigate to="/" /> : <Login /> } />
        <Route path="/admin" element={ <AdminHome /> } />
        <Route path="#/Register" element={ <SignUp /> } />
        <Route path="/shop:catogory" element={ <Shop /> } />
        <Route path="/admin" element={ <AdminHome /> } />
        <Route path="/users" element={ <UserList /> } />
        <Route path="/user" element={ <User /> } />
        <Route path="/adduser" element={ <AddUser /> } />
        <Route path="/products" element={ <ProductList /> } />
        <Route path="/products/:productId" element={ <EProduct /> } />
        <Route path="/addproduct" element={ <AddProduct /> } />
      </Routes>
      {/* // </HashRouter> */}
    </Router> 

  );
}

export default App;
