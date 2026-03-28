import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-32 py-16">
      
      {/* 1. Hero Section */}
      <section className="flex flex-col space-y-8">
        <h1 className="text-5xl md:text-[80px] text-neutral-800 font-serif leading-[1.1] tracking-tight">
          We build the infrastructure you cannot afford to lose.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 max-w-[680px]">
          Engineering high-performance static systems that guarantee sub-second loads and maximize conversion at scale. 
        </p>
        <div className="pt-6">
          <Link 
            href="/book" 
            className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-sans px-8 py-4 rounded-full transition-colors duration-200 text-lg"
          >
            Book Audit
          </Link>
        </div>
      </section>

      <hr className="border-t border-surface-mid w-full" />

      {/* 2. Methodology Section */}
      <section className="flex flex-col space-y-16">
        <h2 className="text-4xl text-neutral-800 font-serif">System Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-serif text-neutral-800">Speed</h3>
            <p className="text-neutral-500">
              Architectured for edge deployment. 0.8s First Contentful Paint. Zero database latency on user request.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-serif text-neutral-800">Conversion</h3>
            <p className="text-neutral-500">
              Eliminating friction through interface design entirely devoid of drop-shadows and marketing bloat.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-serif text-neutral-800">Stability</h3>
            <p className="text-neutral-500">
              Decoupled Sanity CMS operations. Total immunity to traditional SQL database connection exhaustions.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-surface-mid w-full" />

      {/* 3. Featured Case Study Block */}
      <section className="flex flex-col space-y-8">
        <div className="bg-surface-mid rounded-card p-12 md:p-20 flex flex-col md:flex-row items-center gap-16">
          <div className="flex flex-col space-y-6 flex-1">
            <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Featured Deployment</span>
            <h2 className="text-3xl md:text-5xl text-neutral-800 font-serif leading-tight">
              Global Logistics Core Modernization
            </h2>
            <p className="text-neutral-500 text-lg max-w-[680px]">
              Complete replacement of an aging monolithic platform resulting in immediate operational efficiency.
            </p>
            <div>
              <Link href="/work" className="text-brand font-bold uppercase tracking-widest text-sm hover:text-brand-dark transition-colors">
                View Architecture
              </Link>
            </div>
          </div>
          <div className="bg-surface p-10 rounded-2xl flex-shrink-0 flex items-center justify-center min-w-[280px] border border-surface-mid">
             <span className="font-serif text-[80px] text-brand leading-none">
                +210%
             </span>
          </div>
        </div>
      </section>

    </div>
  );
}
