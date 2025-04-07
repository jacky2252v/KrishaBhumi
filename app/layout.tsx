import Navbar from "@/components/Navbar/Navbar"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Krisha Bhumi</title>
        <meta name="description" content="Your trusted partner for quality construction services" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}