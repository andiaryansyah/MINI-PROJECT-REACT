import React, { useState, useEffect } from "react";
import { Row, Col, FormControl, Button, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../assets/styles/Button.module.css";

const Search = () => {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [foundProducts, setfoundProducts] = useState(products);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const filter = () => {
    if (name !== "") {
      const results = products.filter((product) => {
        return product.name.toLowerCase().startsWith(name.toLowerCase());
      });
      setfoundProducts(results);
    } 
  };

  const showProducts = () => {
    if (name !== "") {
      setfoundProducts(products);
    }
  };

  return (
    <div className="mt-5 mx-3">
      <div className="d-flex justify-content-start">
        <Row>
          <Col>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "250px" }}
              value={name}
              onChange={(e) => {setName(e.target.value); showProducts()}}
            />
          </Col>
          <Col>
              <Button variant="outline-success" onClick={filter}>Search</Button>
          </Col>
        </Row>
        </div>
        <div className="mt-5">
          {foundProducts && foundProducts.length > 0 ? (
            <div className="mt-5">
              <Row xs={1} md={3} className="g-4">
                {foundProducts.map((product) => (
                  <Col key={product.id}>
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
          ) : (
            <>
            
              <div className="mt-5">
              <Row xs={1} md={3} className="g-4">
                {products.map((product) => (
                  <Col key={product.id}>
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
            </>
          )}
      </div>
    </div>
  );
};

export default Search;
