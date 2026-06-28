import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * ScrollToTop
 * Scrolls the page to the top whenever the current route changes.
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      window.scrollTo({ top: 0, left: 0, behavior })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [pathname, behavior])

  return null
}
