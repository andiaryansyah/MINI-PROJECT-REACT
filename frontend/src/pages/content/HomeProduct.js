import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import style from "../../assets/styles/Button.module.css";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import "../../assets/styles/index.scss";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await setIsLoading(true);
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
    await setIsLoading(false);
  };

  return (
    <div >
      <div className="container mt-5 ">
        {isLoading ? (
          <ReactLoading
            type="spinningBubbles"
            color="black"
            className="m-auto mt-5"
          />
        ) : (
          <div className="mt-5">
            <Row xs={1} md={3} className="g-4">
              {products.map((product) => (
                <Col key={product.id} >
                  <Card
                    style={{ width: "23rem" }}
                    className="rounded me-3 border border-0 border-dark"
                  >
                    <Card.Img variant="top" src={product.url} height={420} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>Rp. {product.price}</Card.Text>
                      <Link
                        to={`detail-product/${product.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <button className={style.btnShop}>Detail</button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default HomeProduct;
