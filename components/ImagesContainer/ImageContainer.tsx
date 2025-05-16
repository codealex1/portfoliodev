import React from 'react'
import "./imageContainer.css";
import { StaticImageData } from 'next/image';

interface ImageContainerProps {
  imageSource: StaticImageData;
  description: string;
}

export const ImageContainer = ({ imageSource, description }: ImageContainerProps) => {
  return (
    <div className='image-container'>
        <img src={imageSource.src} alt="all alt goes here" className='image'/>
        <p className='date'>{description}</p>
    </div>
  );
};
export default ImageContainer;
