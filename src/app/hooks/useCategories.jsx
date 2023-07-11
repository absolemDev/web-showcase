import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

const CategoriesContext = React.createContext();

export const useCategories = () => {
  return useContext(CategoriesContext);
};

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.categories.fetchAll().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default CategoriesProvider;
