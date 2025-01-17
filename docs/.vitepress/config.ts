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
      message: 'Thank you for visiting. Built with <a href="https://vuejs.org/">Vue.js</a>.'
    }
  },
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  appearance: 'dark',
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push([
      'meta',
      {
        property: 'og:description',
        content: `Front End Developer in Saigon, Vietnam | I'm a junior front-end developer excited to dive into the tech world! Eager to use my skills to build awesome, user-friendly websites and learn along the way. Let’s create something great together!`
      }
    ])
    head.push(['meta', { property: 'og:url', content: 'dinhkhoa.dev' }])
    head.push(['meta', { property: 'og:type', content: 'profile' }])
    head.push(['meta', { property: 'og:image', content: './meta-image.png' }])
    head.push(['meta', { property: 'og:image:width', content: '1200px' }])
    head.push(['meta', { property: 'og:image:height', content: '630px' }])
    head.push([
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-VFTTHKJH4P'
      }
    ])
    head.push([
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];\n
      function gtag(){dataLayer.push(arguments);}\n
      gtag('js', new Date());\n
    
      gtag('config', 'G-VFTTHKJH4P');\n`
    ])
    return head
  }
})
