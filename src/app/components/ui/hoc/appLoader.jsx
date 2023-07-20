import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, loadUserData } from "../../../store/user";
import {
  getCategoriesDataLoadedStatus,
  loadCategoriesList
} from "../../../store/categories";
import {
  getShowcasesDataLoadedStatus,
  loadShowcasesList
} from "../../../store/showcases";
import {
  getProductsDataLoadedStatus,
  loadProductsList
} from "../../../store/products";
import { Spinner } from "react-bootstrap";

const AppLoader = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const categorieIsLoaded = useSelector(getCategoriesDataLoadedStatus());
  const showcasesIsLoaded = useSelector(getShowcasesDataLoadedStatus());
  const productsIsLoaded = useSelector(getProductsDataLoadedStatus());

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) dispatch(loadUserData());
    dispatch(loadShowcasesList());
    dispatch(loadProductsList());
    dispatch(loadCategoriesList());
  }, []);

  if (categorieIsLoaded && showcasesIsLoaded && productsIsLoaded) {
    return children;
  } else {
    return (
      <div className="spinner-wrapper">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  }
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default AppLoader;
