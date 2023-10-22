import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Tags = ({colorButton,textButton}) => {
    return (
        <>
            <Badge bg={colorButton}>{textButton}</Badge>
        </>
    );
};
export default Tags;