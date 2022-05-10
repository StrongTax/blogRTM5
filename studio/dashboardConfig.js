export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '627acfc9d84e5925cc238647',
                  title: 'Sanity Studio',
                  name: 'blogrtm-5-studio',
                  apiId: '7f3c57db-926c-406f-87d9-7ea7eb69c4cc'
                },
                {
                  buildHookId: '627acfc9365db125b1c4232f',
                  title: 'Blog Website',
                  name: 'blogrtm-5',
                  apiId: '391fabb4-0cd9-48a7-bba6-0dece24dc8cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/StrongTax/blogRTM5',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blogrtm-5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
