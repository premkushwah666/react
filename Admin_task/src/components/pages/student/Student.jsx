// import React from 'react';
import { Search, Plus, Eye, Edit2, Trash2 } from 'lucide-react';
import { PNG } from "../../../utils/Images";
import { Link } from 'react-router-dom';

const Student = () => {
    const students = [
        { id: "01", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", Registered: "12 Mar 2025", status: true },
        { id: "02", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", Registered: "12 Mar 2025", status: false },
        { id: "03", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", Registered: "12 Mar 2025", status: true },
        { id: "04", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", Registered: "12 Mar 2025", status: true },
        { id: "05", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", Registered: "12 Mar 2025", status: true },
        { id: "06", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", Registered: "12 Mar 2025", status: false },
    ];

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="dark:text-white text-500 font-medium tracking-wider">Students</div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-xl md:text-2xl font-bold dark:text-white tracking-tight">
                    All Students List
                </h2>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative group flex-1 md:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="dark:bg-[#121212] text-end border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm"
                        />
                    </div>

                    <Link to={'/addStudent'}>
                        <button className="flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-bold transition-all text-sm shadow-lg shadow-orange-500/20 active:scale-95">
                            <Plus size={18} />
                            <span className="whitespace-nowrap">Add Students</span>
                        </button></Link>
                </div>
            </div>

            <div className="bg-[#0D0D0D] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">

                <div className="w-full overflow-x-auto no-scrollbar">
                    <table className="w-full text-left border-collapse table-auto">
                        <thead>
                            <tr className="bg-[#1f1a18] text-gray-300 text-[12px] whitespace-nowrap font-medium border-b border-gray-800">
                                <th className="px-4 py-5 ">No.</th>
                                <th className="px-4 py-5 ">Name</th>
                                <th className="px-4 py-5  ">Phone</th>
                                <th className="px-4 py-5  ">Email</th>
                                <th className="px-4 py-5 ">Quilification</th>
                                <th className="px-4 py-5  ">Course</th>
                                <th className="px-4 py-5 ">Status</th>
                                <th className="px-4 py-5  ">Registered On</th>
                                <th className="px-4 py-5  text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-800/40">
                            {students.map((student, index) => (
                                <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-4 py-4 text-xs text-gray-500">{student.id}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={PNG.student}
                                                alt="user"
                                                className="w-8 h-8 rounded-full border border-orange-500/20 bg-[#222] flex-shrink-0"
                                            />
                                            <span className="text-xs font-semibold text-gray-200 truncate max-w-[80px] md:max-w-none">
                                                {student.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-xs text-gray-400">{student.phone}</td>
                                    <td className="px-4 py-4 text-xs text-gray-400 lowercase truncate max-w-[120px]">{student.email}</td>
                                    <td className="px-4 py-4 text-xs text-gray-400 lowercase truncate max-w-[120px]">{student.qualification}</td>
                                    <td className="px-4 py-4 text-xs text-gray-400">
                                        <span className="block truncate max-w-[100px] md:max-w-none">{student.course}</span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className={`w-9 h-5 rounded-full p-1 cursor-pointer transition-all flex items-center ${student.status ? 'bg-[#f97316]' : 'bg-[#2a2a2a]'}`}>
                                            <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${student.status ? 'translate-x-4' : 'translate-x-0'}`} />
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-xs text-gray-400 lowercase truncate max-w-[120px]">{student.Registered}</td>

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

export default Student;