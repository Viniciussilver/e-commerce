import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Image from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.webp';
import Image3 from '../../assets/image3.webp';
import * as C from './style';

export const CarouselImages = () => {
  return (
    <C.Container style={{ position: 'relative' }}>
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
