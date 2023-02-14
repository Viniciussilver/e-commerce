import { useLocation, useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

import * as C from './style';
import paths from '../../utils/paths';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/format';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/Auth';
import { IShowOrder } from '../../containers';

interface IHeader {
  children?: ReactNode;
  setShowOrders?: (e: IShowOrder) => void;
}

export const Header = ({ children, setShowOrders }: IHeader) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { user, signOut, toggleModal } = useAuth();
  const { cartQuantity, setCartOpen, subTotal } = useCart();
  const { toggleTheme, theme } = useThemeContext();

  const checkUser = () => {
    if (!!user) {
      return setCartOpen(true);
    }

    toggleModal();
  };

  return (
    <C.Container>
      <C.ContainerItems>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          {!user ? (
            <>
              <C.LinkStyle
                isActive={pathname === paths.register}
                onClick={() => navigate(paths.register)}
              >
                Crie a sua conta
              </C.LinkStyle>

              <C.LinkStyle
                isActive={pathname === paths.login}
                onClick={() => navigate(paths.login)}
              >
                Entrar
              </C.LinkStyle>
            </>
          ) : (
            <>
              <C.IconUser />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.7,
                }}
              >
                <C.TextUser>Olá, {user.name.split(' ')[0]}</C.TextUser>
              </div>
              <hr style={{ height: '42px', width: 2 }}></hr>
            </>
          )}
        </div>

        <C.LinkStyle
          isActive={pathname === paths.products}
          onClick={() => navigate(paths.products)}
        >
          Produtos
        </C.LinkStyle>

        {!!user && (
          <C.LinkStyle
            onClick={() =>
              setShowOrders && setShowOrders({ showOrder: true, orderId: null })
            }
          >
            Meus pedidos
          </C.LinkStyle>
        )}
      </C.ContainerItems>

      <div className='items-header'>
        {children}
        <C.CartArea onClick={() => checkUser()}>
          <C.Cart />
          <C.BoxQuantity>
            <C.P color='#fff'>{cartQuantity}</C.P>
          </C.BoxQuantity>
          <C.P>{formatCurrency(subTotal)}</C.P>
        </C.CartArea>

        <C.ResponsiveCartArea onClick={() => setCartOpen(true)}>
          {cartQuantity > 0 && <div>{cartQuantity}</div>}
          <C.Cart />
        </C.ResponsiveCartArea>

        {!!user && (
          <C.LinkStyle
            onClick={() => {
              if (confirm('Você deseja deslogar da sua conta?')) signOut();
            }}
          >
            {' '}
            Sair
          </C.LinkStyle>
        )}

        <C.BoxButton>
          <C.Button
            onClick={() => toggleTheme()}
            position={theme.title === 'light'}
          ></C.Button>
        </C.BoxButton>
      </div>
    </C.Container>
  );
};
