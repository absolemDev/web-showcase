import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/user";

const ProfilePage = () => {
  const user = useSelector(getCurrentUser());
  const [data, setData] 


  return <div className="col-md-6 offset-md-3 shadow mt-4">

  </div>;
};

export default ProfilePage;
