import React from 'react';
import { Play, CheckCircle, Clock, Filter } from 'lucide-react';
export default function Academy() {
return (
<div className="flex-1 p-10 overflow-y-auto bg-[#0A0C10] animate-fade-in">
<header className="mb-12 flex justify-between items-end">
<div>
<h2 className="text-4xl font-black italic tracking-tighter text-white mb-2 uppercase">Kodeblock Academy</h2>
<p className="text-zinc-500 text-sm font-medium tracking-wide">Meet the standard to keep your seat in the firm.</p>
</div>
<button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-all">
<Filter size={14} /> Filter by Role
</button>
</header>
{/* Course Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<CourseCard
title="Harvard CS50W"
provider="Harvard University"
duration="12 Weeks"
status="In Progress"
progress={45}
tag="Full-stack"
/>
<CourseCard
title="Advanced Next.js 15"
provider="Kodeblock Internal"
duration="2 Weeks"
status="Locked"
progress={0}
tag="Frontend"
/>
</div>
<div className="mt-12 p-8 bg-blue-600/5 border border-blue-500/10 rounded-[32px] flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500">
<Clock size={32} />
</div>
<div>
<h4 className="text-xl font-bold text-white uppercase tracking-tighter">Study Time Tracker</h4>
<p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">Focus Mode: Active window tracking enabled</p>
</div>
</div>
<div className="text-right">
<span className="text-4xl font-black text-white italic">14:42</span>
<span className="text-zinc-600 text-xs font-bold block">Hours Logged this Week</span>
</div>
</div>
</div>
);
}
function CourseCard({ title, provider, duration, status, progress, tag }: any) {
return (
<div className="bg-[#0D1117] border border-white/5 rounded-[32px] p-8 group hover:border-blue-500/30 transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-black bg-blue-600 text-white px-2 py-1 rounded-md uppercase tracking-widest">{tag}</span>
{status === "Locked" ? <Clock size={18} className="text-zinc-700" /> : <Play size={18} className="text-blue-500 animate-pulse" />}
</div>
<h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{title}</h3>
<p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">{provider} • {duration}</p>
<div className="space-y-3">
<div className="flex justify-between text-[10px] font-black uppercase text-zinc-600 tracking-tighter">
<span>Progress</span>
<span>{progress}%</span>
</div>
<div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
<div className="h-full bg-blue-600 shadow-[0_0_15px_#3b82f6]" style={{ width: `${progress}%` }} />
</div>
</div>
<button className={`w-full mt-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${status === "Locked" ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-white text-black hover:scale-[1.02]'}`}>
{status === "Locked" ? "Locked by Admin" : "Continue Learning"}
</button>
</div>
);
}
---

STEP 2: Update the Main Dashboard to show the Academy
Now, we must tell the `page.tsx` that when you click "Academy" in the sidebar, the screen should change.

Go to `src/app/page.tsx`.
Edit the file and replace the code with this (I have added the Tab Logic):
"use client";
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DonoTerminal from '../components/DonoTerminal';
import Academy from '../components/Academy'; // NEW IMPORT
import { Send, Video, MessageSquare } from 'lucide-react';
export default function KlobeDashboard() {
const [activeCell, setActiveCell] = useState("General");
const [activeTab, setActiveTab] = useState("Nexus"); // Logic to switch screens
return (
<div className="flex h-screen bg-[#0A0C10] text-slate-300 font-sans overflow-hidden">
{/* Sidebar - Navigation (Led by Gospel) */}
<Sidebar activeCell={activeCell} setActiveCell={setActiveCell} activeTab={activeTab} setActiveTab={setActiveTab} />
{/* Main Operations Area */}
<main className="flex-1 flex flex-col relative bg-[#0A0C10]">
{/* HEADER */}
<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0D1117]/50 backdrop-blur-xl">
<h3 className="font-bold text-white uppercase tracking-tighter italic">
<span className="text-blue-500 mr-2">#</span>{activeTab === "Academy" ? "ACADEMY" : activeCell}
</h3>
<div className="flex gap-4">
<button className="p-2 text-zinc-500 hover:text-white transition hover:bg-white/5 rounded-lg"><Video size={20}/></button>
<button className="p-2 text-zinc-500 hover:text-white transition hover:bg-white/5 rounded-lg"><MessageSquare size={20}/></button>
</div>
</header>
{/* SWITCH BETWEEN CHAT AND ACADEMY */}
{activeTab === "Academy" ? (
<Academy />
) : (
<div className="flex-1 flex flex-col">
<div className="flex-1 p-8 overflow-y-auto space-y-6">
<div className="max-w-3xl mx-auto opacity-10 text-center mt-40">
<h4 className="text-6xl font-black italic tracking-tighter mb-2">KLOBE</h4>
<p className="text-xs uppercase tracking-[0.5em]">Secure Terminal Initialized</p>
</div>
</div>
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
</div>
)}
</main>
{/* Right Sidebar - AI & Meritocracy */}
<DonoTerminal />
</div>
);
}
