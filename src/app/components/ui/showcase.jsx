import React from "react";
import { Badge, Image } from "react-bootstrap";
import CardList from "../common/cardList";
import CardProduct from "./cardProduct";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getShowcaseById } from "../../store/showcases";
import { useDataProcessing } from "../../hooks/useDataProcessing";

const Showcase = () => {
  const { id } = useParams();
  const { getEntities } = useDataProcessing();
  const showcase = useSelector(getShowcaseById(id));
  const products = getEntities();

  return (
    <div className="showcase">
      <div className="row">
        <div className="col-lg-6">
          <Image src={showcase.img} alt={showcase.name} rounded fluid />
        </div>
        <div className="col-lg-6 p-0">
          <div className="fs-5 fw-bold">
            {showcase.name}{" "}
            {showcase.rate.amount > 0 && (
              <Badge className="rate">
                <i className="bi bi-star-fill"></i>{" "}
                {Math.round(showcase.rate.count / showcase.rate.amount)}
              </Badge>
            )}
          </div>
          <p>{showcase.description}</p>
          <p>
            <span className="fw-bold">Адрес:</span> {showcase.address}
          </p>
        </div>
      </div>
      <hr />
      <CardList items={products}>
        <CardProduct />
      </CardList>
    </div>
  );
};

export default Showcase;
