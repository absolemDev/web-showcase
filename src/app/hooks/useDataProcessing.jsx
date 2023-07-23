import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getShowcases } from "../store/showcases";
import { getProducts } from "../store/products";
import { useLocation, useParams } from "react-router-dom";
import { sorting } from "../utils/sorting";
import { getCategories } from "../store/categories";

const DataProcessingContext = React.createContext();

export const useDataProcessing = () => {
  return useContext(DataProcessingContext);
};

const DataProcessingProvider = ({ children }) => {
  const [filter, setFilter] = useState(null);
  const [searchRegExp, setSearchRegExp] = useState(null);
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  // const [currentPage, setCurrentPage] = useState(1);
  const showcases = useSelector(getShowcases());
  const products = useSelector(getProducts());
  const categories = useSelector(getCategories());
  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (isShowcasesPage() && sortBy.path === "price") {
      setSortBy({ path: "name", order: "asc" });
    }
    if (searchRegExp) setSearchRegExp(null);
  }, [pathname]);

  const getListCategories = () => {
    if (isShowcasePage()) {
      const classifire = showcases.find((item) => item._id === id).classifire;
      return classifire.map((item) =>
        categories.find((i) => i.classifire === item)
      );
    } else {
      return categories;
    }
  };

  const getShowcaseName = (idParam) =>
    idParam
      ? showcases.find((item) => item._id === idParam).name
      : showcases.find((item) => item._id === id).name;

  const isProductPage = () => /^\/products\/\w+$/.test(pathname);
  const isProductsPage = () => /^\/products$/.test(pathname);
  const isShowcasePage = () => /^\/showcases\/\w+$/.test(pathname);
  const isShowcasesPage = () => /^\/showcases$/.test(pathname);

  const handleSearchRegExp = (value) => {
    if (filter) setFilter(null);
    if (value) {
      setSearchRegExp(new RegExp(`^${value}|[^а-яА-Я]${value}`, "i"));
    } else {
      setSearchRegExp(null);
    }
  };

  const handleFilter = (value) => {
    if (searchRegExp) setSearchRegExp(null);
    setFilter(value);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  const getEntities = () => {
    const arrTargets = isShowcasesPage()
      ? showcases
      : isShowcasePage()
      ? products.filter((item) => item.showcase === id)
      : products;
    const filteredTargets = searchRegExp
      ? arrTargets.filter((item) => searchRegExp.test(item.name))
      : filter
      ? arrTargets.filter((item) => {
          if (isShowcasesPage()) {
            return item.classifire.includes(filter);
          } else {
            return item.classifire === filter;
          }
        })
      : arrTargets;
    return sorting([...filteredTargets], sortBy);
    // const usersCrop = paginate(sortedUsers, currentPage, pageSize);
  };

  return (
    <DataProcessingContext.Provider
      value={{
        getEntities,
        filter,
        sortBy,
        searchRegExp,
        handleFilter,
        handleSort,
        handleSearchRegExp,
        isProductPage,
        isProductsPage,
        isShowcasePage,
        isShowcasesPage,
        getShowcaseName,
        getListCategories
      }}
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
