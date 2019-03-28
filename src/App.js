import React, { Component } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import Auth from "./Auth/Auth";

const auth = new Auth();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fixed="top">
          <Navbar.Brand>React auth</Navbar.Brand>
          <Nav.Item className="mr-auto">
            <Button className="outline-primary">Home</Button>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Button className="outline-secondary">Login</Button>
          </Nav.Item>
        </Navbar>
        <div className="container" style={{ marginTop: 60 }}>
          <h1 className="text-center display-4">Welcome to react</h1>
          <h1 className="text-center">Please login your account</h1>
          <Button variant="outline-dark" block onClick={auth.login}>
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
