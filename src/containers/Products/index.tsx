import { useEffect, useState, useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'

import { useFetch } from '../../hooks/useFetch'
import { Header, ProductItem } from '../../components'
import { useCart } from '../../hooks/CartContext'
import { ProductType } from '../../@types/Product'
import { Cart } from '../Cart'
import { useThemeContext } from '../../hooks/ThemeContext'
import * as C from './style'

export const Products = () => {
  const { state } = useLocation()
  const { theme } = useThemeContext()
  const [searchParams, setSearchParams] = useSearchParams()

  let initialState = 'All'
  if (state?.category) {
    initialState = state.category
  }

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>()
  const [category, setCategory] = useState(initialState)

  const search = useMemo(() => {
    return searchParams.get('search') || ''
  }, [searchParams])

  const [inputValue, setInputValue] = useState(search)

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

  const handleSearch = () => {
    if (!inputValue) return alert('Erro ao buscar')

    setSearchParams({ search: inputValue })
  }

  const removeParam = () => {
    if (searchParams.has('search')) {
      searchParams.delete('search') // deletando parametro de busca
      setSearchParams(searchParams) // atualizando

      setInputValue('')
    }
  }

  return (
    <C.Container>
      <Header>
        <C.SearchArea>
          <C.SearchInput
            type='text'
            value={inputValue}
            placeholder='Pesquisar produto...'
            onChange={e => setInputValue(e.target.value)}
          />

          <C.ButtonSearch onClick={handleSearch}>
            <C.IconSearch />
          </C.ButtonSearch>
        </C.SearchArea>
      </Header>

      {!loadingCategories && !loadingProducts && !search && (
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

      {!loadingProducts && !loadingCategories && !!search && (
        <C.ContainerItems>
          {allProducts
            ?.filter(item =>
              item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            )
            .map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          <button onClick={removeParam}>desfazer</button>
        </C.ContainerItems>
      )}

      {(loadingProducts || loadingCategories) && (
        <C.ChargingBox>
          <DotSpinner
            size={55}
            speed={0.9}
            color={theme.colors.background.contrast}
          />
        </C.ChargingBox>
      )}
      <Cart />
    </C.Container>
  )
}
