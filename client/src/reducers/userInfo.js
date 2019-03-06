const userInfo = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':

            return { ...state,
                userName: action.text
            }
        case 'GET_USER':

            return {...state}
    
        default:

            return  {...state}
    }
}




export default userInfo