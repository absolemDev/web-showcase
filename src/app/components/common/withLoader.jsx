import React from "react";

const withLoader = (Component, isLoading) => (props) => {
  return <>{isLoading ? <div>Загрузка...</div> : <Component {...props} />}</>;
};

export default withLoader;
