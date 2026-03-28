import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get('sanity-webhook-signature');
    if (!signature) {
      return NextResponse.json({ message: 'Missing Sanity Webhook Signature' }, { status: 401 });
    }

    const body = await req.json();
    const { _type, slug } = body;

    if (!_type) {
      return NextResponse.json({ message: 'Missing document type' }, { status: 400 });
    }

    if (_type === 'caseStudy') {
      revalidatePath('/work');
      if (slug?.current) revalidatePath(`/work/${slug.current}`);
    } else if (_type === 'blogPost') {
      revalidatePath('/blog');
      if (slug?.current) revalidatePath(`/blog/${slug.current}`);
    } else if (_type === 'project') {
      revalidatePath('/');
    } else {
       return NextResponse.json({ message: 'Unhandled document type' }, { status: 200 });
    }

    return NextResponse.json({ revalidated: true, now: Date.now() }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
