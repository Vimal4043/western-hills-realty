import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#eaf2f8]">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}