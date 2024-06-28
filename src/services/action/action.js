export const addToCart = ( id, data ) => {
     
    return{
        type : 'ADD_TO_CART' ,
        payload : {id, data }
    }
}
 