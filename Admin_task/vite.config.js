import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
















// import { Search, Plus, Eye } from 'lucide-react';

// const Students = () => {
//   const students = [
//     { id: "01", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", status: true, date: "12 Mar 2025" },
//     { id: "02", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", status: false, date: "12 Mar 2025" },
//     { id: "03", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", status: true, date: "12 Mar 2025" },
//     { id: "04", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", status: true, date: "12 Mar 2025" },
//     { id: "05", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", status: true, date: "12 Mar 2025" },
//     { id: "06", name: "Rahul Sharma", phone: "9145422144", email: "abhay.Dollop@gmail.com", qualification: "B-Tech", course: "Full Stack Developer", status: false, date: "12 Mar 2025" },
//   ];

//   return (
//     <div className="w-full flex flex-col gap-6">
//       <div className="dark:text-white text-sm font-medium tracking-wider">Students</div>

//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <h2 className="text-xl md:text-2xl font-bold dark:text-white tracking-tight">
//           All Students List
//         </h2>

//         <div className="flex flex-wrap items-center gap-3">
//           <div className="relative group flex-1 md:flex-none">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-gray-500" size={16} />
//             <input
//               type="text"
//               placeholder="Search"
//               className="dark:bg-[#121212] text-end border border-gray-800 text-gray-300 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-gray-600 w-full sm:w-48 text-sm"
//             />
//           </div>

//           <button className="flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-bold transition-all text-sm shadow-lg shadow-orange-500/20 active:scale-95">
//             <Plus size={18} />
//             <span className="whitespace-nowrap">Add Students</span>
//           </button>
//         </div>
//       </div>

//       <div className="bg-[#0D0D0D] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">

//         <div className="w-full overflow-x-auto">
//           <table className="w-full text-left border-collapse table-auto">
//             <thead className="bg-[#1f1614] border-b border-gray-800">
//               <tr>
//                 <th className="px-4 py-5 text-[10px] font-bold text-gray-400">No.</th>
//                 <th className="px-4 py-5 text-[10px] font-bold text-gray-400">Name</th>
//                 <th className="px-4 py-5 text-[10px] font-bold text-gray-400 ">Phone</th>
//                 <th className="px-4 py-5 text-[10px] font-bold text-gray-400">Email</th>
//                 <th className="px-4 py-5 text-[10px] font-bold text-gray-400 ">Course</th>
//                 <th className="px-4 py-5 text-[10px] font-bold text-gray-400">Status</th>
//                 <th className="px-4 py-5 text-[10px] font-bold text-gray-400 text-center">Action</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-800/40">
//               {students.map((student, index) => (
//                 <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
//                   <td className="px-4 py-4 text-xs text-gray-500">{student.id}</td>
//                   <td className="px-4 py-4">
//                     <div className="flex items-center gap-2">
//                       <img
//                         src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}${index}`}
//                         alt="user"
//                         className="w-8 h-8 rounded-full border border-orange-500/20 bg-[#222] flex-shrink-0"
//                       />
//                       <span className="text-xs font-semibold text-gray-200 truncate max-w-[80px] md:max-w-none">
//                         {student.name}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-4 py-4 text-xs text-gray-400 ">{student.phone}</td>
//                   <td className="px-4 py-4 text-xs text-gray-400 lowercase truncate max-w-[120px] ">{student.email}</td>
//                   <td className="px-4 py-4 text-xs text-gray-400">
//                     <span className="block truncate max-w-[100px] md:max-w-none">{student.course}</span>
//                   </td>
//                   <td className="px-4 py-4">
//                     <div className={`w-9 h-5 rounded-full p-1 cursor-pointer transition-all flex items-center ${student.status ? 'bg-[#f97316]' : 'bg-[#2a2a2a]'}`}>
//                       <div className={`w-3 h-3 bg-white rounded-full transition-transform duration-300 ${student.status ? 'translate-x-4' : 'translate-x-0'}`} />
//                     </div>
//                   </td>
//                   <td className="px-4 py-4 text-center">
//                     <button className="p-2 rounded-lg bg-white/5 text-gray-500 hover:text-orange-500">
//                       <Eye size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Students;