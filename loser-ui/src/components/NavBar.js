import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';

function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect id='bar' fixed='top' bg='dark' expand='lg' variant='dark'>
                <Container>
                    <Navbar.Brand href='/' id='navbrand'>NBA Loser's Belt</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link className='my-navbar' href='/'>Home</Nav.Link>
                            <Nav.Link className='my-navbar' href='/about'>About</Nav.Link>
                            <Nav.Link className='my-navbar' href='/breakdown'>Breakdowns</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;