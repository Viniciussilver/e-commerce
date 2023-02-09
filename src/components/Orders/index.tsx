import { useEffect, useState } from 'react';
import { DotPulse } from '@uiball/loaders';

import { useAuth } from '../../contexts/Auth';
import firebase from '../../services/firebase';
import * as C from './style';
import { IOrder } from '../../@types/Order';

interface OrdersType {
  setShowOrders: (e: boolean) => void;
  orderId?: string;
}

export const Orders = ({ setShowOrders, orderId }: OrdersType) => {
  const [orders, setOrders] = useState<null | IOrder[]>(null);
  const [showOrderById, setShowOrderById] = useState<string | null>(() =>
    orderId ? orderId : null
  );
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
          console.log(res);

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
      <C.ContainerOrders>
        <C.Header>
          <span></span>
          <C.Title>Pedidos</C.Title>
          <C.Back onClick={() => setShowOrders(false)} />
        </C.Header>

        {orders &&
          orders.map((item, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                padding: '10px',
              }}
            >
              {item.id}
            </div>
          ))}

        {isFetching && (
          <C.ChargingBox>
            <DotPulse size={49} speed={1} color='black' />
          </C.ChargingBox>
        )}
      </C.ContainerOrders>
    </C.Container>
  );
};
