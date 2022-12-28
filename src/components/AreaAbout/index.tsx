import * as C from './style';

import Car from '../../assets/car.png';

export const AreaAbout = () => {
  return (
    <C.Container>
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
    </C.Container>
  );
};
