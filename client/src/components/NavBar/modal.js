import React from 'react';
import Modal from 'react-modal';
import './NavBar.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Example extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,

    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

             <div id="logindiv">
            <h1>Travel App</h1>
            <h4>Sign In</h4>
                <input onChange={this.props.handleInputChange} name="username" id="username" placeholder="username" value={this.props.username}></input><br></br>
                <input onChange={this.props.handleInputChange} name="password" type="text" id="password" placeholder="password" value={this.props.password}></input><br></br>
                <button onClick={this.props.login} className="btn btn-action" id="loginbutton">Log In</button>
                <button onClick={this.props.signup} className="btn btn-action" id="signupbutton">Sign Up</button>
                <button onClick={this.props.logout} className="btn btn-action" id="logoutbutton">Log Out</button>
            </div>
        
          <button onClick={this.closeModal}>close</button>
       
        </Modal>
      </div>
    );
  }
}

export default Example