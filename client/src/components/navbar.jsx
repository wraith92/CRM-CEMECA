// src/components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import  {logout} from '../actions/authAction'
const NavbarComponent = () => {
    const dispatch=useDispatch();
    const auth=useSelector(state=>state.auth);
    const {user}=auth;
    const isAdmin = user && user.roles.includes('ROLE_SUPERADMIN');
    const logoutHandler=()=>{
      dispatch(logout());
    }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">CRM CEMECA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Societes</Nav.Link>
          <Nav.Link as={Link} to="/users">Users</Nav.Link>
          <Nav.Link as={Link} to="/interlocuteurs">Interlocuteurs</Nav.Link>
          <Nav.Link as={Link} to="/actions">Actions</Nav.Link>
          {user ? (
            <Nav.Link as={Link} to="/login" onClick={logoutHandler}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          {isAdmin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
