import { Drawer } from '@mui/material';
import 'lazysizes';
import { Button } from '../../components';

import { useCart } from '../../contexts/CartContext';
import { formatCurrency, frete } from '../../utils/format';
import * as C from './style';

export const Cart = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    decreaseProducts,
    increaseProducts,
    removeItem,
    cartQuantity,
    total,
  } = useCart();

  return (
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
                  <C.Image
                    src={item.image}
                    alt='imagem-produto'
                    className='lozad'
                  />
                </C.BoxImage>
                <C.Info>
                  <C.Title>{item.title}</C.Title>

                  <p className='text-price'>{item.formatedPrice}</p>

                  <div>
                    <div className='box-quantity'>
                      <button
                        style={{
                          cursor:
                            item.quantity === 1 ? 'not-allowed' : 'pointer',
                        }}
                        onClick={() => decreaseProducts(item)}
                      >
                        -
                      </button>
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
                    : cartQuantity === 0
                    ? formatCurrency(0)
                    : formatCurrency(total + frete)}
                </p>
              </div>
            </div>

            <div className='box-env'>
              Compras acima de <br /> R$250 FRETE GRÁTIS
            </div>
          </div>

          <Button
            disabled={cartQuantity < 1}
            styles={{
              marginInline: 'auto',
              marginBlock: '16px',
              width: '60%',
              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            Confirmar pedido
          </Button>
        </C.CartResume>
      </C.CartArea>
    </Drawer>
  );
};
