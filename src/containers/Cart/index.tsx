import { useState, useEffect } from 'react'
import { Drawer } from '@mui/material'

import { useCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/format'
import * as C from './style'

export const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    decreaseProducts,
    increaseProducts,
    removeItem,
    cartQuantity,
  } = useCart()

  const [total, setTotal] = useState(0)
  // const [items, setItems] = useState<CartItemTypes[]>([]);
  const frete = 35

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )

    setTotal(total)
  }, [cartItems])

  return (
    // <C.Container visible={cartOpen}>
    <Drawer
      open={cartOpen}
      variant='temporary'
      anchor='right'
      onClose={() => setCartOpen(false)}
    >
      <C.CartArea isActive={cartOpen}>
        <C.Header>
          <C.ArrowIcon onClick={() => setCartOpen(false)} />
          <p>{cartQuantity > 0 ? 'Resumo do carrinho' : 'Carrinho vazio'}</p>
          <span></span>
        </C.Header>
        <C.ScrollList>
          <C.ListArea>
            {cartItems.map(item => (
              <C.BoxItem key={item.id}>
                <C.BoxImage>
                  <C.Image src={item.image} alt='imagem-produto' />
                </C.BoxImage>
                <C.Info>
                  <C.Title>{item.title}</C.Title>

                  <p className='text-price'>{formatCurrency(item.price)}</p>
                  <div>
                    <div className='box-quantity'>
                      <button onClick={() => decreaseProducts(item)}>-</button>
                      <p>
                        {item.quantity < 10
                          ? `0${item.quantity}`
                          : item.quantity}
                      </p>
                      <button onClick={() => increaseProducts(item)}>+</button>
                    </div>
                    <a onClick={() => removeItem(item)}>Excluir</a>
                  </div>
                </C.Info>
              </C.BoxItem>
            ))}
          </C.ListArea>
        </C.ScrollList>
        <C.CartResume>
          <div className='resume-area'>
            <div className='resume'>
              <div className='env'>
                <p>Subtotal</p> <p>{formatCurrency(total)}</p>
              </div>
              <div className='env'>
                <p>Frete</p> <C.P decoration={total <= 250}> R$ {frete}</C.P>
              </div>
              <div className='bold'>
                <p>Total</p>{' '}
                <p>
                  {total > 250
                    ? formatCurrency(total)
                    : formatCurrency(cartQuantity === 0 ? 0 : total + frete)}
                </p>
              </div>
            </div>

            <div className='box-env'>
              Compras acima de <br /> R$250 FRETE GRÁTIS
            </div>
          </div>

          <button>Confirmar pedido</button>
        </C.CartResume>
      </C.CartArea>
    </Drawer>
    // </C.Container>
  )
}
