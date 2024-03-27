'use client'

import { useState } from 'react'

export default function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    document.body.style.overflow = 'hidden'
    setIsOpen(true)
  }
  const handleClose = () => {
    document.body.style.overflow = 'auto'
    setIsOpen(false)
  }

  return [isOpen, handleOpen, handleClose] as const
}
