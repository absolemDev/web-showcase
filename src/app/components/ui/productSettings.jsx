import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { getProductsLoadingStatus, removeProduct } from "../../store/products";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryNameByClass } from "../../store/categories";
import ProductForm from "./productForm";

const ProductSettings = ({
  product,
  idShowcase,
  formIsOpen,
  onOpenForm,
  onCloseForm,
  index
}) => {
  const [editStatus, setEditStatus] = useState(false);
  const isLoading = useSelector(getProductsLoadingStatus());
  const categoryName = useSelector(getCategoryNameByClass(product.classifire));
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeProduct(idShowcase, product._id));
  };
  const handleOpenForm = () => {
    setEditStatus(true);
    onOpenForm();
  };
  const handleCloseForm = () => {
    setEditStatus(false);
    onCloseForm();
  };

  return (
    <>
      {editStatus ? (
        <ProductForm
          product={product}
          idShowcase={idShowcase}
          onCloseForm={handleCloseForm}
          index={index}
        />
      ) : (
        <Row>
          <Col xs={1}>{index}</Col>
          <Col xs={3}>{product.name}</Col>
          <Col xs={5}>{categoryName}</Col>
          <Col xs={1}>{product.price}</Col>
          <Col xs={2}>
            <Button
              className="ms-auto"
              disabled={formIsOpen}
              onClick={handleOpenForm}
            >
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button
              variant="danger"
              className="ms-auto"
              disabled={isLoading}
              onClick={handleDelete}
            >
              <i className="bi bi-trash-fill"></i>
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

ProductSettings.propTypes = {
  product: PropTypes.object,
  idShowcase: PropTypes.string,
  onOpenForm: PropTypes.func,
  onCloseForm: PropTypes.func,
  formIsOpen: PropTypes.bool,
  index: PropTypes.number
};

export default ProductSettings;
