import * as C from './style';

import { useContext } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Image from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.webp';
import Image3 from '../../assets/image3.webp';
import { ThemeContext } from 'styled-components';

export const CarouselImages = () => {
  const { title } = useContext(ThemeContext);

  return (
    <C.Container style={{ position: 'relative' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor:
            title === 'light' ? 'transparent' : 'rgba(0,0,0,0.2)',
          position: 'absolute',
          zIndex: 3,
          display: title === 'light' ? 'none' : 'block',
        }}
      ></div>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={600}
        emulateTouch={true}
      >
        <C.ContainerItem>
          <C.Image src={Image} />
        </C.ContainerItem>
        <C.ContainerItem>
          <C.Image src={Image2} />
        </C.ContainerItem>

        <C.ContainerItem>
          <C.Image src={Image3} />
        </C.ContainerItem>
      </Carousel>
    </C.Container>
  );
};
