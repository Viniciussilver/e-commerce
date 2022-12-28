import * as C from './style';

import Methods from '../../assets/methods.webp';
import PlayStore from '../../assets/playSore.png';
import AppStore from '../../assets/apple.png';

export const Footer = () => {
  return (
    <>
      <C.AreaContact>
        <C.P>
          Cadastre seu e-mail para receber ofertas <br /> exclusivas da{' '}
          <strong>nossa loja</strong>
        </C.P>

        <C.Form>
          <div>
            <C.Input type='text' placeholder='Seu nome' />
            <C.Input type='email' placeholder='Seu email' />
            <C.Button>CADASTRAR</C.Button>
          </div>

          <p>
            Ao clicar em cadastrar, você estará aceitando receber emails
            promocionais
          </p>
        </C.Form>
      </C.AreaContact>
      <C.Container>
        <C.ContainerItem>
          <C.Title>INSTITUCIONAL</C.Title>

          <C.Link>Home</C.Link>
          <C.Link>Nossas Lojas</C.Link>
          <C.Link>Quem Somos</C.Link>
          <C.Link>Trabalhe Conosco</C.Link>
          <C.Link>Regulamentos e promoções</C.Link>
        </C.ContainerItem>

        <C.ContainerItem>
          <C.Title>AJUDA</C.Title>

          <C.Link>Dúvidas Frequentes</C.Link>
          <C.Link>Trocas e Devoluções</C.Link>
          <C.Link>Fale Conosco</C.Link>
          <C.Link>Trabalhe Conosco</C.Link>
          <C.Link>Regulamentos e promoções</C.Link>
        </C.ContainerItem>

        <C.ContainerItem>
          <C.Title>ATENDIMENTO</C.Title>

          <C.Link>00 0000-0000</C.Link>
          <C.Link>email@exemplo.com</C.Link>
          <C.Link>(Seg à Sex das 9h às 21h)</C.Link>
        </C.ContainerItem>

        <C.ContainerItem>
          <C.Title>FORMAS DE PAGAMENTO</C.Title>

          <C.Img src={Methods} />

          <C.Title>NOSSO APLICATIVO</C.Title>

          <div style={{ display: 'flex', gap: 10 }}>
            <C.ImageApp
              style={{ height: 57, position: 'relative', bottom: 4 }}
              src={PlayStore}
            />
            <C.ImageApp src={AppStore} />
          </div>
        </C.ContainerItem>
      </C.Container>
      <C.Footer>
        Feito com{' '}
        <span role='img' aria-label='coração'>
          💖
        </span>{' '}
        por Vinícius!
      </C.Footer>
    </>
  );
};
