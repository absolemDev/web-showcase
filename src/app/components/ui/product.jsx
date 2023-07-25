import React from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, Badge, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getProductById } from "../../store/products";
import { getShowcaseNameById } from "../../store/showcases";
import { getIsLoggedIn, getUserId } from "../../store/user";
import { LinkContainer } from "react-router-bootstrap";
import CommentForm from "./commentForm";
import CommentsList from "./commentsList";

const Product = () => {
  const { id } = useParams();
  const product = useSelector(getProductById(id));
  const showcaseName = useSelector(getShowcaseNameById(product.showcase));
  const isLoggedIn = useSelector(getIsLoggedIn());
  const userId = useSelector(getUserId());

  return (
    <div className="product">
      <div className="row">
        <div className="col-lg-5 position-relative">
          <Image
            className="mx-auto d-block"
            src={product.img}
            alt={product.name}
            rounded
            fluid
          />
          <Link
            to={`/showcases/${product.showcase}`}
            className="position-absolute bottom-0 start-0 m-1 ms-3"
          >
            <Badge bg="dark">{showcaseName}</Badge>
          </Link>
        </div>
        <div className="col-lg-7 p-0">
          <div className="fs-5 fw-bold">
            {product.name}
            {product.rate.amount > 0 && (
              <Badge className="rate ms-2">
                <i className="bi bi-star-fill"></i>{" "}
                {Math.round(product.rate.count / product.rate.amount)}
              </Badge>
            )}
          </div>
          <p>{product.description}</p>
          <p>
            <span className="fw-bold">Цена:</span> {product.price}
          </p>
        </div>
      </div>
      <hr />
      <div>
        {isLoggedIn ? (
          <div className="ps-2">
            {userId !== product.owner && (
              <>
                <CommentForm targetId={product._id} type="comment" />
                <hr />
              </>
            )}
          </div>
        ) : (
          <Alert variant="dark">
            Для того чтобы оставить оценку и отзыв необходимо{" "}
            <LinkContainer to="/authorization/register">
              <Alert.Link>Зарегистрироваться</Alert.Link>
            </LinkContainer>{" "}
            или{" "}
            <LinkContainer to="/authorization/login">
              <Alert.Link>Войти</Alert.Link>
            </LinkContainer>{" "}
            в систему.
          </Alert>
        )}
      </div>
      <div className="ps-2">
        <CommentsList targetId={product._id} />
      </div>
    </div>
  );
};

export default Product;
