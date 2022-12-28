import * as C from './style';

import paths from '../../utils/paths';
import Logo from '../../assets/logo.png';

import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { useCart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/format';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { useThemeContext } from '../../hooks/ThemeContext';

export const Header = () => {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [totalSum, setTotalSum] = useState(0);

  const { cartQuantity, cartItems, setCartOpen } = useCart();

  const { setTheme, theme } = useThemeContext();

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    setTotalSum(total);
  }, [cartItems]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  let { data: categories } = useFetch<string[]>('products/categories'); // requisição api categorias

  if (categories?.length) {
    categories = ['All', ...categories];
  }

  return (
    <C.Container>
      <C.ImgLogo src={Logo} alt='imagem-logo' />

      <C.ContainerItems>
        <C.LinkStyle
          onClick={() => navigate(paths.home)}
          isActive={pathname === paths.home}
        >
          Home
        </C.LinkStyle>
        {pathname !== paths.products && (
          <C.AreaProducts onClick={() => setCategoryVisible(!categoryVisible)}>
            <C.LinkStyle isActive={pathname === paths.products}>
              Produtos
            </C.LinkStyle>

            <IoIosArrowUp
              style={{
                color: theme.title === 'dark' ? '#fff' : 'rgba(0,0,0,0.6)',
                width: 15,
                height: 15,
                transform: categoryVisible ? 'rotate(180deg)' : 'none',
              }}
            />

            <C.ListCategories visible={categoryVisible}>
              {categories?.map(item => (
                <C.ButtonLink
                  key={item}
                  to={paths.products}
                  state={{ category: item }}
                >
                  <p>{item}</p>
                </C.ButtonLink>
              ))}
            </C.ListCategories>
          </C.AreaProducts>
        )}

        {pathname === paths.products && (
          <C.LinkStyle isActive={pathname === paths.products}>
            Produtos
          </C.LinkStyle>
        )}

        <C.LinkStyle isActive={pathname === paths.contact}>Contato</C.LinkStyle>
        <C.LinkStyle isActive={pathname === paths.login}>Login</C.LinkStyle>

        <C.CartArea onClick={() => setCartOpen(true)}>
          <C.Cart />
          <C.BoxQuantity>
            <C.P color='#fff'>{cartQuantity}</C.P>
          </C.BoxQuantity>
          <C.P>{formatCurrency(totalSum)}</C.P>
        </C.CartArea>
      </C.ContainerItems>
      <C.BoxButton>
        <C.Button
          onClick={() => setTheme(theme.title === 'light' ? dark : light)}
          position={theme.title === 'light'}
        ></C.Button>
      </C.BoxButton>
    </C.Container>
  );
};
