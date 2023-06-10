import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../style/AuthStyle.css";
const Register = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [nameErrMsg, setNameErrMsg] = useState();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [address, setAddress] = useState("");
  const [addressErr, setAddressErr] = useState(false);
  const [addressErrMsg, setAddressErrMsg] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(name,email,password,phone,address); return false;
    //Error Handler

    //Name Error
    if (name == "") {
      setNameErr(true);
      setNameErrMsg("Please enter your Name.");
    } else if (name.length <= 3) {
      setNameErr(true);
      setNameErrMsg("Please enter atleast 4 characters.");
    } else {
      setNameErr(false);
    }

    //Email Error
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "") {
      setEmailErr(true);
      setEmailErrMsg("Please enter your e-mail id.");
    } else if (!regEmail.test(email)) {
      setEmailErr(true);
      setEmailErrMsg("Please enter your valid e-mail id.");
    } else {
      setEmail(email);
      setEmailErr(false);
    }

    // For Password Validation
    if (password == "") {
      setPasswordErr(true);
      setPasswordErrMsg("Please enter your password.");
    } else if (password != "" && password.length <= 5) {
      setPasswordErr(true);
      setPasswordErrMsg("Password must be 6 characters length.");
    } else {
      setPasswordErr(false);
    }

    // For Phone Validation
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone == "") {
      setPhoneErr(true);
      setPhoneErrMsg("Please enter your phone.");
    } else if (phone != "" && !(phone.match(phoneno))) {
      setPhoneErr(true);
      setPhoneErrMsg("Phone Number only accept 10 digits.");
    } else {
      setPhoneErr(false);
    }

    //Address Error
    if (address == "") {
      setAddressErr(true);
      setAddressErrMsg("Please enter your Address.");
    } else if (address.length <= 4) {
      setAddressErr(true);
      setAddressErrMsg("Please enter atleast 5 characters.");
    } else {
      setAddressErr(false);
    }



    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res.data.success) {
        toast.success(res.data.message, {
          duration: 4000,
          position: "top-center",
        });
        navigate("/login");
      } else {
        toast.error(res.data.message, {
          duration: 4000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Register  - Ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Register page</h4>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameErr ? (
              <span style={{ color: "red" }}>*{nameErrMsg}</span>
            ) : null}
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr ? (
              <span style={{ color: "red" }}>*{emailErrMsg}</span>
            ) : null}
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr ? (
              <span style={{ color: "red" }}>*{passwordErrMsg}</span>
            ) : null}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneErr ? (
              <span style={{ color: "red" }}>*{phoneErrMsg}</span>
            ) : null}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {addressErr ? (
              <span style={{ color: "red" }}>*{addressErrMsg}</span>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
