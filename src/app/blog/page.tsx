import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'static-generation-at-scale',
      title: 'Scaling static site generation for 10,000+ page enterprise deployments',
      date: '2025-10-12',
      excerpt: 'Evaluating Next.js Incremental Static Regeneration against standard build time generation for massive compliance documentation hubs.',
      category: 'Architecture',
    },
    {
      slug: 'decoupling-content-operations',
      title: 'Decoupling content operations from engineering cycles',
      date: '2025-08-04',
      excerpt: 'How utilizing a structured content model in Sanity eliminated deployment bottlenecks and reduced engineering overhead by 30 hours per week.',
      category: 'Operations',
    }
  ];

  return (
    <div className="flex flex-col space-y-32 py-16">
      <header className="flex flex-col space-y-6">
        <h1 className="text-5xl text-neutral-800 font-serif">Thought Leadership</h1>
        <p className="text-xl text-neutral-500 max-w-[680px]">
          Technical analysis, architectural decisions, and operational frameworks.
        </p>
      </header>

      <hr className="border-t border-surface-mid w-full" />

      <section className="flex flex-col space-y-16">
        {posts.map((post) => (
          <article key={post.slug} className="flex flex-col space-y-4 border-b border-surface-mid pb-16 last:border-b-0">
            <div className="flex items-center space-x-4 text-sm font-bold text-neutral-500 uppercase tracking-widest">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-brand"></span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
            </div>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-3xl text-neutral-800 font-serif group-hover:text-brand transition-colors duration-200">
                {post.title}
              </h2>
            </Link>
            <p className="text-lg text-neutral-500 max-w-[680px]">
              {post.excerpt}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
