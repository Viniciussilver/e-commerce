import { useEffect, useState } from 'react';
import { DotPulse } from '@uiball/loaders';

import { useAuth } from '../../contexts/Auth';
import firebase from '../../services/firebase';
import * as C from './style';
import { IOrder } from '../../@types/Order';
import { IShowOrder } from '../../containers';
import { TableProducts } from './Table';
import { useQuery, useQueryClient } from 'react-query';
import { formatCurrency } from '../../utils/format';
import formatDate from '../../utils/formatDate';

interface OrdersType {
  setShowOrders: (e: IShowOrder) => void;
  orderId: string | null;
}

const steps = {
  step1: 'Pedido realizado',
  step2: 'Pedido a caminho',
  step3: 'Pedido entregue',
};

export const Orders = ({ setShowOrders, orderId }: OrdersType) => {
  const [orders, setOrders] = useState<null | IOrder[]>(null);
  const [showOrderById, setShowOrderById] = useState<string | null>(orderId);
  const [updatedOrders, setUpdatedOrders] = useState(false);

  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery(
    'orders',
    async () => {
      const response = await firebase
        .firestore()
        .collection('infoUsers')
        .doc(user?.uid)
        .get()
        .then(res => {
          return (res.data() as { pedidos: null | IOrder[] }).pedidos;
        });

      return response;
    },
    {
      staleTime: 3600000,
    }
  );

  useEffect(() => {
    const getOrders = async () =>
      await queryClient.invalidateQueries(['orders']);

    if (orderId) getOrders();
  }, []);

  useEffect(() => {
    if (data) setOrders(data);

    setUpdatedOrders(true);
  }, [data]);

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
                      <C.Line status={item.status !== steps.step1}> </C.Line>
                      <C.Point status={item.status !== steps.step1}></C.Point>
                      <C.Line status={item.status === steps.step3}> </C.Line>
                      <C.Point status={item.status === steps.step3}></C.Point>
                    </C.Points>
                    <C.Div>
                      <C.TextStatus status={true}>
                        Pedido realizado
                      </C.TextStatus>
                      <C.TextStatus status={item.status !== steps.step1}>
                        Pedido à caminho
                      </C.TextStatus>
                      <C.TextStatus status={item.status === steps.step3}>
                        Pedido entregue
                      </C.TextStatus>
                    </C.Div>
                  </C.StatusArea>
                  <C.DetailsHeader>Detalhes</C.DetailsHeader>

                  <C.DetailsBox>
                    <C.DetailsColumn>
                      <C.ItemDescription>
                        Nome: <C.ItemText>{item.nome}</C.ItemText>
                      </C.ItemDescription>
                      <C.ItemDescription>
                        Data do pedido: <C.ItemText>{item.data}</C.ItemText>
                      </C.ItemDescription>

                      <C.ItemDescription>
                        Status: <C.ItemText>{item.status}</C.ItemText>
                      </C.ItemDescription>
                      <C.ItemDescription>
                        Valor da compra:{' '}
                        <C.ItemText>{formatCurrency(item.valor)}</C.ItemText>
                      </C.ItemDescription>
                    </C.DetailsColumn>

                    <C.DetailsColumn>
                      <C.ItemDescription>
                        Cep: <C.ItemText>{item.cep}</C.ItemText>
                      </C.ItemDescription>

                      <C.ItemDescription>
                        Bairro: <C.ItemText>{item.bairro}</C.ItemText>
                      </C.ItemDescription>

                      <C.ItemDescription>
                        rua: <C.ItemText>{item.rua}</C.ItemText>
                      </C.ItemDescription>
                      <C.ItemDescription>
                        Numero: <C.ItemText>{item.numero}</C.ItemText>
                      </C.ItemDescription>
                    </C.DetailsColumn>
                  </C.DetailsBox>

                  <TableProducts items={item.produtos} />
                </C.OrderInfo>
              </C.Order>
            ))}

          {!orders && !isFetching && updatedOrders && (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <C.WarningText>Não há pedidos 👎🏼</C.WarningText>
            </div>
          )}

          {isFetching && (
            <C.LoadingBox>
              <p>Carregando</p>
              <DotPulse size={18} speed={2.2} color='#535050fa' />
            </C.LoadingBox>
          )}
        </C.ContainerOrders>
      </C.ContainerItem>
    </C.Container>
  );
};
