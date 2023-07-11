import React from "react";
import { Badge, Image, Placeholder } from "react-bootstrap";
import CardList from "../common/cardList";
import CardProduct from "./cardProduct";
import { useShowcases } from "../../hooks/useShowcases";
import { useProducts } from "../../hooks/useProducts";

const Showcase = () => {
  const { currentShowcase } = useShowcases();
  const { productsOfShowcase, isLoading: loadingProducts } = useProducts();

  return (
    <div className="showcase">
      {currentShowcase ? (
        <>
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={currentShowcase.img}
                alt={currentShowcase.name}
                rounded
                fluid
              />
            </div>
            <div className="col-lg-6 p-0">
              <div className="fs-5 fw-bold">
                {currentShowcase.name}{" "}
                <Badge className="rate">
                  <i className="bi bi-star-fill"></i> {currentShowcase.rate}
                </Badge>
              </div>
              <p>{currentShowcase.about}</p>
              <p>
                <span className="fw-bold">Связаться с нами:</span>{" "}
                {currentShowcase.contacts}
              </p>
              <p>
                <span className="fw-bold">Адрес:</span>{" "}
                {currentShowcase.address}
              </p>
            </div>
          </div>
          <hr />
          {!loadingProducts ? (
            productsOfShowcase.length ? (
              <CardList items={productsOfShowcase}>
                <CardProduct />
              </CardList>
            ) : (
              <h3>Здесь пока ничего нет!</h3>
            )
          ) : (
            <h3>Загрузка...</h3>
          )}
        </>
      ) : (
        <div className="row">
          <div className="col-lg-6">
            <Image
              className="mx-auto d-block"
              src="https://cynthiarenee.com/wp-content/uploads/2018/11/placeholder-product-image.png"
              rounded
              fluid
            />
          </div>
          <div className="col-lg-6">
            <Placeholder as="div" className="mb-2" animation="glow">
              <Placeholder xs={6} size="lg" />
            </Placeholder>
            <Placeholder as="div" className="mb-2" animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={9} /> <Placeholder xs={3} />{" "}
              <Placeholder xs={5} />
            </Placeholder>
            <Placeholder as="div" className="mb-2" animation="glow">
              <Placeholder xs={4} size="lg" />
            </Placeholder>
            <Placeholder as="div" className="mb-2" animation="glow">
              <Placeholder xs={5} size="lg" />
            </Placeholder>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;
