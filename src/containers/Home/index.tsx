import * as C from './style'

import {
  AreaAbout,
  CarouselImages,
  EvaluationSession,
  Header,
} from '../../components'

export const Home = () => {
  return (
    <C.Container>
      <Header />
      <CarouselImages />
      <AreaAbout />
      <EvaluationSession />
    </C.Container>
  )
}
