import { ICartItem } from './Cart';
import { IForm } from './Form';

export interface IOrder extends IForm {
  id: string;
  data: Date;
  valor: number;
  produtos: ICartItem[];
  status: string;
}
