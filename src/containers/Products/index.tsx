import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DotSpinner } from '@uiball/loaders';

import { useFetch, ProductTypes } from '../../hooks/useFetch';

import { Header, ProductItem } from '../../components';
import * as C from './style';

export const Products = () => {
  const { state } = useLocation();

  let initialState: string = 'All';
  if (state?.category) {
    initialState = state.category;
  }

  const { allProducts, categories, loading } = useFetch();
  const [filteredProducts, setFilteredProducts] = useState<ProductTypes[]>([]);
  const [category, setCategory] = useState(initialState);

  useEffect(() => {
    if (category === 'All') {
      return setFilteredProducts(allProducts);
    }

    const newList = allProducts.filter(item => item.category === category);

    setFilteredProducts(newList);
  }, [category, allProducts]);

  return (
    <C.Container>
      <Header />

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

      {loading && (
        <div style={{ position: 'absolute', top: 300, left: '48.5%' }}>
          <DotSpinner size={53} speed={0.9} color='black' />
        </div>
      )}
    </C.Container>
  );
};
