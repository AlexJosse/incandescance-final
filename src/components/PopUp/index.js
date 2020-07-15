import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as S from "./style";

class PopUp extends React.Component{
    constructor(props){
      super(props);
      this.state = {viewPopup: false};
    }

    componentDidMount(){
        let visited = localStorage["alreadyVisited"];
        if(visited) {
             this.setState({ viewPopup: false })
        } else {
             localStorage["alreadyVisited"] = true;
             this.setState({ viewPopup: true});
        }
      };

    ClosePopUp = () => {
        this.setState({viewPopup: false})
    }

    render() {
        return(<Modal
                  aria-labelledby='modal-label'
                  autoFocus={false}
                  show={this.state.viewPopup}
                  onHide={this.close}>
                      <S.Div>
                        <Modal.Title>Promotion !</Modal.Title>
                        <Modal.Body>
                            <p>Promotion sur la marque MCZ de 10 % et sur la marque KALFIRE.</p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={this.ClosePopUp}>Fermer</Button>
                          <Button variant="primary">Voir la promotion</Button>
                        </Modal.Footer>
                      </S.Div>
                </Modal>);
     }
};
export default PopUp;
