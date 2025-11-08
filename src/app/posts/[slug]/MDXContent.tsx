'use client'

import { useMemo, useEffect } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

type Props = {
  code: string
  // Only declare fields that will be used in MDX
  frontmatter: {
    title: string
    date: string
    archive?: string
    category?: string
    // Add more whitelisted fields as needed
  }
}

export default function MDXContent({ code, frontmatter }: Props) {
  // 1. Construct whitelist scope
  const mdxScope = useMemo(() => {
    return {
      archive: frontmatter.archive ?? null,
      category: frontmatter.category ?? null,
      // Add more whitelisted fields as needed
    }
  }, [frontmatter])

  // 2. Create component with whitelisted scope only
  const Component = useMemo(() => {
    if (!code) {
      console.error('MDXContent: code is empty');
      return () => <div>No content available</div>;
    }
    try {
      return getMDXComponent(code);
    } catch (error) {
      console.error('MDXContent: Error getting MDX component:', error);
      return () => <div>Error rendering content</div>;
    }
  }, [code])

  // 3. Add heading level indicators and hover effects
  useEffect(() => {
    const addHeadingAttributes = () => {
      const headings = document.querySelectorAll('.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6');
      headings.forEach((heading, index) => {
        const level = heading.tagName.toLowerCase().replace('h', '');
        heading.setAttribute('data-level', '#'.repeat(parseInt(level)));
        heading.setAttribute('id', `heading-${index}`);
      });
    };

    // Add syntax highlighting for code blocks
    const addSyntaxHighlighting = () => {
      // Check if Prism.js is available
      if (typeof window !== 'undefined' && (window as any).Prism) {
        (window as any).Prism.highlightAll();
      }
    };

    // Run after component mounts
    setTimeout(() => {
      addHeadingAttributes();
      addSyntaxHighlighting();
    }, 100);

    // Clean up function
    return () => {
      // Remove any event listeners if needed
    };
  }, []);

  // 4. Render with scope and custom components
  return <Component components={{}} scope={mdxScope} />
}
