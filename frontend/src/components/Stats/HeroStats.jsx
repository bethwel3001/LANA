import { motion } from 'framer-motion'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'

export default function HeroStats({ user }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 rounded-2xl mb-8"
    >
      <div className="flex items-center gap-6">
      <MusicalNoteIcon className="w-16 h-16 text-spotify" />

        <div>
          <h1 className="text-4xl font-bold">{user.display_name}</h1>
          <p className="text-gray-400 mt-2">Your 2024 Music Journey</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <StatCard label="Top Artist" value={user.top_artist} />
        <StatCard label="Hours Listened" value={user.total_hours} />
        <StatCard label="Top Genre" value={user.top_genre} />
      </div>
    </motion.div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white/5 p-4 rounded-xl">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}