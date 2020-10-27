export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f97addaccb830849c09255a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1urxq7zh',
                  apiId: 'ff1ecb0b-96de-4773-bb87-76910b5dbece'
                },
                {
                  buildHookId: '5f97adda5eeb0b859b60abe3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bxwqphbx',
                  apiId: '44232482-dc88-42e4-b139-e70c7a7d002f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bwellmeshed/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bxwqphbx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
