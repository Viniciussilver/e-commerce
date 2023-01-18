import * as C from './style'

import {
  About,
  CarouselImages,
  EvaluationSession,
  Footer,
  Header,
} from '../../components'

import { Cart } from '../Cart'

export const Home = () => {
  return (
    <C.Container>
      <Header />
      <Cart />
      <CarouselImages />
      <About />
      <EvaluationSession />
      <Footer />
    </C.Container>
  )
}
