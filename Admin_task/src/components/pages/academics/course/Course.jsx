import React from 'react';
import { Search, Plus, ChevronDown, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Course = ({ activeTab = "Courses" }) => {
  const courseData = Array(6).fill({
    title: "Full Stack Development",
    duration: "6 Months",
    subjects: "8",
    createdOn: "10 Jan 2025",
    status: true
  });

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

        <h2 className="text-2xl font-bold tracking-tight dark:text-white">{activeTab}</h2>

        <div className="flex flex-wrap items-center gap-3 ">

         <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="dark:bg-[#121212] text-end border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm"
            />
          </div>

          <button className="flex items-center gap-2 dark:bg-[#111] border border-gray-800 px-4 py-2 rounded-full text-sm font-medium dark:text-gray-300 hover:border-gray-600 transition-all">
            Active <ChevronDown size={16} className="text-gray-500" />
          </button>

          <Link to="/add_course"> 
            <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
              <Plus size={20} />
              Add {activeTab === "Courses" ? "Course" : activeTab.slice(0, -1)}
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseData.map((course, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl border border-gray-800/60 bg-gradient-to-br from-[#2a1a15] via-[#111] to-[#0d0d0d] p-6 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/20"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                <path d="M10 10L90 90M90 10L10 90" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl border border-gray-700 flex items-center justify-center mb-5 shadow-inner">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Java</span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-6 h-6" alt="Java" />
              </div>
            </div>

            <h3 className="text-xl font-medium text-white mb-6 group-hover:text-orange-400 transition-colors">
              {course.title}
            </h3>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <p className="text-[10px] text-gray-500 font-bold mb-1">Duration</p>
                <p className="text-sm font-semibold text-gray-200">{course.duration}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold  mb-1">Subjects</p>
                <p className="text-sm font-semibold text-gray-200">{course.subjects}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold  mb-1">Created On</p>
                <p className="text-sm font-semibold text-gray-200 truncate">{course.createdOn}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
              <div className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-all flex items-center ${course.status ? 'bg-orange-500' : 'bg-gray-800'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-md ${course.status ? 'translate-x-5' : 'translate-x-0'}`} />
              </div>

              <div className="flex items-center gap-3">
                <button className="p-2 rounded-xl bg-white/5 border border-gray-800 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;

