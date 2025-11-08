import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from '@/providers/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { blogConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: blogConfig.blog.title,
  description: blogConfig.blog.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      suppressHydrationWarning
      style={{
        '--bg-light': 'oklch(0.99 0 0)',
        '--text-light': 'oklch(0.21 0 0)',
        '--line-light': 'oklch(0.92 0 0)',
        '--bg-dark': 'oklch(0.15 0 0)',
        '--text-dark': 'oklch(0.95 0 0)',
        '--line-dark': 'oklch(0.27 0 0)',
      } as React.CSSProperties}
      className="dark"
    >
      <body className="bg-[var(--bg-light)] text-[var(--text-light)] dark:bg-[var(--bg-dark)] dark:text-[var(--text-dark)] min-h-screen">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <header className="h-16 border-b flex items-center px-6 justify-between">
              <Link href="/" className="text-xl font-bold hover:opacity-70">
                {blogConfig.blog.name}
              </Link>
              <nav className="flex gap-4 items-center">
                <Link href="/" className="hover:underline">
                  {blogConfig.navigation.home}
                </Link>
                <Link href="/archive" className="hover:underline">
                  {blogConfig.navigation.archive}
                </Link>
                <ThemeToggle />
              </nav>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t py-6 px-6 text-sm opacity-60 text-center">
              {blogConfig.blog.footerText}
              <br />
              <br />
              {blogConfig.deployment.lastDeployText} {process.env.NEXT_PUBLIC_DEPLOY_TIME || blogConfig.deployment.notAvailable}

            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
