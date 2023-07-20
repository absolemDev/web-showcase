import React from "react";
import CardList from "../../common/cardList";
import CardShowcase from "../../ui/cardShowcase";
import { useLocation } from "react-router-dom";
import CardProduct from "../../ui/cardProduct";
import { useDataProcessing } from "../../../hooks/useDataProcessing";

const MainPage = () => {
  const { pathname } = useLocation();
  const { entities } = useDataProcessing();

  return (
    <CardList items={entities}>
      {pathname.split("/")[1] === "showcases" ? (
        <CardShowcase />
      ) : (
        <CardProduct />
      )}
    </CardList>
  );
};

export default MainPage;
