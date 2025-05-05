import { useEffect, useState } from 'react'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'

export default function HeroProfile() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch('/dashboard')
      .then(res => res.json())
      .then(data => {
        if(data.status === 'success') {
          fetch('/api/me')
            .then(res => res.json())
            .then(user => setProfile(user))
        }
      })
  }, [])

  if(!profile) return (
    <div className="animate-pulse bg-gray-800 rounded-xl p-8 h-48 mb-8"></div>
  )

  return (
    <div className="glass-container bg-gray-800 rounded-xl p-8 mb-8">
      <div className="flex items-center gap-6">
        <MusicalNoteIcon className="w-24 h-24 text-spotify p-4 bg-gray-700 rounded-full" />
        <div>
          <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
          <div className="flex gap-4 text-gray-400">
            <span>🎵 {profile.followers} followers</span>
            <span>🌟 {profile.top_artists.length} top artists</span>
          </div>
        </div>
      </div>
    </div>
  )
}