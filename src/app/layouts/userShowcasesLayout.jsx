import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const UserShowcasesLayout = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default UserShowcasesLayout;
