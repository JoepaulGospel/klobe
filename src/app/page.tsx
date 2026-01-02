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
