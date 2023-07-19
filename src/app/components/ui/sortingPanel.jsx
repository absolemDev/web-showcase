import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const SortingPanel = ({ onSort, selectedSort }) => {
  const { target, id } = useParams();
  const sortFields = {
    name: {
      label: "Название",
      hidden: target === "products" && id
    },
    rate: {
      label: "Рейтинг",
      hidden: target === "products" && id
    },
    price: {
      label: "Цена",
      hidden: (target === "products" && id) || (target === "showcases" && !id)
    }
  };

  const renderSortArrow = (field) => {
    if (field === selectedSort.path) {
      return selectedSort.order === "asc" ? (
        <i className="bi bi-caret-down-fill"></i>
      ) : (
        <i className="bi bi-caret-up-fill"></i>
      );
    }
    return <i className="p-2"></i>;
  };

  const handelSort = (field) => {
    if (selectedSort.path === field) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      });
    } else {
      onSort({ path: field, order: "asc" });
    }
  };

  return (
    <ButtonGroup className="ms-auto">
      {Object.keys(sortFields).map((field) => (
        <Button
          key={field}
          className={`py-0 border-0${
            sortFields[field].hidden ? " d-none" : ""
          }`}
          variant="dark"
          onClick={() => handelSort(field)}
        >
          {renderSortArrow(field)}
          {sortFields[field].label}
        </Button>
      ))}
    </ButtonGroup>
  );
};

SortingPanel.propTypes = {
  onSort: PropTypes.func,
  selectedSort: PropTypes.object
};

export default SortingPanel;
