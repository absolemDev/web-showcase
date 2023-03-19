import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Витрины
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/goods-and-services">
          Товары и услуги
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/my-showcases">
          Мои витрины
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/statistics-and-analytics">
          Статистика и аналитика
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
