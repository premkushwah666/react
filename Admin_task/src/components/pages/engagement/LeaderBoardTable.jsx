import React from 'react';
import { Search, ChevronDown, Download, Eye, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LeaderboardTable = ({ leaderboardActive, setLeaderboardActive }) => {
  const rankings = Array(8).fill({
    rank: "01",
    name: "Rahul Sharma",
    course: "Full Stack Developer",
    score: "91",
    lastActive: "Today",
    status: true,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
  });

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      {/* Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
          <h3 className="text-white font-medium mb-6">Leaderboard Status</h3>
          <div 
            onClick={() => setLeaderboardActive(!leaderboardActive)}
            className={`w-12 h-6 rounded-full relative cursor-pointer transition-all ${leaderboardActive ? 'bg-orange-600' : 'bg-gray-700'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${leaderboardActive ? 'right-1' : 'left-1'}`} />
          </div>
        </div>
        {/* Add Time Frame and Visibility cards here (same as before) */}
      </div>

      {/* Table Section */}
      <div className="flex flex-col md:row justify-between items-center gap-4 mb-6">
        <h2 className="text-lg font-bold text-white">Student Weekly Rankings</h2>
        {/* Search & Export Buttons */}
      </div>

      <div className="bg-[#0D0D0D] rounded-xl border border-white/5 overflow-hidden">
        <table className="w-full text-left min-w-[900px]">
          {/* ... Table Head & Body logic ... */}
        </table>
      </div>
    </motion.div>
  );
};

export default LeaderboardTable;