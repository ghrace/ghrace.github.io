module.exports = {
    title:  "个人网站",
    description: '个人学习记录',
    head: [["link", { rel: "icon", href: '/favicon.ico' }]], 
    evergreen:true,
    ga:'UA-123065311-1',
    dest:'dist',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
        editLinks: true,
        editLinkText: '错别字纠正',
        nav: [
          { text: 'Home', link: '/' },
          { text: '关于', link: '/about' },
          { text: 'GitHub', link: 'https://github.com/ghrace' },
        ],
        sidebar: [
          {
            title: 'js',
            // collapsable: false,
            children: [
              '../posts/2018-08-08-js-issue.md',
              '../posts/2018-08-10-frontend-interview.md',
              '../posts/2018-08-09-copy-paste.md',
              '../posts/2018-09-12-interview-question.md'
            ]
          },
          {
            title: 'es6',
            children: [ 
              '../posts/2018-08-07-es6-note1.md',
              '../posts/2018-08-12-es6-note2.md',
              '../posts/2018-08-16-es6-note3.md',
              '../posts/2018-08-19-es6-note4.md',
              '../posts/2018-08-22-es6-note5.md',
              '../posts/2018-08-23-es6-note6.md',
              '../posts/2018-08-24-es6-note7.md',
              '../posts/2018-08-27-es6-note8.md',
              '../posts/2018-08-28-es6-note9.md',
             ]
          },
          {
            title: 'typescript',
            children: [ 
              '../posts/2018-09-03-typescript-note.md',
              '../posts/2018-09-04-typescript-advanced1.md',
              '../posts/2018-09-05-typescript-advanced2.md',
             ]
          },
          {
            title: 'vue',
            children: [ 
              '../posts/2018-08-13-vue-cli.md',
              '../posts/2018-08-09-vue-iview.md',
              '../posts/2018-09-17-vue-learn.md',
              '../posts/2018-09-27-vue-code1.md',
              '../posts/2018-09-29-vue-code2.md',
              '../posts/2018-09-30-vue-code3.md',
              '../posts/2018-10-08-vue-code4.md',
              '../posts/2018-10-09-vue-code5.md',
              '../posts/2018-10-11-vue-code6.md',
             ]
          },
          {
            title: 'python',
            // collapsable: false,
            children: [
              '../posts/2018-07-31-xinhua-dictionary.md',
              '../posts/2018-09-02-python-spider.md',
            ]
          },
          {
            title: 'other',
            // collapsable: false,
            children: [
              '../posts/2018-08-21-resume-template.md',
            ]
          },
        ]
      }
  }