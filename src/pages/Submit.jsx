import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Upload, CheckCircle2 } from 'lucide-react'

const categoryColors = {
  Fintech: '#57A7FF',
  Health: '#4CC26E',
  Education: '#F5C542',
  Climate: '#FF8C42',
  Community: '#FF6FA3',
}

export default function Submit() {
  const [submitted, setSubmitted] = useState(false)
  const [category, setCategory] = useState('Fintech')

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <div className="min-h-screen bg-[#F4F6F9]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-[#2C2C34]">Submit Your Idea / Project</h1>
        <p className="text-[#2C2C34]/70 mt-1">Share your vision. No payments handled here — just connections.</p>

        <form onSubmit={onSubmit} className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-black/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#2C2C34]">Project Title</label>
              <input required className="mt-1 w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#57A7FF]" placeholder="e.g., CarbonTrack" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C2C34]">Budget</label>
              <input required className="mt-1 w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#4CC26E]" placeholder="$50k - $150k" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#2C2C34]">Description</label>
              <textarea required rows={4} className="mt-1 w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#FF8C42]" placeholder="Briefly describe your project" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C2C34]">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2" style={{ boxShadow: `0 0 0 3px ${categoryColors[category]}20` }}>
                {Object.keys(categoryColors).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C2C34]">Creator Info</label>
              <input required className="mt-1 w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#F5C542]" placeholder="Name / Email" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#2C2C34]">Problem Being Solved</label>
              <textarea rows={3} className="mt-1 w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#57A7FF]" placeholder="What's the pain point?" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#2C2C34]">Proposed Solution</label>
              <textarea rows={3} className="mt-1 w-full p-3 rounded-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#4CC26E]" placeholder="How will you solve it?" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#2C2C34]">Attachments</label>
              <div className="mt-1 flex items-center justify-center border-2 border-dashed border-black/10 rounded-lg p-6 text-[#2C2C34]/70">
                <Upload className="mr-2" /> Drag & drop or click to upload
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-white" style={{ background: categoryColors[category] }}>{category}</div>
            <button type="submit" className="px-6 py-3 rounded-lg font-semibold text-[#0b2e7a] bg-gradient-to-r from-[#4CC26E] to-[#57A7FF] hover:brightness-110 shadow-lg transition-transform hover:scale-[1.02]">
              Submit Idea
            </button>
          </div>

          {submitted && (
            <div className="mt-4 flex items-center gap-2 text-[#4CC26E]">
              <CheckCircle2 />
              <span>Submitted! We\'ll display visual feedback here.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
