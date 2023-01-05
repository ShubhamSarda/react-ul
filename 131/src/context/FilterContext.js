import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        });
    }

    function bestSeller(products){
        return state.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }

    function inStock(products){
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }
    
    function sort(products){
        if(state.sortBy === "lowtohigh"){
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }
        if(state.sortBy === "hightolow"){
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function rating(products){
        if(state.ratings === "4STARSABOVE"){
            return products.filter(product => product.rating >= 4);
        }
        if(state.ratings === "3STARSABOVE"){
            return products.filter(product => product.rating >= 3);
        }
        if(state.ratings === "2STARSABOVE"){
            return products.filter(product => product.rating >= 2);
        }
        if(state.ratings === "1STARSABOVE"){
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));

    const value = {
        state, 
        dispatch,
        products: filteredProductList,
        initialProductList
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}