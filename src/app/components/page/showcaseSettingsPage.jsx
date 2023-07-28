import React, { useState } from "react";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import { Button, Spinner } from "react-bootstrap";
import { validator } from "../../utils/validator";
import { useDispatch, useSelector } from "react-redux";
import {
  createShowcase,
  getShowcasesLoadingStatus,
  getUserShowcaseById,
  removeShowcase,
  updateShowcaseData
} from "../../store/showcases";
import { useNavigate, useParams } from "react-router-dom";
import ProductsListSettings from "../ui/productsListSettings";
import { checkEqual } from "../../utils/checkEqual";

const ShowcaseSettingsPage = () => {
  const { id } = useParams();
  const { name, description, img, address } = useSelector(
    getUserShowcaseById(id)
  );
  const defaultData = id
    ? {
        name,
        description,
        img,
        address
      }
    : {
        name: "",
        description: "",
        img: "",
        address: ""
      };
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [isChanged, setIsChanged] = useState(false);

  const isLoading = useSelector(getShowcasesLoadingStatus());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    },
    description: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    },
    img: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    },
    address: {
      isRequired: {
        message: "Поле обязателен для заполнения"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    const dataEqual = checkEqual(
      { ...data, [target.name]: target.value },
      defaultData
    );
    setIsChanged(!dataEqual);
    setErrors((prevState) => {
      delete prevState[target.name];
      return { ...prevState };
    });
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleCreate = () => {
    if (validate()) {
      dispatch(createShowcase(data, redirect));
      setIsChanged(false);
    }
  };

  const handleUpdate = () => {
    if (validate()) {
      dispatch(updateShowcaseData(data, id, () => setIsChanged(false)));
    }
  };

  const handleCancel = () => {
    setData(defaultData);
    setIsChanged(false);
  };

  const handleDelete = () => {
    dispatch(removeShowcase(id, () => navigate("/my-showcases")));
  };

  const redirect = (id) => {
    navigate(`/my-showcases/${id}`);
  };

  return (
    <div>
      <div className="col-md-10 offset-md-3 shadow mt-4 mx-auto p-4">
        <div className="fs-4 fw-bolder mb-4">
          {id ? defaultData.name : "Новая витрина"}
        </div>
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
          name="img"
          value={data.img}
          onChange={handleChange}
          error={errors.img}
          placeholder="Ссылка на изображение"
        />
        <TextField
          label="Адрес"
          name="address"
          value={data.address}
          onChange={handleChange}
          error={errors.address}
        />
        {id ? (
          <div className="d-flex">
            {isChanged && (
              <>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={handleUpdate}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner
                      animation="border"
                      variant="secondary"
                      as="span"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    <i className="bi bi-check-lg"></i>
                  )}
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  <i className="bi bi-x-lg"></i>
                </Button>
              </>
            )}
            <Button
              variant="danger"
              className="ms-auto"
              disabled={isLoading}
              onClick={handleDelete}
            >
              <i className="bi bi-trash-fill"></i>
            </Button>
          </div>
        ) : (
          <Button
            className="btn-public"
            onClick={handleCreate}
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner
                animation="border"
                variant="secondary"
                as="span"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Опубликовать витрину"
            )}
          </Button>
        )}
      </div>
      {id && <ProductsListSettings showcaseId={id} />}
    </div>
  );
};

export default ShowcaseSettingsPage;
