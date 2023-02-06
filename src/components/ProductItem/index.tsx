// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';
import 'lazysizes';

import * as C from './style';
import { ProductType } from '../../@types/Product';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/Auth';

type Props = {
  item: ProductType;
};

export const ProductItem = ({ item }: Props) => {
  const { putProductsInCart } = useCart();
  const { user, toggleModal } = useAuth();

  const handleClick = (product: ProductType) => {
    //
    if (!user) return toggleModal();

    putProductsInCart({ ...product, quantity: 1 });
  };

  return (
    <C.Container>
      <C.AreaImg>
        <C.Image src={item.image} alt='imagem-produto' className='lozad' />
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
        <C.P>{item.formatedPrice}</C.P>
        <C.Button onClick={() => handleClick(item)}>ADD</C.Button>
      </div>
    </C.Container>
  );
};
