import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';

const DescriptionCard = ({ cardImage, heading, description, linkTo }) => {
    return (
        <Card className='description-card'>
            <CardMedia
                component='img'
                alt={heading}
                height={140}
                image={cardImage}
            />
            <CardContent className='description-text'>
                <h5>{heading}</h5>
                <p>{description}</p>
                <Link to={linkTo} className='read-more-container'>
                    <p>Read More</p>
                </Link>
            </CardContent>
        </Card>
    );
};

export default DescriptionCard;