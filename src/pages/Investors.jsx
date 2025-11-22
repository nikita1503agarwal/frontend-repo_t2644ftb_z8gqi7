import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Heart, Send, Sparkles } from 'lucide-react'

const matches = new Array(6).fill(0).map((_, i) => ({
  id: i+1,
  title: ['PayLite','TeleHealth AI','LearnLoop','CarbonTrack'][i%4],
  match: [86,72,93,65,77,84][i],
  category: ['Fintech','Health','Education','Climate'][i%4],
  image: `https://source.unsplash.com/random/800x600?sig=${i+22}&network`,
}))

export default function Investors() {
  const [favorites, setFavorites] = useState({})

  const toggleFav = (id) => setFavorites((f) => ({ ...f, [id]: !f[id] }))

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#2C2C34]">Investor Dashboard</h1>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF8C42] to-[#F5C542] text-white font-semibold flex items-center gap-2"><Sparkles /> Improve Recommendations</button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((m)=> (
            <div key={m.id} className="bg-[#F4F6F9] rounded-2xl overflow-hidden border border-black/5">
              <div className="relative h-40">
                <img src={m.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs text-white" style={{ background: m.category==='Fintech'?'#57A7FF':m.category==='Health'?'#4CC26E':m.category==='Education'?'#F5C542':'#FF8C42' }}>{m.category}</div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="h-2 w-full rounded-full bg-white/60 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#4CC26E] to-[#57A7FF]" style={{ width: `${m.match}%` }} />
                  </div>
                  <div className="text-xs text-white/90 mt-1">Match {m.match}%</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2C2C34]">{m.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <button onClick={()=>toggleFav(m.id)} className={`px-3 py-1.5 rounded-md text-sm text-white ${favorites[m.id] ? 'bg-[#FF6FA3]' : 'bg-gradient-to-r from-[#FF6FA3] to-[#57A7FF]'} transition`}> <Heart className="inline w-4 h-4 mr-1" /> {favorites[m.id] ? 'Saved' : 'Save'}</button>
                  <button className="px-3 py-1.5 rounded-md text-sm text-white bg-gradient-to-r from-[#4CC26E] to-[#57A7FF] hover:brightness-110"> <Send className="inline w-4 h-4 mr-1" /> Connect</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
