import { connect } from 'react-redux'
import {GET_USER} from '../actions/index'
import PhotoForm from "../components/photoAlbum/PhotoForm"



const mapStateToProps = (state) => ({
  userName: state.userInfo.userName
})

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: () => {
    dispatch(GET_USER("TEXT"))
  }
})

const PhotoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm)

export default PhotoFormContainer