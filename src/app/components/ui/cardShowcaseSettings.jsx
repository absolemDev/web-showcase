import React from "react";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import { Card } from "react-bootstrap";

const CardShowcaseSettings = ({ _id, name }) => {
  return (
    <LinkContainer to={`/my-showcases/${_id}`}>
      <Card className="bg-dark text-white col-lg-5 m-4" role="button">
        <Card.Title className="text-center">{name}</Card.Title>
      </Card>
    </LinkContainer>
  );
};

CardShowcaseSettings.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string
};

export default CardShowcaseSettings;
