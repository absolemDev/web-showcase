import React, { useState } from "react";
import ProductSettings from "./productSettings";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getShowcaseProducts } from "../../store/products";
import PropTypes from "prop-types";
import ProductForm from "./productForm";

const ProductsListSettings = ({ idShowcase }) => {
  const products = useSelector(getShowcaseProducts(idShowcase));
  const [formIsOpen, setStatusForm] = useState(false);
  const [addProductStatus, setAddProductStatus] = useState(false);

  const handleOpenForm = () => {
    setStatusForm(true);
  };
  const handleCloseForm = () => {
    setStatusForm(false);
  };
  const handleOpenAddForm = () => {
    setAddProductStatus(true);
    setStatusForm(true);
  };
  const handleCloseAddForm = () => {
    setAddProductStatus(false);
    setStatusForm(false);
  };

  return (
    <div className="col-md-10 offset-md-3 shadow mt-4 mx-auto p-4">
      <div className="fs-5 fw-weight-bolder">Список продкутов:</div>
      <Row>
        <Col xs={1}>#</Col>
        <Col xs={3}>Название</Col>
        <Col xs={5}>Категория</Col>
        <Col xs={1}>Цена</Col>
        <Col xs={2}></Col>
      </Row>
      {products.map((item, index) => (
        <ProductSettings
          key={item._id}
          product={item}
          idShowcase={idShowcase}
          index={index + 1}
          formIsOpen={formIsOpen}
          onCloseForm={handleCloseForm}
          onOpenForm={handleOpenForm}
        />
      ))}
      {addProductStatus && (
        <ProductForm idShowcase={idShowcase} onCloseForm={handleCloseAddForm} />
      )}
      <Button onClick={handleOpenAddForm} disabled={formIsOpen}>
        Добавить продукт
      </Button>
    </div>
  );
};

ProductsListSettings.propTypes = {
  idShowcase: PropTypes.string
};

export default ProductsListSettings;
