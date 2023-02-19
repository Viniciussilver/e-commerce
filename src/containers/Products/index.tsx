import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DotSpinner } from '@uiball/loaders';
import { useQuery } from 'react-query';

import { Header, Orders, ProductItem, SearchFiltering } from '../../components';
import { IProduct } from '../../@types/Product';
import { Cart } from '../Cart';
import { useThemeContext } from '../../contexts/ThemeContext';
import * as C from './style';
import api from '../../services/fakeStoreBaseUrl';
import { formatCurrency } from '../../utils/format';

export interface IShowOrder {
  showOrder: boolean;
  orderId: string | null;
}

export const Products = () => {
  const { theme } = useThemeContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const [showOrders, setShowOrders] = useState<IShowOrder>(() => {
    const orderInfo = localStorage.getItem('@showOrder');

    if (orderInfo) {
      localStorage.removeItem('@showOrder');

      return JSON.parse(orderInfo);
    }

    return { showOrder: false, orderId: null };
  });

  const search = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const [inputValue, setInputValue] = useState(search);
  const [isActiveInputArea, setIsActiveInputArea] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const { data: data1, isFetching: fetching1 } = useQuery(
    'products',
    async () => {
      const products = await api.get('products').then(res => res.data);

      const newProducts = (products as IProduct[]).map(item => {
        return { ...item, formatedPrice: formatCurrency(item.price) };
      });

      return newProducts;
    },
    {
      staleTime: 3600000,
    }
  );

  const { data: data2, isFetching: fetching2 } = useQuery(
    'categories',
    async () => {
      const categories = await api
        .get('products/categories')
        .then(res => res.data);

      return ['All', ...categories];
    },
    {
      staleTime: 3600000,
    }
  );

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState('All');

  const [allProducts, setAllProducts] = useState<IProduct[] | null>(null);
  const [categories, setCategories] = useState<string[] | null>(null);

  useEffect(() => {
    if (data1 && data2 && !allProducts && !categories) {
      setAllProducts(data1);
      setCategories(data2);

      return;
    }

    if (allProducts && categories) {
      if (category === 'All') {
        setFilteredProducts(allProducts);
      } else {
        const newList = allProducts.filter(item => item.category === category);

        setFilteredProducts(newList);
      }
    }
  }, [category, allProducts, data1, data2]);

  const handleSearch = () => {
    if (!inputValue) return alert('Erro ao buscar');

    setSearchLoading(true);

    setSearchParams({ busca: inputValue });

    setTimeout(() => setSearchLoading(false), 1500);
  };

  const removeParam = () => {
    if (searchParams.has('busca')) {
      searchParams.delete('busca'); // deletando parametro de busca
      setSearchParams(searchParams); // atualizando

      setInputValue('');
      setIsActiveInputArea(false);
    }
  };

  return (
    <C.Container>
      <Header setShowOrders={setShowOrders}>
        <C.IconSearchHeader
          onClick={() => setIsActiveInputArea(value => !value)}
        />
        <C.SearchArea isActive={isActiveInputArea}>
          <C.SearchInput
            type='text'
            value={inputValue}
            placeholder='Pesquisar produto'
            onChange={e => setInputValue(e.target.value)}
          />

          <C.ButtonSearch onClick={handleSearch}>
            <C.IconSearch />
          </C.ButtonSearch>
        </C.SearchArea>

        <hr style={{ height: '42px', width: 2 }}></hr>
      </Header>

      {!fetching1 && !fetching2 && !searchLoading && !search && (
        <>
          <C.RowList>
            <C.ListArea>
              {categories?.map((item, index) => (
                <C.ButtonCategory
                  key={index}
                  onClick={() => setCategory(item)}
                  active={category === item}
                >
                  {item}
                </C.ButtonCategory>
              ))}
            </C.ListArea>
          </C.RowList>
          <C.ContainerItems>
            {filteredProducts.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </C.ContainerItems>
        </>
      )}

      {!fetching1 &&
        !fetching2 &&
        !searchLoading &&
        !!search &&
        allProducts && (
          <SearchFiltering
            valueSearch={search}
            items={allProducts.filter(item =>
              item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            )}
            undoClick={removeParam}
          />
        )}

      {(fetching1 || fetching2 || searchLoading) && (
        <C.ChargingBox>
          <DotSpinner
            size={52}
            speed={1}
            color={theme.colors.background.contrast}
          />
        </C.ChargingBox>
      )}
      {showOrders.showOrder && (
        <Orders setShowOrders={setShowOrders} orderId={showOrders.orderId} />
      )}
      <Cart />
    </C.Container>
  );
};
