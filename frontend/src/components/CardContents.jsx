import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import React from '../assets/React.jpg'
function CardContents() {
  return (
    <>
        <Container className='gap-3 d-flex flex-wrap justify-content-start pt-2' style={{ width: '100%'}} >
            <Card style={{ width: '15rem'}}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Comedy</Card.Title>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Comedy</Card.Title>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Comedy</Card.Title>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Comedy</Card.Title>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Non Comedy</Card.Title>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Comedy</Card.Title>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Comedy</Card.Title>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='text-center mt-3'>Standup Comedy</Card.Title>
            </Card>

        </Container>
    </>
 );
}

export default CardContents;