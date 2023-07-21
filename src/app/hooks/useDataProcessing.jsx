import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getShowcases } from "../store/showcases";
import { getProducts } from "../store/products";
import { useLocation } from "react-router-dom";
import { sorting } from "../utils/sorting";

const DataProcessingContext = React.createContext();

export const useDataProcessing = () => {
  return useContext(DataProcessingContext);
};

const DataProcessingProvider = ({ children }) => {
  const [entities, setEntities] = useState([]);
  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState(null);
  const [sort, setSort] = useState({ path: "name", order: "asc" });
  // const [currentPage, setCurrentPage] = useState(1);
  const showcases = useSelector(getShowcases());
  const products = useSelector(getProducts());

  const handleSearch = (value) => {
    const trimedValue = value.trim();
    if (trimedValue) {
      if (filter) setFilter(null);
      setSearch(new RegExp(`^${trimedValue}|[^а-яА-Я]${trimedValue}`, "i"));
    }
  };

  const handleFilter = (value) => {
    if (search) setSearch(null);
    setFilter(value);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const target = pathname.split("/")[1];
    const arrTargets = target === "showcases" ? showcases : products;
    const filteredTargets = search
      ? arrTargets.filter((item) => search.test(item.name))
      : filter
      ? arrTargets.filter((item) => {
          if (target === "showcases") {
            return item.classifire.includes(filter);
          } else {
            return item.classifire === filter;
          }
        })
      : arrTargets;
    const sortedTargets = sorting([...filteredTargets], sort);
    // const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    setEntities(sortedTargets);
  }, [filter, search, sort]);

  return (
    <DataProcessingContext.Provider
      value={{ entities, filter, handleFilter, handleSort, handleSearch }}
    >
      {children}
    </DataProcessingContext.Provider>
  );
};

DataProcessingProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default DataProcessingProvider;
