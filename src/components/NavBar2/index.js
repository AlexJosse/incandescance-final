import React, { useState }  from "react";
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as S from "./style";

const NavBar2 = () => {
  const [activeTab, setactiveTab] = useState("/home");

  const handleSelect = (key) => {

  };

  return (
    <Container fluid>
      <Row xs={1} md={1} lg={1}>
        <Col>
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav ActiveKey={1} onSelect={handleSelect()} className="mr-auto">
              <Nav.Link href="/home" eventKey={1} ><S.ItemA>Accueil</S.ItemA></Nav.Link>
              <Nav.Link href="/showroom" eventKey={1} ><S.ItemA>Showroom</S.ItemA></Nav.Link>
              <Nav.Link href="/gallery"><S.ItemA>Réalisations</S.ItemA></Nav.Link>
              <NavDropdown title={<S.ItemA>Poêles</S.ItemA>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/PoelePellets"><S.ItemB><Row>Poêles à Pellets</Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/PoeleBois"><S.ItemB><Row>Poêles à Bois</Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/PoeleGaz"><S.ItemB><Row>Poêles à Gaz</Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<S.ItemA>Cheminées</S.ItemA>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/CheminéesBois"><S.ItemB><Row>Cheminées à Bois</Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/CheminéesGaz"><S.ItemB><Row>Cheminées à Gaz</Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/CheminéesElectriques"><S.ItemB><Row>Cheminées à Electriques</Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<S.ItemA>L'entreprise</S.ItemA>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Histoire"><S.ItemB><Row>Qui sommes-nous ?</Row></S.ItemB></NavDropdown.Item>
                  <NavDropdown.Item href="/Savoir"><S.ItemB><Row>Savoir-faire</Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<S.ItemA>Informatrions Pratiques</S.ItemA>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/map"><S.ItemB><Row>Plan d'accès</Row></S.ItemB></NavDropdown.Item>
                  <NavDropdown.Item href="/contact"><S.ItemB><Row>Nous contacter</Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Aide"><S.ItemA>Aides Financières</S.ItemA></Nav.Link>
              <Nav.Link href="/Qualibois"><S.ItemA>Certifications</S.ItemA></Nav.Link>
              <Nav.Link href="/financement"><S.ItemA>Financement Sans Frais</S.ItemA></Nav.Link>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Col>
  </Row>
</Container>
    );
};

export default NavBar2;
