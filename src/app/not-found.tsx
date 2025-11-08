import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold mb-4"> + 404 + </h1>
      <p className="text-xl text-[var(--text-light)] dark:text-[var(--text-dark)] mb-8">Page not found.<br />But Where is it?</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-[var(--text-light)] text-[var(--bg-light)] dark:bg-[var(--text-dark)] dark:text-[var(--bg-dark)] hover:opacity-90"
      >
        Way Back Moon
      </Link>
    </main>
  );
}

