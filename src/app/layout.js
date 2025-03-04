import "./globals.css";

export const metadata = {
  title: 'NASA Astronomy Picture of the Day',
  description: 'View NASA\'s Astronomy Picture of the Day using Next.js and SWR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}