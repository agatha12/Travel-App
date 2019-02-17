import { connect } from 'react-redux'
import {GET_USER} from '../../actions/index'
import Home from '../../components/Home/Home'

const mapStateToProps = (state) => ({
  userName: state.userInfo.userName
})

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: () => {
    dispatch(GET_USER("TEXT"))
  }
})

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer