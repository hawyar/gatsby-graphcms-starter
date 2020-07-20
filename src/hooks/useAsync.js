import { useState, useCallback, useEffect } from "react"
const useAync = (asyncFunction, immediate = true) => {
  const [pending, setPending] = useState(false)
  const [value, setValue] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(() => {
    setPending(true)
    setValue(true)
    setError(true)
    return asyncFunction()
      .then((response) => setValue(response))
      .catch((error) => setError(error))
      .finally(() => setPending(false))
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])
}
