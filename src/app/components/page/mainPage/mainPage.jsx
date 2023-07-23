import React from "react";
import CardList from "../../common/cardList";
import CardShowcase from "../../ui/cardShowcase";
import CardProduct from "../../ui/cardProduct";
import { useDataProcessing } from "../../../hooks/useDataProcessing";

const MainPage = () => {
  const { getEntities, isShowcasesPage } = useDataProcessing();
  const entities = getEntities();

  const renderTextForEmptyItems = () =>
    `Список ${isShowcasesPage() ? "витрин" : "товаров и услуг"} пуст`;

  return (
    <CardList items={entities} textForEmptyItems={renderTextForEmptyItems()}>
      {isShowcasesPage() ? <CardShowcase /> : <CardProduct />}
    </CardList>
  );
};

export default MainPage;
