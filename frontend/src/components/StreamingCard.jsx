import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {CDBInput} from 'cdbreact';

import React from '../assets/React.jpg'
function StreamingCard() {
  return (
    <>
        <Container className='gap-3 d-flex flex-wrap justify-content-start pt-2' style={{ width: '100%'}} >
            <Card style={{ width: '100%'}}>
                <Card.Img variant="top" src={React} />
                <Card.Title className='m-3 text-start mt-3'>Standup Comedy</Card.Title>
                <div className='m-3 mt-0 w-10 d-flex gap-2'>
                    <Button variant="dark">👍Like</Button>
                    <Button variant="dark">👎Dislike</Button>
                    <Button variant="dark">⭐Favorite</Button>
                </div>
                <div className='m-3 mt-0 w-10'>
                    rating
                    <br />
                    ⭐⭐⭐⭐⭐
                </div>
                <div className='m-3 mt-0 w-10'>
                    Komentar
                    <CDBInput material hint="Comentar" type="Comentar" placeholder='Tinggalkan Komentar......' />
                </div>
            </Card>

        </Container>
    </>
 );
}

export default StreamingCard;