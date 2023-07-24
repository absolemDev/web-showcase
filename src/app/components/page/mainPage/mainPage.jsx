import React from "react";
import CardList from "../../common/cardList";
import CardShowcase from "../../ui/cardShowcase";
import CardProduct from "../../ui/cardProduct";
import { useDataProcessing } from "../../../hooks/useDataProcessing";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";

const MainPage = () => {
  const {
    getEntities,
    isShowcasesPage,
    currentPage,
    handlePageChange,
    getPageSize
  } = useDataProcessing();

  const entities = getEntities();
  const entitiesCount = entities.length;
  const entitiesCrop = paginate(entities, currentPage, getPageSize());

  const renderTextForEmptyItems = () =>
    `Список ${isShowcasesPage() ? "витрин" : "товаров и услуг"} пуст`;

  return (
    <div className="main">
      <CardList
        items={entitiesCrop}
        textForEmptyItems={renderTextForEmptyItems()}
      >
        {isShowcasesPage() ? <CardShowcase /> : <CardProduct />}
      </CardList>
      <Pagination
        currentPage={currentPage}
        itemsCount={entitiesCount}
        onPageChange={handlePageChange}
        pageSize={getPageSize()}
      />
    </div>
  );
};

export default MainPage;
