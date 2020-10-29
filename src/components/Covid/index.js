import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Covid = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <Alert show={show} variant="success">
      <Alert.Heading>Confinement COVID 19 !</Alert.Heading>
      <Row>
        <Col>
          <p>
            Bonjour nous continuons notre activité pendant le confinement.
          Le magasin sera fermé, mais nous pouvons vous recevoir sur rendez-vous.
          <br></br>
          Contactez-nous par mail ou par téléphone. Les rendez-vous à domicile
         sont toujours d'actualités et notre planning n'est pour le moment
         pas impacté.
         <br></br>
         Bon courage et portez vous bien !
          </p>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
          Fermer
        </Button>
      </div>
    </Alert>

    {!show && <Button onClick={() => setShow(true)} variant="danger">Information Covid-19</Button>}
    </>
  );
};

export default Covid;
