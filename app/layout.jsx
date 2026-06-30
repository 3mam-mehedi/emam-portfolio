import React from "react"
import ScrollToTop from "./components/ScrollToTop"

export const metadata = {
  title: "My App",
  description: "App with automatic scroll-to-top on route change",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-slate-100">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
