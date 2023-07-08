import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from "react-bootstrap/Form";
function FindCinemasComp() {
  return (

            <Card className="rounded-0" style={{ height: '30%', width: '33%'}}>
                <Card.Title className="text-center">Find Cinemas</Card.Title>
            <Card.Body>
            {/*dropdown 1*/}
              <Dropdown>
                <Dropdown.Toggle variant="light w-100 text-start" id="dropdown-basic">
                  Select Cinemas
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            <br />
            OR

            <br />
            <br />

            {/*Form 2*/}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Enter town or Postalcode</Form.Label>
                <Form.Control type="text" placeholder="Enter Text" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember my option" />
              </Form.Group>
            </Form>

            <br />

            <Button variant="dark float-end">Book Now</Button>
            </Card.Body>
            </Card>
  );
}

export default FindCinemasComp;