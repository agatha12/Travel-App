const modalControl = ( state, action) => {
    switch (action.type){
        case 'OPEN_MODAL':
        
        
        return { ...state,
            modalIsOpen: true
        }
        case 'CLOSE_MODAL' :
        
        return { ...state,
            modalIsOpen: false
        }
            
        
        default:
        
        return { ...state,
            modalIsOpen: false
        }
    }
}

export default modalControl