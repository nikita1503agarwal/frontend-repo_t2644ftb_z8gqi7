import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1e4f]/80 via-[#1A3C8C]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Fundless Connect
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-white/80">
            Where Ideas Meet Investors
          </p>

          <p className="mt-6 text-white/80 max-w-xl">
            A community-driven platform to connect creators and visionary project ideas with investors across every industry.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/submit" className="px-6 py-3 rounded-lg font-semibold text-[#0b2e7a] bg-gradient-to-r from-[#4CC26E] to-[#57A7FF] hover:brightness-110 shadow-lg shadow-green-500/20 transition-transform hover:scale-[1.02]">
              Submit Your Idea
            </Link>
            <Link to="/explore" className="px-6 py-3 rounded-lg font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
