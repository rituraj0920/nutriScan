import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import ThemeToggleButton from './ThemeToggleButton';

export default function AppHeader({onOpenLogin}){
  return (

    
      <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
          <div>
      {/* 2. Place it anywhere you want! Here it is floating in the top right */}
      

      {/* The rest of your Hero Section code goes here... */}
     
    </div>
          <Container>
          
            <Navbar.Brand href="#home" className="fw-bold text-success">EAT HEALTHY</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" href="/">
                
        
                  <div className="d-flex">
                  <button className="btn btn-primary px-4" onClick={onOpenLogin}>
                     Login
                  </button>
                  </div>
              
                <Button variant="outline-success" className="ms-lg-3">Join Movement</Button>
              </Nav>
            </Navbar.Collapse>
            <div className="ms-4">
        <ThemeToggleButton />
      </div>
          </Container>
        </Navbar>
  
  );
};

