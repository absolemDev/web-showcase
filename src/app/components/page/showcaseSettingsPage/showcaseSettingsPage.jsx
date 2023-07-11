import React, { useState } from "react";
import TextField from "../../common/form/textField";
import TextAreaField from "../../common/form/textAreaField";
import { Button } from "react-bootstrap";

const ShowcaseSettingsPage = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    img: "",
    address: ""
  });
  const [errors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  return (
    <div className="col-md-10 offset-md-3 shadow mt-4 mx-auto p-4">
      <TextField
        label="Название"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextAreaField
        label="Описание"
        name="description"
        value={data.description}
        onChange={handleChange}
        error={errors.description}
      />
      <TextField
        label="Фото/логотип"
        name="name"
        value={data.img}
        onChange={handleChange}
        error={errors.img}
        placeholder="Ссылка"
      />
      <TextField
        label="Адрес"
        name="address"
        value={data.address}
        onChange={handleChange}
        error={errors.address}
      />
      <Button className="btn-public">Опубликовать витрину</Button>
    </div>
  );
};

export default ShowcaseSettingsPage;
