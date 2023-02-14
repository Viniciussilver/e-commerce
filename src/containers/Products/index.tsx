import { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DotSpinner } from '@uiball/loaders';

import { Header, Orders, ProductItem, SearchFiltering } from '../../components';
import { IProduct } from '../../@types/Product';
import { Cart } from '../Cart';
import { useThemeContext } from '../../contexts/ThemeContext';
import * as C from './style';
import requests from '../../services/fakeStore';
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

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState('All');

  const search = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const [inputValue, setInputValue] = useState(search);
  const [isActiveInputArea, setIsActiveInputArea] = useState(false);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const { products, categories } = await requests();

      setIsFetching(false);

      const newProducts = (products as IProduct[]).map(item => {
        return { ...item, formatedPrice: formatCurrency(item.price) };
      });

      setAllProducts(newProducts);

      setCategories(['All', ...categories]);
    };

    if (!(allProducts.length > 0) || !(categories.length > 0)) {
      setIsFetching(true);
      getItems();
    }

    if (category === 'All') {
      setFilteredProducts(allProducts);
    } else {
      const newList = allProducts.filter(item => item.category === category);

      setFilteredProducts(newList);
    }
  }, [category, allProducts]);

  useEffect(() => {}, []);

  const handleSearch = () => {
    if (!inputValue) return alert('Erro ao buscar');

    setIsFetching(true);

    setSearchParams({ busca: inputValue });

    setTimeout(() => setIsFetching(false), 1600);
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

      {!isFetching && !search && (
        <>
          <C.RowList>
            <C.ListArea>
              {categories.map((item, index) => (
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

      {!isFetching && !!search && (
        <SearchFiltering
          valueSearch={search}
          items={allProducts.filter(item =>
            item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )}
          undoClick={removeParam}
        />
      )}

      {isFetching && (
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
