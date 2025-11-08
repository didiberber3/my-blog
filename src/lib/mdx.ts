import { bundleMDX } from 'mdx-bundler'
import fs from 'fs'
import path from 'path'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeToc from '@jsdevtools/rehype-toc'

export async function getPostContent(slug: string) {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`)
    const source = fs.readFileSync(filePath, 'utf-8')
    const result = await bundleMDX({
        source,
        mdxOptions(options) {
            options.rehypePlugins = [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                rehypePrism,
                [rehypeToc, { headings: ['h1', 'h2', 'h3'], cssClasses: { toc: 'toc right-0 top-24 fixed w-64 h-[calc(100vh-8rem)] overflow-y-auto p-4' } }],
            ]
            return options
        },
    })
    return { code: result.code, frontmatter: result.frontmatter }
}
