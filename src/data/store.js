/**
 * @project RESTful Blogging Platform & CMS API
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

// In-memory blog posts database store
const posts = [
  {
    id: 1,
    title: 'Building Scalable REST APIs with Node.js & Express',
    slug: 'building-scalable-rest-apis-nodejs',
    category: 'Backend',
    content: 'Node.js and Express form the backbone of modern web engineering. In this article, we explore modular routing, clean architecture principles, and secure endpoints.',
    author: 'Rana Yasir Mahy Ud Din',
    publishedAt: '2026-11-17 15:00',
    comments: [
      { id: 101, name: 'Ali Khan', text: 'Amazing article! Very clear and concise.', date: '2026-11-17 15:30' }
    ]
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS for Modern Dark-Mode UIs',
    slug: 'mastering-tailwind-css-dark-mode',
    category: 'UI/UX Design',
    content: 'Tailwind CSS utility classes enable rapid interface development without sacrificing design flexibility. Learn how to craft gorgeous dark-mode dashboards with ease.',
    author: 'Rana Yasir Mahy Ud Din',
    publishedAt: '2026-11-17 16:10',
    comments: []
  }
];

module.exports = { posts };