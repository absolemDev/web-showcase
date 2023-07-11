/* eslint-disable indent */
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  const listItems = Array.isArray(items) ? items : Object.values(items);
  return (
    <ListGroup>
      {listItems.length ? (
        listItems.map((item) => (
          <ListGroup.Item
            action
            active={item === selectedItem}
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
          >
            {item[contentProperty]}
          </ListGroup.Item>
        ))
      ) : (
        <ListGroup.Item>Загрузка...</ListGroup.Item>
      )}
    </ListGroup>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object
};

export default GroupList;
