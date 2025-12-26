import React from 'react';
import { Search, Plus, ChevronDown, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Subject = () => {
  const subjectData = [
    { title: "HTML & CSS", count: "12", date: "10 Jan 2025" },
    { title: "JavaScript Basics", count: "12", date: "10 Jan 2025" },
    { title: "Statistics", count: "15", date: "10 Jan 2025" },
    { title: "HTML & CSS", count: "12", date: "10 Jan 2025" },
    { title: "Statistics", count: "15", date: "10 Jan 2025" },
    { title: "HTML & CSS", count: "12", date: "10 Jan 2025" },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Subjects</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#121212] border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm"
            />
          </div>

          <button className="flex items-center gap-2 bg-[#121212] border border-gray-800 px-4 py-1.5 rounded-lg text-sm font-medium text-gray-300">
            Active <ChevronDown size={14} className="text-gray-500" />
          </button>

          <Link to="/add_subject">
            <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
              <Plus size={18} />
              Add Subjects
            </button>
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjectData.map((sub, index) => (
          <div key={index} className="bg-[#111] border border-gray-800/50 rounded-2xl p-5 relative group hover:border-gray-700 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl border border-gray-800 flex items-center justify-center">
                   <div className="flex flex-col items-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-5 h-5 opacity-80" alt="icon" />
                    <span className="text-[8px] text-gray-600 font-bold uppercase mt-0.5">Java</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-100">{sub.title}</h3>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-all"><Edit2 size={14} /></button>
                <button className="p-2 rounded-lg bg-red-500/10 text-red-500/60 hover:bg-red-500/20 transition-all"><Trash2 size={14} /></button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-10">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold mb-1 tracking-wider">Linked Content</p>
                  <p className="text-sm font-bold text-gray-200">{sub.count}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold mb-1 tracking-wider">Created On</p>
                  <p className="text-sm font-bold text-gray-200">{sub.date}</p>
                </div>
              </div>

              <div className="w-10 h-5 bg-[#F37021] rounded-full p-1 flex items-center justify-end cursor-pointer">
                <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subject;