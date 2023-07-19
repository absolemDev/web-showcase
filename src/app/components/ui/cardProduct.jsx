import React from "react";
import { Badge, Card, Placeholder } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useShowcases } from "../../hooks/useShowcases";

const CardProduct = ({ _id, name, img, about, price, rate, showcase }) => {
  const { currentShowcase, getNameShowcase } = useShowcases();
  const nameShowcase = currentShowcase
    ? currentShowcase.name
    : getNameShowcase(showcase);
  return (
    <Card className="card-product col-md-6 col-lg-4">
      <LinkContainer to={`/products/${_id}}`}>
        <div className="position-relative">
          <Card.Img variant="top" src={img} role="button" />
          <Badge
            className="rate position-absolute top-0 end-0 m-1"
            role="button"
          >
            <i className="bi bi-star-fill"></i> {rate}
          </Badge>
          {!currentShowcase && (
            <Link
              to={`/showcases/${showcase}?nameShowcase=${nameShowcase}`}
              className="position-absolute bottom-0 start-0 m-1"
            >
              {nameShowcase ? (
                <Badge bg="dark">{nameShowcase}</Badge>
              ) : (
                <Placeholder.Button
                  variant="dark"
                  xs={4}
                  size="lg"
                  animation="glow"
                />
              )}
            </Link>
          )}
        </div>
      </LinkContainer>
      <Card.Body className="d-flex align-items-start flex-column">
        <LinkContainer to={`/products/${_id}`}>
          <Card.Title role="button">{name}</Card.Title>
        </LinkContainer>
        <Card.Text>
          {about.length > 70 ? about.slice(0, 70) + " ..." : about}
        </Card.Text>
        <div className="mt-auto">
          <Card.Text>Цена: {price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

CardProduct.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
  showcase: PropTypes.string
};

export default CardProduct;
