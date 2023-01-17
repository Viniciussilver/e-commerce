import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'

import { useFetch } from '../../hooks/useFetch'
import { Footer, Header, ProductItem } from '../../components'

import * as C from './style'
import { useCart } from '../../hooks/CartContext'
import { ProductType } from '../../@types/Product'
import { Cart } from '../Cart'

export const Products = () => {
  const { state } = useLocation()

  let initialState = 'All'
  if (state?.category) {
    initialState = state.category
  }

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>()
  const [category, setCategory] = useState(initialState)

  let { data: categories, loading: loadingCategories } = useFetch<string[]>(
    'products/categories'
  )
  const { data: allProducts, loading: loadingProducts } =
    useFetch<ProductType[]>('products')

  if (categories?.length) {
    categories = ['All', ...categories]
  }

  useEffect(() => {
    if (category === 'All') {
      setFilteredProducts(allProducts)
    } else {
      const newList = allProducts?.filter(item => item.category === category)

      setFilteredProducts(newList)
    }
  }, [category, allProducts])

  useCart()
  return (
    <C.Container>
      <Header />

      {!loadingCategories && !loadingProducts && (
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
            {filteredProducts?.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </C.ContainerItems>
        </>
      )}

      {(loadingProducts || loadingCategories) && (
        <div
          style={{
            position: 'absolute',
            top: 330,
            left: '50%',
            right: '50%',
          }}
        >
          <DotSpinner size={55} speed={0.9} color='black' />
        </div>
      )}
      <Cart />
    </C.Container>
  )
}
