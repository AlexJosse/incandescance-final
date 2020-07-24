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
              <Nav.Link href="/home" eventKey={1} ><S.ItemA><S.Text>Accueil</S.Text></S.ItemA></Nav.Link>
              <Nav.Link href="/showroom" eventKey={1} ><S.ItemA><S.Text>Showroom</S.Text></S.ItemA></Nav.Link>
              <Nav.Link href="/gallery"><S.ItemA><S.Text>Réalisations</S.Text></S.ItemA></Nav.Link>
              <NavDropdown title={<S.ItemA><S.Text>Poêles</S.Text></S.ItemA>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/PoelePellets"><S.ItemB><Row><S.Text>Poêles à Pellets</S.Text></Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/PoeleBois"><S.ItemB><Row><S.Text>Poêles à Bois</S.Text></Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/PoeleGaz"><S.ItemB><Row><S.Text>Poêles à Gaz</S.Text></Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<S.ItemA><S.Text>Cheminées</S.Text></S.ItemA>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="/CheminéesBois"><S.ItemB><Row><S.Text>Cheminées à Bois</S.Text></Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/CheminéesGaz"><S.ItemB><Row><S.Text>Cheminées à Gaz</S.Text></Row></S.ItemB></NavDropdown.Item>
                <NavDropdown.Item href="/CheminéesElectriques"><S.ItemB><Row><S.Text>Cheminées à Electriques</S.Text></Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<S.ItemA>L'entreprise</S.ItemA>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/Histoire"><S.ItemB><Row><S.Text>Qui sommes-nous ?</S.Text></Row></S.ItemB></NavDropdown.Item>
                  <NavDropdown.Item href="/Savoir"><S.ItemB><Row><S.Text>Savoir-faire</S.Text></Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<S.ItemA>Informatrions Pratiques</S.ItemA>} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/map"><S.ItemB><Row><S.Text>Plan d'accès</S.Text></Row></S.ItemB></NavDropdown.Item>
                  <NavDropdown.Item href="/contact"><S.ItemB><Row><S.Text>Nous contacter</S.Text></Row></S.ItemB></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Aide"><S.ItemA><S.Text>Aides Financières</S.Text></S.ItemA></Nav.Link>
              <Nav.Link href="/Qualibois"><S.ItemA><S.Text>Certification QUALIBOIS</S.Text></S.ItemA></Nav.Link>
              <Nav.Link href="/financement"><S.ItemA><S.Text>Financement Sans Frais</S.Text></S.ItemA></Nav.Link>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Col>
  </Row>
</Container>
    );
};

export default NavBar2;
