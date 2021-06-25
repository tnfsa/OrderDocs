module.exports = {
    title: '「美訂美當」訂餐系統',
    description: '訂餐系統官方文檔',
    themeConfig: {
        nav: [
            {text: '最新消息', link: '/news/'}
        ],
        sidebar: [
            {
                title: '基本介紹',
                collapsable: true,
                children: [
                    ['/intro', '介紹']
                ]
            },/*
            '/intro',
            {
                title: 'Guide',
                collapsable: false,
                children: [
                    ['/guide/Frontend', 'Frontend'],
                    ['/guide/Backend', 'Backend']

            },*/
        ]
    }
}