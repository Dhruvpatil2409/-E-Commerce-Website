import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-32 pb-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-center">
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl md:text-7xl font-[family:var(--font-serif)] tracking-tight leading-[1.1] text-[#1C1A17]">
            Objects designed for <br />
            <span className="italic font-normal text-[#8C857B]">intentional living.</span>
          </h1>
          <p className="max-w-lg text-[#5A544B] text-base md:text-lg font-light leading-relaxed">
            A curated, minimalist exhibition of craft and utilitarian design built directly atop a modern headless stack.
          </p>
          <div className="pt-4 flex items-center space-x-6">
            <Link to="/products" className="px-8 py-4 bg-[#1C1A17] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#38342F] transition-colors">
              Explore Collection
            </Link>
            <Link to="/about" className="text-xs uppercase tracking-[0.2em] font-semibold text-[#1C1A17] border-b border-[#1C1A17] pb-1 hover:text-[#8C857B] hover:border-[#8C857B] transition-colors">
              Learn More
            </Link>
          </div>
        </div>

        {/* Visual Hero Art Piece */}
        <div className="lg:col-span-5 relative aspect-[4/5] bg-[#EAE6DF] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1C1A17]/10 to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="w-48 h-48 rounded-full border border-[#1C1A17]/10 flex items-center justify-center p-8 backdrop-blur-sm">
              <span className="font-[family:var(--font-serif)] italic text-3xl text-[#1C1A17]/40">Est. 2026</span>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 z-20 text-white mixer-blend-difference">
            <p className="text-xs uppercase tracking-widest opacity-80">Featured Curation</p>
            <h3 className="text-xl font-[family:var(--font-serif)] italic">The Monolith Form</h3>
          </div>
        </div>
      </section>

      {/* Editorial Mini-Teaser */}
      <section className="border-t border-[#EAE6DF] pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-[#5A544B]">
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1C1A17]">01 / Curation</h4>
          <p className="font-light leading-relaxed">Every entry passes a strict inspection standard tailored for modern utility architecture.</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1C1A17]">02 / Integration</h4>
          <p className="font-light leading-relaxed">Seamless synchronisation powered completely through remote realtime microservice arrays.</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-[#1C1A17]">03 / Aesthetic</h4>
          <p className="font-light leading-relaxed">Stripping away digital clutter to restore complete typographic and spatial balance.</p>
        </div>
      </section>
    </div>
  );
}