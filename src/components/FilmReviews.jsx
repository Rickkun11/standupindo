import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

import React from '../assets/React.jpg'
function ReviewsComp() {
  return (

            <Card className="rounded-0" style={{width: '40%'}}>
                <Card.Title className="text-center">Film Reviews</Card.Title>
                <Tabs
                  defaultActiveKey="nowShowing"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="nowShowing" title="Now Showing" className="text-center">
                    <Card.Body className="review-card">
                      <Card id="review-card-layout">
                        <Card.Body className='review-button' style={{display: 'block'}}>
                          <Card.Img variant="top" src={React} />
                          <Button variant="light" className="float-start">Find Cinema</Button>
                          <Button variant="light" className="float-end">Book Now</Button>
                        </Card.Body>
                        <Card.Body className='review-content'>
                          <Card.Title className="float-start">Card Title</Card.Title>
                          <Card.Text className="float-start text-start">
                            Description Description Description Description
                          <br />
                          <br />
                          ⭐⭐⭐⭐⭐
                          <Card.Link className="float-end" href="#">Card Link</Card.Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Card.Body>

                      <Card.Body className="review-card">
                      <Card id="review-card-layout">
                        <Card.Body className='review-button' style={{display: 'block'}}>
                          <Card.Img variant="top" src={React} />
                          <Button variant="light" className="float-start">Find Cinema</Button>
                          <Button variant="light" className="float-end">Book Now</Button>
                        </Card.Body>
                        <Card.Body className='review-content'>
                          <Card.Title className="float-start">Card Title</Card.Title>
                          <Card.Text className="float-start text-start">
                            Description Description Description Description
                          <br />
                          <br />
                          ⭐⭐⭐⭐⭐
                          <Card.Link className="float-end" href="#">Card Link</Card.Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Card.Body>


                  </Tab>

                  <Tab eventKey="comingSoon" title="Coming Soon" className="text-center">
                  <Card.Body className="review-card">
                      <Card id="review-card-layout">
                        <Card.Body className='review-button' style={{display: 'block'}}>
                          <Card.Img variant="top" src={React} />
                          <Button variant="light" className="float-start">Find Cinema</Button>
                          <Button variant="light" className="float-end">Book Now</Button>
                        </Card.Body>
                        <Card.Body className='review-content'>
                          <Card.Title className="float-start">Card Title</Card.Title>
                          <Card.Text className="float-start text-start">
                            Description Description Description Description
                          <br />
                          <br />
                          ⭐⭐⭐⭐⭐
                          <Card.Link className="float-end" href="#">Card Link</Card.Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Card.Body>
                  </Tab>
                </Tabs>
            </Card>
  );
}

export default ReviewsComp;