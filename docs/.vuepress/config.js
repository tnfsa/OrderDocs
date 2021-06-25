module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    plugins: {
        "vuepress-plugin-auto-sidebar": {}
    },
    themeConfig: {
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
}