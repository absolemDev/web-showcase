import React from "react";
import { Outlet } from "react-router-dom";
import SearchField from "../components/common/form/searchField";
import BackHistoryButton from "../components/common/backButton";
// import SortingPanel from "../components/ui/sortingPanel";
import { useSelector } from "react-redux";
import { getCategories } from "../store/categories";
import FilterGroupList from "../components/ui/filterGroupList";
import { useApp } from "../hooks/useApp";

const MainLayout = () => {
  const categories = useSelector(getCategories());
  const { filter, setFilter } = useApp();

  return (
    <div>
      <SearchField />
      <div className="row gx-0">
        <div className="col-3">
          <div className="px-3 py-2 text-white bg-dark">Категории:</div>
          <FilterGroupList
            items={categories}
            selectedValue={filter}
            onSelect={setFilter}
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

export default MainLayout;
