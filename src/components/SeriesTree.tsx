'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Post } from '@/lib/posts';

interface SeriesTreeProps {
  archive: Record<string, Post[]>;
}

interface SeriesItemProps {
  seriesName: string;
  posts: Post[];
  isExpanded: boolean;
  onToggle: () => void;
}

function SeriesItem({ seriesName, posts, isExpanded, onToggle }: SeriesItemProps) {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 border-b border-[var(--line-light)] dark:border-[var(--line-dark)] text-left transition-all duration-200 hover:opacity-70 focus:outline-none"
      >
        <div className="flex items-center space-x-3">
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''} text-[var(--text-light)] dark:text-[var(--text-dark)] opacity-60`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-semibold text-lg">{seriesName}</span>
          <span className="text-xs bg-[var(--line-light)] dark:bg-[var(--line-dark)] px-2 py-0.5">
            {posts.length}
          </span>
        </div>
        <div className="text-xs text-[var(--text-light)] dark:text-[var(--text-dark)] opacity-60">
          {isExpanded ? '收起' : '展开'}
        </div>
      </button>
      
      {isExpanded && (
        <div className="mt-2 ml-6 space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${encodeURIComponent(post.slug)}`}
              className="block hover:opacity-70 transition-opacity"
            >
              <div className="flex justify-between items-center p-4 border-b border-[var(--line-light)] dark:border-[var(--line-dark)]">
                <div className="flex-1">
                  <span className="text-base">{post.title}</span>
                </div>
                <span className="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)] ml-4 opacity-60">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SeriesTree({ archive }: SeriesTreeProps) {
  const [expandedArchive, setExpandedArchive] = useState<Set<string>>(new Set());

  const toggleArchive = (archiveName: string) => {
    const newExpanded = new Set(expandedArchive);
    if (newExpanded.has(archiveName)) {
      newExpanded.delete(archiveName);
    } else {
      newExpanded.add(archiveName);
    }
    setExpandedArchive(newExpanded);
  };

  const archiveEntries = Object.entries(archive).sort((a, b) => b[0].localeCompare(a[0]));

  return (
    <div className="space-y-2">
      {archiveEntries.map(([archiveName, posts]) => (
        <SeriesItem
          key={archiveName}
          seriesName={archiveName}
          posts={posts}
          isExpanded={expandedArchive.has(archiveName)}
          onToggle={() => toggleArchive(archiveName)}
        />
      ))}
    </div>
  );
}
