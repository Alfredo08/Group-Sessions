import { Col, Container, Row, Form, Button } from "react-bootstrap";
import './App.css';

const App = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h1> React bootstrap demonstration </h1>
        </Col>
        <Col lg={6}>
          <p> A description will be here! </p>
        </Col>
      </Row>
      <Row>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
    </Container>
  );
}

export default App;
