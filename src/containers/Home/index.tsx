import * as C from './style';

import {
  AreaAbout,
  CarouselImages,
  EvaluationSession,
  Footer,
  Header,
} from '../../components';
import { Cart } from '../Cart';

export const Home = () => {
  return (
    <C.Container>
      <Header />
      <Cart />
      <CarouselImages />
      <AreaAbout />
      <EvaluationSession />
      <Footer />
    </C.Container>
  );
};
