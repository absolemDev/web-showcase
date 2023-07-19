import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ShowcaseSettingsPage from "./showcaseSettingsPage";
import { useSelector } from "react-redux";
import { getUserShowcaseAccess } from "../../../store/showcases";

const ProtectShowcaseSettings = () => {
  const { id } = useParams();
  const showcaseAccess = useSelector(getUserShowcaseAccess(id));

  if (showcaseAccess) {
    return <ShowcaseSettingsPage idShowcase={id} />;
  } else {
    return <Navigate to="/my-showcases" />;
  }
};

export default ProtectShowcaseSettings;
