import { Award } from 'lucide-react';
export default function DonoTerminal() {
return (
<aside className="w-80 border-l border-white/5 bg-[#0D1117] flex flex-col">
<div className="p-8 flex flex-col items-center border-b border-white/5">
<div className="w-24 h-24 bg-blue-600/10 rounded-full flex items-center justify-center mb-4">
{/* Visual core for DONO will go here */}
<div className="w-8 h-8 bg-blue-500 rounded-sm rotate-45 shadow-[0_0_20px_#3b82f6]"></div>
</div>
<h4 className="text-sm font-black tracking-widest text-white uppercase italic">DONO Partner</h4>
</div>
<div className="flex-1 p-6">
<div className="flex items-center gap-2 mb-6">
<Award size={14} className="text-blue-500" />
<p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Meritocracy Leaderboard</p>
</div>
{/* DESIGN CHALLENGE: Gospel, draw/code your leaderboard items here */}
<div className="space-y-4">
<p className="text-xs italic text-zinc-600">Awaiting data...</p>
</div>
</div>
</aside>
);
}
