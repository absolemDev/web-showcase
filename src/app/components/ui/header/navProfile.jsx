import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-profile">
      <Button variant="link" onClick={() => navigate("/authorization")}>
        Вход
      </Button>
    </div>
  );
};

export default NavProfile;
