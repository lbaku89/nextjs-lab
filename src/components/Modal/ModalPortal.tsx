'use client'

import { createPortal } from 'react-dom'
import { useRef } from 'react'
import { MutableRefObject } from 'react'
export default function ModalPortal({ children }: { children: React.ReactNode }) {
  const modalRoot: MutableRefObject<null | HTMLElement> = useRef(null)

  if (window !== undefined) {
    modalRoot.current = document.getElementById('modal-root')
  }

  return modalRoot.current && createPortal(children, modalRoot.current)
}
