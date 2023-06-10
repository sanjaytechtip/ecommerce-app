import React, { useState, useContext } from "react";
import Layout from "./../../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../style/AuthStyle.css";
import { authContext } from "../../context/auth";

const Login = () => {
  const { setAuthData, auth } = useContext(authContext);
  
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const navigate = useNavigate();
  if(auth.data){
    navigate("/"); 
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    // For Email Validation
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
    } else {
      setPasswordErr(false);
    }

    //console.log(name,email,password,phone,address); return false;
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res.data.success) {
        setAuthData({ user: res.data.user, token: res.data.token });
        toast.success(res.data.message, {
          duration: 4000,
          position: "top-center",
        });
        navigate("/");
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
    <Layout title={"Login - Ecommerce App"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN PAGE</h4>

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
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
