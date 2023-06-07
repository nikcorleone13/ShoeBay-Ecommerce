const reducerFunction = (state, action) => {
    console.log("value of state", action.type, action.payload);
    switch (action.type) {

        case 'INITIAL_API_DATA': {
            return {
                ...state,
                all_Data: action.payload,
                filter_Data: action.payload,
            }
        }
        case 'FILTER_CATEGORY': {
            const filterData = state.all_Data.filter((item) => item.type === action.payload);
            console.log("filt", filterData);

            return {
                ...state,
                filter_Data: filterData
            }
        }
        default:
            return state;

    }
}

export default reducerFunction;