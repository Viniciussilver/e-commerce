import { ProductType } from '../../@types/Product';
import { formatCurrency } from '../../utils/format';
import * as C from './style';

type CheckoutItemsTypes = {
  products: ProductType[];
  total: number;
};

export const CheckoutItems = ({ products, total }: CheckoutItemsTypes) => {
  return (
    <C.ContainerListProducts>
      <C.Header>
        <C.Title> Sua compra</C.Title>
      </C.Header>

      <C.SubTitle>Produtos ({products.length})</C.SubTitle>

      <C.AreaProducts>
        {products.map((item, index) => (
          <C.ProductItem key={index}>
            <C.Image src={item.image} alt='imagem produto' />
            <C.InfoProducts>
              <C.TextName>{item.title}</C.TextName>
              <C.TextQuantity>Quantidade {item.quantity}</C.TextQuantity>
              <C.TextTotalProduct>
                {' '}
                {formatCurrency(item.quantity * item.price)}
              </C.TextTotalProduct>
            </C.InfoProducts>
          </C.ProductItem>
        ))}
      </C.AreaProducts>
      <C.Header>
        <C.SubTitle>Total</C.SubTitle>
        <C.TextTotal>{formatCurrency(total)}</C.TextTotal>
      </C.Header>
    </C.ContainerListProducts>
  );
};
