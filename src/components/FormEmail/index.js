import React from "react";
import { useForm } from 'react-hook-form'
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";

const FormEmail = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return(
    <>
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
    </>
  );
};

export default  FormEmail;