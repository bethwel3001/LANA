import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-white p-6">
      {/* Animated ring */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }}
        className="w-20 h-20 rounded-full border-4 border-t-green-500 border-l-purple-500 border-b-yellow-400 border-r-transparent flex items-center justify-center"
      >
        {/* Pulsing music icon inside */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <Music className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Text message */}
      <motion.p
        className="mt-6 text-sm text-white/80 text-center"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Tuning into your vibe...
      </motion.p>
    </div>
  );
}
