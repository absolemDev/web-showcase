import React from "react";
import { Outlet } from "react-router-dom";
import BackHistoryButton from "../components/common/backButton";
import FilterGroupList from "../components/ui/filterGroupList";
import { useDataProcessing } from "../hooks/useDataProcessing";
import withDataProcessing from "../components/ui/hoc/withDataProcessing";
import SearchWhithDataProcessing from "../components/ui/searchWhithDataProcessing";
import SortingPanel from "../components/ui/sortingPanel";

const MainLayout = () => {
  const {
    filter,
    handleFilter,
    getListCategories,
    isShowcasePage,
    isProductPage
  } = useDataProcessing();
  const categories = getListCategories();

  return (
    <div>
      <SearchWhithDataProcessing />
      <div className="row gx-0">
        <div className="col-3">
          <div className="px-3 py-2 text-white bg-dark">Категории:</div>
          <FilterGroupList
            items={categories}
            selectedValue={filter}
            onSelect={handleFilter}
            valueProperty="classifire"
            disabled={isProductPage()}
          />
        </div>
        <div className="col-9 border-start border-3 border-white">
          <div className="main-panel bg-dark text-light p-2 mb-1 d-flex">
            {(isShowcasePage() || isProductPage()) && <BackHistoryButton />}
            <SortingPanel />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const MainLayoutWhithDataProcessing = withDataProcessing(MainLayout);

export default MainLayoutWhithDataProcessing;
