import React from 'react';
import { data } from './images';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselWrapper = styled.section`
    display: flex;
    justify-content: center;
`;

export const MovieCarousel = () => {
    return (
        <CarouselWrapper>
            <Carousel 
                width={350}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                dynamicHeight={true}
            >
                {data.map(image => (
                    <div key={image.title}>
                        <img src={image.src} />
                    </div>
                ))}
            </Carousel>
        </CarouselWrapper>
    )
}