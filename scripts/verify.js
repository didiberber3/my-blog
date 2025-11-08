const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const posts = fs.readdirSync('posts').filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
const slugs = posts.map((f) => encodeURIComponent(f.replace(/\.(md|mdx)$/, '')))

// 启动生产服务器
const server = spawn('pnpm', ['start'], { stdio: 'pipe' })
let ok = 0
server.stdout.on('data', async (d) => {
    const s = d.toString()
    process.stdout.write(s)
    if (s.includes('started') || s.includes('Ready') || s.includes('listening')) {
        for (const s of slugs) {
            try {
                const res = await fetch(`http://localhost:3000/posts/${s}`)
                if (res.status === 200) {
                    ok++
                } else {
                    console.error(`❌ ${s} ${res.status}`)
                    server.kill()
                    process.exit(1)
                }
            } catch (err) {
                console.error('Fetch error', err)
                server.kill()
                process.exit(1)
            }
        }
        console.log(`✅ 全部 ${ok} 篇文章可访问`)
        server.kill()
        process.exit(0)
    }
})

server.stderr.on('data', (d) => {
    process.stderr.write(d.toString())
})
