import { motion } from 'framer-motion';
import { ArrowRightIcon, MusicalNoteIcon } from '@heroicons/react/24/solid';
import { SpotifyLogo } from '../assets/Icons'; // Custom SVG component

export default function Login() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#191414] via-[#121212] to-[#000000] flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="glass-container w-full max-w-md backdrop-blur-lg bg-white/5 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
      >
        <div className="p-8 space-y-6">
          <div className="flex flex-col items-center gap-4">
            <SpotifyLogo className="w-24 h-24 text-spotify animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-spotify to-green-300 bg-clip-text text-transparent text-center">
              Your Music Journey
            </h1>
            <p className="text-gray-400 text-center">
              Discover your listening personality
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="http://localhost:5000/login"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-spotify hover:bg-[#1ed760] rounded-full text-white font-semibold transition-all duration-300 group"
          >
            <MusicalNoteIcon className="w-6 h-6 transition-transform group-hover:rotate-45" />
            <span>Continue with Spotify</span>
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        <div className="bg-black/20 p-4 text-center">
          <p className="text-sm text-gray-400">
            We only request access to your listening history
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}