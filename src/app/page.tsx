"use client";
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DonoTerminal from '../components/DonoTerminal';
import { Send, Video, MessageSquare } from 'lucide-react';
export default function KlobeDashboard() {
const [activeCell, setActiveCell] = useState("General");
return (
<div className="flex h-screen bg-[#0A0C10] text-slate-300 font-sans overflow-hidden">
{/* Sidebar - Navigation */}
<Sidebar activeCell={activeCell} setActiveCell={setActiveCell} />
{/* Main Chat Area */}
<main className="flex-1 flex flex-col relative bg-[#0A0C10]">
<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0D1117]/50 backdrop-blur-xl">
<h3 className="font-bold text-white uppercase tracking-tighter italic">
<span className="text-blue-500 mr-2">#</span>{activeCell}
</h3>
<div className="flex gap-4">
<button className="p-2 text-zinc-500 hover:text-white transition hover:bg-white/5 rounded-lg"><Video size={20}/></button>
<button className="p-2 text-zinc-500 hover:text-white transition hover:bg-white/5 rounded-lg"><MessageSquare size={20}/></button>
</div>
</header>
{/* Message Feed */}
<div className="flex-1 p-8 overflow-y-auto space-y-6">
<div className="max-w-3xl mx-auto opacity-10 text-center mt-20">
<h4 className="text-4xl font-black italic tracking-tighter mb-2">KLOBE</h4>
<p className="text-xs uppercase tracking-[0.5em]">Secure Terminal Initialized</p>
</div>
</div>
{/* Message Input */}
<div className="p-6 border-t border-white/5 px-10 bg-[#0A0C10]">
<div className="flex gap-4 bg-[#161B22] p-4 rounded-2xl border border-white/5 shadow-2xl">
<input
type="text"
placeholder={`Message ${activeCell}...`}
className="flex-1 bg-transparent outline-none text-white font-medium placeholder:text-zinc-600"
/>
<button className="text-blue-500 hover:scale-110 transition-transform bg-blue-500/10 p-2 rounded-xl"><Send size={18}/></button>
</div>
</div>
</main>
{/* Right Sidebar - AI & Meritocracy */}
<DonoTerminal />
</div>
);
}
---

STEP 2: Create the Sidebar Component
Go back to the main page of your repo.
Click Add file -> Create new file.
Name it: `src/components/Sidebar.tsx`
Paste this code:
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
