import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-surface-mid mt-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[80px] xl:px-[120px] py-16 flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col space-y-4 max-w-[320px]">
          <span className="text-xl font-serif text-neutral-800">
            Pixelart Solution Ltd
          </span>
          <p className="text-neutral-500 font-sans">
            Precision engineered B2B corporate web infrastructure. Built for stability, performance, and decisive operational impact.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-neutral-800 tracking-widest uppercase text-sm">Infrastructure</h4>
            <Link href="/work" className="text-neutral-500 hover:text-brand transition-colors">Work</Link>
            <Link href="/services" className="text-neutral-500 hover:text-brand transition-colors">Services</Link>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-neutral-800 tracking-widest uppercase text-sm">Corporate</h4>
            <Link href="/about" className="text-neutral-500 hover:text-brand transition-colors">About</Link>
            <Link href="/blog" className="text-neutral-500 hover:text-brand transition-colors">Blog</Link>
            <Link href="/book" className="text-neutral-500 hover:text-brand transition-colors">Book Audit</Link>
          </div>
        </div>

      </div>
      
      <div className="border-t border-surface max-w-[1200px] mx-auto px-6 lg:px-[80px] xl:px-[120px] py-8">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Pixelart Solution Ltd. Operational integrity maintained.
        </p>
      </div>
    </footer>
  );
}
