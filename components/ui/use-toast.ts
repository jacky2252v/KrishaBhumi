"use client"

import type React from "react"

// Simplified version of the use-toast hook
import { useState, useCallback } from "react"

type ToastProps = {
  title?: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = useCallback(({ ...props }: ToastProps) => {
    setToasts((prev) => [...prev, props])

    // Remove toast after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 5000)

    return {
      id: Date.now(),
      dismiss: () => setToasts((prev) => prev.slice(1)),
    }
  }, [])

  return {
    toast,
    toasts,
    dismiss: (id: number) => setToasts((prev) => prev.filter((_, i) => i !== id)),
  }
}
