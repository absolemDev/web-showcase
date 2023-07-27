import React, { useState } from "react";
import { Image, Placeholder } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  getUserLoadedStatus,
  logOut
} from "../../../store/user";
import { LinkContainer } from "react-router-bootstrap";

const NavProfile = () => {
  const [isOpen, setOpen] = useState(false);
  const user = useSelector(getCurrentUser());
  const isLoaded = useSelector(getUserLoadedStatus());
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="position-relative" onClick={handleToggleMenu}>
      {isLoaded ? (
        <div className="d-flex align-items-center mx-3" role="button">
          <Image
            src={user.img}
            alt={user.name}
            roundedCircle
            width="40"
            height="40"
          />
          <span className="mx-2 nav-profile">{user.name}</span>
          <i
            className={`bi bi-caret-${isOpen ? "up" : "down"}-fill nav-profile`}
          ></i>
        </div>
      ) : (
        <Placeholder as={Image} width="40" height="40" roundedCircle />
      )}
      <div
        className={`${
          isOpen ? "" : "d-none "
        }position-absolute w-100 top-100 bg-dark text-light nav-profile-menu shadow-lg rounded-bottom`}
        role="button"
      >
        <LinkContainer to="/profile">
          <div className="text-center p-2 nav-profile border-bottom">
            Профиль
          </div>
        </LinkContainer>
        <div onClick={handleLogOut} className="text-center p-2">
          <i className="bi bi-box-arrow-left fs-4 nav-profile"></i>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
