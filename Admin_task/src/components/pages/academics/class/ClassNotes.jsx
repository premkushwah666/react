import React from 'react';
import { Search, ChevronDown, Plus, Pencil, Trash2,Edit2 } from 'lucide-react';

const ClassNotes = () => {
  const notesData = [
    { title: "Introduction to HTML", fileType: "PNG", subject: "HTML & CSS", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-green-500 bg-green-500/10 border-green-500/20" },
    { title: "HTML Basics Notes", fileType: "PDF", subject: "HTML & CSS", downloads: "120 / 85", status: false, date: "12 Mar 2025", typeColor: "text-red-500 bg-red-500/10 border-red-500/20" },
    { title: "HTML Basics Notes", fileType: "PNG", subject: "HTML & CSS", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-green-500 bg-green-500/10 border-green-500/20" },
    { title: "HTML Basics Notes", fileType: "JPG", subject: "HTML & CSS", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { title: "HTML Basics Notes", fileType: "PDF", subject: "HTML & CSS", downloads: "120 / 85", status: true, date: "12 Mar 2025", typeColor: "text-red-500 bg-red-500/10 border-red-500/20" },
  ];

  return (
    <div className="w-full overflow-hidden text-white animate-in fade-in ">

      {/* --- Header Section --- */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">
          Class Notes Management
        </h2>

        <div className="flex flex-row items-center gap-2 md:gap-3 flex-wrap sm:flex-nowrap w-full xl:w-auto">
          {/* Search Box */}
          <div className="relative group flex-grow sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#0D0D0D] border border-gray-800 text-gray-300 rounded-full py-2 pl-10 pr-4 outline-none focus:border-orange-500/30 w-full text-sm transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            {["Course", "Subject"].map((filter) => (
              <button key={filter} className="flex items-center gap-2 bg-[#0D0D0D] border border-gray-800 px-4 py-2 rounded-full text-xs font-medium text-gray-400 hover:border-gray-600 transition-all">
                {filter} <ChevronDown size={14} />
              </button>
            ))}
          </div>

          {/* Upload Button */}
          <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
            <Plus size={18} />
            <span>Upload Notes</span>
          </button>
        </div>
      </div>

      {/* --- Table Container --- */}
      <div className="w-full rounded-2xl border border-gray-800/50 bg-[#111]/30 shadow-2xl overflow-hidden">
        {/* Is div ki wajah se horizontal scroll handle hoga agar content bada hua */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#1f1a18] text-gray-300 text-[13px] font-medium border-b border-gray-800">
                <th className="px-6 py-5 whitespace-nowrap">Title</th>
                <th className="px-6 py-5 whitespace-nowrap">File Type</th>
                <th className="px-6 py-5 whitespace-nowrap">Subject</th>
                <th className="px-6 py-5 whitespace-nowrap">Views / Downloads</th>
                <th className="px-6 py-5 whitespace-nowrap">Status</th>
                <th className="px-6 py-5 whitespace-nowrap">Uploaded On</th>
                <th className="px-6 py-5 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/40">
              {notesData.map((note, index) => (
                <tr key={index} className="hover:bg-white/[0.03] transition-colors group text-sm">
                  <td className="px-6 py-4 text-gray-200 font-medium whitespace-nowrap">
                    {note.title}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border whitespace-nowrap ${note.typeColor}`}>
                      {note.fileType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 whitespace-nowrap">{note.subject}</td>
                  <td className="px-6 py-4 text-gray-400 text-xs whitespace-nowrap">{note.downloads}</td>

                  {/* Status Toggle Switch */}
                  <td className="px-6 py-4">
                    <div className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-all flex items-center ${note.status ? 'bg-[#f97316]' : 'bg-[#2a2a2a]'}`}>
                      <div className={`w-3.5 h-3.5 bg-white rounded-full transition-transform duration-300 shadow-sm ${note.status ? 'translate-x-4.5' : 'translate-x-0'}`} />
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-500 font-light whitespace-nowrap">{note.date}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all hover:bg-orange-500/10">
                        <Edit2 size={14} />
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

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0d0d0d; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
        .translate-x-4.5 { transform: translateX(1.125rem); }
      `}</style>
    </div>
  );
};

export default ClassNotes;