import { connect } from 'react-redux'
import {GET_USER} from '../actions/index'
import PhotoAlbum from "../components/photoAlbum/PhotoForm"



const mapStateToProps = (state) => ({
  userName: state.userInfo.userName
})

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: () => {
    dispatch(GET_USER("TEXT"))
  }
})

const PhotoAlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoAlbum)

export default PhotoAlbumContainer