import React, { useState, useEffect } from "react";
import { Form, Button, Figure } from "react-bootstrap";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditProduct = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect (() => {
    getProductById();
  },[])

  const getProductById = async () => {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      setProductName(response.data.name);
      setQuantity(response.data.quantity);
      setPrice(response.data.price);
      setFile(response.data.image);
      setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image1 = e.target.files[0];
    setFile(image1);
    setPreview(URL.createObjectURL(image1));
    console.log(image1);
  };

  const updateProduct = async(e) => {
      e.preventDefault();
        const formData = new FormData();
        formData.append("file", file)
        formData.append("name", productName)
        formData.append("quantity", quantity)
        formData.append("price", price)
        console.log();
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, formData, {
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
    <div className="container" style={{marginTop:"80px"}}>
      <Form onSubmit={updateProduct} >
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

        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" required={true}
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
        </Form.Group >
        <Button className="mb-5" variant="primary" type="submit" >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditProduct;
