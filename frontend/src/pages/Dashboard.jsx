import { useEffect } from 'react'
import HeroProfile from '../components/Dashboard/HeroProfile'
import TopArtists from '../components/Dashboard/TopArtists'
import ListeningActivity from '../components/Dashboard/ListeningActivity'

export default function Dashboard() {
  useEffect(() => {
    // Check auth status on mount
    fetch('/dashboard')
      .then(res => {
        if(!res.ok) window.location = '/login'
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <HeroProfile />
        <TopArtists />
        <ListeningActivity />
      </div>
    </div>
  )
}