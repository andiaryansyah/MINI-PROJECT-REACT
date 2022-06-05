import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const Dashboard = () => {
  //const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      localStorage.setItem("name", decoded.name);
      console.log(decoded);
      //setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/login");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currenDate = new Date();
      if (expire * 1000 < currenDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        //setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:5000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{marginTop:"120px"}}>
      {/* <Link to={"/register"}>
        <Button className="btn btn-success m-4">Add Account</Button>
      </Link>
      <br /> */}
      <div className="container-fluid">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr align="center">
              <th width="50px">No</th>
              <th width="350px">Name</th>
              <th width="400px">Address</th>
              <th width="140px">Phone Number</th>
              <th width="80px">#</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} align="center">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phone_number}</td>
                <td>
                  <Button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this account?"
                        )
                      )
                        deleteUser(user.id);
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
    </div>
  );
};

export default Dashboard;
