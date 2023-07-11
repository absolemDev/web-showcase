import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge, Image, Placeholder } from "react-bootstrap";
import qs from "query-string";
import { useProducts } from "../../hooks/useProducts";
import { useShowcases } from "../../hooks/useShowcases";

const Product = () => {
  const { currentProduct } = useProducts();
  const { search } = useLocation();
  const linkToShowcase = qs.parse(search).linkToShowcase === "true";
  const { getNameShowcase } = useShowcases();

  return (
    <div className="product">
      {currentProduct ? (
        <>
          <div className="row">
            <div className="col-lg-5 position-relative">
              <Image
                className="mx-auto d-block"
                src={currentProduct.img}
                alt={currentProduct.name}
                rounded
                fluid
              />
              {linkToShowcase && (
                <Link
                  to={`/showcases/${currentProduct.showcase}`}
                  className="position-absolute bottom-0 start-0 m-1 ms-3"
                >
                  <Badge bg="dark">{getNameShowcase(currentProduct._id)}</Badge>
                </Link>
              )}
            </div>
            <div className="col-lg-7 p-0">
              <div className="fs-5 fw-bold">
                {currentProduct.name}{" "}
                <Badge className="rate">
                  <i className="bi bi-star-fill"></i> {currentProduct.rate}
                </Badge>
              </div>
              <p>{currentProduct.about}</p>
              <p>
                <span className="fw-bold">Цена:</span> {currentProduct.price}
              </p>
            </div>
          </div>
          <div></div>
        </>
      ) : (
        <div className="row">
          <div className="col-lg-5">
            <Image
              className="mx-auto d-block"
              src="https://cynthiarenee.com/wp-content/uploads/2018/11/placeholder-product-image.png"
              rounded
              fluid
            />
          </div>
          <div className="col-lg-7">
            <Placeholder as="div" className="mb-2" animation="glow">
              <Placeholder xs={6} size="lg" />
            </Placeholder>
            <Placeholder as="div" className="mb-2" animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
            </Placeholder>
            <Placeholder as="div" className="mb-2" animation="glow">
              <Placeholder xs={4} size="lg" />
            </Placeholder>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Product;
