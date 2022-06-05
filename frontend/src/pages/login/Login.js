import React, { useState } from "react";
import style from "../../assets/styles/Button.module.css";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SplitPane from "react-split-pane";
import LoginImage from "../../assets/img/login1.jpg";
import LoginImage1 from "../../assets/img/login2.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        name: name,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <SplitPane split="vertical" minSize={670} style={{ marginLeft: "30px" }}>
        <div
          style={{ background: "#A1887F", paddingBottom: "100px" }}
          className="d-flex justify-content-end"
        >
          <img
            src={LoginImage}
            alt="pic1"
            width={315}
            height={280}
            style={{
              marginTop: "80px",
              marginLeft: "20px",
              boxShadow:"0 12px 35px 0 #3E2723"
            }}
          />
          <img
            src={LoginImage1}
            alt="pic2"
            width={350}
            height={280}
            style={{
              marginTop: "280px",
              marginRight: "20px",
              marginLeft: "20px",
              boxShadow:"0 12px 35px 0 #3E2723"
            }}
          />
        </div>
        <div className="m-5">
          <h1
            className="fw-bold"
            style={{ marginTop: "90px", marginLeft: "135px", color:"#db755c"}}
          >
            Login
          </h1>
          <Form.Label htmlFor="name" className="mt-3">
            Username
          </Form.Label>
          <Form.Control
            type="text"
            id="name"
            style={{ width: "80%" }}
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label htmlFor="password" className="mt-4">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            id="password"
            style={{ width: "80%" }}
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className={style.btnLogin}
            onClick={Auth}
          >
            Login
          </button>
          <br />
          <p className="mt-4" style={{ marginLeft: "95px", color:"#db755c"}}>{msg}</p>
        </div>
      </SplitPane>
    </div>
  );
};

export default Login;
