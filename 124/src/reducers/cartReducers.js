export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){

        case "ADD_TO_CART":
            return
        
        case "REMOVE_FROM_CART":
            return
        
        case "CLEAR_CART":
            return

        case "UPDATE_PRICE":
            return

        default:
            throw new Error("No case found!");
    }
}