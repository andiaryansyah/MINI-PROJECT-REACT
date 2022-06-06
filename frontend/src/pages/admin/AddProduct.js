import React, { useState } from "react";
import { Form, Button, Figure } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async(e) => {
      e.preventDefault();
        const formData = new FormData();
        formData.append("file", file)
        formData.append("name", productName)
        formData.append("quantity", quantity)
        formData.append("price", price)
        try {
            await axios.post("http://localhost:5000/products", formData, {
                headers:{
                    "content-type":"multipart/form-data"
                }
            });
            navigate("/products")
        } catch (error) {
            console.log(error);
        }
  }

  return (
    <div className="container mb-5" style={{marginTop:"80px"}}>
      <Form onSubmit={saveProduct} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" 
          onChange={loadImage} />
        </Form.Group>
        <Form.Group>
          {preview ? (
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={preview}
              />
            </Figure>
          ) : (
            ""
          )}
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
