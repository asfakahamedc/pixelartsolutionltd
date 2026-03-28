import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex flex-col space-y-32 py-16">
      <header className="flex flex-col space-y-6">
        <h1 className="text-5xl text-neutral-800 font-serif tracking-tight">Systems Architecture</h1>
        <p className="text-xl text-neutral-500 max-w-[680px]">
          Pixelart Solution Ltd was founded on a singular directive: entirely eliminate structural web latency in B2B corporate environments.
        </p>
      </header>

      <hr className="border-t border-surface-mid w-full" />

      {/* Founder Bio */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl text-neutral-800 font-serif">Lead Engineer</h2>
          <div className="flex flex-col space-y-4 text-neutral-500">
            <p>
              Our founder operates strictly as a Systems Architect, obsessively focused on web performance and the deployment of high-availability digital infrastructures. 
            </p>
            <p>
              With a background rooted in engineering resilient application architectures, the approach is strictly metric-driven. There is zero tolerance for bloat, convoluted dependencies, or design decisions that negatively impact First Contentful Paint.
            </p>
            <p>
              The mission is simple: replace fragile legacy monoliths with decoupled, statically generated systems that guarantee uptime and accelerate operational efficiency.
            </p>
          </div>
        </div>

        <div className="bg-surface-mid p-12 rounded-card flex flex-col space-y-6">
          <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-widest">Core Directives</h3>
          <ul className="flex flex-col space-y-4">
            <li className="flex items-start">
               <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2 mr-4 flex-shrink-0"></span>
               <span className="text-neutral-900 leading-relaxed font-serif">Zero Database Latency</span>
            </li>
            <li className="flex items-start">
               <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2 mr-4 flex-shrink-0"></span>
               <span className="text-neutral-900 leading-relaxed font-serif">Component Isolation</span>
            </li>
            <li className="flex items-start">
               <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2 mr-4 flex-shrink-0"></span>
               <span className="text-neutral-900 leading-relaxed font-serif">Decoupled Content Operations</span>
            </li>
            <li className="flex items-start">
               <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2 mr-4 flex-shrink-0"></span>
               <span className="text-neutral-900 leading-relaxed font-serif">Metric-Determined Architecture</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-t border-surface-mid w-full" />

      {/* Philosophy */}
      <section className="flex flex-col space-y-8 max-w-[800px]">
        <h2 className="text-3xl text-neutral-800 font-serif">Agency Philosophy</h2>
        <div className="border-l-4 border-brand pl-8 py-2">
          <p className="text-2xl text-neutral-800 font-serif leading-relaxed italic">
            &quot;Warm, not cold. Precise, not ornate.&quot;
          </p>
        </div>
        <p className="text-neutral-500 text-lg">
          The Pixelart brand is sterile, precise, and authoritative. We value metrics over adjectives. Our interfaces enforce user trust through absolute stability and clean, distraction-free typography. We rely on strict constraints, executing exclusively within the bounds of high-contrast Cream and Neural surfaces, accented strictly by functional Coral interaction points.
        </p>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center text-center space-y-8 py-16">
        <h2 className="text-3xl text-neutral-800 font-serif">
          Review our system deployments.
        </h2>
        <Link 
          href="/work" 
          className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-sans px-8 py-4 rounded-full transition-colors duration-200"
        >
          View Case Studies
        </Link>
      </section>
    </div>
  );
}
