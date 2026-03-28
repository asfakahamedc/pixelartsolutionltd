import Link from 'next/link';

export default function WorkPage() {
  // Mock data mapping to Sanity caseStudy schema
  const caseStudies = [
    {
      slug: 'global-logistics-core-modernization',
      client: 'Global Logistics Corp',
      title: 'Global Logistics Core Modernization',
      metricHero: '+210%',
      excerpt: 'Complete replacement of an aging monolithic platform resulting in immediate operational efficiency and reduced latency.',
    },
    {
      slug: 'fintech-compliance-portal',
      client: 'SecureFi Solutions',
      title: 'High-Security Compliance Infrastructure',
      metricHero: '99.99%',
      excerpt: 'Engineered a highly available statically generated portal for sensitive compliance documentation across 14 jurisdictions.',
    },
    {
      slug: 'enterprise-healthcare-platform',
      client: 'MedTech Horizons',
      title: 'Decoupled Healthcare Data Architecture',
      metricHero: '-0.8s',
      excerpt: 'Architected and deployed a fully localized headless platform to manage complex regional regulatory requirements.',
    }
  ];

  return (
    <div className="flex flex-col space-y-32 py-16">
      <header className="flex flex-col space-y-6">
        <h1 className="text-5xl text-neutral-800 font-serif tracking-tight">Proof of Work</h1>
        <p className="text-xl text-neutral-500 max-w-[680px]">
          Documented infrastructure upgrades, performance optimizations, and resulting systemic stability metrics.
        </p>
      </header>

      <hr className="border-t border-surface-mid w-full" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <Link href={`/work/${study.slug}`} key={study.slug} className="group flex flex-col">
            <article className="bg-surface-mid p-10 flex flex-col justify-between h-full rounded-card overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex flex-col space-y-6 mb-8">
                <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">
                  {study.client}
                </span>
                <h2 className="text-2xl text-neutral-800 font-serif leading-tight">
                  {study.title}
                </h2>
                <p className="text-neutral-500">
                  {study.excerpt}
                </p>
              </div>
              <div className="bg-surface p-8 rounded-2xl w-full flex items-center justify-center border border-surface-mid">
                <span className="font-serif text-5xl text-brand leading-none">
                  {study.metricHero}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
