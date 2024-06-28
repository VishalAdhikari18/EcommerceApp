var storedData = {} ; 
const initialstate = {
        ...storedData
}

export const cart_items = (state=initialstate , action) => {
    
    switch(action.type){

        case 'ADD_TO_CART' :
            
            return{ 
                ...state,
                [action.payload.id]: action.payload.data 
            };    
        
             
        default : 
            return state ;
    }

}
