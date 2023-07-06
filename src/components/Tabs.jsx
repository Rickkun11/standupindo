import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

import CarouselComp from './Carousels';
import BookComp from './BookNow';
import ReviewsComp from './FilmReviews';
import GoalsComp from './UserGoals';
import FindCinemasComp from './FindCinemas';

function TabsComp() {
  return (
    <>
        <Container>
            <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
            data-bs-theme="dark"
            >
            <Tab eventKey="home" title="Home">
            <>
                <Container className="tabs-layout" style={{ display: 'flex'}}>
                    <CarouselComp />
                    <BookComp />
                    <ReviewsComp />
                    <GoalsComp />
                    <FindCinemasComp />
                </Container>
            </>
            </Tab>
            <Tab eventKey="booknow" title="Book Now">
                Tab content for Book Now
            </Tab>
            <Tab eventKey="films" title="Films">
                Tab content for Films
            </Tab>
            <Tab eventKey="cinemas" title="Cinemas">
                Tab content for Cinemas
            </Tab>
            <Tab eventKey="offers" title="Offers">
                Tab content for Offers
            </Tab>
            <Tab eventKey="funstuff" title="Fun Stuff">
                Tab content for Stuff
            </Tab>
            </Tabs>
        </Container>
    </>
  );
}

export default TabsComp;