function StatCard({title , value , text}){
    return(
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold text-slate-400">{title}</p>
            <p className="mt-3 text-3xl font-bold text-[#15263f]">{value}</p>
            <p className="mt-2 text-sm text-slate-500">{text}</p>
        </article>

    );

};

export default StatCard;