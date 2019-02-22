import { connect } from 'react-redux'
import {OPEN_MODAL} from '../../actions/index'
import { CLOSE_MODAL } from '../../actions/index'
import modal from './modal'


const mapStateToProps = (state) => ({
  modalIsOpen: state.modalControl.modalIsOpen,
  userName: state.userInfo.userName
})

const mapDispatchToProps = (dispatch) => ({
  openModal: () => {
    dispatch(OPEN_MODAL())
  },
  closeModal: id => {
        dispatch(CLOSE_MODAL())
  }
})

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(modal)

export default ModalContainer