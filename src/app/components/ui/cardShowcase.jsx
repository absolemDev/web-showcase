import React from "react";
import { Badge, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";

const CardShowcase = ({ _id, name, about, address, img, rate }) => {
  return (
    <LinkContainer to={`/showcases/${_id}`}>
      <Card className="bg-dark text-white col-lg-6 border-white" role="button">
        <Card.Img src={img} alt={name} />
        <div className="overlay position-absolute bg-dark opacity-50 w-100 h-100"></div>
        <Card.ImgOverlay className="d-flex align-items-start flex-column">
          <Card.Title className="d-flex w-100">
            <div>{name}</div>
            <Badge className="rate ms-auto">
              <i className="bi bi-star-fill"></i> {rate}
            </Badge>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-white">
            {about.length > 265 ? about.slice(0, 265) + " ..." : about}
          </Card.Subtitle>
          <Card.Text className="mt-auto">{address}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </LinkContainer>
  );
};

CardShowcase.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  address: PropTypes.string,
  img: PropTypes.string,
  rate: PropTypes.number
};

export default CardShowcase;
