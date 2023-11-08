import React, { useEffect, useState } from 'react'
import classes from "./SignUpModal.module.css"
import Button from "../Button/Button";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";

const SignUpModal = () => {

    const navigate = useNavigate();
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((data) => {
            navigate("/")
            setEmail("")
            setPassword("")
        }).catch((error) => alert(error))
    }
    return (
        <div className={classes.modal_container}>
            <h1>LOGO</h1>
            <form onSubmit={handleLogin}>
                {/* <input
                    className={classes.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={name}
                    onChange={(e) => {
                        setName(e.target
                            .value)
                    }}
                /> */}

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
                <Button type="submit">Sign Up</Button>
                {/* <Button>Free Sign-up</Button> */}
            </form>

            <p>
                forget Password? | <a>Click here</a>
            </p>
        </div>
    );
}

export default SignUpModal