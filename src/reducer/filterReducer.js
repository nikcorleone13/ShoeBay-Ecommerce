const reducerFunction = (state, action) => {
    // console.log("value of state", action.payload);
    switch (action.type) {

        case 'INITIAL_API_DATA': {
            return {
                ...state,
                all_Data: action.payload,
                filter_Data: action.payload,
            }
        }
        default:
            return state;

    }
}

export default reducerFunction;