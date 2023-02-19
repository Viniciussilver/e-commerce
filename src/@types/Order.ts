import { ICartItem } from './Cart';
import { IForm } from './Form';

export interface IOrder extends IForm {
  id: string;
  data: string;
  valor: number;
  produtos: ICartItem[];
  status: string;
}
