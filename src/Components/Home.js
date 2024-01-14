import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselData from './CarouselData';
import LocationCard from './LocationCard';
import Products from './Products';
import {images} from '../data/data'
import { Button } from 'react-bootstrap';

const Home = () => {    
  return (
    <>
      <Row className='text-center'>
        <Col xs={9}><CarouselData images={images}/></Col>        
        <Col ><LocationCard/></Col>
      </Row>
      <h5>TRENDING PRODUCTS <Button className='ms-5'>ADD PRODUCTS</Button></h5>      
      <Products/>
    </>
      
  );
}

export default Home