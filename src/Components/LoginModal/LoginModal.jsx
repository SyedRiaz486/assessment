
import React, {  useState } from 'react'
import classes from "./LoginModal.module.css";
import Button from "../Button/Button";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate, Link } from "react-router-dom";

const LoginModal = () => {
  const [data, setdata] = useState()
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((data) => {
      navigate("/")
      setEmail("")
      setPassword("")
    }).catch((error) => alert(error))
  }
  return (
    <div className={classes.modal_container}>
      <h1>LOGO</h1>
      <form onSubmit={handleLogin}>
        <input
          className={classes.email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target
              .value)
          }}
        />
        <input
          className={classes.password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target
              .value)
          }}
        />
        <Button type="submit">Login</Button>
        <Button><Link to="/signUp">Free Sign-up</Link></Button>
      </form>
      <p>
        forget Password? | <a>Click here</a>
      </p>
    </div>
  );
};

export default LoginModal;
