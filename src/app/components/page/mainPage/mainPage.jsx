import React from "react";
import CardList from "../../common/cardList";
import CardShowcase from "../../ui/cardShowcase";
import { useLocation } from "react-router-dom";
import CardProduct from "../../ui/cardProduct";

const MainPage = () => {
  const { pathname } = useLocation();

  return (
    <CardList items={[]}>
      {pathname === "/showcases" ? <CardShowcase /> : <CardProduct />}
    </CardList>
  );
};

export default MainPage;
