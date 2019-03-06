const indexManager = (state, action) => {
    switch (action.type) {
        case 'UPDATE_INDEX':

            return { ...state,
                index: action.text
            }
        case 'GET_INDEX':

            return {...state}
    
        default:

            return  {...state}
    }
}




export default indexManager