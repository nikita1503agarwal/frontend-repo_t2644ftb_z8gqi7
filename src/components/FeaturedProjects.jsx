import { ArrowRight, Star } from 'lucide-react'

const categories = {
  Fintech: 'bg-[#57A7FF]',
  Health: 'bg-[#4CC26E]',
  Education: 'bg-[#F5C542]',
  Climate: 'bg-[#FF8C42]',
  Community: 'bg-[#FF6FA3]'
}

const projects = [
  {
    id: 1,
    title: 'PayLite Micro Investments',
    category: 'Fintech',
    budget: '$50k - $150k',
    description: 'A micro-investment platform enabling fractional investments in local businesses.',
    image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'TeleHealth AI Triage',
    category: 'Health',
    budget: '$100k - $300k',
    description: 'AI-driven remote triage app to reduce clinic wait times and improve outcomes.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'LearnLoop',
    category: 'Education',
    budget: '$25k - $75k',
    description: 'Peer-to-peer learning cohorts powered by adaptive content and mentors.',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'CarbonTrack',
    category: 'Climate',
    budget: '$80k - $200k',
    description: 'A dashboard that helps SMEs measure, reduce, and report emissions.',
    image: 'https://images.unsplash.com/photo-1596825805350-70c3a02029a4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXJib25UcmFja3xlbnwwfDB8fHwxNzYzODA3MTI5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#2C2C34]">Featured Projects</h2>
          <a href="/explore" className="text-[#1A3C8C] hover:text-[#0b2e7a] inline-flex items-center gap-2">
            Explore all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-2xl transition-all">
              <div className="relative h-40 overflow-hidden">
                <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md inline-flex items-center gap-1"
                  style={{
                    background:
                      p.category === 'Fintech' ? '#57A7FF' : p.category === 'Health' ? '#4CC26E' : p.category === 'Education' ? '#F5C542' : p.category === 'Climate' ? '#FF8C42' : '#FF6FA3',
                  }}
                >
                  {p.category}
                </div>
                <button className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#2C2C34] p-2 rounded-full shadow transition">
                  <Star className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#2C2C34]">{p.title}</h3>
                <p className="text-sm text-[#2C2C34]/70 mt-1 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1A3C8C]">{p.budget}</span>
                  <a href={`/project/${p.id}`} className="text-sm font-semibold text-[#1A3C8C] hover:text-[#0b2e7a]">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
