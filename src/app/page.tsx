"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DonoTerminal from '@/components/DonoTerminal';
import { Send, Video, MessageSquare } from 'lucide-react';
export default function KlobeDashboard() {
const [activeCell, setActiveCell] = useState("General");
return (
<div className="flex h-screen bg-[#0A0C10] text-slate-300 font-sans overflow-hidden">
{/* Navigation - Led by Gospel */}
<Sidebar activeCell={activeCell} setActiveCell={setActiveCell} />
{/* Operations - Main Chat Area */}
<main className="flex-1 flex flex-col relative">
<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#0D1117]/50 backdrop-blur-xl">
<h3 className="font-bold text-white uppercase tracking-tighter">
<span className="text-blue-500 mr-2">#</span>{activeCell}
</h3>
<div className="flex gap-4">
<button className="text-zinc-500 hover:text-white transition"><Video size={20}/></button>
<button className="text-zinc-500 hover:text-white transition"><MessageSquare size={20}/></button>
</div>
</header>
{/* This is where the CTO will inject the real-time messages */}
<div className="flex-1 p-8 overflow-y-auto">
<div className="max-w-3xl mx-auto space-y-6">
<p className="text-center text-[10px] text-zinc-600 uppercase font-black tracking-widest">Beginning of encrypted session</p>
</div>
</div>
{/* Input area */}
<div className="p-6 border-t border-white/5 px-10 bg-[#0A0C10]">
<div className="flex gap-4 bg-[#161B22] p-4 rounded-2xl border border-white/5">
<input
type="text"
placeholder={`Message ${activeCell}...`}
className="flex-1 bg-transparent outline-none text-white font-medium"
/>
<button className="text-blue-500 hover:scale-110 transition-transform"><Send size={20}/></button>
</div>
</div>
</main>
{/* DONO Terminal - Led by Gospel */}
<DonoTerminal />
</div>
);
}
