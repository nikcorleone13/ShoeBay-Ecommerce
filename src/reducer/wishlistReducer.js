import { ProductsDataContext } from "../contexts/ProductsContext";

export const wishlistReducerFunction = (state, action) => {
    console.log("wishlist", state, action.payload, action.type)
    switch (action.type) {

        case 'ADD_TO_WISHLIST': {
            const findObj = state.find(({ _id }) => action.payload._id === _id);
            if (!findObj) {
                return [...state, action.payload];
            } else {
                return state;
            }
        }

        case 'REMOVE_FROM_WISHLIST': {
            return state.filter(({ _id }) => _id !== action.payload);
        }
        default:
            return state;
    }

}