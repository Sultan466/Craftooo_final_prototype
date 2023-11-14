import React, { Fragment } from "react";
import "./Slider.css";
import styled, { keyframes } from "styled-components";

const Slider = () => {
  const row = [
    "https://logowik.com/content/uploads/images/anydesk8297.jpg",
    "https://logowik.com/content/uploads/images/rakuten-viber6589.jpg",
    "https://logodownload.org/wp-content/uploads/2019/10/deloitte-logo-0.png",
    "https://www.freepnglogos.com/uploads/ebay-logo-png/ebay-logo-lippincott-0.png",
    "https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-black-png-transparent-pngpix-15.png",
    "https://iconape.com/wp-content/png_logo_vector/nasa-logo.png",
    "https://freelogopng.com/images/all_img/1664035558meta-logo-png.png",
    "https://seeklogo.com/images/T/tietoevry-logo-37455151EC-seeklogo.com.png",
    "https://seeklogo.com/images/S/saudi-aramco-logo-9C3DDA8702-seeklogo.com.png",
  ];
  
  return (
    <Fragment>
      <div className="Slider">
        <div className="Slider-text">
          <p>
            Since 1989. For millions of users. We transform businesses with
            powerful and adaptable digital solutions that satisfy the needs of
            today and unlock the opportunities of tomorrow.
          </p>
        </div>
        <div className="slider-imgs">
          <Marquee>
            <MarqueeGroup>
              {row.map((el) => (
                <ImageGroup>
                  {console.log(el, "1")}
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <span className="space"></span>
            <MarqueeGroup>
              {row.map((el) => (
                <ImageGroup>
                  {console.log(el, "2")}
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </div>
      </div>
    </Fragment>
  );
};

export default Slider;

const Marquee = styled.div`
  display: flex;
  width: 1100px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;
const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeGroup = styled.div`
flex-shrink: 1;
display: flex;
align-items: center;
justify-content: space-around;
white-space: nowrap;
width: 300vh;
animation: ${scrollX} 20s linear infinite;
gap: 10px;
margin-left: 35px;
@media screen and (max-width: 768px) {
  justify-content: center;
  gap: 5px;
  margin-left: 5px;
  animation: ${scrollX} 20s linear infinite;
}
`;
const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  cursor: pointer;
}
 @media screen and (max-width: 768px) {
      padding: calc(clamp(1rem, 1rem + 5vmin, 1rem) / 50);

  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 10px 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  filter: grayscale(100);
  opacity: 0.5;
  &:hover {
  opacity: 1;
  filter: none;
  }
`;