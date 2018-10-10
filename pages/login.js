import React, { Component } from "react";
import { Button, Checkbox, Form, FormGroup, FormControl, ControlLabel, Grid, Row, Col, Clearfix } from "react-bootstrap";
import Link from 'next/link'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <Link href="/">
            <button type="button">Home</button>
          </Link>
        </div>
        <hr />
        <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={6}>
            <Button type="submit">Sign in</Button>
          </Col>
          <Col smOffset={2} sm={6}>
            <Button type="submit">Sign up</Button>
          </Col>
        </FormGroup>
    </Form>
    </div>
    )
  }
}
