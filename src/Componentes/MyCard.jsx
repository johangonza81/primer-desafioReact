import React from 'react';
import Card from 'react-bootstrap/Card';
import Boton from './Boton';

const MyCard = ({image,title,text,colorButton,textButton}) =>{
    return(
        <>
        <Card id ="card">
            <Card.Img variant="top" src={image}/>

            <Card.Body className='cardBody'> 
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Boton colorButton={colorButton} textButton={textButton}/>
            </Card.Body>
        </Card>
        </>
    )
}
export default MyCard;