import { useState } from 'react';

export function Products() {
  // Hardcoded placeholders mimicking Supabase record schemas[cite: 5]
  const mockProducts = [
    { id: 1, name: 'Minimalist Ochre Vessel', price: '$140', cat: 'Ceramics' },
    { id: 2, name: 'Travertine Bookend Pair', price: '$210', cat: 'Home' },
    { id: 3, name: 'Satin Nickel Desk Lamp', price: '$380', cat: 'Lighting' },
    { id: 4, name: 'Brushed Charcoal Lounge', price: '$1,850', cat: 'Furniture' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EAE6DF] pb-8 gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#8C857B] mb-2">The Directory</p>
          <h2 className="text-4xl font-[family:var(--font-serif)] tracking-tight text-[#1C1A17]">All Creations</h2>
        </div>
        <div className="flex space-x-6 text-xs uppercase tracking-widest text-[#8C857B]">
          <button className="text-[#1C1A17] font-semibold border-b border-[#1C1A17] pb-1">All Items</button>
          <button className="hover:text-[#1C1A17] transition-colors pb-1">New Arrivals</button>
          <button className="hover:text-[#1C1A17] transition-colors pb-1">Archived</button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {mockProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer space-y-4">
            <div className="aspect-[3/4] w-full bg-[#EAE6DF] relative overflow-hidden transition-all duration-500 group-hover:opacity-90">
              <div className="absolute inset-0 bg-[#1C1A17]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-[#1C1A17]">
                {product.cat}
              </div>
            </div>
            <div className="flex justify-between items-start pt-2 text-sm">
              <div className="space-y-1">
                <h3 className="font-medium text-[#1C1A17] group-hover:text-[#8C857B] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-xs text-[#8C857B] italic font-[family:var(--font-serif)]">View specifications</p>
              </div>
              <p className="font-semibold text-[#1C1A17] tracking-tight">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}