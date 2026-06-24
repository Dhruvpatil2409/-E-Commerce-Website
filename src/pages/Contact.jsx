export function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 pb-24 space-y-12 text-center">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest text-[#8C857B]">Channels</p>
        <h2 className="text-4xl font-[family:var(--font-serif)] tracking-tight text-[#1C1A17]">Establish Contact</h2>
      </div>

      <div className="border border-[#EAE6DF] bg-white p-8 space-y-6 text-sm">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-[#8C857B]">Electronic Mail</p>
          <p className="font-medium text-[#1C1A17] text-base">concierge@runewood.studio</p>
        </div>
        <div className="w-12 h-[1px] bg-[#EAE6DF] mx-auto" />
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-[#8C857B]">Central Office</p>
          <p className="font-medium text-[#1C1A17] text-base font-light">By Invitation Only — London / Kyoto</p>
        </div>
      </div>
    </div>
  );
}