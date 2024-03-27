'use client'

import useModal from '@/hooks/useModal'
import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { MutableRefObject } from 'react'
import Modal from '@/components/Modal/Modal'
export default function ClientComponent() {
  const [isOpen, openModal, closeModal] = useModal()

  const modalRoot: MutableRefObject<null | HTMLElement> = useRef(null)
  // MutableRefObject<null | HTMLElement>
  if (typeof window !== 'undefined') {
    modalRoot.current = document.getElementById('modal-root')
  }

  return (
    <>
      <button onClick={openModal} type="button">
        모달 열기
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} maxWidth="lg">
        안녕
      </Modal>
    </>
  )
}
