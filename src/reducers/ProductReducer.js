export default function ProductReducer(state, action) {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":
            const fetchProduct = action.payload.filter((elem) => {
                return elem.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: fetchProduct,
            } ;
        case "API_ERROR":
            return{
                ...state,
                isError: true,
                isLoading: false,
            }
        default: return state;
    }

}
