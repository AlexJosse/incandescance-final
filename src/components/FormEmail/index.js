import React from "react";
import { useForm } from 'react-hook-form'

import Container from 'react-bootstrap/Container';
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import Helmet from "react-helmet";

const FormEmail = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return(

      <Container fluid>
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
        <S.Form>
          <form onSubmit={handleSubmit(onSubmit)}>
          <S.P>infos@incandescence-chauffage.com</S.P>
          <S.Div>
           <S.Input type="text" placeholder="Nom" name="Nom" ref={register({required: true, maxLength: 100})} />
          </S.Div>
          <S.Div>
           <S.Input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
          </S.Div>
          <S.Div>
            <S.Input type="tel" placeholder="Téléphone" name="Téléphone" ref={register({maxLength: 12})} />
          </S.Div>
          <S.Div>
            <S.Input type="text" placeholder="Titre" name="Titre" ref={register({required: true})} />
           </S.Div>
           <S.Div>
            <S.TextArea ref={register({required: true})}> Votre message</S.TextArea>
           </S.Div>
           <S.DivSend>
            <S.InputSend type="submit" value="Envoyer"/>
          </S.DivSend>
        </form>
      </S.Form>
      <Footer></Footer>
    </Container>
  );
};

export default  FormEmail;
