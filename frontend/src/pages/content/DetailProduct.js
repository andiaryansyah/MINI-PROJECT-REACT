import React, { useState, useEffect } from "react";
import { Form, Figure, Button} from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import SplitPane from "react-split-pane";
import "../../assets/styles/index.scss";

const DetailProduct = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setProductName(response.data.name);
    setQuantity(response.data.quantity);
    setPrice(response.data.price);
    setPreview(response.data.url);
  };

  

  return (
    <div className="container mt-5">
      <SplitPane split="vertical" minSize={700} style={{ marginLeft: "30px" }}>
        <div>
          {preview ? (
            <Figure>
              <Figure.Image
                width={550}
                height={180}
                alt="171x180"
                src={preview}
              />
            </Figure>
          ) : (
            ""
          )}
        </div>
        <div style={{ marginTop: "80px" }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold fs-1  font-monospace ">
                {productName}
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold fs-4 font-monospace">
                 Rp. {price}
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label >
                This is an item of clothing. It is handsewn from high-quality
                fabric, and features seams, hems, cuffs, and a neckline. Perfect
                for wearing on a particular occasion, this pairs well with other
                items available in our collection. Made in the U.S.
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label  className="fs-4 font-monospace">Quantity : {quantity}</Form.Label>
            </Form.Group>
            <Button variant="success" type="submit" style={{ width: "70%" }}>
              Add to Cart
            </Button>
          </Form>
        </div>
      </SplitPane>
    </div>
  );
};

export default DetailProduct;
