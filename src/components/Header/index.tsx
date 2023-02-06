import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

import * as C from './style';
import paths from '../../utils/paths';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/format';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/Auth';
import requests from '../../services/fakeStore';

type HeaderTypes = {
  children?: ReactNode;
};

export const Header = ({ children }: HeaderTypes) => {
  const [visibleCategories, setVisibleCategories] = useState(false);
  const [categories, setCategories] = useState<string[] | null>(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { user, signOut, toggleModal } = useAuth();
  const { cartQuantity, setCartOpen, subTotal } = useCart();
  const { toggleTheme, theme } = useThemeContext();

  useEffect(() => {
    const getCategories = async () => {
      const { categories } = await requests();

      setCategories(['All', ...categories]);
    };

    getCategories();
  }, []);

  const checkUser = () => {
    if (!!user) {
      setCartOpen(true);
    } else {
      toggleModal();
    }
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
        {pathname !== paths.products && (
          <C.AreaProducts
            onMouseEnter={() => setVisibleCategories(true)}
            onMouseLeave={() => setVisibleCategories(false)}
          >
            <C.LinkStyle
              style={{ display: 'flex', gap: 7, alignItems: 'center' }}
              isActive={pathname === paths.products}
            >
              Produtos
              <IoIosArrowUp
                style={{
                  color: theme.colors.texts.primary,
                  width: 15,
                  height: 15,
                  transform: visibleCategories ? 'none' : 'rotate(180deg)',
                }}
              />
            </C.LinkStyle>

            <C.ListCategories isVisible={visibleCategories}>
              <div className='join'></div>
              <C.Links>
                {categories ? (
                  categories?.map(item => (
                    <C.ButtonLink
                      key={item}
                      to={paths.products}
                      state={{ category: item }}
                    >
                      <p>{item}</p>
                    </C.ButtonLink>
                  ))
                ) : (
                  <>
                    <C.ButtonLink to={paths.products}>
                      <p>Ver produtos</p>
                    </C.ButtonLink>
                    <C.TextLoading>Carregando categorias...</C.TextLoading>
                  </>
                )}
              </C.Links>
            </C.ListCategories>
          </C.AreaProducts>
        )}

        {pathname === paths.products && (
          <C.LinkStyle isActive={pathname === paths.products}>
            Produtos
          </C.LinkStyle>
        )}

        {!!user && <C.LinkStyle>Seus pedidos</C.LinkStyle>}
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
