import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaApple } from 'react-icons/fa';


function DropdownProduct() {
 
 return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>  
      <Container>
   
        <Navbar.Brand>
        
    <Link to="/" >
    <div>
    <FaApple size={50} color="maroon" />
      
      </div>
    </Link>

  </Navbar.Brand>
  

  <Navbar.Toggle aria-controls='basic-navbar-nav' />
  <Navbar.Collapse id='basic-navbar-nav'>
    <Nav className='me-auto justify-content-end w-100'>
      <Nav.Link as={Link} to="/" className='active text-uppercase'>Home</Nav.Link>
      <Nav.Link as={Link} to="/products" className='active text-uppercase'>Products</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='text-uppercase'>Contact</Nav.Link>
      <Nav.Link as={Link} to="/cart" className='text-uppercase'>Cart</Nav.Link>
      <Nav.Link as={Link} to="/myOrders" className='text-uppercase'>MyOrders</Nav.Link>
      <Nav.Link as={Link} to="/orderDetails" className='text-uppercase'>OrderDetails</Nav.Link>
      <Nav.Link as={Link} to="/login" className='text-uppercase'>Login</Nav.Link>
      <Nav.Link as={Link} to="/about" className='text-uppercase'>About</Nav.Link>
    
    </Nav>
  </Navbar.Collapse>

         
       
      </Container>
</Navbar>
               
     
    </div>
  )
}

export default DropdownProduct;
