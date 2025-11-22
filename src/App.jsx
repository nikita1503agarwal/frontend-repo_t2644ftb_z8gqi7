import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Submit from './pages/Submit'
import Explore from './pages/Explore'
import Investors from './pages/Investors'
import Community from './pages/Community'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  )
}

export default App
