import { Navbar, Form, Button, Row, Col, Container } from "react-bootstrap";
import displayImage from '../assets/weather.jpg'

const Search = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-between">
        <Container>
      <Navbar.Brand href="#home">Weather APP</Navbar.Brand>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Enter City..."
                className=" mr-sm-4"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
        </Container>
      </Navbar>
      <header className="App-header">
      <img src={displayImage} alt="display" height='700px' width='800px' style={{opacity:0.4}}></img>

      </header>
    </>
  );
};

export default Search;
