import { useEffect, useRef, useState } from 'react'

export default function useAxios(configRequest) {
  const { axiosInstace, method, url, othersConfig = {} } = configRequest

  const [data, setDate] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const effectRun = useRef(false)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const res = await axiosInstace[method.toLowerCase()](url, {
          ...othersConfig,
          signal: controller.signal
        })
        setDate(res.data)
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    if (effectRun.current) {
      fetchData()
    }

    return () => {
      controller.abort()
      effectRun.current = true
    }
  }, [])
  return [data, loading, error]
}


