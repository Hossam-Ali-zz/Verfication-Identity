import React, { Component } from "react";
import { Divider, Form, Button, Header } from "semantic-ui-react";
import { Formik } from "formik";
import { fire } from "../../firebase";
import { withRouter } from "react-router-dom";
import * as yup from "yup";
import notify from "../../components/Toast";
import "./signin.css";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Email is required!"),
  password: yup.string().required("Password is required!")
});

class LoginForm extends Component {
  handleOnSubmit(values) {
    fire
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(u => {
        localStorage.setItem("token", u.user.uid);
        notify("Login successful!", "success");
        return this.props.history.push("/dashboard");
      })
      .catch(err => notify("Wrong username or password!", "warning"));
  }

  render() {
    return (
      <div className="login-form">
        <Formik
          validationSchema={schema}
          onSubmit={values => {
            this.handleOnSubmit(values);
          }}
          initialValues={{
            email: "",
            password: ""
          }}
          render={({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors
          }) => (
            <div style={{ marginTop: "50px" }}>
              <Header as="h1" textAlign="left">
                Please login
              </Header>
              <Divider hidden />
              <Form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
                <label>Business Email</label>
                <Form.Field controlId="email-control">
                  <Form.Input
                    placeholder="Email*"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.email && !!touched.email}
                  />
                  {errors.email && touched.email ? (
                    <span style={{ color: "#912d2b" }}>{errors.email}</span>
                  ) : null}
                </Form.Field>
                <label>Password</label>
                <Form.Field controlId="password-control">
                  <Form.Input
                    type="password"
                    placeholder="Password*"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.password && !!touched.password}
                  />
                  {errors.password && touched.password ? (
                    <span style={{ color: "#912d2b" }}>{errors.password}</span>
                  ) : null}
                </Form.Field>
                <span>
                  Forgot Password? Reset <a href="#">here</a>
                </span>
                <Divider hidden />
                <div style={{ textAlign: "center" }}>
                  <Button type="submit" color="blue">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          )}
        />
      </div>
    );
  }
}
export default withRouter(LoginForm);
