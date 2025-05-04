import { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import HeroStats from '../components/Stats/HeroStats'
import TopArtists from '../components/Charts/RadarChart'
import ListeningTimeline from '../components/Charts/Timeline'
import { Navigate } from 'react-router-dom'

export default function Dashboard() {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/" />

  return (
    <div className="min-h-screen bg-spotify-dark p-8 space-y-12">
      <HeroStats user={user} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TopArtists data={user.top_artists} />
        <ListeningTimeline data={user.listening_history} />
      </div>
    </div>
  )
}