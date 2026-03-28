export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col space-y-16 py-16">
      <header className="flex flex-col space-y-6">
        <h1 className="text-5xl text-neutral-800 font-serif tracking-tight">Case Study: {params.slug}</h1>
        <p className="text-xl text-neutral-500 max-w-[680px]">
          Detailed operational metrics and infrastructure deployment logs.
        </p>
      </header>
      <hr className="border-t border-surface-mid w-full" />
      <div className="bg-surface-mid p-12 rounded-card">
         <p className="text-neutral-500">
           (This is a statically generated route waiting for Sanity CMS integration.)
         </p>
      </div>
    </div>
  );
}
