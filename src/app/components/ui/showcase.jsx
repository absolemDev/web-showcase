import React from "react";
import { Badge, Button, Image } from "react-bootstrap";
import CardList from "../common/cardList";
import CardProduct from "./cardProduct";
import { useSelector } from "react-redux";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { getShowcaseById } from "../../store/showcases";
import { getUserId } from "../../store/user";

const Showcase = () => {
  const { id } = useParams();
  const showcase = useSelector(getShowcaseById(id));
  const [entitiesCrop] = useOutletContext();
  const navigate = useNavigate();
  const userId = useSelector(getUserId());

  return (
    <div className="showcase flex-grow-1">
      <div className="row">
        <div className="col-lg-6">
          <Image src={showcase.img} alt={showcase.name} rounded fluid />
        </div>
        <div className="col-lg-6">
          <div className="fs-5 fw-bold d-flex align-items-center">
            <div>{showcase.name} </div>
            {showcase.rate.amount > 0 && (
              <Badge className="rate">
                <i className="bi bi-star-fill"></i>{" "}
                {Math.round(showcase.rate.count / showcase.rate.amount)}
              </Badge>
            )}
            {userId === showcase.owner && (
              <Button
                variant="light"
                className="ms-auto"
                onClick={() => navigate(`/my-showcases/${showcase._id}`)}
              >
                <i className="bi bi-gear-fill"></i>
              </Button>
            )}
          </div>
          <p>{showcase.description}</p>
          <p>
            <span className="fw-bold">Адрес:</span> {showcase.address}
          </p>
        </div>
      </div>
      <hr />
      <CardList items={entitiesCrop}>
        <CardProduct />
      </CardList>
    </div>
  );
};

export default Showcase;
