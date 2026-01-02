import React from 'react';
import { Users, Code, Shield, Award, BookOpen } from 'lucide-react';
export default function Sidebar({ activeCell, setActiveCell }: any) {
return (
<aside className="w-64 border-r border-white/5 bg-[#0D1117] flex flex-col h-full">
<div className="p-8">
<h2 className="text-2xl font-black italic tracking-tighter text-white">KLOBE</h2>
</div>
<nav className="flex-1 px-4 space-y-8">
<div>
<p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4 ml-2 text-blue-500">The Nexus</p>
<button
onClick={() => setActiveCell("General")}
className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeCell === "General" ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'hover:bg-white/5 text-zinc-400'}`}
>
<Users size={18}/> <span className="text-sm font-bold">General</span>
</button>
</div>
<div>
<p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4 ml-2">Project Cells</p>
<div className="space-y-1">
<NavItem label="KOLD" active={activeCell === "KOLD"} onClick={() => setActiveCell("KOLD")} icon={<Code size={18}/>} />
<NavItem label="BEAM" active={activeCell === "BEAM"} onClick={() => setActiveCell("BEAM")} icon={<Shield size={18}/>} />
<NavItem label="SKYBLOCK" active={activeCell === "SKYBLOCK"} onClick={() => setActiveCell("SKYBLOCK")} icon={<Award size={18}/>} />
</div>
</div>
<div className="pt-4 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 transition-all">
<BookOpen size={18}/> <span className="text-sm font-bold tracking-tight">Academy</span>
</button>
</div>
</nav>
{/* User Status */}
<div className="p-6 bg-black/20 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">G</div>
<div className="text-left overflow-hidden">
<p className="text-xs font-bold text-white truncate uppercase tracking-tighter">Gospel#0001</p>
<p className="text-[9px] text-green-500 font-bold uppercase tracking-widest">● Active</p>
</div>
</div>
</div>
</aside>
);
}
function NavItem({ label, active, onClick, icon }: any) {
return (
<button
onClick={onClick}
className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-zinc-800 text-white border border-white/10 shadow-xl' : 'hover:bg-white/5 text-zinc-500'}`}
>
{icon} <span className="text-sm font-bold tracking-tight uppercase">{label}</span>
</button>
);
}
