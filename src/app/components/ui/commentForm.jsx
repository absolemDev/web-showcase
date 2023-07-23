import React, { useState } from "react";
import PropTypes from "prop-types";
import TextAreaField from "../common/form/textAreaField";
import { validator } from "../../utils/validator";
import RatingInput from "./ratingInput";

const CommentForm = ({ targetId }) => {
  const [data, setData] = useState({ rating: 0, content: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]:
        target.name === "rating" ? Number(target.value) : target.value
    }));
    delete errors[target.name];
  };

  const validatorConfig = {
    rating: {
      isRequired: {
        message: "Оцените этот товар от 1 до 5"
      }
    },
    content: {
      isRequired: {
        message: "Отзыв не может быть пустым"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearForm = () => {
    setData({});
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    clearForm();
  };

  return (
    <div>
      <div className="fs-5 fw-bolder">Отзыв</div>
      <form onSubmit={handleSubmit}>
        <RatingInput
          value={data.rating}
          onChange={handleChange}
          name="rating"
          error={errors.rating}
        />
        <TextAreaField
          value={data.content}
          onChange={handleChange}
          name="content"
          error={errors.content}
        />
        <div className="d-flex justify-content-end">
          <button className="add-rating-button btn btn-primary">
            Оставить отзыв
          </button>
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  targetId: PropTypes.string
};

export default CommentForm;
