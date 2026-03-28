import Link from 'next/link';

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen items-center py-12 md:py-20 w-full max-w-[800px] mx-auto">
      
      {/* Simple Distraction-Free Header (Logo routing home) */}
      <header className="w-full flex justify-center mb-16">
        <Link href="/" className="text-xl font-serif text-neutral-900 hover:text-brand transition-colors">
          Pixelart Solution Ltd
        </Link>
      </header>

      <main className="flex flex-col w-full bg-surface-mid p-10 md:p-16 rounded-card border border-surface-mid section-container">
        <div className="flex flex-col space-y-6 text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-neutral-800 font-serif tracking-tight">
            Book a Systems Audit
          </h1>
          <p className="text-lg text-neutral-500 mx-auto max-w-[600px] leading-relaxed">
            We will review your current infrastructure and identify the highest-leverage interventions. No pitch, no fluff.
          </p>
        </div>

        <div className="w-full bg-surface rounded-xl p-8 min-h-[600px] flex items-center justify-center border border-surface-mid">
          {/* <!-- CALENDLY EMBED IFRAME GOES HERE --> */}
          <p className="text-neutral-500 font-sans text-sm tracking-widest uppercase">
            [Calendly Embed Placeholder]
          </p>
        </div>
      </main>

    </div>
  );
}
