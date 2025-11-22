import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Search, MapPin, Flame, Zap } from 'lucide-react'

const categories = ['Fintech','Health','Education','Climate','Community']
const color = (c) => ({
  Fintech: '#57A7FF',
  Health: '#4CC26E',
  Education: '#F5C542',
  Climate: '#FF8C42',
  Community: '#FF6FA3',
}[c])

const demo = new Array(8).fill(0).map((_, i) => ({
  id: i+1,
  title: ['PayLite','TeleHealth AI','LearnLoop','CarbonTrack','Community Hub'][i%5] + ' #' + (i+1),
  category: categories[i % categories.length],
  location: ['NY, USA','Berlin, DE','Lagos, NG','Bangalore, IN'][i%4],
  budget: ['$25k-$75k','$50k-$150k','$80k-$200k'][i%3],
  image: `https://source.unsplash.com/random/800x600?sig=${i+12}&innovation`,
  liked: false,
}))

export default function Explore() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('All')
  const [list, setList] = useState(demo)
  const [sort, setSort] = useState('Trending')

  const filtered = list.filter((p) => (selected==='All' || p.category===selected) && p.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="min-h-screen bg-[#F4F6F9]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-[#2C2C34]">Explore Projects</h1>

        <div className="mt-6 grid gap-4 md:grid-cols-[1fr,auto,auto]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#57A7FF]" />
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search ideas, projects, or creators…" className="w-full pl-10 pr-4 py-3 rounded-lg border border-black/10 focus:outline-none" style={{ boxShadow: '0 0 0 3px #57A7FF22' }} />
          </div>
          <select value={selected} onChange={(e)=>setSelected(e.target.value)} className="px-4 py-3 rounded-lg border border-black/10">
            {['All',...categories].map((c)=>(<option key={c} value={c}>{c}</option>))}
          </select>
          <div className="flex items-center gap-2">
            {['Trending','Latest','Most Liked'].map((t)=> (
              <button key={t} onClick={()=>setSort(t)} className={`px-4 py-3 rounded-lg text-sm font-medium border ${sort===t?'bg-white':'bg-white/70 hover:bg-white'} transition`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 text-sm text-[#2C2C34]/70">
          <MapPin className="text-[#FF8C42]" /> Filter by location coming soon
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p)=> (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all">
              <div className="relative h-40">
                <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs text-white" style={{ background: color(p.category) }}>{p.category}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2C2C34]">{p.title}</h3>
                <p className="text-sm text-[#2C2C34]/60">{p.location}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#1A3C8C]">{p.budget}</span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-md text-sm text-white bg-gradient-to-r from-[#FF6FA3] to-[#57A7FF] hover:brightness-110">Save</button>
                    <button className="px-3 py-1.5 rounded-md text-sm text-white bg-gradient-to-r from-[#4CC26E] to-[#57A7FF] hover:brightness-110">Connect</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
