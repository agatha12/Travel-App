const userInfo = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            console.log(state)
            console.log(action.text)

            return { ...state,
                userName: action.text
            }
        case 'GET_USER':
            console.log("get" + state)
            return {...state}
    
        default:
            console.log("default" + state)
            return  {...state}
    }
}




export default userInfo