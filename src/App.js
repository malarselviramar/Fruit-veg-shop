import './App.css';

import { Routes, Route} from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Login from './Components/login/Login';
import DropdownProduct from './Components/layout/DropdownProduct';
import Footer from './Components/layout/Footer';
import Products from './Components/home/Products';
import Contact from './Components/contact/Contact';
import Cart from './Components/cart/Cart';
import MyOrders from './Components/myOrders/MyOrders';
import OrderDetails from './Components/myOrders/OrderDetails';



import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/product.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";
import "./styles/table.scss";
function App() {
  return (
    <div>

       <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/products' element={ <Products />} />
        <Route path='/contact' element={ < Contact />} />
        <Route path='/cart' element={ < Cart />} />
        <Route path='/myOrders' element={ <MyOrders />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        
       </Routes>
       <DropdownProduct />
 
       <Footer />
  </div>    
  );
}

export default App;
