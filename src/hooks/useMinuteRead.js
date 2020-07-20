import readingTime from "reading-time"
import { useState, useEffect } from "react"
export const useMinuteRead = (data) => {
  const [input, setInput] = useState(data)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!data) {
      setError(`The input seems to be missing. Make sure you pass in a string`)
      return error
    }
    setInput(data)

    return () => {
      readingTime(data)
    }
  }, [])
  return [input, error]
}
