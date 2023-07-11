import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NavProfile = () => {
  const history = useHistory();
  return (
    <div className="nav-profile">
      <Button variant="link" onClick={() => history.push("/login")}>
        Вход
      </Button>
    </div>
  );
};

export default NavProfile;
