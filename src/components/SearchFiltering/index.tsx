import { ProductType } from '../../@types/Product';
import { ProductItem } from '../ProductItem';

import * as C from './style';

type FilteringTypes = {
  items: ProductType[];
  undoClick: () => void;
  valueSearch: string;
};

export const SearchFiltering = ({
  items,
  undoClick,
  valueSearch,
}: FilteringTypes) => {
  return (
    <C.Container>
      {items.length > 0 && (
        <>
          <C.ContainerItems header>
            <C.Title>
              {items.length}{' '}
              {items.length === 1 ? 'item encontrado' : 'itens encontrados'}{' '}
              para sua busca: "{valueSearch}"
            </C.Title>
            <C.Back onClick={undoClick} />
          </C.ContainerItems>

          <C.ContainerItems>
            {items.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </C.ContainerItems>
        </>
      )}

      {items.length === 0 && (
        <C.AreaSearchNotFound>
          <C.NotFoundText>
            Não há produtos que correspondem à sua busca.
          </C.NotFoundText>

          <C.Ul>
            <C.Li>
              <strong>Revise a ortografia</strong> da palavra.
            </C.Li>
            <C.Li>
              Utilize<strong> palavras mais genéricas</strong> ou menos
              palavras.
            </C.Li>
            <C.Li>
              <a onClick={undoClick}>Navegue pelas categorias</a> para encontrar
              um produto semelhante.
            </C.Li>
          </C.Ul>
          <C.Button onClick={undoClick}>Voltar</C.Button>
        </C.AreaSearchNotFound>
      )}
    </C.Container>
  );
};
