import React, {useState, useEffect, useContext} from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MainContext } from "../App";
import {useNavigate} from 'react-router-dom'


function Navigation() {
  const {movies, setMovies, url, setUrl, input, setInput} = useContext(MainContext);
  const navigate = useNavigate()

  const onFormSubmit = (e) =>{
    e.preventDefault();
    setUrl(`http://localhost:5867/movie/${input}`)

    setInput ('');
    console.log(`Form submitted using ${input}`)
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">#1 Movie Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/movie">Movie Library</Nav.Link>
            <Nav.Link href="/add_movie">Add to Library</Nav.Link>
            <Nav.Link href="/remove">Remove From Library</Nav.Link>
            
          </Nav>
          <Form className="d-flex" onSubmit ={onFormSubmit}>
            <Form.Control
              type="search"
              placeholder="Search for a movie..."
              className="me-2"
              aria-label="Search"
              value ={input}
              onChange ={(e) => setInput(e.target.value)}
            />
            <Button id = 'search button' variant="outline-success" onClick ={onFormSubmit}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;