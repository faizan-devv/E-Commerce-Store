import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Row, Col, Container } from "react-bootstrap";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const onChangeHandler = (e) => {
    const temp = { ...userData };
    temp[e.target.name] = e.target.value;
    setUserData(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = localStorage.getItem("creds");
    if (temp) {
      console.log("entered if");
      temp = JSON.parse(temp);
      temp.users.push(userData);
      let obj = JSON.stringify(temp);
      localStorage.setItem("creds", obj);
      navigate("/login");
    } else {
      console.log("Entered else");
      localStorage.setItem("creds", JSON.stringify({ users: [userData] }));
      navigate("/login");
    }
  };
  return (
    <div className={styles.SignUpWrap}>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form className={styles.Form}>
              <h2>Sign Up</h2>
              <Form.Group className="mb-3">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </Form.Group>

              {userData.email.length >= 3 && userData.password.length >= 3 ? (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  disabled
                >
                  Submit
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
