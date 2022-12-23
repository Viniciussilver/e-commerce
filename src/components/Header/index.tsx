import * as C from './style';
import paths from '../../constants/paths';

import { useState, useEffect } from 'react';

import { IoIosArrowUp } from 'react-icons/io';

import Logo from '../../assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';

export const Header = () => {
  const [activeDarkTheme, setActiveDarkTheme] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const { categories } = useFetch();

  const navigate = useNavigate();
  const { pathname } = useLocation();

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
                color: 'rgba(0,0,0,0.6)',
                width: 15,
                height: 15,
                transform: categoryVisible ? 'rotate(180deg)' : 'none',
              }}
            />

            <C.ListCategories visible={categoryVisible}>
              {categories.map(item => (
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

        <C.CartArea>
          <C.Cart />
          <C.BoxQuantity>
            <C.P color='#fff'>1</C.P>
          </C.BoxQuantity>
          <C.P>R$ 30,00</C.P>
        </C.CartArea>
      </C.ContainerItems>
      <C.ThemeArea>
        <C.IconDarkTheme
          style={{ color: activeDarkTheme ? '#808080' : '#000' }}
        />

        <C.BoxButton>
          <C.Button
            onClick={() => setActiveDarkTheme(!activeDarkTheme)}
            position={activeDarkTheme}
          ></C.Button>
        </C.BoxButton>
        <C.IconLightTheme
          style={{ color: activeDarkTheme ? '#ffd700' : '#808080' }}
        />
      </C.ThemeArea>
    </C.Container>
  );
};
