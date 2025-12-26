import React, { useState } from 'react';
import LeaderboardTable from './LeaderBoardTable';

const Engagement = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('leaderboard');
  const [leaderboardActive, setLeaderboardActive] = useState(true);

  return (
    <div className="w-full text-gray-300 font-sans ">
      
      {/* 1. Breadcrumbs (Hamesha Top par rahenge) */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <span className="text-gray-500">Engagement</span>
        <span className="text-white text-lg">»</span>
        <span className="text-white font-medium">
          {activeTab === 'leaderboard' ? 'Leaderboard Settings' : 'Discussion Forum'}
        </span>
      </div>

      {/* 2. Tab Navigation Buttons */}
      <div className="flex gap-2 mb-8">
        <button 
          onClick={() => setActiveTab('leaderboard')}
          className={`px-4 py-1.5 rounded-lg text-sm transition-all border ${
            activeTab === 'leaderboard' 
            ? "bg-[#2A2A2A] text-white border-white/5" 
            : "text-gray-500 border-transparent hover:bg-white/5"
          }`}
        >
          Leaderboard Settings
        </button>
        
        <button 
          onClick={() => setActiveTab('discussion')}
          className={`px-4 py-1.5 rounded-lg text-sm transition-all border ${
            activeTab === 'discussion' 
            ? "bg-[#2A2A2A] text-white border-white/5" 
            : "text-gray-500 border-transparent hover:bg-white/5"
          }`}
        >
          Discussion Forum Moderation
        </button>
      </div>

      <h1 className="text-xl font-bold text-white mb-6">
        {activeTab === 'leaderboard' ? 'Leaderboard Settings' : 'Study Weekly Rankings'}
      </h1>

      {/* 3. Conditional Rendering (Child Components) */}
      {activeTab === 'leaderboard' ? (
       <LeaderboardTable   leaderboardActive={leaderboardActive} 
          setLeaderboardActive={setLeaderboardActive} ></LeaderboardTable>
      ) : (
        <div className="p-10 text-center border border-dashed border-gray-800 rounded-2xl">
          <p className="text-gray-500">Discussion Forum Content Coming Soon...</p>
        </div>
      )}

    </div>
  );
};

export default Engagement;