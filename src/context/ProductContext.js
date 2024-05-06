import { createContext, useEffect, useReducer } from "react";
import ProductReducer from '../reducers/ProductReducer'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState)
    const GetProduct = async (data) => {
        dispatch({ type: "SET_LOADING" })
        try {
            let urlData = await fetch(data)
            if (!urlData.ok) {
                throw new Error('Network response was not ok');
            }
            let response = await urlData.json()
            dispatch({ type: "SET_API_DATA", payload: response })
            
        } catch (error) {
            dispatch({ type: "API_ERROR" })
            
        }



    }

    useEffect(() => {
        GetProduct(API)
    }, [])


    return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
}

export { AppProvider, AppContext }