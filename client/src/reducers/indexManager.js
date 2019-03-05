const indexManager = (state, action) => {
    switch (action.type) {
        case 'UPDATE_INDEX':
            console.log(state)
            console.log(action.text)

            return { ...state,
                index: action.text
            }
        case 'GET_INDEX':
            console.log("get" + state)
            return {...state}
    
        default:
            console.log("default" + state)
            return  {...state,
            index: null}
    }
}




export default indexManager