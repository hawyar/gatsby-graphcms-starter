import { useState, useCallback } from "react"

export const useToggle = (intial) => {
  const [open, setOpen] = useState(intial)

  return [open, useCallback(() => setOpen((status) => !status))]
}
