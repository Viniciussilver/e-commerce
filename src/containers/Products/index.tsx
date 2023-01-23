import { useEffect, useState, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { DotSpinner } from '@uiball/loaders';

import { Header, ProductItem, SearchFiltering } from '../../components';
import { ProductType } from '../../@types/Product';
import { Cart } from '../Cart';
import { useThemeContext } from '../../contexts/ThemeContext';
import * as C from './style';
import requests from '../../services/fakeStore';
import { formatCurrency } from '../../utils/format';

export const Products = () => {
  const { state } = useLocation();
  const { theme } = useThemeContext();
  const [searchParams, setSearchParams] = useSearchParams();

  let initialState = 'All';
  if (state?.category) {
    initialState = state.category;
  }

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState(initialState);
  // const [searchFiltering, setSearchFiltering] = useState<ProductType[]>([]);

  const search = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const [inputValue, setInputValue] = useState(search);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [imagesLoading, setImagesLoding] = useState<boolean[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const { products, categories } = await requests();

      setIsFetching(false);

      const newProducts = (products as ProductType[]).map(item => {
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

      // setImagesLoding(new Array(allProducts.length).fill(true));
    } else {
      const newList = allProducts.filter(item => item.category === category);

      setFilteredProducts(newList);

      // setImagesLoding(new Array(newList.length).fill(true));
    }
  }, [category, allProducts]);

  const handleSearch = () => {
    if (!inputValue) return alert('Erro ao buscar');

    setSearchParams({ busca: inputValue });
  };

  const removeParam = () => {
    if (searchParams.has('busca')) {
      searchParams.delete('busca'); // deletando parametro de busca
      setSearchParams(searchParams); // atualizando

      setInputValue('');
    }
  };

  return (
    <C.Container>
      <Header>
        <C.SearchArea>
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
              <ProductItem
                key={index}
                item={item}
                index={index}
                imagesLoading={imagesLoading}
                setImagesLoading={newArray => setImagesLoding(newArray)}
              />
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
            size={54}
            speed={1}
            color={theme.colors.background.contrast}
          />
        </C.ChargingBox>
      )}
      <Cart />
    </C.Container>
  );
};
