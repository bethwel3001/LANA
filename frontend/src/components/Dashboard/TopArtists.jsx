import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react';

export default function TopArtists() {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    fetch('/api/top-artists')
      .then(res => res.json())
      .then(data => setArtists(data.items))
  }, [])

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-container bg-gray-800 rounded-xl p-6 mb-8"
    >
      <h2 className="text-2xl font-bold mb-6">Top Artists</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {artists.map(artist => (
          <div key={artist.id} className="text-center">
            <img 
              src={artist.images[0].url} 
              className="w-full rounded-full mb-2 border-2 border-spotify"
              alt={artist.name}
            />
            <p className="font-medium">{artist.name}</p>
            <p className="text-sm text-gray-400">{artist.genres[0]}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}