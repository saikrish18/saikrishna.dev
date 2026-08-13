import { useEffect } from 'react'

const SETTLE_WINDOW_MS = 2000
const CORRECTION_DEBOUNCE_MS = 80

/**
 * SPA sections don't exist in the initial HTML, so the browser's native
 * hash-scroll-on-load fires before React has rendered the target and silently
 * no-ops. This scrolls to the target once it exists, then keeps correcting
 * for a short window afterward — lazy-loaded sections (e.g. Projects) can
 * finish loading and change page height just after the first scroll, which
 * would otherwise leave the viewport stranded at a stale position.
 */
export function useScrollToHashOnLoad() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    let settled = false
    let findFrame = 0
    let debounceTimer: ReturnType<typeof setTimeout> | undefined
    let settleTimer: ReturnType<typeof setTimeout> | undefined

    const scrollToTarget = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }

    const findAndScroll = () => {
      if (document.getElementById(hash)) {
        scrollToTarget()
        observer.observe(document.body, { childList: true, subtree: true })
        settleTimer = setTimeout(() => {
          settled = true
          observer.disconnect()
        }, SETTLE_WINDOW_MS)
        return
      }
      findFrame = requestAnimationFrame(findAndScroll)
    }

    const observer = new MutationObserver(() => {
      if (settled) return
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(scrollToTarget, CORRECTION_DEBOUNCE_MS)
    })

    findFrame = requestAnimationFrame(findAndScroll)

    return () => {
      settled = true
      cancelAnimationFrame(findFrame)
      clearTimeout(debounceTimer)
      clearTimeout(settleTimer)
      observer.disconnect()
    }
  }, [])
}
