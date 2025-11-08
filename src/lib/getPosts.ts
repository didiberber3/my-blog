import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export interface Post {
    slug: string
    title: string
    date: string
    category?: string
    archive?: string
}

function getAllMarkdownFiles(dir: string): string[] {
    let files: string[] = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files = files.concat(getAllMarkdownFiles(fullPath));
        } else if (item.isFile() && (item.name.endsWith('.md') || item.name.endsWith('.mdx'))) {
            files.push(fullPath);
        }
    }
    
    return files;
}

export function getAllPosts(): Post[] {
    if (!fs.existsSync(postsDir)) {
        return [];
    }
    
    const files = getAllMarkdownFiles(postsDir);
    
    return files.map(file => {
        const raw = fs.readFileSync(file, 'utf-8');
        const { data } = matter(raw);
        const relativePath = path.relative(postsDir, file);
        const slug = relativePath.replace(/\.(md|mdx)$/, '');
        const folderName = path.dirname(relativePath);
        
        return {
            slug: decodeURIComponent(slug),
            title: data.title || path.basename(file, path.extname(file)),
            date: data.date || '2000-01-01',
            category: data.category || (folderName !== '.' ? folderName : ''),
            archive: data.archive || '',
        };
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
