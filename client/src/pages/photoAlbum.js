import { connect } from 'react-redux'
import {GET_USER, GET_INDEX, UPDATE_INDEX} from '../actions/index'
import PhotoAlbum from "../components/photoAlbum/photoAlbum"



const mapStateToProps = (state) => ({
  userName: state.userInfo.userName,
  index: state.indexManager.index
})

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: () => {
    dispatch(GET_USER("TEXT"))
    dispatch(GET_INDEX("TEXT"))
  },
  updateIndex: () => {
    dispatch(UPDATE_INDEX("TEXT"))
  }
  
})

const PhotoAlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoAlbum)

export default PhotoAlbumContainer
