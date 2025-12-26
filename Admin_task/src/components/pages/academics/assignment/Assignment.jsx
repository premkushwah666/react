import React from 'react';
import { Search, ChevronDown, Plus, Pencil, Trash2, Eye, Edit2 } from 'lucide-react';

const Assignment = ({ title, type }) => {
  const data = [
    { name: "Introduction to HTML", sub: "HTML & CSS", extra: "45", duration: "60 min", date: "12 Mar 2025", status: "Active" },
    { name: "C Variables Assignment", sub: "C Language / Basics", extra: "18 / 25", duration: "60 min", date: "12 Mar 2025", status: "Pending" },
    { name: "HTML Basics Notes", sub: "HTML & CSS", extra: "45", duration: "60 min", date: "12 Mar 2025", status: "Upcoming" },
    { name: "C Variables Assignment", sub: "C Language / Basics", extra: "18 / 25", duration: "60 min", date: "12 Mar 2025", status: "Complete" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active': return 'text-blue-500 bg-blue-500/10';
      case 'Pending':
      case 'Upcoming': return 'text-orange-500 bg-orange-500/10';
      case 'Complete': return 'text-green-500 bg-green-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="w-full text-white rounded-xl min-h-screen font-sans">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

        <h2 className="text-2xl font-bold tracking-tight dark:text-white">Assignment</h2>

        <div className="flex flex-wrap items-center gap-3 ">

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="dark:bg-[#121212] text-end border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm"
            />
          </div>

          {["Course", "Subject", "Active"].map((filter) => (
            <button key={filter} className="flex items-center gap-2 bg-transparent border border-gray-800 px-4 py-1.5 rounded-full text-[12px] text-gray-400 hover:border-gray-600 transition-colors">
              {filter} <ChevronDown size={14} />
            </button>
          ))}

          <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
            <Plus size={18} />
            <span>Create Assignment</span>
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-800/50 bg-[#111]/30 shadow-2xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
                <th className="px-6 py-4 ">{type === 'Test' ? 'Test Name' : 'Title'}</th>
                <th className="px-6 py-4">{type === 'Test' ? 'Subject' : 'Course / Subject'}</th>
                <th className="px-6 py-4">{type === 'Test' ? 'Total Questions' : 'Submitted'}</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5 text-[14px] text-gray-300 whitespace-nowrap">{row.name}</td>
                  <td className="px-6 py-5 text-[13px] text-gray-400 whitespace-nowrap">{row.sub}</td>
                  <td className="px-6 py-5 text-[13px] text-gray-400">{row.extra}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-400 whitespace-nowrap">{row.date}</td>

                  {/* Status Tag */}
                  <td className="px-6 py-5">
                    <span className={`px-4 py-1 rounded-full text-[11px] font-bold tracking-wide ${getStatusStyle(row.status)}`}>
                      {row.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-center whitespace-nowrap flex items-center gap-2 justify-between">
                    <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-orange-500">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all">
                      <Edit2 size={14} />
                    </button>
                    <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0d0d0d; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>
    </div>
  );
};

export default Assignment;