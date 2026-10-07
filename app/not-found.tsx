import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page Not Found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">404 error</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 max-w-lg text-slate-600">The page may have moved or the address may be incorrect.</p>
      <Link href="/" className="mt-8 rounded bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700">Return home</Link>
    </main>
  );
}
