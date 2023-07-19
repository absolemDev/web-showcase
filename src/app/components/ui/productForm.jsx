import React, { useState } from "react";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import { validator } from "../../utils/validator";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import SelectFieldCategory from "./selectFieldCategory";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getProductsLoadingStatus,
  updateProductData
} from "../../store/products";
import { checkEqual } from "../../utils/checkEqual";

const ProductForm = ({ product, idShowcase, onCloseForm, index }) => {
  const defaultData = product
    ? {
        name: product.name,
        description: product.description,
        img: product.img,
        price: product.price,
        classifire: product.classifire
      }
    : {
        name: "",
        description: "",
        img: "",
        price: 0,
        classifire: ""
      };
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const isLoading = useSelector(getProductsLoadingStatus());
  const dispatch = useDispatch();

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    },
    description: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    },
    img: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    },
    price: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    const dataEqual = checkEqual(
      { ...data, [target.name]: target.value },
      defaultData
    );
    setIsChanged(!dataEqual);
    setErrors((prevState) => {
      delete prevState[target.name];
      return { ...prevState };
    });
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = () => {
    if (validate()) {
      if (product) {
        dispatch(updateProductData(data, idShowcase, product._id));
      } else {
        dispatch(createProduct(data, idShowcase)).then(() => onCloseForm());
      }
    }
  };

  const handleCancel = () => {
    onCloseForm();
  };

  return (
    <div className="border-start border-3 my-1 ps-3 mt-4">
      <div className="d-flex mb-3">
        <div className="fs-4 fw-bolder me-auto">
          {index ? `#${index}. ${product.name}` : "Новый продукт"}
        </div>
        <div className="d-flex">
          {(!product || (product && isChanged)) && (
            <Button
              variant="success"
              className="me-2"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              <i className="bi bi-check-lg"></i>
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={handleCancel}
            disabled={isLoading}
          >
            <i className="bi bi-x-lg"></i>
          </Button>
        </div>
      </div>
      <TextField
        label="Название"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextAreaField
        label="Описание"
        name="description"
        value={data.description}
        onChange={handleChange}
        error={errors.description}
      />
      <TextField
        label="Фото"
        name="img"
        value={data.img}
        onChange={handleChange}
        error={errors.img}
        placeholder="Ссылка на изображение"
      />
      <TextField
        label="Цена"
        name="price"
        value={data.price}
        onChange={handleChange}
        error={errors.price}
        type="number"
      />
      <SelectFieldCategory
        label="Категория"
        name="classifire"
        value={data.classifire}
        onChange={handleChange}
        error={errors.classifire}
      />
    </div>
  );
};

ProductForm.propTypes = {
  product: PropTypes.object,
  idShowcase: PropTypes.string,
  onCloseForm: PropTypes.func,
  index: PropTypes.number
};

export default ProductForm;
