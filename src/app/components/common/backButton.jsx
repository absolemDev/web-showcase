import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BackHistoryButton = () => {
  const history = useHistory();
  return (
    <Button className="py-0 border-0" onClick={() => history.goBack()}>
      <i className="bi bi-caret-left-fill"></i>
      Назад
    </Button>
  );
};

export default BackHistoryButton;
