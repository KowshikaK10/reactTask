import React  from 'react';
import { Carousel,Card,CardGroup,CardBody, CardTitle, CardSubtitle } from 'react-bootstrap';
import {cardData , cardData1} from '../data/data'
const Products = () => { 
    return (
            <Carousel className='container-sm'>           
            <Carousel.Item> 
                <CardGroup>
                    {cardData.map((image)=>(
                            <Card style={{width:'10rem'}} border="light"  id={image.id}>
                                <img src={image.image} alt="img" className='w-100 h-50'/>
                                <CardBody >
                                    <CardTitle>{image.name}</CardTitle>
                                    <CardSubtitle>{image.shortDescription}</CardSubtitle>
                                    <Card.Text>{image.description}</Card.Text>
                                    <p>{image.tags}</p>
                                    <h3>Price: ${image.price}</h3>
                                    <h4>Quantity: {image.quantity}</h4> 
                                </CardBody>
                            </Card>
                    ))}                    
                </CardGroup>
            </Carousel.Item> 
            <Carousel.Item> 
                <CardGroup>
                {cardData1.map((image)=>(
                            <Card style={{width:'10rem'}} border="light" id={image.id}>
                                <img src={image.image} alt="img" className='w-100 h-50' />
                                <CardBody >
                                    <CardTitle>{image.name}</CardTitle>
                                    <CardSubtitle>{image.shortDescription}</CardSubtitle>
                                    <Card.Text>{image.description}</Card.Text>
                                    <p>{image.tags}</p>
                                    <h3>Price: ${image.price}</h3>
                                    <h4>Quantity: {image.quantity}</h4> 
                                </CardBody>
                            </Card>
                    ))} 
                </CardGroup>
            </Carousel.Item>                      
      </Carousel>
      );
    };

export default Products;