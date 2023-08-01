/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import Layout from "./../components/Layout/Layout";

import {useNavigate} from "react-router-dom";
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,

    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,

    MDBCarousel,
    MDBCarouselItem
} from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import {
    Form,
    Button,
    Dropdown,
    Tabs,
    Tab,
    Card
} from 'react-bootstrap/';
import toast from "react-hot-toast";

import banner from '../components/assets/banner.jpg';
import banner1 from '../components/assets/1.jpg';
import banner2 from '../components/assets/2.jpg';
import banner3 from '../components/assets/3.jpg';

const HomePage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [setCategories] = useState([]);
    const [checked] = useState([]);
    const [total] = useState(0);
    const [loading, setLoading] = useState(false);
    const [basicActive, setBasicActive] = useState('tab1');

    //tabs
    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <> < Layout title = {
            "Standup Indo - Best offers "
        } > <Container
            style={{
                marginTop: '20px'
            }}
            className="container w-125">
            <MDBTabs className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleBasicClick('tab1')}
                        active={basicActive === 'tab1'}>
                        Home
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleBasicClick('tab2')}
                        active={basicActive === 'tab2'}>
                        Tab 2
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleBasicClick('tab3')}
                        active={basicActive === 'tab3'}>
                        Tab 3
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent className='mb-3'>
                <MDBTabsPane show={basicActive === 'tab1'}>

                    <div className='card-row d-flex gap-3'>
                            <MDBCarousel
                                showIndicators="showIndicators"
                                showControls="showControls"
                                fade="fade"
                                id='carousel' className='d-flex'>
                                <MDBCarouselItem className='w-100 d-block' itemId={1} src={banner1} alt='...' >
                                    <h5>First slide label</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </MDBCarouselItem>

                                <MDBCarouselItem className='w-100 d-block' itemId={2} src={banner2} alt='...'>
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </MDBCarouselItem>

                                <MDBCarouselItem className='w-100 d-block' itemId={3} src={banner3} alt='...'>
                                    <h5>Third slide label</h5>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </MDBCarouselItem>
                            </MDBCarousel>

                        <div className="booknow flex-fill flex-shrink-1">
                            <MDBCard className='h-100'>
                                <div className="card-header">Book Now</div>
                                <Dropdown className="m-2 mb-0">
                                    <Dropdown.Toggle variant="light w-100 text-start mt-3" id="dropdown-basic">
                                        Cinemas
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <br/> {/*dropdown 2*/}
                                <Dropdown className="m-2 mb-0">
                                    <Dropdown.Toggle variant="light w-100 text-start" id="dropdown-basic">
                                        Film
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <br/> {/*dropdown 3*/}
                                <Form.Control className="w-75 m-2 mb-0" type="date"/>

                                <br/> {/*dropdown 4*/}
                                <Dropdown className="m-2 mb-0">
                                    <Dropdown.Toggle variant="light w-100 text-start" id="dropdown-basic">
                                        Times
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <br/>

                                <Button
                                    variant="dark float-end"
                                    className="m-2 mb-0"
                                    >Book Now</Button>

                            </MDBCard>
                        </div>

                        <div className=''  id="featured">
                            <MDBCard className='h-100' id="featured-card">
                                <MDBCardHeader>Featured</MDBCardHeader>
                                <MDBCardBody>
                                    <Tabs
                                        defaultActiveKey="nowShowing"
                                        id="uncontrolled-tab-example"
                                        className="mb-3">
                                        <Tab eventKey="nowShowing" title="Now Showing" className="text-center">
                                            <Card.Body className="review-card">
                                                <Card id="review-card-layout">
                                                    <Card.Body
                                                        className='review-button'
                                                        style={{
                                                            display: 'block'
                                                        }}>
                                                        <Card.Img variant="top" src={banner}/>
                                                        <Button variant="light" className="float-start">Find Cinema</Button>
                                                        <Button variant="light" className="float-end">Book Now</Button>
                                                    </Card.Body>
                                                    <Card.Body className='review-content'>
                                                        <Card.Title className="float-start">Card Title</Card.Title>
                                                        <Card.Text className="float-start text-start">
                                                            Description Description Description Description
                                                            <br/>
                                                            <br/>
                                                            ⭐⭐⭐⭐⭐
                                                            <Card.Link className="float-end" href="#">More..</Card.Link>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Card.Body>

                                            <Card.Body className="review-card">
                                                <Card id="review-card-layout">
                                                    <Card.Body
                                                        className='review-button'>
                                                        <Card.Img variant="top" src={banner}/>
                                                        <Button variant="light" className="float-start">Find Cinema</Button>
                                                        <Button variant="light" className="float-end">Book Now</Button>
                                                    </Card.Body>
                                                    <Card.Body className='review-content'>
                                                        <Card.Title className="float-start">Card Title</Card.Title>
                                                        <Card.Text className="float-start text-start">
                                                            Description Description Description Description
                                                            <br/>
                                                            <br/>
                                                            ⭐⭐⭐⭐⭐
                                                            <Card.Link className="float-end" href="#">More..</Card.Link>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Card.Body>

                                        </Tab>

                                        <Tab eventKey="comingSoon" title="Coming Soon" className="text-center">
                                            <Card.Body className="review-card">
                                                <Card id="review-card-layout">
                                                    <Card.Body
                                                        className='review-button'>
                                                        <Card.Img variant="top" src={banner}/>
                                                        <Button variant="light" className="float-start">Find Cinema</Button>
                                                        <Button variant="light" className="float-end">Book Now</Button>
                                                    </Card.Body>
                                                    <Card.Body className='review-content'>
                                                        <Card.Title className="float-start">Card Title</Card.Title>
                                                        <Card.Text className="float-start text-start">
                                                            Description Description Description Description
                                                            <br/>
                                                            <br/>
                                                            ⭐⭐⭐⭐⭐
                                                            <Card.Link className="float-end" href="#">More..</Card.Link>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Card.Body>
                                        </Tab>
                                    </Tabs>
                                </MDBCardBody>
                            </MDBCard>
                        </div>

                        <div className='flex-fill align-self-stretch'>
                            <MDBCard className='h-100'>
                                <MDBCardHeader>User Goals</MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardTitle></MDBCardTitle>
                                    <MDBCardText></MDBCardText>

                                </MDBCardBody>
                            </MDBCard>
                        </div>

                        <div className='flex-fill'>
                            <MDBCard className='h-100'>
                                <MDBCardHeader>Find Cinemas</MDBCardHeader>
                                <MDBCardBody>
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

                                    <br/>
                                    OR

                                    <br/>
                                    <br/> {/*Form 2*/}
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicText">
                                            <Form.Label>Enter town or Postalcode</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Text"/>
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Check type="checkbox" label="Remember my option"/>
                                        </Form.Group>
                                    </Form>

                                    <br/>
                                    <MDBBtn href='#'>Go somewhere</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
            </MDBTabsContent>

            {/* <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>

                <ReactPlayer
                url={`/api/v1/product/product-photo/${p.link}`}
                controls={false}
                width={285}
                height={150}

                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add Favorite
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */
            }
        </Container>
    </Layout>

</>
    );
};

export default HomePage;
