import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import FeaturedProjects from '../components/FeaturedProjects'
import InvestorsSection from '../components/InvestorsSection'
import CommunitySection from '../components/CommunitySection'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <div className="bg-white text-[#2C2C34]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProjects />
      <InvestorsSection />
      <CommunitySection />
      <CTABanner />
      <footer className="bg-[#1A3C8C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h4 className="font-bold text-lg">Fundless Connect</h4>
            <p className="text-white/80 mt-2">Where Ideas Meet Investors</p>
            <p className="text-white/70 mt-4 text-sm">We are a community platform connecting creators and investors. We do not handle payments.</p>
          </div>
          {[
            { title: 'About', items: ['Our Story', 'Team', 'Careers'] },
            { title: 'Support', items: ['Contact', 'FAQ', 'Investor Verification'] },
            { title: 'Legal', items: ['Terms', 'Privacy'] },
          ].map((sec) => (
            <div key={sec.title}>
              <h5 className="font-semibold mb-3">{sec.title}</h5>
              <ul className="space-y-2 text-white/80 text-sm">
                {sec.items.map((i) => (
                  <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-white/70 text-sm mt-10">© {new Date().getFullYear()} Fundless Connect</div>
      </footer>
    </div>
  )
}
