import { connect } from 'react-redux'
import {GET_USER} from '../actions/index'
import Form from './itinerary'

const mapStateToProps = (state) => ({
  userName: state.userInfo.userName
})

const mapDispatchToProps = (dispatch) => ({
  onPageLoad: () => {
    dispatch(GET_USER("TEXT"))
    
  }
})

const ItinFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default ItinFormContainer