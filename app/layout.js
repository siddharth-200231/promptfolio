export const metadata = {
  title: 'Promptopia',
  description: 'AI prompts to make your life easier',
}
import '../styles/global.css'
import Nav from '@/components/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav/>
        <div className="background">
           
          {children}
        </div>
      </body>
    </html>
  )
}
