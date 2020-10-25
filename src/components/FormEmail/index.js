import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import * as S from './style';
import Helmet from "react-helmet";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

const FormEmail = () => {

  function sendEmail(e) {
    init("user_dsgqWR5FcTMMs7JPkcBxg");
    e.preventDefault();

    emailjs.sendForm('1', 'template_sdv3zj8', e.target, 'user_dsgqWR5FcTMMs7JPkcBxg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return(

      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Contacter incandescence</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Contacter incandescence"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Contacter incandescence"
      />
  </Helmet>
      <Header></Header>
      <S.Div>
        <Row className="justify-content-md-center" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <form className="contact-form" onSubmit={sendEmail}>
            <S.Input type="hidden" name="contact_number" />
            <S.Input type="text" name="user_name" placeholder="Votre téléphone" />
            <S.Input type="email" name="user_email" placeholder="Votre email" />
            <label>Message</label>
            <S.Textarea name="message" />
            <S.Input type="submit" value="Envoyer" />
          </form>
        </Row>

      <Footer></Footer>
        </S.Div>
    </Container>
  );
};

export default  FormEmail;
