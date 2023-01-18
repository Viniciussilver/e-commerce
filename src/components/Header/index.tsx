import * as C from './style'

import paths from '../../utils/paths'

import { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'
import { useCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/format'

import { useThemeContext } from '../../hooks/ThemeContext'

import { ReactNode } from 'react'

type HeaderTypes = {
  children?: ReactNode
}

export const Header = ({ children }: HeaderTypes) => {
  const [visibleCategory, setVisibleCategory] = useState(false)
  const [totalSum, setTotalSum] = useState(0)

  const { cartQuantity, cartItems, setCartOpen } = useCart()

  const { toggleTheme, theme } = useThemeContext()

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )

    setTotalSum(total)
  }, [cartItems])

  const { pathname } = useLocation()
  const navigate = useNavigate()

  let { data: categories } = useFetch<string[]>('products/categories') // requisição api categorias

  if (categories?.length) {
    categories = ['All', ...categories]
  }

  return (
    <C.Container>
      {/* <C.ImgLogo src={Logo} alt='imagem-logo' /> */}
      <C.ContainerItems>
        <C.LinkStyle
          onClick={() => navigate(paths.home)}
          isActive={pathname === paths.home}
        >
          Home
        </C.LinkStyle>
        {pathname !== paths.products && (
          <C.AreaProducts onClick={() => setVisibleCategory(!visibleCategory)}>
            <C.LinkStyle isActive={pathname === paths.products}>
              Produtos
            </C.LinkStyle>

            <IoIosArrowUp
              style={{
                color: theme.colors.texts.primary,
                width: 15,
                height: 15,
                transform: visibleCategory ? 'none' : 'rotate(180deg)',
              }}
            />

            <C.ListCategories visible={visibleCategory}>
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

        {/* <C.LinkStyle isActive={pathname === paths.contact}>Contato</C.LinkStyle>
        <C.LinkStyle isActive={pathname === paths.login}>Login</C.LinkStyle> */}
      </C.ContainerItems>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {children}
        <C.CartArea onClick={() => setCartOpen(true)}>
          <C.Cart />
          <C.BoxQuantity>
            <C.P color='#fff'>{cartQuantity}</C.P>
          </C.BoxQuantity>
          <C.P>{formatCurrency(totalSum)}</C.P>
        </C.CartArea>

        <C.ResponsiveCartArea onClick={() => setCartOpen(true)}>
          {cartQuantity > 0 && <div>{cartQuantity}</div>}
          <C.Cart />
        </C.ResponsiveCartArea>
        <C.BoxButton>
          <C.Button
            onClick={() => toggleTheme()}
            position={theme.title === 'light'}
          ></C.Button>
        </C.BoxButton>
      </div>
    </C.Container>
  )
}
