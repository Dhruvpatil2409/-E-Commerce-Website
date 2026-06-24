import { useState } from 'react';

export function AddYourProduct() {
  return (
    <div className="max-w-2xl mx-auto px-6 pb-24 space-y-12">
      <div className="space-y-3">
        <h2 className="text-4xl font-[family:var(--font-serif)] tracking-tight text-[#1C1A17]">Archive Contribution</h2>
        <p className="text-xs text-[#8C857B] uppercase tracking-widest leading-relaxed">
          Propose an additions structure directly into the indexed dynamic storage cluster.
        </p>
      </div>

      <form className="space-y-8 text-sm" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#1C1A17] font-medium">Object Nomenclature</label>
            <input 
              type="text" 
              placeholder="e.g., Alabaster Plinth"
              className="w-full bg-white border border-[#EAE6DF] p-4 text-[#1C1A17] rounded-none focus:outline-none focus:border-[#1C1A17] transition-colors placeholder:text-[#BFB9B0]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-[#1C1A17] font-medium">Estimated Value (USD)</label>
            <input 
              type="text" 
              placeholder="e.g., 450"
              className="w-full bg-white border border-[#EAE6DF] p-4 text-[#1C1A17] rounded-none focus:outline-none focus:border-[#1C1A17] transition-colors placeholder:text-[#BFB9B0]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-[#1C1A17] font-medium">Structural Component Description</label>
          <textarea 
            rows="5"
            placeholder="Outline physical dimensions, grain weight, materiality indexes, and historical provenance tracking parameters..."
            className="w-full bg-white border border-[#EAE6DF] p-4 text-[#1C1A17] rounded-none focus:outline-none focus:border-[#1C1A17] transition-colors placeholder:text-[#BFB9B0] resize-none"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-[#1C1A17] text-white text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#38342F] transition-all duration-300"
        >
          Commit to Database
        </button>
      </form>
    </div>
  );
}