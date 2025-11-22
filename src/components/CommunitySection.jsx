import { UsersRound } from 'lucide-react'

const threads = [
  { id: 1, title: 'Looking for feedback on my climate dashboard', category: 'Climate', author: 'Aisha', avatar: 'https://i.pravatar.cc/100?img=5', status: 'New' },
  { id: 2, title: 'Fintech partners for micro investing app', category: 'Fintech', author: 'Luis', avatar: 'https://i.pravatar.cc/100?img=12', status: 'Trending' },
  { id: 3, title: 'Edtech mentors wanted for cohort-based learning', category: 'Education', author: 'Mei', avatar: 'https://i.pravatar.cc/100?img=30', status: 'Latest' },
]

function badgeColor(category) {
  switch (category) {
    case 'Fintech':
      return 'bg-[#57A7FF]'
    case 'Health':
      return 'bg-[#4CC26E]'
    case 'Education':
      return 'bg-[#F5C542]'
    case 'Climate':
      return 'bg-[#FF8C42]'
    default:
      return 'bg-[#FF6FA3]'
  }
}

export default function CommunitySection() {
  return (
    <section className="py-16 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#2C2C34] flex items-center gap-2"><UsersRound /> Community</h2>
          <a href="/community" className="text-[#1A3C8C] hover:text-[#0b2e7a]">Visit Community Forum</a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {threads.map((t) => (
            <a key={t.id} href={`/community#thread-${t.id}`} className="group bg-white rounded-2xl p-5 border border-black/5 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt="" className="w-10 h-10 rounded-full" />
                <div>
                  <h3 className="text-[#2C2C34] font-semibold group-hover:text-[#1A3C8C]">{t.title}</h3>
                  <p className="text-sm text-[#2C2C34]/70">by {t.author}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-full text-xs text-white ${badgeColor(t.category)}`}>{t.category}</span>
                <span className="text-xs font-medium text-[#FF6FA3]">{t.status}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
