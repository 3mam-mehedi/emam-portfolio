import React from "react"
import ScrollToTop from "./components/ScrollToTop"

export const metadata = {
  title: "My App",
  description: "App with automatic scroll-to-top on route change",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
