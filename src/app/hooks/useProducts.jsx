import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

const ProductsContext = React.createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsOfShowcase, setProductsOfShowcase] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.products.fetchAll().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  const getProductsOfShowcase = (idShowcase) => {
    setProductsOfShowcase(products.filter((p) => p.showcase === idShowcase));
  };

  const getCurrentProduct = (id) => {
    if (id === null) {
      setCurrentProduct(null);
    } else {
      setCurrentProduct(products.find((s) => s._id === id));
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        currentProduct,
        getProductsOfShowcase,
        productsOfShowcase,
        getCurrentProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProductsProvider;
