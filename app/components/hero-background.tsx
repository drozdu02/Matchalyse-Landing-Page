import * as React from "react";

export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_18%,rgba(191,255,0,0.10),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_10%,rgba(255,255,255,0.06),transparent_55%)] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_80%,rgba(0,0,0,0.65),transparent_60%)]" />
    </div>
  );
}