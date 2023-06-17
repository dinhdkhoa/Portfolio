import { HeadConfig, defineConfig } from 'vitepress'

export default defineConfig({
  title: ' ',
  description: 'Portfolio site of Đinh Khoa - Front-end Developer',
  themeConfig: {
    outline: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dinhdkhoa' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dinhkhoa/' }
    ],
    nav: [
      { text: 'About', link: '/' },
      { text: 'Experience', link: '/experience' },
      { text: 'Portfolio', link: '/portfolio' }
    ],
    footer: {
      message: 'Thank you for visiting.'
    }
  },

  head: [['link', { rel: 'icon', href: './public/favicon.ico' }]],
  appearance: 'dark',
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])
    head.push(['meta', { property: 'og:url', content: pageData.frontmatter.description }])
    head.push(['meta', { property: 'og:type', content: pageData.frontmatter.description }])
    head.push(['meta', { property: 'og:image', content: './public/meta-image.png' }])

    return head
  },
  base: '/portfolio/'
})
