import React from 'react';
import { Search, Plus, ChevronDown, Eye, Edit2, Trash2 } from 'lucide-react';

const StudyMaterial = () => {
  const materials = Array(6).fill({
    subject: "HTML & CSS",
    title: "HTML Basics Notes",
    status: true,
    uploadedOn: "12 Mar 2025"
  });

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Study Material</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#111] border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm placeholder:text-gray-600"
            />
          </div>

          <button className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:border-gray-600 transition-all">
            Course <ChevronDown size={14} className="text-gray-500" />
          </button>

          <button className="flex items-center gap-2 bg-[#111] border border-gray-800 px-4 py-1.5 rounded-full text-sm font-medium text-gray-300 hover:border-gray-600 transition-all">
            Subject <ChevronDown size={14} className="text-gray-500" />
          </button>

          <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all truncate">
            <Plus size={18} />
            Add New Study Materials
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-800/50 bg-[#111]/30">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Uploaded On</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50">
            {materials.map((item, index) => (
              <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4 text-sm text-gray-300 font-medium">{item.subject}</td>
                <td className="px-6 py-4 text-sm text-gray-300">{item.title}</td>
                <td className="px-6 py-4">
                  <div className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-all flex items-center ${index % 2 === 0 ? 'bg-orange-500' : 'bg-gray-700'}`}>
                    <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${index % 2 === 0 ? 'translate-x-5' : 'translate-x-0'}`} />
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{item.uploadedOn}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudyMaterial;