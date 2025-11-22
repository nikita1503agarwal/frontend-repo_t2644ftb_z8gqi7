import { Lightbulb, Sparkles, Users } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Share Your Idea',
    color: 'from-[#57A7FF] to-[#FF6FA3]',
    text: 'Tell the world what you are building, the problem and the solution.',
  },
  {
    icon: Sparkles,
    title: 'Get Matched',
    color: 'from-[#4CC26E] to-[#F5C542]',
    text: 'Our community and matching highlight the right investors and mentors.',
  },
  {
    icon: Users,
    title: 'Connect & Collaborate',
    color: 'from-[#FF8C42] to-[#57A7FF]',
    text: 'Start conversations, share progress, and grow together.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-[#F4F6F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2C34] text-center">How It Works</h2>
        <p className="text-center text-[#2C2C34]/70 mt-2">Three simple steps to turn ideas into reality.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-xl transition-all">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${s.color} grid place-items-center shadow-lg shadow-black/10 mb-4 group-hover:scale-105 transition-transform`}>
                <s.icon className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2C34]">{s.title}</h3>
              <p className="text-[#2C2C34]/70 mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
