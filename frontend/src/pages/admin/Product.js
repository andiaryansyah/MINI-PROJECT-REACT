import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Product = () => {
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

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid mt-5 mb-4" >
      <div className="mt-4">
        <h1 >List Products</h1>
      </div>
      {isLoading ? (
        <ReactLoading
          type="spinningBubbles"
          color="black"
          className="m-auto mt-5"
        />
      ) : (
        <div className="mt-4">
          <div className="d-flex justify-content-end">
          <Link to={"/products/add"}>
            <Button variant="success" className="mb-3">
              Add New +
            </Button>
          </Link>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr align="center">
                <th width="50px">No</th>
                <th width="350px">Name Product</th>
                <th width="35px">Quantity</th>
                <th width="100px">Price</th>
                <th width="40px">Image</th>
                <th width="100px">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} align="center">
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>Rp. {product.price}</td>
                  <td>
                    <img src={product.url} height={50} alt="pic url"/>
                  </td>
                  <td>
                  <Link to={`edit/${product.id}`}>
                      <Button className="btn-warning mx-2">Edit</Button>
                    </Link>
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this account?"
                          )
                        )
                          deleteProduct(product.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Product;
