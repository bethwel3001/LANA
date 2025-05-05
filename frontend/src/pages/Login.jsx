import { motion } from 'framer-motion';
import { ArrowRightIcon, MusicalNoteIcon } from '@heroicons/react/24/solid';
import { SpotifyLogo } from '../assets/Icons';

export default function Login() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#191414] via-[#121212] to-black flex items-center justify-center px-4 py-6"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="w-full max-w-sm bg-white/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden"
      >
        <div className="p-5 space-y-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <SpotifyLogo className="w-20 h-20 text-spotify animate-pulse" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-spotify to-green-300 bg-clip-text text-transparent">
              Your Music Journey
            </h1>
            <p className="text-sm text-gray-400">
              Discover your listening personality
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="http://localhost:5000/login"
            className="flex items-center justify-center w-full gap-2 px-4 py-2 sm:py-3 bg-spotify hover:bg-[#1db954] hover:shadow-lg hover:shadow-green-400/20 
            text-white text-sm sm:text-base font-medium rounded-full transition-all duration-300 group"
          >
            <MusicalNoteIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="leading-tight sm:leading-none text-center">Continue with Spotify</span>
            <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
         </motion.a>

        </div>

        <div className="bg-black/30 px-4 py-3 text-center">
          <p className="text-xs text-gray-400">
            We only request access to your listening history
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
