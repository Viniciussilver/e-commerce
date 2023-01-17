import * as C from './style'

import Car from '../../assets/car.png'
import Methods from '../../assets/sobre.webp'

export const About = () => {
  return (
    <>
      {/*<C.Container>
         <C.ImgMethods src={Methods} />

        <C.ContainerItem>
          <C.Image src={Car} />

          <C.InfoShipping>
            <C.Title style={{ fontSize: 23 }}>FRETE GRÁTIS</C.Title>
            <p>
              NAS COMPRAS
              <br /> ACIMA DE <span> R$250</span>
            </p>
          </C.InfoShipping>
        </C.ContainerItem>

        <div className='line'></div>

        <C.ContainerItem>
          <C.Card>
            <div className='card-item'></div>
            <div className='points'>
              <div className='point-1'></div>
              <div className='point-2'></div>
            </div>
          </C.Card>

          <C.InfoShipping>
            <C.Title>
              PAGUE EM ATÉ <br />
              <span style={{ fontSize: 27 }}>3×</span> SEM JUROS
            </C.Title>
          </C.InfoShipping>
        </C.ContainerItem>

        <div className='line'></div>

        <C.ContainerItem style={{ paddingLeft: 17 }}>
          <C.InfoShipping>
            <C.Title>
              DESCONTOS <br /> DE ATÉ <span style={{ fontSize: 27 }}> 60%</span>
            </C.Title>
          </C.InfoShipping>
        </C.ContainerItem>
      </C.Container> */}

      <C.AreaAbout>
        <C.Box>
          <p>"Imagem"</p>
        </C.Box>

        <C.TextArea>
          <C.SubTitle>Sobre</C.SubTitle>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum
            ipsam ipsa! Inventore quibusdam error est corrupti quis, cupiditate
            ipsum quos dolorum ratione aut voluptatibus perferendis deleniti?
            Aliquid, sit alias. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consectetur sit porro sed. Cum, corrupti saepe sed
            esse, aliquid mollitia quia dolor autem inventore dolores reiciendis
            sint dolorem veritatis porro eaque.
          </p>
        </C.TextArea>
      </C.AreaAbout>
    </>
  )
}
