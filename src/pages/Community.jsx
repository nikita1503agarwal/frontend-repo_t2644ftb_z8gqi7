import Navbar from '../components/Navbar'
import { MessageSquare, Flame } from 'lucide-react'

const posts = new Array(9).fill(0).map((_, i) => ({
  id: i+1,
  title: ['Launching a new climate tool','Feedback on MVP pricing','Looking for edtech partners','Growth hacks for fintech'][i%4],
  author: ['Aisha','Luis','Mei','Jordan'][i%4],
  category: ['Climate','Fintech','Education','Community'][i%4],
  replies: [12,3,18,7][i%4],
  status: ['Latest','New','Trending'][i%3]
}))

const color = (c) => ({
  Fintech: '#57A7FF',
  Health: '#4CC26E',
  Education: '#F5C542',
  Climate: '#FF8C42',
  Community: '#FF6FA3',
}[c] || '#57A7FF')

export default function Community() {
  return (
    <div className="min-h-screen bg-[#F4F6F9]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#2C2C34] flex items-center gap-2"><MessageSquare /> Community Forum</h1>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6FA3] to-[#57A7FF] text-white font-semibold">New Post</button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p)=> (
            <div key={p.id} id={`thread-${p.id}`} className="bg-white rounded-2xl p-5 border border-black/5 hover:shadow-xl transition">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-xs text-white" style={{ background: color(p.category) }}>{p.category}</span>
                <span className={`text-xs font-medium ${p.status==='Trending' ? 'text-[#FF8C42]' : p.status==='New' ? 'text-[#FF6FA3]' : 'text-[#57A7FF]'}`}>{p.status}</span>
              </div>
              <h3 className="mt-3 font-semibold text-[#2C2C34]">{p.title}</h3>
              <p className="text-sm text-[#2C2C34]/70">by {p.author}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-[#2C2C34]/70">
                <span>{p.replies} replies</span>
                <button className="text-[#1A3C8C] hover:text-[#0b2e7a]">Reply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
