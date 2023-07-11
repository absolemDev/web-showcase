import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

const ShowcasesContext = React.createContext();

export const useShowcases = () => {
  return useContext(ShowcasesContext);
};

const ShowcasesProvider = ({ children }) => {
  const [showcases, setShowcases] = useState([]);
  const [currentShowcase, setCurrentShowcase] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.showcases.fetchAll().then((data) => {
      setShowcases(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  const getNameShowcase = (id) => {
    return showcases.find((s) => s._id === id).name;
  };

  const getCurrentShowcase = (id) => {
    if (id === null) {
      setCurrentShowcase(null);
    } else {
      setCurrentShowcase(showcases.find((s) => s._id === id));
    }
  };

  return (
    <ShowcasesContext.Provider
      value={{
        showcases,
        isLoading,
        currentShowcase,
        getCurrentShowcase,
        getNameShowcase
      }}
    >
      {children}
    </ShowcasesContext.Provider>
  );
};

ShowcasesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ShowcasesProvider;
