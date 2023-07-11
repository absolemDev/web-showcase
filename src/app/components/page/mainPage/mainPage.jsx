/* eslint-disable indent */
import React, { useCallback, useEffect, useState } from "react";
import SearchField from "../../common/form/searchField";
import GroupList from "../../common/groupList";
import CardList from "../../common/cardList";
import CardShowcase from "../../ui/cardShowcase";
import { useParams } from "react-router-dom";
import Showcase from "../../ui/showcase";
import Product from "../../ui/product";
import CardProduct from "../../ui/cardProduct";
import BackHistoryButton from "../../common/backButton";
import { useShowcases } from "../../../hooks/useShowcases";
import { useProducts } from "../../../hooks/useProducts";
import { useCategories } from "../../../hooks/useCategories";
import SortingPanel from "../../ui/sortingPanel";

const MainPage = () => {
  const { showcases } = useShowcases();
  const { products } = useProducts();
  const { categories } = useCategories();
  const { target, id: idTarget } = useParams();
  const { currentShowcase } = useShowcases();
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const [selectedCategory, setSelectedCategory] = useState();
  const [search, setSearch] = useState("");

  const handleCategorySelect = (item) => {
    setSelectedCategory(item);
  };

  const clearFilter = () => {
    setSelectedCategory();
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const handleChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
  });

  const handleSearch = useCallback(() => {
    console.log("Search: " + search);
  }, [search]);

  useEffect(() => {
    setSearch("");
  }, [target]);

  const filteredShowcases = selectedCategory
    ? showcases.filter((showcase) =>
        showcase.categories.includes(selectedCategory._id)
      )
    : showcases;
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category._id === selectedCategory._id
      )
    : products;

  return (
    <div>
      <SearchField
        value={search}
        placeholder={
          currentShowcase
            ? `Поиск по витрине "${currentShowcase.name}"`
            : target === "showcases"
            ? "Поиск по витринам..."
            : "Поиск по товарам и услугам..."
        }
        onChange={handleChangeSearch}
        onSearch={handleSearch}
        disabled={!!(target === "products" && idTarget)}
      />
      <div className="row gx-0">
        <div className="col-3">
          <div className="px-3 py-2 text-white bg-dark">Категории:</div>
          <GroupList
            items={categories}
            onItemSelect={handleCategorySelect}
            selectedItem={selectedCategory}
          />
          <button className="btn btn-secondary" onClick={clearFilter}>
            Очистить
          </button>
        </div>
        <div className="col-9 border-start border-3 border-white">
          <div className="main-panel bg-dark text-light p-2 mb-1 d-flex">
            {idTarget && <BackHistoryButton />}
            <SortingPanel onSort={handleSort} selectedSort={sortBy} />
          </div>
          <div>
            {!idTarget ? (
              <CardList
                items={
                  target === "showcases" ? filteredShowcases : filteredProducts
                }
              >
                {target === "showcases" ? <CardShowcase /> : <CardProduct />}
              </CardList>
            ) : target === "showcases" ? (
              <Showcase />
            ) : (
              <Product />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
