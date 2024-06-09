
import React, { createContext, useState, useContext } from 'react';

const SearchedProductsContext = createContext();

export const SearchedProductsProvider = ({ children }) => {
    const [searchedProducts, setSearchedProducts] = useState([]);

    return (
        <SearchedProductsContext.Provider value={{ searchedProducts, setSearchedProducts }}>
            {children}
        </SearchedProductsContext.Provider>
    );
};

export const useSearchedProducts = () => {
    return useContext(SearchedProductsContext);
};
