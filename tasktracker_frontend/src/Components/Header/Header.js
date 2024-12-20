import React from 'react'
import './Header.css'
import todologo from '../../assets/images/todologo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';





function Header() {
  return (
    <div>
    <Navbar expand="lg" className="navbar">
   <Container>
     <Navbar.Brand href="/" className='navbrands' style={{'color':'#2c0467','fontWeight':'500'}}><img src={todologo} className='logo'/>Task Tracker</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="me-auto">
         <Nav.Link href="#home">
           <Link to="/" className='navitem'>Home</Link>  
         </Nav.Link>
         <Nav.Link href="#home">
           <Link to="/tasklist" className='navitem'>Task List</Link>  
         </Nav.Link>
         <Nav.Link href="#home">
           <Link to="/newtask" className='navitem'>Create Task</Link>  
         </Nav.Link>
         <Nav.Link href="#home">
           <Link to="/calender" className='navitem'>Calender</Link>  
         </Nav.Link>
       </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 </div>
  )
}

export default Header
