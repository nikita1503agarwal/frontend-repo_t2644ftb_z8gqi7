import { CheckCircle2 } from 'lucide-react'

export default function InvestorsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#2C2C34]">For Investors</h2>
          <p className="mt-3 text-[#2C2C34]/70">
            Discover curated project ideas tailored to your interests. Get personalized recommendations and connect directly with creators.
          </p>
          <ul className="mt-6 space-y-3">
            {['Curated projects across industries','Personalized recommendations','Connect directly with creators'].map((t, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#4CC26E]" />
                <span className="text-[#2C2C34]">{t}</span>
              </li>
            ))}
          </ul>
          <a href="/investors" className="mt-8 inline-block px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF8C42] to-[#F5C542] hover:brightness-110 shadow-lg transition-transform hover:scale-[1.02]">
            Open Investor Dashboard
          </a>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-black/5 overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop" alt="Investor Mockup" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-tr from-[#57A7FF] to-[#FF6FA3] rounded-2xl blur-2xl opacity-50" />
          <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-tr from-[#4CC26E] to-[#F5C542] rounded-2xl blur-2xl opacity-50" />
        </div>
      </div>
    </section>
  )
}
