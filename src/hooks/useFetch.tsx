import { useEffect, useState } from 'react'

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetching = async () => {
      await api
        .get(url)
        .then(res => setData(res.data))
        .finally(() => setLoading(false))
    }

    fetching()
  }, [])

  return { data, loading }
}
