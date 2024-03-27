'use client'

import styles from './styles/styles.module.css'
import ModalPortal from './ModalPortal'
export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = 'md',
  fullWidth = true,
}: {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
}) {
  return isOpen ? (
    <ModalPortal>
      <div
        className={styles.modalBlurScreen}
        onClick={(e) => {
          onClose()
          e.stopPropagation() // 이벤트 버블링 방지
        }}
      >
        <div
          className={`${styles.modalWrapper} + ${styles[maxWidth]} + ${fullWidth ? styles.fullWidth : ''}`}
          onClick={(e) => {
            e.stopPropagation() // 이벤트 버블링 방지
          }}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  ) : null
}
