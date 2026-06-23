"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

/**
 * ScrollToTop
 * - Client component that scrolls window to top on pathname changes
 * - Usage: include once in your root layout (app/layout.jsx)
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const pathname = usePathname()
  const prev = useRef(pathname)

  useEffect(() => {
    // Only run in the browser and when the pathname actually changes
    if (typeof window === "undefined") return
    if (prev.current === pathname) return

    // scroll to top (preserves production-safety and is smoothable)
    try {
      window.scrollTo({ top: 0, left: 0, behavior })
    } catch (e) {
      // fallback for environments where options are restricted
      window.scrollTo(0, 0)
    }

    prev.current = pathname
  }, [pathname, behavior])

  return null
}
