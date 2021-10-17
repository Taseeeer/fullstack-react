import { Component } from "react";
import CustomButton from "../custombutton/CustomButton";
import FormInput from "../frominput/FormInput";
import "./signin.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

export default class Sigin extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <br />
          <label>Email</label>
          <br />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <br />
          <div
            style={{
              display: "flex",
            }}
          >
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              style={{ backgroundColor: "dodgerblue" }}
              onClick={() => signInWithGoogle()}
            >
              SignIn Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
