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
    setSearch(new RegExp(`^${value}|[^а-яА-Я]${value}`, "i"));
  };
  const handleFilter = (value) => {
    setFilter(value);
  };
  const handleSort = (value) => {
    setSort(value);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const target = pathname.split("/")[1];
    const arrTargets =
      (target === "showcases" && showcases) ||
      (target === "products" && products);
    const filteredTargets = search
      ? arrTargets.filter((item) => search.test(item.name))
      : filter
      ? arrTargets.filter((item) => item.classifire === filter)
      : arrTargets;
    const sortedTargets = sorting([...filteredTargets], sort);
    // const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    setEntities(sortedTargets);
  }, []);

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
