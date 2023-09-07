import styled from "styled-components";
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

const BigImage = styled.div`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* Maintain aspect ratio */
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${props =>
    props.active
      ? `
      border-color: #ccc;
    `
      : `
      border-color: transparent;
    `}
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

export default function ProductImages({ images, alt  }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <ImageWrapper>
        <BigImage>
          {/* Use Next.js Image component for the big image */}
          <Image src={activeImage} layout="fill" objectFit="contain" alt={alt} />
        </BigImage>
      </ImageWrapper>
      <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
            alt={alt}
          >
            {/* Use Next.js Image component for the thumbnail images */}
            <Image src={image} width={40} height={40} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
