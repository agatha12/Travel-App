import { connect } from 'react-redux'
import {GET_USER} from '../../actions/index'
import { UPDATE_USER } from '../../actions/index'
import NavBar from './NavBar'

const mapStateToProps = (state) => ({
  userName: state.userInfo.userName
})

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: () => {
    dispatch(GET_USER("TEXT"))
  },
  handleChange: id => {
        dispatch(UPDATE_USER(id))
  }
})

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default NavContainer


