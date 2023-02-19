import { ICartItem } from '../../@types/Cart';
import { formatCurrency } from '../../utils/format';
import * as C from './style';

interface ITable {
  items: ICartItem[];
}

export const TableProducts = ({ items }: ITable) => {
  return (
    <C.TableProducts>
      <C.TableHeader>
        <div className='table-header collum-1'>Produto</div>
        <div className='table-header'>Preço</div>
        <div className='table-header'>Quantidade</div>
        <div className='table-header'>Subtotal</div>
      </C.TableHeader>
      {items.map(item => (
        <C.Body key={item.id}>
          <div className='table-cell collum-1'>
            <C.BoxImage>
              <C.Image src={item.image} alt='imagem-produto' />
            </C.BoxImage>
            {item.title}
          </div>
          <div className='table-cell'>{item.formatedPrice}</div>
          <div className='table-cell collum-3'>{item.quantity}</div>
          <div className='table-cell'>
            {formatCurrency(item.quantity * item.price)}
          </div>
        </C.Body>
      ))}
    </C.TableProducts>
  );
};
