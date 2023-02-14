import { useEffect, useState } from 'react';
import { DotPulse } from '@uiball/loaders';

import { useAuth } from '../../contexts/Auth';
import firebase from '../../services/firebase';
import * as C from './style';
import { IOrder } from '../../@types/Order';
import { IShowOrder } from '../../containers';
import { formatCurrency } from '../../utils/format';

interface OrdersType {
  setShowOrders: (e: IShowOrder) => void;
  orderId: string | null;
}

export const Orders = ({ setShowOrders, orderId }: OrdersType) => {
  const [orders, setOrders] = useState<null | IOrder[]>(null);
  const [showOrderById, setShowOrderById] = useState<string | null>(orderId);
  const [isFetching, setIsFetching] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    const getOrders = async () => {
      await firebase
        .firestore()
        .collection('infoUsers')
        .doc(user?.uid)
        .get()
        .then(res => {
          setIsFetching(false);
          console.log(res.data());

          if (!res.exists) throw new Error();

          setOrders((res.data() as { pedidos: null | IOrder[] }).pedidos);
        })
        .catch(() => alert('Erro ao buscar por pedidos'));
    };

    getOrders();
  }, []);

  //
  return (
    <C.Container>
      <C.ContainerItem>
        <C.Header>
          <C.BoxOpen />
          <C.Title>Meus pedidos</C.Title>
          <C.Back
            onClick={() => setShowOrders({ showOrder: false, orderId: null })}
          />
        </C.Header>
        <C.ContainerOrders>
          {orders &&
            !isFetching &&
            orders.map(item => (
              <C.Order key={item.id}>
                <C.OrderHeader
                  onClick={() =>
                    setShowOrderById(id => (id === item.id ? null : item.id))
                  }
                >
                  <C.P>Pedido: {item.id}</C.P>

                  <C.ArrowUp showOrder={showOrderById === item.id} />
                </C.OrderHeader>

                <C.OrderInfo showOrder={showOrderById === item.id}>
                  <C.StatusArea>
                    <C.Points>
                      <C.Point status={true}></C.Point>
                      <C.Line
                        status={
                          item.status.toLowerCase() !== 'pedido realizado'
                        }
                      >
                        {' '}
                      </C.Line>
                      <C.Point
                        status={
                          item.status.toLowerCase() !== 'pedido realizado'
                        }
                      ></C.Point>
                      <C.Line
                        status={item.status.toLowerCase() === 'pedido entregue'}
                      >
                        {' '}
                      </C.Line>
                      <C.Point
                        status={item.status.toLowerCase() === 'pedido entregue'}
                      ></C.Point>
                    </C.Points>
                    <C.Div>
                      <C.TextStatus status={true}>
                        Pedido realizado
                      </C.TextStatus>
                      <C.TextStatus
                        status={
                          item.status.toLowerCase() !== 'pedido realizado'
                        }
                      >
                        Pedido à caminho
                      </C.TextStatus>
                      <C.TextStatus
                        status={item.status.toLowerCase() === 'pedido entregue'}
                      >
                        Pedido entregue
                      </C.TextStatus>
                    </C.Div>
                  </C.StatusArea>

                  <C.TableProducts>
                    <C.TableHeader>
                      <div className='table-header collum-1'>Produto</div>
                      <div className='table-header'>Preço</div>
                      <div className='table-header'>Quantidade</div>
                      <div className='table-header'>Subtotal</div>
                    </C.TableHeader>
                    {item.produtos.map(item => (
                      <C.Body key={item.id}>
                        <div className='table-cell collum-1'>
                          <C.BoxImage>
                            <C.Image src={item.image} alt='imagem-produto' />
                          </C.BoxImage>
                          {item.title}
                        </div>
                        <div className='table-cell'>{item.formatedPrice}</div>
                        <div className='table-cell collum-3'>
                          {item.quantity}
                        </div>
                        <div className='table-cell'>
                          {formatCurrency(item.quantity * item.price)}
                        </div>
                      </C.Body>
                    ))}
                  </C.TableProducts>
                </C.OrderInfo>
              </C.Order>
            ))}

          {isFetching && (
            <C.ChargingBox>
              <DotPulse size={49} speed={1.4} color='#000' />
            </C.ChargingBox>
          )}
        </C.ContainerOrders>
      </C.ContainerItem>
    </C.Container>
  );
};
