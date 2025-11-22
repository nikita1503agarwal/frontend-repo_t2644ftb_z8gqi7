export default function CTABanner() {
  return (
    <section className="relative py-14">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C8C] via-[#57A7FF] to-[#FF8C42] opacity-90" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Start Building The Future Today</h3>
        <p className="mt-2 text-white/80 max-w-2xl mx-auto">Join the community that brings ideas and capital together, without handling payments. Collaborate freely.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="/submit" className="px-6 py-3 rounded-lg font-semibold text-[#0b2e7a] bg-gradient-to-r from-[#4CC26E] to-[#57A7FF] hover:brightness-110 shadow-lg transition-transform hover:scale-[1.02]">Submit Your Idea</a>
          <a href="/explore" className="px-6 py-3 rounded-lg font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20">Explore Projects</a>
        </div>
      </div>
    </section>
  )
}
