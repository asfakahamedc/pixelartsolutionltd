import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="w-full bg-surface sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[80px] xl:px-[120px] py-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif text-neutral-900 hover:text-brand transition-colors">
          Pixelart Solution Ltd
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/work" className="text-neutral-900 hover:text-brand transition-colors font-sans">
            Work
          </Link>
          <Link href="/services" className="text-neutral-900 hover:text-brand transition-colors font-sans">
            Services
          </Link>
          <Link href="/about" className="text-neutral-900 hover:text-brand transition-colors font-sans">
            About
          </Link>
          <Link href="/blog" className="text-neutral-900 hover:text-brand transition-colors font-sans">
            Blog
          </Link>
        </div>

        <div>
          <Link 
            href="/book"
            className="bg-brand hover:bg-brand-dark text-white font-sans px-6 py-3 rounded-full transition-colors leading-none"
          >
            Book Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}
