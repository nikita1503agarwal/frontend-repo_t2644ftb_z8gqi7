import { Link, NavLink } from 'react-router-dom'
import { Menu, Rocket, Users, Search, LayoutGrid } from 'lucide-react'
import { useState } from 'react'

const brand = {
  deepBlue: '#1A3C8C',
  brightGreen: '#4CC26E',
  skyBlue: '#57A7FF',
  yellow: '#F5C542',
  pink: '#FF6FA3',
  orange: '#FF8C42',
  grey: '#F4F6F9',
  charcoal: '#2C2C34',
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? 'bg-white/20 text-white'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur-xl bg-[rgba(26,60,140,0.8)]/80 border-b border-white/10"
        style={{ backgroundColor: brand.deepBlue }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1A3C8C] via-[#57A7FF] to-[#FF8C42] shadow-lg shadow-blue-500/20 grid place-items-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold -mb-0.5">Fundless Connect</p>
              <p className="text-white/70 text-[11px]">Where Ideas Meet Investors</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavItem to="/explore">Explore Projects</NavItem>
            <NavItem to="/submit">Submit Idea</NavItem>
            <NavItem to="/investors">Investor Dashboard</NavItem>
            <NavItem to="/community">Community</NavItem>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/submit"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-[#0b2e7a] bg-gradient-to-r from-[#4CC26E] to-[#57A7FF] hover:brightness-110 shadow-md shadow-green-500/20 transition-transform hover:scale-[1.02]"
            >
              Submit Your Idea
            </Link>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white" aria-label="Open menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-4 py-3 flex flex-col gap-2 bg-[rgba(26,60,140,0.95)]">
              <Link onClick={() => setOpen(false)} className="text-white/90" to="/explore">Explore Projects</Link>
              <Link onClick={() => setOpen(false)} className="text-white/90" to="/submit">Submit Idea</Link>
              <Link onClick={() => setOpen(false)} className="text-white/90" to="/investors">Investor Dashboard</Link>
              <Link onClick={() => setOpen(false)} className="text-white/90" to="/community">Community</Link>
            </div>
          </div>
        )}
      </div>
      {/* helper spacer */}
      <div className="h-16" />
    </header>
  )
}
