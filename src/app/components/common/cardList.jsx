import React from "react";
import PropTypes from "prop-types";

const CardList = ({ items, defaultCard, children }) => {
  return (
    <div className="d-flex flex-column flex-md-row flex-wrap justify-content-center">
      {items.map((item) => {
        return React.cloneElement(React.Children.only(children), {
          ...item,
          key: item._id
        });
      })}
      {defaultCard && defaultCard()}
    </div>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  defaultCard: PropTypes.func,
  children: PropTypes.node
};

export default CardList;
