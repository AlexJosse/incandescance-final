import React, { useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import * as S from "./style";
import Header from "../Header/index";
import Container from 'react-bootstrap/Container';
import Footer from "../Footer/index";
import Button from 'react-bootstrap/Button';
import Helmet from "react-helmet";

const mapStyles = {
  width: '100%',
  height: '100%'
};



const MapContainer = () => {
    const [showingInfoWindow, setInfoWindow] = useState(true);
    const [activeMarker, setMarker] = useState({});
    const [selectedPlace, setPlace] = useState({});

    const onMarkerClick = (props, marker, e) => {
      setInfoWindow(true);
      setMarker(marker);
      setPlace(props.name);
    };

    const onClose = props => {
      setInfoWindow(false);
      setMarker(null);
    };

    const goFacebook = () => {
       window.open("https://www.facebook.com/Incandescence-517594435066890/", "_blank");
    };

    const goInsta = () => {
       window.open("https://www.instagram.com/incandescence95220/", "_blank");
    };

    return (
      <>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Contacter incandescence</title>
        <meta
          charSet="utf-8"
          name="incandescence"
          content="Adresse, telephone, facebook"
        />
      <meta itemprop="name" content="myincandescence" />
        <meta
          itemprop="incandescence"
          content="Adresse, telephone, facebook "
        />
    </Helmet>
        <Header></Header>
        <S.Co>
          <S.Div1>
            <S.Text><strong>Adresse : </strong>222 Boulevard du Havre, 95220, La Patte d'Oie d'Herblay</S.Text><br>
          </br>
            <S.Text><strong>Téléphone :  </strong>01.39.78.96.95</S.Text><br>
            </br>
            <S.Text><strong>Mail : </strong>infos@incandescence-chauffage.com</S.Text><br>
          </br>
            <S.Text><strong>Facebook : </strong> <Button size="lg" variant="outline-primary">Rejoignez nous <a href="#/">
            <i onClick={goInsta} className="fa fa-facebook fa-2x"></i>
            </a></Button></S.Text><br>
          </br>
            <S.Text><strong>Instagram : </strong><Button size="lg" variant="outline-primary">Plus de vidéos <a href="#/">
              <i onClick={goFacebook} className="fa fa-instagram fa-2x"></i>
              </a></Button></S.Text><br>
          </br>
          </S.Div1>
          <S.Div>
            <div>
            <Map
                google={window.google}
                zoom={14}
                containerStyle={mapStyles}
                initialCenter={{
                 lat: '49.0016081',
                 lng: '2.180028'}}
                >
               <Marker
                 onClick={onMarkerClick}
                 name={'Incandescence'}
               />
               <InfoWindow
                 marker={activeMarker}
                 visible={showingInfoWindow}
                 onClose={onClose}
               >
               <div>
                 <h4>Incandescence</h4>
               </div>
              </InfoWindow>
             </Map>
             </div>
             <div>
               slslsl
             </div>
            </S.Div>
            <Footer></Footer>
            </S.Co>
      </>
    );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeHgAxWuGs6YBx9j3Ox4Ajpp9nnqrrkDU'
})(MapContainer);
