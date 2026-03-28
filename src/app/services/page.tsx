import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="flex flex-col space-y-32 py-16">
      <header className="flex flex-col space-y-6">
        <h1 className="text-5xl text-neutral-800 font-serif tracking-tight">Infrastructure & Operations</h1>
        <p className="text-xl text-neutral-500 max-w-[680px]">
          Standardized deployment structures and operational pipelines. Built exclusively for corporate scale.
        </p>
      </header>

      <hr className="border-t border-surface-mid w-full" />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Service 1: High-Performance Web Setup */}
        <article className="flex flex-col space-y-8 bg-surface-mid p-12 rounded-card">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl text-neutral-800 font-serif">High-Performance Web Setup</h2>
            <p className="text-neutral-500 max-w-[500px]">
              A complete replacement of legacy, database-driven monoliths with a decoupled Next.js and Headless CMS stack.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 pt-4">
            <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-widest">Deliverables</h3>
            <ul className="flex flex-col space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Statically generated React architecture (Next.js 14 App Router)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Headless Sanity CMS configuration with customized schema management</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Global edge deployment pipeline via Vercel ensuring 0.8s load times</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Component isolation and strict Tailwind CSS utility class application</span>
              </li>
            </ul>
          </div>
        </article>

        {/* Service 2: Corporate Social Operations */}
        <article className="flex flex-col space-y-8 bg-surface-mid p-12 rounded-card">
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl text-neutral-800 font-serif">Corporate Social Operations</h2>
            <p className="text-neutral-500 max-w-[500px]">
              Managed distribution channels optimized for B2B engagement and algorithmic compliance.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 pt-4">
            <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-widest">Deliverables</h3>
            <ul className="flex flex-col space-y-3">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Multi-platform audience segmentation and analytics dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Automated content scheduling with zero latency to CMS publishing</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Structured metric tracking establishing quantitative ROI reports</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-brand rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-neutral-900 leading-relaxed">Implementation of strict security protocols for access control</span>
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center justify-center text-center space-y-8 py-16">
        <h2 className="text-3xl text-neutral-800 font-serif">
          Ready to establish stability?
        </h2>
        <Link 
          href="/book" 
          className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-sans px-8 py-4 rounded-full transition-colors duration-200"
        >
          Book System Audit
        </Link>
      </section>
    </div>
  );
}
