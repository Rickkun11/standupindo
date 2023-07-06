import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from "react-bootstrap/Form";
function BookComp() {
  return (

            <Card className="rounded-0" style={{ height: '30%', width: '33%'}}>
                <Card.Title className="text-center">Book Now</Card.Title>
            <Card.Body>
            {/*dropdown 1*/}
              <Dropdown>
                <Dropdown.Toggle variant="light w-100 text-start" id="dropdown-basic">
                  Cinemas
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            <br />

            {/*dropdown 2*/}
              <Dropdown>
                <Dropdown.Toggle variant="light w-100 text-start" id="dropdown-basic">
                  Film
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            <br />

            {/*dropdown 3*/}
            <Form.Control className="light w-100" type="date" />

            <br />

            {/*dropdown 4*/}
              <Dropdown>
                <Dropdown.Toggle variant="light w-100 text-start" id="dropdown-basic">
                  Times
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <br />

                  <Button variant="dark float-end">Book Now</Button>
            </Card.Body>
            </Card>
  );
}

export default BookComp;