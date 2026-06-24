export function Categories() {
  const categories = [
    { title: 'Living Workspace', count: '14 Objects', desc: 'Refined systems tailored to professional efficiency.' },
    { title: 'Illumination Accent', count: '09 Objects', desc: 'Sculptural elements focused on low-spectrum mood setting.' },
    { title: 'Raw Earth Ceramics', count: '22 Objects', desc: 'Hand-thrown variants displaying deliberate textural flaw.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
      <div className="text-center space-y-3">
        <p className="text-xs uppercase tracking-widest text-[#8C857B]">Taxonomy</p>
        <h2 className="text-4xl font-[family:var(--font-serif)] tracking-tight text-[#1C1A17]">Curated Segments</h2>
      </div>

      <div className="space-y-6">
        {categories.map((c, i) => (
          <div 
            key={i} 
            className="p-8 border border-[#EAE6DF] bg-white hover:border-[#1C1A17] transition-all duration-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group cursor-pointer"
          >
            <div className="space-y-2 max-w-md">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C857B] block">Batch 0{i+1}</span>
              <h3 className="text-2xl font-[family:var(--font-serif)] text-[#1C1A17] group-hover:translate-x-1 transition-transform duration-300">
                {c.title}
              </h3>
              <p className="text-xs text-[#5A544B] leading-relaxed font-light">{c.desc}</p>
            </div>
            <div className="text-xs uppercase tracking-widest text-[#8C857B] bg-[#FAF9F6] px-4 py-2 border border-[#EAE6DF] group-hover:bg-[#1C1A17] group-hover:text-white group-hover:border-[#1C1A17] transition-all duration-300">
              {c.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}