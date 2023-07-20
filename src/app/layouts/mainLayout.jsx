import React from "react";
import { Outlet } from "react-router-dom";
import SearchField from "../components/common/form/searchField";
import BackHistoryButton from "../components/common/backButton";
// import SortingPanel from "../components/ui/sortingPanel";
import { useSelector } from "react-redux";
import { getCategories } from "../store/categories";
import FilterGroupList from "../components/ui/filterGroupList";
import { useDataProcessing } from "../hooks/useDataProcessing";
import withDataProcessing from "../components/ui/hoc/withDataProcessing";

const MainLayout = () => {
  const categories = useSelector(getCategories());
  const { filter, handleSort } = useDataProcessing();

  return (
    <div>
      <SearchField />
      <div className="row gx-0">
        <div className="col-3">
          <div className="px-3 py-2 text-white bg-dark">Категории:</div>
          <FilterGroupList
            items={categories}
            selectedValue={filter}
            onSelect={handleSort}
            valueProperty="classifire"
          />
        </div>
        <div className="col-9 border-start border-3 border-white">
          <div className="main-panel bg-dark text-light p-2 mb-1 d-flex">
            <BackHistoryButton />
            {/* <SortingPanel /> */}
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
