import React, {useState} from 'react'
import style from "../../assets/styles/Button.module.css";
import { Form } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import SplitPane from "react-split-pane";
import LoginImage from "../../assets/img/register1.jpg";

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                name,
                password,
                confPassword,
                address,
                phone_number
            });
            navigate("/dashboard");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div>
      <SplitPane split="vertical" minSize={670} style={{ marginLeft: "30px" }}>
      <div>
      <img
            src={LoginImage}
            alt="pic1"
            width={600}
            height={563}
            style={{
              marginTop: "80px",
              marginLeft: "20px",
            }}
          />
      </div>
        <div  className="m-2">
        <h1
            className="fw-bold"
            style={{ marginTop: "80px", marginLeft: "135px", color:"#db755c"}}
          >
            Register
          </h1>
          <p className="mt-3" style={{ marginLeft: "70px", color:"#db755c"}}>{msg}</p>
          <Form onSubmit={Register}>
          <Form.Label htmlFor="name">Username</Form.Label>
          <Form.Control
            type="text"
            id="name"
            style={{ width: "80%" }}
            placeholder="Masukkan Username"
            required={true}
            value={name} onChange={(e)=>setName(e.target.value)}
          />
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            style={{ width: "80%" }}
            placeholder="*********"
            required={true}
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <Form.Label htmlFor="password">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="confpassword"
            style={{ width: "80%" }}
            placeholder="*********"
            required={true}
            value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}
          />
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            type="text"
            id="address"
            style={{ width: "80%" }}
            placeholder="Masukkan Address"
            required={true}
            value={address} onChange={(e)=>setAddress(e.target.value)}
          />
        <Form.Label htmlFor="phone_number">Phone Number</Form.Label>
        <Form.Control
          type="text"
          id="phone_number"
          style={{ width: "80%" }}
          placeholder="Masukkan No. Telepon"
          required={true}
          value={phone_number} onChange={(e)=>setPhoneNumber(e.target.value)}
        />
          <br />
          <button className={style.btnLogin}  type="submit">Submit</button>
          <br />
          </Form>
        </div>
      </SplitPane>
    </div>
  )
}

export default Register;