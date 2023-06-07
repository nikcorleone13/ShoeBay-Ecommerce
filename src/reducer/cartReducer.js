export const cartReducerFunction = (state, action) => {
    console.log("cart red", state, action.type, action.payload);
    switch (action.type) {
        case 'ADD_TO_CART': {
            const objToAdd = action.payload;
            const findObj = state.find(({ _id }) => action.payload._id === _id);
            if (!findObj) {
                return [...state, { ...objToAdd, quantity: 1 }];
            } else {
                const updatedState = state.map((item) => {
                    if (item._id === findObj._id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return updatedState;
            }
        }
        case 'REMOVE_FROM_CART': {

            return state.filter(({ _id }) => _id !== action.payload._id);
        }
        case 'INCREASE_QUANTITY_OF_PARTICULAR_ITEM': {
            const updatedState = state.map((item) => {
                if (item._id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return updatedState;
        }
        case 'DECREASE_QUANTITY_OF_PARTICULAR_ITEM': {
            const updatedState = state.map((item) => {
                if (item._id === action.payload) {
                    if (item.quantity === 1) {
                        // Remove the item from the cart if quantity is 1
                        return null;
                    } else {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                }
                return item;
            });

            // Filter out the null values from the updated state
            const filteredState = updatedState.filter((item) => item !== null);
            return filteredState;
        }

        default:
            return state;
    }
};
