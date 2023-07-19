import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = React.createContext();

export const useApp = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [filter, setFilter] = useState(null);

  return (
    <AppContext.Provider value={{ filter, setFilter }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default AppProvider;
