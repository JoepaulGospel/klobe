import React from 'react';
import { Award, Zap } from 'lucide-react';
export default function DonoTerminal() {
return (
<aside className="w-80 border-l border-white/5 bg-[#0D1117] flex flex-col h-full">
{/* DONO Visual Core */}
<div className="p-10 flex flex-col items-center border-b border-white/5 bg-black/20">
<div className="w-24 h-24 relative mb-6">
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
<div className="absolute inset-2 border-2 border-blue-500/30 rounded-full animate-[spin_8s_linear_infinite]"></div>
<div className="absolute inset-4 border border-indigo-500/20 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-5 h-5 bg-white rounded-sm rotate-45 shadow-[0_0_15px_white]"></div>
</div>
</div>
<h4 className="text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase italic">DONO Partner v1.0</h4>
</div>
{/* Meritocracy Leaderboard */}
<div className="flex-1 p-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<Award size={16} className="text-blue-500" />
<p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Meritocracy</p>
</div>
<span className="text-[10px] font-bold text-zinc-700 uppercase">Points</span>
</div>
<div className="space-y-6">
<LeaderboardRow rank={1} name="SeniorDev#4421" points={1420} color="text-yellow-500" />
<LeaderboardRow rank={2} name="Gospel#0001" points={1250} color="text-zinc-400" />
<LeaderboardRow rank={3} name="CPO#8892" points={940} color="text-amber-700" />
</div>
</div>
{/* Firm Stats */}
<div className="p-8 border-t border-white/5">
<div className="bg-blue-600/5 border border-blue-500/10 p-4 rounded-2xl">
<div className="flex items-center gap-2 mb-2">
<Zap size={14} className="text-blue-500" />
<span className="text-[10px] font-bold text-white uppercase tracking-tighter">Upskill Goal</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[65%] shadow-[0_0_10px_#3b82f6]" />
</div>
<p className="text-[9px] text-zinc-500 mt-2 font-bold uppercase tracking-widest">65% of MIT Curriculum Met</p>
</div>
</div>
</aside>
);
}
function LeaderboardRow({ rank, name, points, color }: any) {
return (
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<span className={`text-xs font-black ${color}`}>{rank}</span>
<span className="text-[11px] font-bold text-zinc-400 group-hover:text-white transition-colors">{name}</span>
</div>
<span className="text-[10px] font-mono text-zinc-600 font-bold tracking-tighter">{points}</span>
</div>
);
}
