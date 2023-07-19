import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getClassifireProducts,
  getClassifireProductsLoadingStatus,
  loadClassifireProducts
} from "../../store/classifireProducts";
import { Spinner } from "react-bootstrap";
import { getCategoryByClass } from "../../store/categories";

const SelectFieldCategory = ({
  id,
  label,
  name,
  value,
  onChange,
  error,
  placeholder
}) => {
  // const handleChange = ({ target }) => {
  //   onChange({ name: target.name, value: target.value });
  // };
  const [searchList, setSearchList] = useState([]);
  const classifire = useSelector(getClassifireProducts());
  const catigory = useSelector(getCategoryByClass(value));
  const isLoading = useSelector(getClassifireProductsLoadingStatus());
  const refInput = useRef();

  const dispatch = useDispatch();

  const handleSearch = ({ target }) => {
    if (target.value.length >= 3 && !isLoading) {
      dispatch(loadClassifireProducts(target.value));
    }
  };

  // const handleBlur = (event) => {
  //   console.log(event);
  //   dispatch({ type: "classifireProducts/classifireProductsCleared" });
  // };

  useEffect(() => {
    if (value) {
      refInput.current.value = catigory.name;
    }
  }, []);

  useEffect(() => {
    setSearchList(classifire);
  }, [classifire]);

  const handleChange = ({ target }) => {
    refInput.current.value = target.dataset.name;
    onChange({ name, value: target.dataset.id });
    dispatch({ type: "classifireProducts/classifireProductsCleared" });
  };

  const handelCleare = ({ target }) => {
    refInput.current.value = "";
    dispatch({ type: "classifireProducts/classifireProductsCleared" });
    onChange({ name: target.name, value: "" });
  };

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation position-relative">
        <input
          type={"text"}
          id={id || name}
          name={name}
          onChange={handleSearch}
          className={getInputClasses()}
          placeholder={placeholder || ""}
          ref={refInput}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handelCleare}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        {error && <div className="invalid-feedback">{error}</div>}
        <div
          className="position-absolute top-100 container-fluid p-0 bg-body"
          onClick={handleChange}
        >
          {isLoading && (
            <Spinner
              animation="border"
              variant="secondary"
              as="span"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {searchList.map((item) => (
            <div
              key={item._id}
              data-id={item._id}
              data-name={item.name}
              className="p-2 w-100 classifire-item"
              role="button"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SelectFieldCategory.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  placeholder: PropTypes.string
};

export default SelectFieldCategory;
