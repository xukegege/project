module.exports = {
    title: '个人专栏',
    description: 'Just playing around',
    themeConfig:{
        nav:[
            {text:'随手笔记',link:''},
            {text:'疑难杂症',link:''}
        ],
        sidebar:[
            ['','首页']
        ],
        lastUpdated: 'Last Updated',
    },
    base:'/project/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}