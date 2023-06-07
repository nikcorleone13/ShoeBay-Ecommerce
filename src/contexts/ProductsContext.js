import { createContext, useEffect, useReducer } from "react";

import { getProductsAPI } from "../apiHelpers/apiHelpers";
import reducerFunction from "../reducer/filterReducer";

export const ProductsDataContext = createContext();

const initialData = {
    all_Data: [],
    filter_Data: [],
}

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, initialData);

    const getAPIData = async () => {
        try {
            const res = await getProductsAPI();
            const products = res?.data.products;
            // console.log("data", products);
            dispatch({ type: 'INITIAL_API_DATA', payload: products })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAPIData();
    }, [])
    return (
        <ProductsDataContext.Provider value={{ data: { ...state }, dispatch: dispatch }}>
            {children}
        </ProductsDataContext.Provider>
    )
}