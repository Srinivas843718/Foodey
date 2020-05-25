const menureducer = (state, action) => {

    const {type,payload:context}= action
    const {burger,pizza,pasta,biryani,noodles,dessert,cart}=state;

    switch (type) {
        case 'API_CALL': {
            return{
                ...state,
                ...context
            }
        }
        case 'CART': {
            console.log(cart)
            return{
                ...state,
                ...context
            }
        }
        case 'ADD_FRONTEND_ITEM1': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, burger[index]],
            }
        }
        case 'ADD_FRONTEND_ITEM2': {
            const { index } = context;
       
            return {
                ...state,
                 cart: [...cart, pizza[index]],
            }
        }
        case 'ADD_FRONTEND_ITEM3': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, pasta[index]],
            }
        }
        case 'ADD_FRONTEND_ITEM4': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, biryani[index]],
            }
        }
        case 'ADD_FRONTEND_ITEM5': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, noodles[index]],
            }
        }
        case 'ADD_FRONTEND_ITEM6': {
            const { index } = context;
       
            return {
                ...state,
                cart: [...cart, dessert[index]],
            }
        }
        case 'DELETE_ITEMS': {
            const { index } = context;
            cart.splice(index, 1)
            return {
                ...state,
                cart: [...cart]
            }
        }
        default:{
            return state
        }
    }
}
export default menureducer