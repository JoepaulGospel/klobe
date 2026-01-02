import React from 'react';
import { Users, Code, Shield, Award, BookOpen } from 'lucide-react';
export default function Sidebar({ activeCell, setActiveCell }: any) {
return (
<aside className="w-64 border-r border-white/5 bg-[#0D1117] flex flex-col h-full">
<div className="p-6">
<h2 className="text-xl font-black italic tracking-tighter text-white">KLOBE</h2>
</div>
<div className="flex-1 px-4 space-y-8 mt-4">
<div>
<p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4 ml-2">The Nexus</p>
<button
onClick={() => setActiveCell("General")}
className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${activeCell === "General" ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-white/5 text-zinc-400'}`}
>
<Users size={18}/> <span className="text-sm font-bold">General</span>
</button>
</div>
<div>
<p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4 ml-2">Project Cells</p>
<div className="space-y-1">
<ProjectItem label="KOLD" icon={<Code size={18}/>} active={activeCell === "KOLD"} onClick={() => setActiveCell("KOLD")} />
<ProjectItem label="BEAM" icon={<Shield size={18}/>} active={activeCell === "BEAM"} onClick={() => setActiveCell("BEAM")} />
<ProjectItem label="SKYBLOCK" icon={<Award size={18}/>} active={activeCell === "SKYBLOCK"} onClick={() => setActiveCell("SKYBLOCK")} />
</div>
</div>
<div className="pt-4 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-zinc-400 transition-all">
<BookOpen size={18}/> <span className="text-sm font-bold">Academy</span>
</button>
</div>
</div>
<div className="p-6 bg-black/20 flex items-center gap-3 border-t border-white/5">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white uppercase italic">G</div>
<div className="overflow-hidden text-left">
<p className="text-sm font-bold text-white truncate">Gospel#0001</p>
<p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">● Online</p>
</div>
</div>
</aside>
);
}
function ProjectItem({ label, icon, active, onClick }: any) {
return (
<button
onClick={onClick}
className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${active ? 'bg-zinc-800 text-white border border-white/10' : 'hover:bg-white/5 text-zinc-500'}`}
>
{icon} <span className="text-sm font-bold">{label}</span>
</button>
);
}
