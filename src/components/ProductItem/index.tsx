import { toast } from 'react-toastify';

import * as C from './style';
import { ProductType } from '../../@types/Product';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/Auth';

type Props = {
  item: ProductType;
  imagesLoading?: boolean[];
  index?: number;
  setImagesLoading?: (e: boolean[]) => void;
};

export const ProductItem = ({
  item,
  imagesLoading,
  index,
  setImagesLoading,
}: Props) => {
  const { putProductsInCart, cartItems } = useCart();
  const { user, toggleModal } = useAuth();

  const checkItem = (product: ProductType) => {
    //
    if (!user) {
      return toggleModal();
    }

    const index = cartItems.findIndex(item => item.id === product.id);

    if (index < 0) {
      toast.success('Produto adicionado');

      putProductsInCart({ ...product, quantity: 1 });
    } else {
      toast.info('Produto já foi adicionado');
    }
  };

  return (
    <C.Container>
      <C.AreaImg>
        {/* {imagesLoading[index] && (
          <DotPulse size={32} speed={1.2} color='black' />
        )} */}
        <C.Image
          // style={{ display: imagesLoading[index] ? 'none' : 'block' }}
          src={item.image}
          loading='lazy'
          alt='imagem-produto'
          // onLoad={() => {
          //   const newArray = [...imagesLoading];
          //   newArray[index] = false;

          //   setImagesLoading(newArray);
          // }}
        />
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
        <C.Button onClick={() => checkItem(item)}>ADD</C.Button>
      </div>
    </C.Container>
  );
};
