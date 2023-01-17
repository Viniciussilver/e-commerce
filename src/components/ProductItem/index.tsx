import * as C from './style'

import { formatCurrency } from '../../utils/format'
import { ProductType } from '../../@types/Product'
import { useCart } from '../../hooks/CartContext'
import { toast } from 'react-toastify'

type Props = {
  item: ProductType
}

export const ProductItem = ({ item }: Props) => {
  const { putProductsInCart, cartItems } = useCart()

  const checkItem = (product: ProductType) => {
    const index = cartItems.findIndex(item => item.id === product.id)

    if (index < 0) {
      toast.success('Produto adicionado')

      putProductsInCart({ ...product, quantity: 1 })
    } else {
      toast.info('Produto já foi adicionado')
    }
  }

  return (
    <C.Container>
      <C.AreaImg>
        <C.Image src={item.image} loading='lazy' alt='imagem-produto' />
      </C.AreaImg>

      <C.NameText>{item.title}</C.NameText>

      <C.AreaStars>
        <C.StarIcon
          color={1 <= Math.round(item.rating.rate) ? '#ffc222' : '#808080'}
        />
        <C.StarIcon
          color={2 <= Math.round(item.rating.rate) ? '#ffc222' : '#808080'}
        />
        <C.StarIcon
          color={3 <= Math.round(item.rating.rate) ? '#ffc222' : '#808080'}
        />
        <C.StarIcon
          color={4 <= Math.round(item.rating.rate) ? '#ffc222' : '#808080'}
        />
        <C.StarIcon
          color={5 <= Math.round(item.rating.rate) ? '#ffc222' : '#808080'}
        />
        <p>({item.rating.count} ratings)</p>
      </C.AreaStars>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginTop: '9px',
        }}
      >
        <C.P>{formatCurrency(item.price)}</C.P>
        <C.Button onClick={() => checkItem(item)}>ADD</C.Button>
      </div>
    </C.Container>
  )
}
