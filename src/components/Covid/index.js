import React, { useLayoutEffect, useRef, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import * as S from "./style";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Covid = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <Alert show={show} variant="success">
      <Alert.Heading>Information Covid-19 !</Alert.Heading>
      <Row>
        <Col>
          <p>
            Geste barrière, désinfection des mains et port du masque obligatoire dans notre magasin
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
