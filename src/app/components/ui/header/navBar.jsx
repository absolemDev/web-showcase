import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { getIsLoggedIn, logOut } from "../../../store/user";

const NavBar = () => {
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="p-0">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav
          className="me-auto"
          activeKey={pathname.split("/")[1] || "/showcases"}
        >
          <Nav.Item>
            <LinkContainer to="/showcases">
              <Nav.Link className="p-3">Витрины</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/products">
              <Nav.Link className="p-3">Товары и услуги</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          {isLoggedIn && (
            <Nav.Item>
              <LinkContainer to="/my-showcases">
                <Nav.Link className="p-3">Мои витрины</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          )}
          <Nav.Item>
            <LinkContainer to="/statistics-and-analytics">
              <Nav.Link className="p-3">Статистика и аналитика</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <i
              className="bi bi-box-arrow-left fs-4 nav-profile"
              role="button"
              onClick={handleLogOut}
            ></i>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="bi bi-box-arrow-in-right fs-4 nav-profile"></i>
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
