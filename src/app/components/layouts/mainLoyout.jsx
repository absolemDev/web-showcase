import React from "react";
import { useLocation } from "react-router-dom";
import GoodsAndServices from "../main/goodsAndServices";
import Showcases from "../main/showcases";

const MainLoyout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h2>Main layout</h2>
      {pathname === "/" && <Showcases />}
      {pathname === "/goods-and-services" && <GoodsAndServices />}
    </>
  );
};

export default MainLoyout;
