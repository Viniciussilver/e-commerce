import * as C from './style';

import { ProductTypes } from '../../hooks/useFetch';
import { formatCurrency } from '../../utils/format';

type Props = {
  item: ProductTypes;
};

export const ProductItem = ({ item }: Props) => {
  return (
    <C.Container>
      <C.AreaImg>
        <C.Image src={item.image} alt='imagem-produto' />
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
        <C.Button>ADD</C.Button>
      </div>
    </C.Container>
  );
};
