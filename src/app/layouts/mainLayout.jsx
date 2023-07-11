import React, { useEffect } from "react";
import MainPage from "../components/page/mainPage/mainPage";
import { useParams } from "react-router-dom";
import { useShowcases } from "../hooks/useShowcases";
import { useProducts } from "../hooks/useProducts";

const MainLoyout = () => {
  const { target, id } = useParams();
  const { getCurrentShowcase, isLoading: loadingShowcase } = useShowcases();
  const {
    getCurrentProduct,
    getProductsOfShowcase,
    isLoading: loadingProducts
  } = useProducts();

  useEffect(() => {
    if (!loadingShowcase && !loadingProducts) {
      if (target === "showcases" && id) {
        getCurrentShowcase(id);
        getProductsOfShowcase(id);
      } else {
        getCurrentShowcase(null);
        getProductsOfShowcase(null);
      }
      if (target === "products" && id) {
        getCurrentProduct(id);
      } else {
        getCurrentProduct(null);
      }
    }
  }, [target, id, loadingShowcase, loadingProducts]);

  return <MainPage />;
};

export default MainLoyout;
