import React from 'react';
import Modal from 'react-modal';
import './NavBar.css'
import PropTypes from 'prop-types'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  modalButton: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "white"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class NavModal extends React.Component {



  render() {
    return (
      <div>
        <button id="NavModalButton" style={customStyles.modalButton} onClick={this.props.openModal}>Login</button>
        <Modal
          isOpen={this.props.modalIsOpen}
         
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Nav Modal"
        >

             <div id="logindiv">
            <h1>Travel App</h1>
            <h4>Sign In</h4>
                <input onChange={this.props.handleInputChange} name="username" id="username" placeholder="email" value={this.props.username}></input><br></br>
                <input onChange={this.props.handleInputChange} name="password" type="text" id="password" placeholder="password (must be at least 6 characters long)" value={this.props.password}></input><br></br>
                <button onClick={this.props.login} className="modalButton" id="loginbutton">Log In</button>
                <button onClick={this.props.signup} className="modalButton"  id="signupbutton">Sign Up</button>
                <button onClick={this.props.passwordReset} className="modalButton" >Forgot your password?</button>
            </div>
        
       
        </Modal>
      </div>
    );
  }
}

NavModal.props = {
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  modalIsOpen: PropTypes.boolean,
  userName: PropTypes.string
}

export default NavModal