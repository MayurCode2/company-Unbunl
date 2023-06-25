import { createContext, useState } from "react";
import { productsdata } from "../data/Data";

export const ProductsContext= createContext();


const ProductsContextProvider =({ children}) =>{
    const [product,setProduct]=useState(productsdata)

    return(
    <ProductsContext.Provider value={{product,setProduct}}>
        {children}

        </ProductsContext.Provider>
    )
}


export default ProductsContextProvider;