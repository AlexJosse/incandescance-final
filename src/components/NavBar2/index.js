import React  from "react";
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const NavBar2 = () => {

  return (

      <Container fluid>
    <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Acceuil</Nav.Link>
      <Nav.Link href="/showroom">Showroom</Nav.Link>
      <Nav.Link href="/gallery">Réalisations</Nav.Link>
      <NavDropdown title="Poëles" id="basic-nav-dropdown">
        <NavDropdown.Item href="/PoelePellets">Poêles à Pellets</NavDropdown.Item>
        <NavDropdown.Item href="/PoeleBois">Poêles à Bois</NavDropdown.Item>
        <NavDropdown.Item href="/PoeleGaz">Poêles à Gaz</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Cheminées" id="basic-nav-dropdown">
        <NavDropdown.Item href="/CheminéesBois">Cheminées à Bois</NavDropdown.Item>
        <NavDropdown.Item href="/CheminéesGaz">Cheminées à Gaz</NavDropdown.Item>
        <NavDropdown.Item href="/CheminéesElectriques">Cheminées électriques</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="L'entreprise" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Histoire">Qui sommes-nous ?</NavDropdown.Item>
        <NavDropdown.Item href="/Savoir">Savoir-faire</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Informations Pratiques" id="basic-nav-dropdown">
        <NavDropdown.Item href="/map">Plan d'accès</NavDropdown.Item>
        <NavDropdown.Item href="/contact">Nous contacter</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/Aide">Aides Financières</Nav.Link>
      <Nav.Link href="/Qualibois">Certifications</Nav.Link>
      <Nav.Link href="/Financement">Financement sans frais</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</Container>
    );
};

export default NavBar2;
