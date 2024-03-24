import { useRef } from 'react'
import { MutableRefObject } from 'react'
export default function useDebounce(fn: (...args: unknown[]) => void, delay: number) {
  let timer: MutableRefObject<null | ReturnType<typeof setTimeout>> = useRef(null)
  return (...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
